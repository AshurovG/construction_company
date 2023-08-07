<template>
    <div class="admin_header">
        <div class="container">
            <div id="header_admin_inner" class="header_admin_inner">
                <span class="header_admin_text">Панель администратора</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "adminHeader",

}
</script>


<style>
.admin_header {
    font-family: 'Open Sans', sans-serif;

    position: fixed;
    top: 0;
    left: 0;

    z-index: 1000;

    background-color: #610a0a;

    width: 100%;

    padding: 2rem 0;
    margin-bottom: 50px;

}

.container {
    padding: 0 1rem;
    margin: 0px 134px;
}

.header_admin_inner {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1rem;
}

.header_admin_text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    color: #F5F5F5;
    text-transform: uppercase;
    font-weight: 700;
    line-height: 1.7em;

    cursor: text;
}

@media(max-width: 1800px) {
    .header_admin_inner {
        font-size: 0.8rem;
    }
}

@media(max-width: 1550px) {
    .header_admin_inner {
        font-size: 0.7rem;
    }
}

@media(max-width: 1340px) {
    .header_admin_inner {
        font-size: 0.5rem;
    }

    .header_admin_text {
        font-size: 2rem;
    }

}

@media(max-width: 1080px) {
    .container {
        width: 100%;
        max-width: 812px;
        margin: 0 auto;
    }

}

@media(max-width: 520px) {
    .header_admin_text {
        font-size: 1.6rem;
    }
}

@media(max-width: 420px) {
    .header_admin_text {
        font-size: 1.3rem;
    }
}

@media(max-width: 335px) {
    .header_admin_text {
        font-size: 1.1rem;
    }
}
</style>
