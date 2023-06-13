<template>
    <div class="modal-window">
            <div class="modal-content">
                <div class="modal-image-container">
                    <img class="modal-image" src="../components/assets/pngwing.com.png" alt="">
                </div>
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
    position: fixed;
    z-index: 100000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
    border-radius: 5%;
}



.modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 1em 0.6em;
    border: 2px solid #888;
    border-radius: 15px;
    width: 80%;
    height: 33%;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}



.modal-btn {
    margin-right: -70%;
    padding: 0.4em 1em;
    display: block;
    text-align: center;
    background: rgba(97, 10, 10, 0.82);
    border-radius: 15px;
    font-style: normal;
    font-weight: 600;
    font-size: 1.375em;
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
    margin-top: 1em;
    font-size: 1em;
}

.modal-title {
    width: 100%;
    font-size: 1.56em;
    font-weight: 700;
}

.modal-subtitle {
    width: 100%;
    font-size: 1.25em;
    font-weight: 500;
}

.modal-image-container {
    margin: 0 auto;
    height: 40%;
}

.modal-image {
    display: block;
    margin: 0;
    height: 100%;
}

@media(max-width:1550px) {
  .modal-content {
    font-size: 0.9rem;
  }
}
@media(max-width: 1340px){
  .modal-content {
    font-size: 0.8rem;
  }
}
@media(max-width: 1080px){
  .modal-content {
    font-size: 0.7rem;
  }
}

@media(max-width: 800px){
  .modal-content {
    font-size: 0.6rem;
  }
}
@media(max-width: 479px){
  .modal-content {
    font-size: 0.4rem;
  }
}
</style>

