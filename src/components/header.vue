<template>
    <div class="header">
        <div class="container">
          <div class="content">
            <div class="header-inner">
                <button class="header-brand" @click="$router.push({name: 'home'})">
                    ФРОЛФАСД
                </button>
                <nav class="header-nav">
                    <a class="header-nav-link" href="#">Услуги</a>
                    <a class="header-nav-link" @click="$router.push({name: 'portfolio'})">Портфолио</a>
                    <a class="header-nav-link" @click="$router.push({name: 'home', hash: '#faqs'})">Помощь</a>
                    <a class="header-nav-link" @click="$router.push({name: 'home', hash: '#contacts'})">Контакты</a>
                </nav>
                <button class="btn-order" @click="openOrderForm">
                    Сделать заказ
                </button>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"HeaderPage",
    methods: {
      openOrderForm() {
        this.$emit('openOrderForm')
      },
    }
}
</script>


<style>
.header {
  position: fixed; /* Фиксация хедера */
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: #610a0a;
  width: 100%;
  padding: 2rem 0;
  margin-bottom: 50px;

}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0;
}

.header-brand {
  /* margin-left: 15px; */
  font-size: 2.4rem;
  color: #F5F5F5;
  text-transform: uppercase;
  font-weight: 700;

  cursor: pointer;
}


.header-nav {
  z-index: 1;
  display: flex;
  justify-content: space-between;
  gap: 0px;
  /* width: 50%; */

  /* width: 100%; */
  /* gap: 120px; */
}

.header-nav-link {
  margin-left: 1.5rem;

  color: #F5F5F5;
  font-size: 1.6rem;
  font-weight: 500;
  text-decoration: none;
  border-radius: 35px;
  padding:15px 25px ;

  transition: color 0.2s linear;
}

.header-nav-link:hover {
  /* color: #e5bbbb; */
  background-color: #fff;
  color: #610A0A;

}

.btn-order {
    font-size: 2.1rem;
    font-weight: 700;
    color: #610A0A;


    background-color:#610A0A;
    color: #F5F5F5;
    cursor: pointer;
    outline: #F5F5F5 3px solid;

    border-radius: 35px;
    border: 0;

    padding: 0.8rem 2rem;
    /* margin-right: 20px; */

    transition: background-color 0.2s linear;
}

.btn-order:hover {
  background-color: #F5F5F5;
  color: #610A0A;
}

.content {
  margin: 0px 150px;
}




</style>
