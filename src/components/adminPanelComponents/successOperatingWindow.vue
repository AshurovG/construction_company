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
    font-size: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 35em;
    height: 8em;
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
    min-width: 7em;
    min-height: 2em;
    max-width: 7em;
    max-height: 2em;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
}

@media(max-width: 1000px) {
    /* .success_modal {
        width: 60%
    } */
}

@media(max-width: 800px) {
    .success_modal {
        font-size: .9rem;
    }
}

@media(max-width: 650px) {
    .success_modal {
        font-size: .8rem;
    }
}

@media(max-width: 500px) {
    .success_modal {
        font-size: .6rem;
    }
}

@media(max-width: 370px) {
    .success_modal {
        font-size: .5rem;
    }
}
</style>