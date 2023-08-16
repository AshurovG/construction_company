<template>
    <div class="delete-modal">
        <p>Вы уверены, что хотите удалить данную запись?</p>
        <div class="buttons-container">
            <button class="confirm-button" @click="deleteRecord">Да</button>
            <button class="cancel-button" @click="cancelDelete">Отменить</button>
        </div>
    </div>
</template>
  
<script>
export default {
    methods: {
        deleteRecord() {
            this.$emit('deleteRecord')
            console.log('Запись удалена');
        },
        cancelDelete() {
            console.log('Удаление отменено');
            this.$emit('cancelDelete')
        }
    },
};
</script>
  
<style scoped>
.delete-modal {
    width: 60%;
    position: fixed;
    top: 25%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10000;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

.buttons-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
}

.confirm-button {
    background-color: #4caf50;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 10px;
}

.cancel-button {
    background-color: #f44336;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}

@media(max-width: 750px) {
    .delete-modal {
        width: 80%;
    }
}
</style>