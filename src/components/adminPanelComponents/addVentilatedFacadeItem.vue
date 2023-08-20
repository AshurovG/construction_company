<template>
    <successOperatingWindow class="success_window" @goBack="goBack" v-if="isSuccessOperatingWindowOpened" />
    <div class="add_item_form" v-if="!isSuccessOperatingWindowOpened">
        <img class="exit_form_buttton" src="../../images/exit.png" @click="closeAddItemForm">
        <h1 class="add_item_form_title">
            Заполните данные
        </h1>
        <form class="add_item_form_info" @submit.prevent="sendData">
            <div id="my-awesome-dropzone" ref="dropzone" class="ventilated_facade_dropzone" v-on="state.files">
                Фотография jpg/jpeg, png:
                <div class="type-error-message error-message" style="display: none;">Файл неверного типа</div>
                <div class="size-error-message error-message" style="display: none;">Размер файлаы не должен превышать 2
                    мегабайта
                </div>
            </div>

            <button type="submit" class="add_item_form_btn" :disabled="(v$.files.$invalid)">Сохранить</button>
            <img class="product-card_image" :src="uploadedFile">
        </form>
    </div>
</template>
  
<script>
import Dropzone from "dropzone"
import { useVuelidate } from '@vuelidate/core'
import { sameAs } from '@vuelidate/validators'
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
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    setup() {
        const state = reactive({
            files: null,
            minArrayLength: 1
        })

        const rules = computed(() => ({
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
            maxFilesize: 2097152,
            maxFiles: 1,
            thumbnailWidth: 150,
            acceptedFiles: ".jpg, .png",
            capture: "image/*",
            init: function () {
                this.on("addedfile", function (file) {
                    if (this.files.length > this.options.maxFiles && (file.type === "image/jpeg" || file.type === "image/jpg" || file.type === "image/png")) {
                        this.removeFile(this.files[0]);
                    } else if (file.size > this.options.maxFilesize) {
                        this.removeFile(this.files[0]);
                        this.removeFile(file);
                        document.querySelector(".size-error-message").style.display = "block";
                    } else if (file.type !== "image/jpeg" && file.type !== "image/jpg" && file.type !== "image/png") {
                        this.removeFile(this.files[0]);
                        this.removeFile(file);
                        document.querySelector(".type-error-message").style.display = "block";
                    } else {
                        document.querySelector(".type-error-message").style.display = "none";
                        document.querySelector(".size-error-message").style.display = "none";
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
        closeAddItemForm() {
            this.$emit('closeAddItemForm')
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
                formData.append('ventilatedFacadeId', this.id)
                formData.append('file', this.file);
                const res = await fetch('http://localhost:8000/api/ventilatedfacadeitems', {
                    method: 'POST',
                    body: formData,
                    mode: 'cors'
                })
                const data = await res.json()
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

        goBack() {
            this.$emit('goBack')
            this.isSuccessOperatingWindowOpened = false;
        },
    },
});
</script>
  
<style scoped>
.add_item_form {
    font-size: 1rem;
    width: 35%;
    height: 40%;
    position: fixed;
    z-index: 6000;
    top: 10%;
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

.add_item_form_info {
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 20px;
}

.add_item_form_title {
    font-size: 2em;
    margin-bottom: .5em;
}

/* .add_item_form_item {
    width: 100%;
    height: 17%;
    border: 1px solid #ccc;
    border-radius: .2em;
    padding: .5em;
    margin-bottom: .8em;
    font-size: 1em;
} */

/* .add_item_form_item_text {
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
} */

.add_item_form_btn {
    width: 10em;
    min-height: 3em;
    text-align: center;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
}

.add_item_form_btn:hover {
    background-color: #45a049;
}

.add_item_form_btn:active {
    background-color: #3e8e41;
    transform: translateY(1px);
}

.add_item_form_btn:disabled {
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
    min-height: 75%;
    border: 1px solid #ccc;
    border-radius: .2em;
    padding: .5em;
    margin-bottom: .8em;
    font-size: 1em;
}

.dz-image-preview {
    width: 150px;
}

.dz-success-mark {
    display: none;
}

.dz-error-mark {
    display: none;
}

@media(max-width: 1200px) {
    .add_item_form {
        width: 45%;
    }
}

@media(max-width: 1000px) {
    .add_item_form {
        width: 55%;
    }
}

@media(max-width: 800px) {
    .add_item_form {
        width: 65%;
    }
}

@media(max-width: 650px) {
    .add_item_form {
        width: 70%;
    }
}

@media(max-width: 600px) {
    .add_item_form {
        width: 75%;
        font-size: .9rem;
    }
}

@media(max-width: 450px) {
    .add_item_form {
        width: 90%;
    }
}

@media(max-width: 390px) {
    .add_item_form {
        width: 92%;
        font-size: .8rem;
    }

    .dz-image-preview {
        width: 100px;
        height: auto;
    }
}

/* @media(max-height: 950px) {
    .add_item_form {
        height: 55%;
    }
} */

@media(max-height: 850px) {
    .add_item_form {
        height: 50%;
    }
}

@media(max-height: 750px) {
    .add_item_form {
        height: 60%;
    }
}

@media(max-height: 650px) {
    .add_item_form {
        height: 70%;
    }
}

@media(max-height: 480px) {
    .dz-image {
        display: none;
    }
}

@media(max-height: 400px) {
    .add_item_form {
        height: 95%;
        top: 4%;
    }
}
</style>