<template>
    <div class="header">
        <div class="container">
            <div class="header-inner">
                <div class="header-brand">
                    ФРОЛФАСД
                </div>
                <!-- <div class="header-logo">
                    <img src="img/code.svg" alt="">
                </div> -->
                <nav class="header-nav">
                    <a class="header-nav-link" href="#">Услуги</a>
                    <a class="header-nav-link" href="#">Портфолио</a>
                    <a class="header-nav-link" href="#">Помощь</a>
                    <a class="header-nav-link" href="#">Контакты</a>
                </nav>
                <button class="btn-order">
                    Сделать заказ
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"HeaderPage"
}
</script>


<style>
.header {
  background-color: #610a0a;

  padding: 1rem 0;
  margin-bottom: 50px;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-brand {
  margin-left: 15px;
  font-size: 2rem;
  color: #F5F5F5;
  text-transform: uppercase;
  font-weight: 700;
}


.header-nav {
  display: flex;
  gap: 40px;
}

.header-nav-link {
  margin-left: 1.5rem;

  color: #F5F5F5;
  font-size: 1.4rem;
  font-weight: 500;
  text-decoration: none;

  transition: color 0.2s linear;
}

.header-nav-link:hover {
  color: #e5bbbb;
}


.btn-order {
    font-size: 20px;
    font-weight: 700;
    color: #610A0A;
    background-color: #F5F5F5;

    border-radius: 35px;
    border: 0;

    padding: 13px 56px;
    margin-right: 20px;

    transition: background-color 0.2s linear;
}

.btn-order:hover {
    background-color:#e1dfdf;
}

</style>
