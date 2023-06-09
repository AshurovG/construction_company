<template>
    <div class="filter-block">
        <div class="filter-inner">
            <div class="filter-title" @click="isOptionsShown=!isOptionsShown" id="filter-title">
                <div>{{selected}}</div>
                <div :class="isOptionsShown ? 'arrow-up-icon' : 'arrow-down-icon'">
                    <img class="arrow-icon" src="./assets/arrow-down-sign-to-navigate.png" alt="">
                </div>
            </div>
            <div
            :class="isOptionsShown ? 'filter-options-shown' : 'filter-options'"
            >
                <div class="each-option"
                v-for="option in options"
                :key="option.value"
                @click="selectOption(option)"
                >
                    {{option}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOptionsShown:false
        }
    },
    props : {
        options : {
            type: Array
        },
        selected: {
            type: String,
            default: ''
        }
    },
    methods: {
        selectOption(option){
            this.$emit('selectOption',option)
            this.isOptionsShown=false
        },
        hideSelect(event) {
            if (!event.target.closest('#filter-title')){
                this.isOptionsShown=false
            }
        },
    },
    mounted() {
        document.addEventListener('click',this.hideSelect,true)
    }
}
</script>

<style>
.filter-block {
    position: relative;
    font-weight: 400;
    font-size: 1rem;
    background-color: #e7e7e7;
    color: #000;
    cursor: pointer;

    margin: 5px 0;

    border-radius: 10px;
    width: 900px;
    display: inline-block;
}

.filter-inner {
    font-size: 2em;
}



.filter-options {
    position: relative;
    top: -5px;
    width: 100%;
    background-color: #e7e7e7;
    color: #000;
    padding:0 .5rem;

    border-radius: 10px;

    max-height: 0px;
    overflow-y: hidden;
}

.filter-options-shown {
    top: -5px;
    padding:0 .5rem;
    max-height: 1000px;
    position: relative;
    transition: all 0.3s linear;

}
.filter-title {
    padding: .5rem;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

}

.each-option {
    margin: 10px 0;
    width: 100%;
}
.each-option:hover {
    background-color: #b7b7b7;
}

.arrow-down-icon {
    margin-right: 1%;
}

.arrow-up-icon {
    margin-right: 1%;
    transform: rotate(180deg);
}

@media(max-width:1800px) {
.filter-block {
    font-size: 0.8rem;
}
}

@media(max-width:1550px) {
.filter-block {
font-size: 0.7rem;
}
}

@media(max-width: 1340px){
.filter-block {
font-size: 0.5rem;
/* margin-top: 16em; */
}

}

</style>