<template>
    <!-- Здесь помещается шаблон компонента -->
    <div class="form_container">
        <img
        class="exit_form_buttton"
        src="../images/exit.png"
        @click="closeForm"
        >
        <form class="order_form" @submit.prevent="sendEmail" novalidate="true">
            <h1 class="form_title">ФЛОРДФАСД</h1>
            <input
            class="form_item"
            type="text"
            id="fio"
            name="fio"
            placeholder="ФИО*"
            v-model.trim="state.form.fio"
            ><br>
            <span v-if="v$.form.fio.$error">
                {{ v$.form.fio.$errors[0].message }}
            </span>
            
            <input
            class="form_item"
            type="email"
            id="email"
            name="email"
            placeholder="e-mail*"
            v-model.trim="state.form.email"
            ><br>
            <textarea
            class="form_order_text"
            type="text"
            id="order"
            name="order"
            placeholder="Опишите заказ*"
            v-model.trim="state.form.order"
            ></textarea><br>
            <button class="btn_send_email" type="submit" value="Send">Сделать заказ</button>
        </form>
    </div>
 </template>

<script>
    import { useVuelidate } from '@vuelidate/core'
    import { required, email, minLength, maxLength } from '@vuelidate/validators'
    import { reactive, computed, watch  } from 'vue'
    // import emailjs from 'emailjs-com';

    export default {
        setup() {
            const state = reactive({
                form: {
                    fio: '',
                    email: '',
                    order: ''
                },
                minOrderTextLength: 10,
                maxOrderTextLength: 500
            })

            const rules = computed(() => {
                return {
                    form: {
                        fio: { required,
                            checkFio(value) {
                                const regex = /^([\u0400-\u04FF]+[\s]?){3}$/;
                                return regex.test(value.trim());
                            }
                        },
                        email: { required, email },
                        order: { 
                            required,
                            minLength: minLength(state.minOrderTextLength),
                            maxLength: maxLength(state.maxOrderTextLength) 
                        }
                    }
                }
            })
            // Отслеживаем изменения в поле fio
            watch(() => state.form.fio, (newValue) => {
                rules.value.form.fio.checkFio(newValue)
            })
            const v$ = useVuelidate(rules, state)

            return {
                state,
                v$
            }
        },
        methods: {
            sendEmail() {
                this.v$.$validate()
                console.log(this.v$)
                if (!this.v$.$error){
                    alert(('success'))
                } else {
                    alert(('error'))
                }
                
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
            closeForm() {
                this.$emit('closeForm')
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

.form_item {
    /* margin: 0 auto; */
    margin-bottom: 52px;
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
    text-align: left;
    max-width: 720px;
    min-width: 720px;
    min-height: 300px;
    max-height: 300px;
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

.exit_form_buttton {
  width: 70px;
  height: 70px;
  position: absolute;
  top: -45px;
  right: -45px;
  cursor: pointer;
}

</style>