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

  width: 50%;
  height: 80%;
  background: #fff;
  border-radius: 5%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10000;
  overflow: visible;
}

.order_form {
    font-size: 1rem;
    height: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.order_form :nth-child(4) {
    height: 50%;
}
.form_item_container {
    margin-bottom: 4%;
    height: 10%;
    width: 80%;
}
.form_item {
    padding: .5em 1em;
    text-align: left;
    width: 100%;
    height: 95%;
    left: 150px;
    top: 170px;

    font-style: normal;
    font-weight: 400;
    font-size: 2em;
    line-height: 44px;
    letter-spacing: -0.02em;

    background: #FFFFFF;
    border: 1px solid rgba(97, 10, 10, 0.82);
    border-radius: 10px;
}

.form_order_text {
    resize: none;
    text-align: left;
    width: 100%;
    height: 100%;
    left: 150px;
    top: 419px;
    padding: .5em 1em;

    background: #FFFFFF;
    border: 1px solid rgba(97, 10, 10, 0.82);
    border-radius: 10px;

    font-style: normal;
    font-weight: 400;
    font-size: 2em;
    letter-spacing: -0.02em;
}

.form_title {
    width: 100%;
    text-align: center;
    height: 49px;
    margin: 1.1em auto;

    font-style: normal;
    font-weight: 700;
    font-size: 2.5em;

    color: #610A0A;
}

.btn_send_email {
    padding: .7em 2.2em;
    text-align: center;

    background: rgba(97, 10, 10, 0.82);
    border-radius: 2em;
    font-style: normal;
    font-weight: 600;
    font-size: 2em;

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
  width: 10%;
  height: auto;
  position: absolute;
  top: -3%;
  right: -5%;
  cursor: pointer;
}

.error_item {
    color: red;
    margin-top: 5px;
    font-size: 1.3em;
}

@media(max-width:1550px) {
  .order_form {
    font-size: 0.9rem;
  }
}
@media(max-width: 1340px){
  .order_form {
    font-size: 0.8rem;
  }
  .form_container {
    width: 70%;
  }
}
@media(max-width: 1080px){
  .order_form {
    font-size: 0.7rem;
  }
  .form_container {
    height: 70%;
  }
}

@media(max-width: 800px){
  .order_form {
    font-size: 0.6rem;
  }
  .form_container {
    height: 60%;
    width: 90%;
  }
}
@media(max-width: 479px){
  .order_form {
    font-size: 0.5rem;
  }

}

</style>