<template>
    <!-- Здесь помещается шаблон компонента -->
    <div class="container">
        <form action="" class="order_form">
            <h1 class="form_title">ФЛОРДФАСД</h1>
            <input
            class="form_item"
            type="text" 
            id="fio" 
            name="fio" 
            placeholder="ФИО*"
            v-model="fio"
            required
            ><br>
            <input 
            class="form_item" 
            type="text" 
            id="emailOrPhoneNumber" 
            name="emailOrPhoneNumber" 
            placeholder="Телефон или e-mail*" 
            v-model="emailOrPhoneNumber" 
            required
            ><br>
            <textarea 
            class="form_order_text" 
            type="text" 
            id="order" 
            name="order" 
            placeholder="Опишите заказ*"
            v-model="order"
            required
            ></textarea><br>
            <button class="btn_send_email">Сделать заказ</button>
        </form>
    </div>
 </template>
  
<script>
    export default {
        data() {
            return {
                fio: '',
                emailOrPhoneNumber: '',
                order: ''
            };
      },
        methods: {
        }
    }
</script>
  
<style>

.container {
    width: 700px;
    height: 500px;
    background: #fff;
    border-radius: 40px;
}

.form_item {
    margin: 0 auto;
    margin-bottom: 52px;
    padding: 16px 26px;
    width: 720px;
    height: 75px;
    left: 150px;
    top: 170px;

    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 44px;
    letter-spacing: -0.02em;

    background: #FFFFFF;
    border: 1px solid rgba(97, 10, 10, 0.82);
    border-radius: 10px;
}

.form_order_text {
    width: 720px;
    height: 250px;
    left: 150px;
    top: 419px;
    margin-bottom: 52px;
    padding: 16px 26px;

    background: #FFFFFF;
    border: 1px solid rgba(97, 10, 10, 0.82);
    border-radius: 10px;

    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 44px;
    letter-spacing: -0.02em;
}

.form_title {
    width: 238px;
    height: 49px;
    margin: 0 auto;
    margin-bottom: 52px;

    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 54px;
    letter-spacing: -0.03em;
    color: #610A0A;
}

.btn_send_email {
    width: 379px;
    height: 76px;
    padding: 11px 47px;

    background: rgba(97, 10, 10, 0.82);
    border-radius: 35px;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 54px;
    letter-spacing: -0.03em;
    color: #F5F5F5;
}

</style>