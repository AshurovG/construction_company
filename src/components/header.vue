<template>
    <div class="header">
        <div class="container">
            <div class="header-inner">
                <button class="header-brand" @click="$router.push({name: 'home'})">
                    ФРОЛФАСД
                </button>
                <nav class="header-nav">
                    <a class="header-nav-link" @click="()=>{$router.push({name: 'home',query: { anch: 'services'}}),scrollToAnchor('services')}">Услуги</a>
                    <a class="header-nav-link" @click="$router.push({name: 'portfolio'})">Портфолио</a>
                    <a class="header-nav-link" @click="()=>{$router.push({name: 'home',query: { anch: 'faqs'}}),scrollToAnchor('faqs')}">Помощь</a>
                    <a class="header-nav-link" @click="()=>{$router.push({name: 'home',query: { anch: 'contacts'}}),scrollToAnchor('contacts')}">Контакты</a>
                </nav>
                <button class="btn-order" @click="openOrderForm">
                    Сделать заказ
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"HeaderPage",
    data() {
    return {
      selectedAnchor: '',
      };
    },
    methods: {
      openOrderForm() {
        this.$emit('openOrderForm')
      },
      scrollToAnchor(param) {
        this.$emit("scrollToAnchor",param)
      }
    }
}
</script>


<style>
.header {
  font-family: 'Open Sans', sans-serif;
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
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0;
}

.header-brand {
  /* margin-left: 15px; */
  font-size: 2.5rem;
  color: #F5F5F5;
  text-transform: uppercase;
  font-weight: 700;
  line-height:54.47px;

  cursor: pointer;
}


.header-nav {
  z-index: 1;
  display: flex;
  justify-content: space-between;
  /* gap: 0px; */
}

.header-nav-link {
  margin-left: 1.5rem;

  color: #F5F5F5;
  font-size: 2.25rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 2.18rem;
  padding: 0.9375rem 1.5625rem ;


  transition: color 0.2s linear;
  cursor: pointer;
}

.header-nav-link:hover {
  background-color: #fff;
  color: #610A0A;

}

.btn-order {
    font-size: 2.5rem;
    font-weight: 700;
    color: #610A0A;
    line-height:54.47px;


    background-color:#610A0A;
    color: #F5F5F5;
    cursor: pointer;
    outline: #F5F5F5 3px solid;

    border-radius: 2em;
    border: 0;

    padding: 0.4em 1em;

    transition: background-color 0.2s linear;
}

.btn-order:hover {
  background-color: #F5F5F5;
  color: #610A0A;
}

.container {
  margin: 0px 150px;
}




</style>
