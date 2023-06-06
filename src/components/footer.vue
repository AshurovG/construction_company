<template>
    <div class="footer">
        <div class="content">
          <div class="footer-inner">
            <div class="adress">
                <p style="font-weight:700;">Фролфасд</p>
                <p style="font-weight:700;">2010-2023</p>
                <div style="border-bottom: solid 1px #fff;margin: 10px 0;"></div>
                <p style="font-weight:700;">Адрес:</p>
                <p>Москва,</p>
                <p>ул Ленина 6</p>
            </div>

            <div class="schedule">
                <p style="font-weight:700;">Режим работы:</p>
                <p>пн-пт 9:00-20:00</p>
                <p>сб 10:00-18:00</p>
                <p>вс выходной</p>
            </div>

            <div class="contacts">
                <p style="font-weight:700;">Контакты:</p>
                <p>
                    <a class="contacts-link" href="mailto:smth@gmail.com">
                        <img class="mail-icon" src="./assets/mail.png" alt="">smth@gmail.com
                    </a>
                </p>
                <p>
                    <a class="contacts-link" href="tel:+79999999999">
                        <img class="tel-icon" src="./assets/tel.png" alt="">+79999999999
                    </a>
                </p>
                <div class="social-media">
                    <a href="#" class="img__link"><img class="social-icon" src="./assets/inst.png" alt=""></a>
                    <a href="#" class="img__link"><img class="social-icon" src="./assets/tg.png" alt=""></a>
                    <a href="#" class="img__link"><img class="social-icon" src="./assets/wa.png" alt=""></a>
                </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"FooterPage"
}
</script>

<style>

.footer {
    background-color: #130D0DD1;
    color: #F5F5F5;

    width: 100%;
    height: 282px;

    margin-top: 110px;
    padding-top: 30px;
    padding-bottom: 200px;

    font-size: 2rem;
    font-weight: 400;
}

.footer-inner {
    width: 70%;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}

.footer-inner p {
    margin: 5px;
}

.contacts-link {
    text-decoration: none;
    color: #F5F5F5;
}

.tel-icon {
    width: 1.4rem;
    margin-right: 7px;
}

.mail-icon {
    width: 1.5rem;
    margin-right: 7px;

}

.social-media {
    margin-top: 10px;

    display: flex;
    height: 40px;
    width: 70%;
    justify-content: space-between;
}

.social-icon {
   height: 40PX;
   transition: opacity 0.2s linear;
}

.social-icon:hover {
    opacity: 0.6;
}


</style>