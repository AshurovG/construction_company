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
            <div id="my-awesome-dropzone" ref="productDropzone" class="product_dropzone" v-on="state.files">
                Фотография jpg/jpeg, png:
                <div class="type-error-message error-message" style="display: none;">Файл неверного типа</div>
                <div class="size-error-message error-message" style="display: none;">Размер файла не должен превышать 2
                    мегабайта
                </div>
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
            productDropzone: null,
            exteriorDropzone: null,
            flle: null,
            formData: null,
            isSuccessOperatingWindowOpened: false,
            isSuccessSending: false,
            uploadedFile: null,
            products: [],
            errors: []
        }
    },
    props: {
        isFacade: {
            type: Boolean,
            required: true
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
        console.log(this.isFacade)
        if (this.isFacade) {
            this.productDropzone = new Dropzone(this.$refs.productDropzone, {
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
        } else {
            this.productDropzone = new Dropzone(this.$refs.productDropzone, {
                url: "http://localhost:8000/api/exteriordesign",
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
        }

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
                this.file = this.productDropzone.getAcceptedFiles()[0];
                const formData = new FormData();
                formData.append('title', this.state.title);
                formData.append('file', this.file);
                formData.append('desc', this.state.desc);
                let res = null
                if (this.isFacade) {
                    res = await fetch('http://localhost:8000/api/ventilatedfacades', {
                        method: 'POST',
                        body: formData,
                        mode: 'cors'
                    })
                } else {
                    res = await fetch('http://localhost:8000/api/exteriordesign', {
                        method: 'POST',
                        body: formData,
                        mode: 'cors'
                    })
                }

                const data = await res.json()
                console.log(data.file)
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
.add_main_item_form {
    font-size: 1rem;
    width: 35%;
    height: 50%;
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
    min-height: 3em;
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

.product_dropzone {
    width: 100%;
    height: 50%;
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
    .add_main_item_form {
        width: 45%;
    }
}

@media(max-width: 1000px) {
    .add_main_item_form {
        width: 55%;
    }
}

@media(max-width: 800px) {
    .add_main_item_form {
        width: 65%;
    }
}

@media(max-width: 650px) {
    .add_main_item_form {
        width: 70%;
    }
}

@media(max-width: 600px) {
    .add_main_item_form {
        width: 75%;
        font-size: .9rem;
    }
}

@media(max-width: 450px) {
    .add_main_item_form {
        width: 90%;
    }
}

@media(max-width: 390px) {
    .add_main_item_form {
        width: 92%;
        font-size: .8rem;
    }

    .dz-image-preview {
        width: 100px;
        height: auto;
    }
}

@media(max-height: 950px) {
    .add_main_item_form {
        height: 55%;
    }
}

@media(max-height: 850px) {
    .add_main_item_form {
        height: 60%;
    }
}

@media(max-height: 800px) {
    .add_main_item_form {
        height: 65%;
    }
}

@media(max-height: 750px) {
    .add_main_item_form {
        height: 75%;
    }
}

@media(max-height: 650px) {
    .add_main_item_form {
        height: 85%;
    }
}

@media(max-height: 550px) {
    .dz-image {
        display: none;
    }
}

@media(max-height: 400px) {
    .add_main_item_form {
        height: 95%;
        top: 4%;
    }
}
</style>