<template>
    <div class="footer">
        <div class="content">
          <div class="footer-inner">
            <div class="adress">
                <p>Адрес:</p>
                <p>Москва,</p>
                <p>ул Ленина 6</p>
            </div>

            <div class="schedule">
                <p>Режим работы:</p>
                <p>пн-пт 9:00-20:00</p>
                <p>сб 10:00-18:00</p>
                <p>вс выходной</p>
            </div>

            <div class="contacts">
                <p>Контакты:</p>
                <p>
                    <a class="contacts-link" href="mailto:smth@gmail.com">smth@gmail.com</a>
                </p>
                <p>
                    <a class="contacts-link" href="tel:+79999999999">+79999999999</a>
                </p>
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
    height: 222px;

    margin-top: 139px;
    padding-top: 30px;
    padding-bottom: 200px;

    font-size: 1.6rem;
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



</style>