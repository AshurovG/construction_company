<template>
    <div class="success_modal">
        <div class="success_modal_info">
            <img class="success_modal_img" src="../assets/pngwing.com.png" alt="">
            <p>Операция выполнена успешно !</p>
        </div>
        <button class="success_modal_btn" @click="goBack">Назад</button>
    </div>
</template>
  
<script>
export default {
    methods: {
        goBack() {
            this.$emit('goBack')
        }
    },
};
</script>
  
<style scoped>
.success_modal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 18%;
    position: fixed;
    top: 25%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 8000;
    background-color: #fff;
    padding: .8em;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

.success_modal_buttons_container {
    margin-top: 20px;
}

.success_modal_info {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.success_modal_img {
    width: 3em;
    margin-bottom: .5em;
}

.success_modal_btn {
    margin-top: .2em;
    background-color: #008f51;
    color: #fff;
    width: 8em;
    height: 3em;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
}

@media(max-width: 750px) {
    .delete-modal {
        width: 80%;
    }
}
</style>