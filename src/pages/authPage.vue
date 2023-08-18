<template>
    <div class="auth" v-if="isOpenModal">
        <div class="auth_window">
            <div class="auth_container">
                <h1 class="auth_title">Авторизация администратора</h1>
                <form class="auth_form" @submit.prevent="sendAuth">
                    <h2 class="auth_subtitle">
                        Заполните данные для входа:
                    </h2>
                    <input class="auth_item" type="text" placeholder="Логин" v-model.trim="state.login"
                        @blur="v$.login.$touch">
                    <span class="error_item" v-if="v$.login.$error">
                        Это обязательное поле
                    </span>
                    <input class="auth_item" type="password" placeholder="Пароль" v-model.trim="state.pass"
                        @blur="v$.pass.$touch">
                    <span class="error_item" v-if="v$.pass.$error">
                        Это обязательное поле
                    </span>
                    <span class="error_item" v-if="!isSuccess">
                        Неверный логин или пароль
                    </span>
                    <button class="auth_btn" :disabled="(v$.login.$invalid || v$.pass.$invalid)">
                        Войти
                    </button>
                </form>
            </div>
        </div>
    </div>
    <adminPage v-if="!isOpenModal" />
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { reactive, computed } from 'vue'

import adminPage from './adminPage.vue'

export default {
    name: "authPage",
    data() {
        return {
            isSuccess: true,
            isOpenModal: true
        }
    },
    components: {
        adminPage
    },
    setup() {
        const state = reactive({
            login: '',
            pass: ''
        })

        const rules = computed(() => ({
            login: { required },
            pass: { required }
        }))

        const v$ = useVuelidate(rules, state)

        return {
            state,
            v$
        }
    },
    methods: {
        async sendAuth() {
            this.v$.$validate()
            await this.getAnswerFromServer()
            if (!this.v$.$error) {
                try {
                    if (this.isSuccess == true) {
                        console.log('SUCCESS ! ! !')
                        this.isOpenModal = false
                    } else {
                        console.log("WRONG ! ! !")
                    }
                } catch (error) {
                    console.log({ error })
                }
            }
        },

        async getAnswerFromServer() {
            try {
                const res = await fetch('http://localhost:8000/api/auth', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        login: this.state.login,
                        pass: this.state.pass
                    }),
                    mode: 'cors'
                })
                const data = await res.json()
                if (res.status == 200 || res.status == 201) {
                    this.isSuccess = data.check;
                    console.log(this.isSuccess)
                    // console.log(this.state.login)
                } else {
                    this.errors = data
                    console.log(data)
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>

<style>
.auth {
    position: relative;
    height: 100vh;
}

.auth_window {
    width: 550px;
    height: 500px;
    background: #610a0a;
    border-radius: 5%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10000;
    overflow: visible;
}



.auth_container {
    font-size: 1rem;
    height: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.auth_title {
    font-size: 1.8rem;
    color: #fff;
    margin-top: 2rem;
}

.auth_subtitle {
    color: #fff;
    font-size: 1.2rem;
}

.error_item {
    color: red;
    margin-top: 5px;
    font-size: 1.3em;
}

.auth_form {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
}

.auth_item {
    padding: .5em 1em;
    text-align: left;
    margin-top: 5%;
    height: 20%;
    width: 100%;
    left: 150px;
    top: 170px;

    font-style: normal;
    font-weight: 400;
    font-size: 1.5em;
    line-height: 44px;
    letter-spacing: -0.02em;

    background: #FFFFFF;
    border: 1px solid rgba(97, 10, 10, 0.82);
    border-radius: 10px;
}

.auth_btn {
    margin-top: 1rem;
    padding: .5em 1.2em;
    text-align: center;

    background: #fff;
    border-radius: .5em;
    font-style: normal;
    font-weight: 500;
    font-size: 2em;

    letter-spacing: -0.03em;
    color: #610a0a;
    cursor: pointer;
    transition: background .2s linear;
}

.auth_btn:disabled {
    background-color: #cccccc;
    color: #666666;
    cursor: default;
}

.auth_btn:hover {
    background: #d7d5d5;
}

@media(max-width:580px) {
    .auth_window {
        width: 460px;
        height: 417px;
    }

    .auth_container {
        font-size: .83rem;
    }

    .auth_title {
        font-size: 1.5rem;
        margin-top: 1.67rem;
    }

    .auth_subtitle {
        font-size: 1rem;
    }

    .auth_form {
        margin-top: 1.5rem;
    }

    .auth_item {
        left: 125px;
        top: 142px;
        line-height: 36.7px;
        border-radius: 8.3px;
    }
}

@media(max-width:480px) {
    .auth_window {
        width: 383px;
        height: 348px;
    }

    .auth_container {
        font-size: .69rem;
    }

    .auth_title {
        font-size: 1.25rem;
        margin-top: 1.39rem;
    }

    .auth_subtitle {
        font-size: .83rem;
    }

    .auth_form {
        margin-top: 1.25rem;
    }

    .auth_item {
        left: 104px;
        top: 118px;
        line-height: 30.6px;
        border-radius: 6.9px;
    }
}

@media(max-width:390px) {
    .auth_window {
        width: 319px;
        height: 290px;
    }

    .auth_container {
        font-size: .58rem;
    }

    .auth_title {
        font-size: 1.04rem;
        margin-top: 1.16rem;
    }

    .auth_subtitle {
        font-size: .69rem;
    }

    .auth_form {
        margin-top: 1.04rem;
    }

    .auth_item {
        left: 86.7px;
        top: 98.3px;
        line-height: 25.5px;
        border-radius: 5.8px;
    }
}
</style>