<template>
    <successOperatingWindow class="success_window" @goBack="goBack" v-if="isSuccessOperatingWindowOpened" />
    <div class="add_main_item_form" v-if="!isSuccessOperatingWindowOpened">
        <img class="exit_form_buttton" src="../../images/exit.png" @click="closeAddMainItemForm">
        <h1 class="add_main_item_form_title">
            Заполните данные
        </h1>
        <form class="add_main_item_form_info" @submit.prevent="sendData">
            <input type="text" placeholder="Название объекта*" class="add_main_item_form_item" v-model="title">
            <textarea type="text" placeholder="Описание объекта*" class="add_main_item_form_item_text"
                v-model="desc"></textarea>
            <div ref="dropzone" class="ventilated_facade_dropzone">
                Upload
            </div>
            <button type="submit" class="add_main_item_form_btn">Сохранить</button>
        </form>
    </div>
</template>
  
<script>
import Dropzone from "dropzone"
import successOperatingWindow from './successOperatingWindow.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        successOperatingWindow,
    },
    data() {
        return {
            title: "",
            desc: "",
            imgUrl: "",
            file: null,
            dropzone: null,
            ventilatedFacadeData: null,
            isSuccessOperatingWindowOpened: false,
            isSuccessSending: false,
            products: [],
            errors: []
        }
    },
    mounted() {
        this.dropzone = new Dropzone(this.$refs.dropzone, {
            url: "http://localhost:8000/api/ventilatedfacades",
            autoProcessQueue: false
        })
    },
    methods: {
        closeAddMainItemForm() {
            this.$emit('closeAddMainItemForm')
        },
        async sendData() {
            // const file = this.dropzone.getAcceptedFiles()[0]
            // this.ventilatedFacadeData.append('ventilated_facades_url', 'fdfdf')
            // this.ventilatedFacadeData.append('ventilated_facades_title', this.title)
            // this.ventilatedFacadeData.append('ventilated_facades_description', this.desc)
            // console.log(this.dropzone.getAcceptedFiles())
            // console.log(`form data is${this.ventilatedFacadeData}`)
            // console.log(this.dropzone.getAcceptedFiles())
            await this.postData()
            // await this.getAllVentilatedFacades()
            this.isSuccessOperatingWindowOpened = true
            // this.$refs.dropzone.processQueue()
        },
        async postData() {
            try {
                const formdata = new FormData()
                const file = this.dropzone.getAcceptedFiles()
                formdata.append('url', file)
                formdata.append('title', this.title)
                formdata.append('desc', this.desc)
                console.log(`form data is ${formdata.get("title")}`)
                console.log(`file is ${formdata.get("file[]")}`)
                console.log(this.dropzone.getAcceptedFiles())
                const res = await fetch('http://localhost:8000/api/ventilatedfacades', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        title: formdata.get('title'),
                        desc: formdata.get('desc'),
                        url: formdata.get('url')
                    }),
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
  
<style scoped>
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

.success_window {
    position: fixed;
    z-index: 8000px;
}

.ventilated_facade_dropzone {
    width: 50%;
    height: 50%;
    border: 1px solid #ccc;
    border-radius: .2em;
    padding: .5em;
    margin-bottom: .8em;
    font-size: 1em;
}
</style>