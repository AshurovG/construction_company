<template>
    <!-- Здесь помещается шаблон компонента -->
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
                <!-- <span class="error_item" v-if="fio$">Это обязательное поле</span> -->
                <span class="error_item" v-if="v$.fio.$error">
                    Некорректное ФИО
                </span>
                <!-- <span class="error_item" v-else-if="v$.fio.$dirty && !v$.fio.checkFio">
                    Некорректное ФИО
                </span> -->
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
            
            <!-- <button class="btn_send_email" type="submit" value="Send">Сделать заказ</button> -->
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
    import { reactive, computed, watch  } from 'vue'
    // import emailjs from 'emailjs-com';

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

            // Отслеживаем изменения в поле fio
            watch(() => state.fio, (newValue) => {
                rules.value.fio.checkFio(newValue)
                // v$.form.fio.$touch()
                // v$.form.fio.$dirty = true
            })
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
            // isValid() {
            //     return(this.v$.fio.$error && this.v$.email.$error && this.v$.order.$error)
            // },
            sendEmail() {
                this.v$.$validate()
                // console.log(this.flag)
                if (!this.v$.$error){
                    // alert(('success'))
                } else {
                    alert(('error'))
                }
                console.log(this.showModal)
                
                // try {
                //     emailjs.sendForm('service_8dbscaj', 'template_9v0h7qn', e.target,
                //     'Yr8QuQUIlXompjRBo', {
                //     fio: this.form.fio,
                //     email: this.form.email,
                //     order: this.form.order
                //     })

                // } catch(error) {
                //     console.log({error})
                // }
                // this.form.fio = ''
                // this.form.email = ''
                // this.form.order = ''
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
  z-index: 1000;
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
}

.btn_send_email:hover {
    cursor: pointer;
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
    background: #4CBB17;
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
    background: #32810e;
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