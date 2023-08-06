<template>
    <div class="auth">
        <div class="auth_window">
            <div class="auth_container">
                <h1 class="auth_title">Авторизация администратора</h1>
                <form class="auth_form" action="#">
                    <h2 class="auth_subtitle">
                        Заполните данные для входа:
                    </h2>
                    <input class="auth_item" type="text" placeholder="Логин">
                    <input class="auth_item" type="password" placeholder="Пароль">
                    <button class="auth_btn">
                        Войти
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AboutCompanyPage"
}
</script>

<style>
.auth {
    position: relative;
    height: 100vh;
}

.auth_window {
    width: 550px;
    height: 400px;
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
    margin-bottom: 1rem;
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
    margin-bottom: 5%;
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

.btn_send_email:hover {
    background: rgba(135, 15, 15, 0.82);
}

.btn_send_email:disabled {
    background-color: #cccccc;
    color: #666666;
    cursor: default;
}

@media(max-width:580px) {
    /* .auth_window {
        width: 460px;
        height: 335px;
        top: 3%;
        left: 50%;
        transform: translate(-50%);
    } */

    .auth_window {
        width: 460px;
        height: 335px;
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
        margin-bottom: .83rem;
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
        height: 279px;
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
        margin-bottom: .69rem;
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
        height: 233px;
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
        margin-bottom: .58rem;
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