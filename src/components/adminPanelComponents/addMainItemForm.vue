<template>
    <successOperatingWindow class="success_window" @goBack="goBack" v-if="isSuccessOperatingWindowOpened" />
    <div class="add_main_item_form" v-if="!isSuccessOperatingWindowOpened">
        <img class="exit_form_buttton" src="../../images/exit.png" @click="closeAddMainItemForm">
        <h1 class="add_main_item_form_title">
            Заполните данные
        </h1>
        <form class="add_main_item_form_info" @submit.prevent="sendData">
            <input type="text" placeholder="Название объекта*" class="add_main_item_form_item" v-model="state.title"
                @blur="v$.title.$touch">
            <span class="error_add_item" v-if="v$.title.$error">
                Это обязательное поле
            </span>
            <textarea type="text" placeholder="Описание объекта*" class="add_main_item_form_item_text" v-model="state.desc"
                @blur="v$.desc.$touch"></textarea>
            <span class="error_add_item" v-if="v$.desc.$error">
                Это обязательное поле
            </span>
            <div id="my-awesome-dropzone" ref="dropzone" class="ventilated_facade_dropzone" v-on="state.files">
                Фотография jpg/jpeg, png:
                <div class="type-error-message error-message" style="display: none;">Файл неверного типа</div>
                <div class="size-error-message error-message" style="display: none;">Файл слишком большого размера</div>
            </div>

            <button type="submit" class="add_main_item_form_btn"
                :disabled="(v$.title.$invalid || v$.desc.$invalid || v$.files.$invalid)">Сохранить</button>
            <img class="product-card_image" :src="uploadedFile">
        </form>
    </div>
</template>
  
<script>
import Dropzone from "dropzone"
import { useVuelidate } from '@vuelidate/core'
import { required, sameAs } from '@vuelidate/validators'
import { reactive, computed } from 'vue'
import successOperatingWindow from './successOperatingWindow.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        successOperatingWindow,
    },
    data() {
        return {
            dropzone: null,
            flle: null,
            formData: null,
            ventilatedFacadeData: null,
            isSuccessOperatingWindowOpened: false,
            isSuccessSending: false,
            uploadedFile: null,
            products: [],
            errors: []
        }
    },
    setup() {
        const state = reactive({
            title: "",
            desc: "",
            files: null,
            minArrayLength: 1
        })

        const rules = computed(() => ({
            title: { required },
            desc: { required },
            files: {
                sameAs: sameAs(1)
            }
        }))

        const v$ = useVuelidate(rules, state)

        return {
            state,
            v$
        }
    },
    mounted() {
        const self = this;
        this.dropzone = new Dropzone(this.$refs.dropzone, {
            url: "http://localhost:8000/api/ventilatedfacades",
            autoProcessQueue: false,
            maxFilesize: 2000000,
            maxFiles: 1,
            acceptedFiles: ".jpg, .png",
            thumbnailWidth: 150,
            capture: "image/*",
            init: function () {
                this.on("addedfile", function (file) {

                    if (this.files.length > this.options.maxFiles && (file.type === "image/jpeg" || file.type === "image/jpg" || file.type === "image/png")) {
                        this.removeFile(this.files[0]);
                        // this.state.files = this.files
                    } else if (file.size > this.options.maxFilesize) {
                        this.removeFile(this.files[0]);
                        this.removeFile(file);
                        // this.state.files = this.files
                        document.querySelector(".size-error-message").style.display = "block";
                    } else if (file.type !== "image/jpeg" && file.type !== "image/jpg" && file.type !== "image/png") {
                        this.removeFile(this.files[0]);
                        this.removeFile(file);
                        // this.state.files = this.files
                        document.querySelector(".type-error-message").style.display = "block";
                    } else {
                        document.querySelector(".type-error-message").style.display = "none";
                        document.querySelector(".size-error-message").style.display = "none";
                        // this.state.files = this.files
                    }
                    console.log(this.files)
                    self.state.files = this.files.length
                });
                this.on("drop", function (file) {
                    this.addFile(file);
                });

            }
        })
    },
    methods: {
        closeAddMainItemForm() {
            this.$emit('closeAddMainItemForm')
        },
        async sendData() {
            this.v$.$validate()
            if (!this.v$.$error) {
                try {
                    this.isSuccessOperatingWindowOpened = true
                    await this.postData()
                } catch (error) {
                    console.log({ error })
                }
            }

        },
        async postData() {
            try {
                this.file = this.dropzone.getAcceptedFiles()[0];
                const formData = new FormData();
                formData.append('title', this.state.title);
                formData.append('file', this.file);
                formData.append('desc', this.state.desc);

                const res = await fetch('http://localhost:8000/api/ventilatedfacades', {
                    method: 'POST',
                    body: formData,
                    mode: 'cors'
                })
                const data = await res.json()
                console.log(data.file)
                // this.uploadedFile = res.data.file
                if (res.status == 200 || res.status == 201) {
                    console.log('yes')
                } else {
                    this.errors = data
                    console.log(data)
                }
            } catch (error) {
                console.log(error)
            }
        },

        async getAllVentilatedFacades() {
            try {
                const res = await fetch('http://localhost:8000/api/ventilatedfacades', {
                    method: 'GET',
                    mode: 'cors'
                })
                const data = await res.json()
                if (res.status == 200 || res.status == 201) {
                    this.products = data;
                } else {
                    this.errors = data
                    console.log(data)
                }
            } catch (error) {
                console.log(error)
            }
        },

        // fileUpload(event) {
        //     const files = event.target.files;
        //     console.log(files)
        //     return files
        // },

        goBack() {
            this.$emit('goBack')
            this.isSuccessOperatingWindowOpened = false;
        },
    },
});
</script>
  
<style>
.add_main_item_form {
    width: 50%;
    height: 60%;
    position: fixed;
    z-index: 6000;
    top: 25%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.add_main_item_form_info {
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 20px;
}

.add_main_item_form_title {
    font-size: 2em;
    margin-bottom: .5em;
}

.add_main_item_form_item {
    width: 100%;
    height: 17%;
    border: 1px solid #ccc;
    border-radius: .2em;
    padding: .5em;
    margin-bottom: .8em;
    font-size: 1em;
}

.add_main_item_form_item_text {
    resize: none;
    text-align: left;
    width: 100%;
    height: 35%;
    padding: .5em 1em;
    border: 1px solid #ccc;
    border-radius: .2em;
    padding: .5em;
    margin-bottom: .8em;
    font-size: 1em;
}

.add_main_item_form_btn {
    width: 10em;
    height: 3em;
    text-align: center;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
}

.add_main_item_form_btn:hover {
    background-color: #45a049;
}

.add_main_item_form_btn:active {
    background-color: #3e8e41;
    transform: translateY(1px);
}

.add_main_item_form_btn:disabled {
    background-color: #cccccc;
    color: #666666;
    cursor: default;
}

.success_window {
    position: fixed;
    z-index: 8000px;
}

.error_add_item {
    color: red;
    margin-top: -.7em;
    margin-bottom: .2em;
    font-size: 1em;
}

.error-message {
    color: red;
    font-size: 1em;
}

.ventilated_facade_dropzone {
    width: 100%;
    height: 50%;
    border: 1px solid #ccc;
    border-radius: .2em;
    padding: .5em;
    margin-bottom: .8em;
    font-size: 1em;
}

/* .dz-image {
} */

.dz-image-preview {
    width: 150px;
}

.dz-success-mark {
    display: none;
}

.dz-error-mark {
    display: none;
}
</style>