<template>
    <div class="modal-window">
            <div class="modal-content">
                <img class="modal-image" src="../components/assets/pngwing.com.png" alt="">
                <div class="modal-text">
                    <p class="modal-title">Вы успешно офоромили заказ!</p>
                    <p class="modal-subtitle">Ожидайте ответа на почту</p>
                </div>
                <button class="modal-btn" @click="closeModalWindow">Закрыть</button>
            </div>
    </div>
</template>
    
<script>
    export default {
        name: "modalWindow",
        data() {
            return {
                // showModal: false
            }
        },
        props: {
            showModal: {
                type: Boolean,
                required: true
            }
        },
        methods: {
            closeModalWindow() {
                this.$emit('closeModalWindow')
            }
        }
    }
</script>
    
<style>
.modal {
    /* display: none; */
    position: fixed;
    z-index: 10000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
    border-radius: 40px;
}

.modal-title {
    width: 100%;
    height: 20%;
    font-size: 18px;
}

.modal-content {
    position: relative;
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 2px solid #888;
    border-radius: 15px;
    width: 80%;
    height: 33%;
}

.modal-btn {
    position: absolute;
    right: 20px;
    bottom: 20px;
    width: 170px;
    height: 44px;
    padding: 8px 16px;
    display: block;
    text-align: center;
    background: rgba(97, 10, 10, 0.82);
    border-radius: 15px;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 10px;
    letter-spacing: -0.03em;
    color: #F5F5F5;
    cursor: pointer;
    transition: background .2s linear;
}

.modal-btn:hover {
    background: rgba(135, 15, 15, 0.82);
}
.modal-text {
    text-align: center;
    margin-top: 15px;
}

.modal-title {
    width: 100%;
    font-size: 25px;
    font-weight: 700;
}

.modal-subtitle {
    width: 100%;
    font-size: 20px;
    font-weight: 500;
}

.modal-image {
    display: block;
    margin: 0 auto;
}
</style>
    
    