<template>
    <div class="filter-block">
        <div class="filter-inner">
            <div class="filter-title" @click="isOptionsShown=!isOptionsShown">
                <div>{{selected}}</div>
                <div class="arrow-down-icon">
                    <img class="arrow-icon" src="./assets/arrow-down-sign-to-navigate.png" alt="">
                </div>
            </div>
            <div class="filter-options"
            v-if="isOptionsShown"
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
        }
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
        position: absolute;
        top: 35px;
        width: 100%;
        background-color: #e7e7e7;
        color: #000;
        padding: .5rem;
        border-radius: 10px;
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