<template>
    <div class="filter-block">
        <div class="filter-inner">
            <div class="filter-title" @click="isOptionsShown=!isOptionsShown">
                <div>{{selected}}</div>
                <div class="arrow-down-icon">
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
        hideSelect() {
            this.isOptionsShown=false
        }
    },
    mounted() {
        document.addEventListener('click',this.hideSelect,true)
    }
}
</script>

<style>
    .filter-block {
        position: relative;
        font-size: 1.5rem;
        background-color: #e7e7e7;
        color: #000;
        cursor: pointer;

        border-radius: 10px;
        width: 500px;
        display: inline-block;
    }

    .filter-block {
        margin: 5px 0;

    }

    .filter-options {
        /* display: none; */
        /* position: relative; */
        /* overflow-y: hidden;
        max-height: 0px; */
        position: relative;
        top: -5px;
        width: 100%;
        background-color: #e7e7e7;
        color: #000;
        padding:0 .5rem;

        border-radius: 10px;

        max-height: 0px;
        overflow-y: hidden;
        /* transition: all 1.5s ease-in-out; */
    }

    .filter-options-shown {
        top: -5px;
        padding:0 .5rem;
        max-height: 1000px;
        position: relative;
        transition: all 2.6s linear;

    }
    .filter-title {
        padding: .5rem;
        position: relative;
        display: flex;
    }

    .each-option {
        margin: 10px 0;
        width: 100%;
    }
    .each-option:hover {
        background-color: #b7b7b7;
    }

    .arrow-down-icon {
        position: absolute;
        right: 20px;
    }

</style>