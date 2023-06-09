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


.container {
  padding: 0 1rem;
  margin: 0px 134px;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0;

  font-size: 1rem;
}

.header-brand {
  font-size: 2.5em;
  color: #F5F5F5;
  text-transform: uppercase;
  font-weight: 700;
  line-height:1.7em;

  cursor: pointer;
}


.header-nav {
  z-index: 1;
  display: flex;
  justify-content: space-between;

}

.header-nav-link {
  margin-left: 0.5em;

  color: #F5F5F5;
  font-size: 2em;
  font-weight: 600;
  text-decoration: none;
  border-radius: 3.18rem;
  padding: 0.5em 0.7em ;


  transition: color 0.2s linear;
  cursor: pointer;
}

.header-nav-link:hover {
  background-color: #fff;
  color: #610A0A;

}

.btn-order {
    font-size: 2.5em;
    font-weight: 700;
    color: #610A0A;
    /* line-height:54.47px; */


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


@media(max-width: 1800px){
  .header-inner {
    font-size: 0.8rem;
  }
}

@media(max-width: 1550px){
  .header-inner {
    font-size: 0.7rem;
  }
}

@media(max-width: 1340px){
  .header-inner {
    font-size: 0.5rem;
  }
  .btn-order {
    font-size: 20px;
    padding: 0.4em 0.8em;
  }

  .header-brand {
    font-size: 24px;
  }

}

@media(max-width: 1080px){
  .container {
    width: 100%;
    max-width: 812px;
    margin: 0 auto;
  }

}




</style>
