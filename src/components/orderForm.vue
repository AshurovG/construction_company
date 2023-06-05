<template>
    <div class="form_container">
        <img
        class="exit_form_buttton"
        src="../images/exit.png"
        @click="closeForm"
        >
        <form class="order_form" @submit.prevent="sendEmail" novalidate="true">
            <h1 class="form_title">Оформите заказ</h1>
            <div class="form_item_container">
                <input
                class="form_item"
                type="text"
                id="fio"
                name="fio"
                placeholder="ФИО*"
                v-model.trim="state.fio"
                @blur="v$.fio.$touch"
                ><br>
                <span class="error_item" v-if="v$.fio.$error">
                    Некорректное ФИО
                </span>
            </div>
                 
            <div class="form_item_container">
                <input
                class="form_item"
                type="email"
                id="email"
                name="email"
                placeholder="e-mail*"
                v-model.trim="state.email"
                @blur="v$.email.$touch"
                ><br>
                <span class="error_item" v-if="v$.email.$error">
                    Некорректный e-mail
                </span>
            </div>
            <div class="form_item_container">
                <textarea
                class="form_order_text"
                type="text"
                id="order"
                name="order"
                placeholder="Опишите заказ*"
                v-model.trim="state.order"
                @blur="v$.order.$touch"
                ></textarea><br>
                <span class="error_item" v-if="v$.order.$error">
                    В тексте должно быть от 10 до 500 символов
                </span>
            </div>
            <button 
            @click="successSending"
            :disabled="(v$.fio.$invalid || v$.email.$invalid || v$.order.$invalid)"
            class="btn_send_email" 
            type="submit" 
            value="Send">
            Сделать заказ
            </button>
        </form>
        <modal-window
        @closeModalWindow="closeModalWindow"
        class="modal"
        :showModal="showModal"
        v-if="showModal==true"
        />
        
    </div>
 </template>

<script>
    import modalWindow from './modalWindow.vue'
    import { useVuelidate } from '@vuelidate/core'
    import { required, email, minLength, maxLength } from '@vuelidate/validators'
    import { reactive, computed } from 'vue'
    import emailjs from 'emailjs-com';

    export default {
        components: {
            modalWindow
        },
        setup() {
            const state = reactive({
                fio: '',
                email: '',
                order: '',
                minOrderTextLength: 10,
                maxOrderTextLength: 500
            })

            const rules = computed(() => ({
                fio: { required,
                    checkFio(value) {
                        const regex = /^([\u0400-\u04FF]+\s){2}[\u0400-\u04FF]+$/;
                        return regex.test(value.trim());
                    }
                        },
                        email: { required, email },
                        order: { 
                            required,
                            minLength: minLength(state.minOrderTextLength),
                            maxLength: maxLength(state.maxOrderTextLength) 
                        }
            }))

            const v$ = useVuelidate(rules, state)

            return {
                state,
                v$
            }
        },
        data() {
            return {
                showModal: false
            }
        },
        methods: {
            sendEmail(e) {
                this.v$.$validate()
                if (!this.v$.$error){
                    try {
                        emailjs.sendForm('service_8dbscaj', 'template_9v0h7qn', e.target,
                        'Yr8QuQUIlXompjRBo', {
                            fio: this.fio,
                            email: this.email,
                            order: this.order
                        })
                    } catch(error) {
                        console.log({error})
                    }
                    this.fio = ''
                    this.email = ''
                    this.order = ''
                }                
            },
            successSending() {
                this.showModal = true
            },
            
            closeForm() {
                this.$emit('closeForm')
            },
            closeModalWindow() {
                this.showModal = false
                this.closeForm()
            }
        },
  }
</script>

<style>

.form_container {
  width: 1020px;
  height: 920px;
  background: #fff;
  border-radius: 40px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10000;
  overflow: visible;
}

.order_form {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.form_item_container {
    margin-bottom: 52px;
}
.form_item {
    padding: 16px 26px;
    text-align: left;
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
    resize: none;
    text-align: left;
    max-width: 720px;
    min-width: 720px;
    min-height: 300px;
    max-height: 300px;
    left: 150px;
    top: 419px;
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
    width: 100%;
    text-align: center;
    height: 49px;
    margin: 0 auto;
    margin-bottom: 52px;
    padding: 52px 0;

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
    text-align: center;

    background: rgba(97, 10, 10, 0.82);
    border-radius: 35px;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 54px;
    letter-spacing: -0.03em;
    color: #F5F5F5;
    cursor: pointer;
    transition: background .2s linear;
}

.btn_send_email:hover {
    background: rgba(135, 15, 15, 0.82);
}
.btn_send_email:disabled {
  background-color: #cccccc;
  color: #666666;
  cursor: default;
}

.exit_form_buttton {
  width: 70px;
  height: 70px;
  position: absolute;
  top: -45px;
  right: -45px;
  cursor: pointer;
}

.error_item {
    color: red;
    margin-top: 5px;
    font-size: 16px;
}
</style>