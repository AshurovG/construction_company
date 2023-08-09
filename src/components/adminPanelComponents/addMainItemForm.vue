<template>
    <div class="add_main_item_form">
        <img class="exit_form_buttton" src="../../images/exit.png" @click="closeAddMainItemForm">
        <h1 class="add_main_item_form_title">
            Заполните данные
        </h1>
        <from class="add_main_item_form_info" @submit.prevent="send()">
            <input type="text" placeholder="Название объекта*" class="add_main_item_form_item" v-model="title">
            <textarea type="text" placeholder="Описание объекта*" class="add_main_item_form_item_text"
                v-model="desc"></textarea>
            <input type="text" placeholder="урл*" class="add_main_item_form_item" v-model="imgUrl">
            <button type="submit" class="add_main_item_form_btn">Сохранить</button>
        </from>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            title: "",
            desc: "",
            imgUrl: ""
        }
    },
    methods: {
        closeAddMainItemForm() {
            this.$emit('closeAddMainItemForm')
        }
    },
};
</script>
  
<style scoped>
.add_main_item_form {
    width: 50%;
    height: 60%;
    position: fixed;
    z-index: 10000;
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
</style>