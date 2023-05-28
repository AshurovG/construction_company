<template>
    <div class="container">
        <div class="flex">
            <div class="img-wrapper">
                <!-- Первый вариант показа с помощью if путем удаления элемента из дерева DOM: -->
                <!-- <img v-if="isCarVisible" src="https://www.allcarz.ru/wp-content/uploads/2016/12/goto-gp-amg-gt_02.jpg" alt="рисунок" width="600">
                <p v-else>Здесь было фото мерседеса !</p> -->
                <!-- Второй вариант показа с помощью show добавлением display: none: -->
                <!-- :class - для связи с объектом классов -->
                <img
                 v-show="isCarVisible"
                 :class="imgFilters"
                 :style="imgStyles"
                src="https://www.allcarz.ru/wp-content/uploads/2016/12/goto-gp-amg-gt_02.jpg" alt="рисунок" width="680" height="480">

            </div>
        </div>
        <div class="controls">
            <h1>Mercedes AMG</h1>
            <button 
             class="btn"
             @click="handleClick()">
                {{textBtnShow}}
            </button>
            <button
             class="btn"
             :class="imgFilters.setOpacity ? 'active' : ''"
             @click="imgFilters.setOpacity = !imgFilters.setOpacity"
             
             >
             <!-- click - изменяем состояние класс при нажатии на кнопку -->
             Прозрачность</button>
            <div class="reduct_width">
                Ширина: {{ imgSizes.currentWidth }}
                <input 
                 type="range"
                 :value="imgSizes.currentWidth" 
                 @input="imgSizes.currentWidth = $event.target.value"
                 :min="imgSizes.minWidth"
                 :max="imgSizes.maxWidth"
                 >
            </div>
            <div class="reduct_width">
                Высота: {{ imgSizes.currentHeight }}
                <input 
                 type="range"
                 :value="imgSizes.currentHeight" 
                 @input="imgSizes.currentHeight = $event.target.value"
                 :min="imgSizes.minHeight"
                 :max="imgSizes.maxHeight"
                 >
            </div>

            <div class="reduct_width">
                Угол: {{ imgAngles.currentAngle }}
                <input 
                 type="range"
                 :value="imgAngles.currentAngle" 
                 @input="imgAngles.currentAngle = $event.target.value"
                 :min="imgAngles.minAngle"
                 :max="imgAngles.maxAngle"
                 >
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'PhotoRedactor',
    data() {
        return {
            isCarVisible: true,
            textBtnShow: "Спрятать",
            imgFilters: {
                //Здесь указываем названия классов и флажки по умолчанию:
                setOpacity: false
            },
            imgSizes: {
                maxWidth: 680,
                maxHeight: 480,
                minWidth: 200,
                minHeight: 150,
                currentWidth: 680,
                currentHeight: 480,
            },

            imgAngles: {
                minAngle: 0,
                maxAngle: 360,
                currentAngle: 0
            }

        }
    },

    methods: {
        reverseFlag() {
            this.isCarVisible = !this.isCarVisible
        },
        editTextBtn() {
            this.isCarVisible === true ? this.textBtnShow = "Спрятать" : this.textBtnShow = "Показать";
        },
        handleClick() {
            this.reverseFlag();
            this.editTextBtn();
        }
    },
    computed: {
        imgStyles() {
            return {
                width: `${this.imgSizes.currentWidth}px`,
                height: `${this.imgSizes.currentHeight}px`,
                transform: `rotate(${this.imgAngles.currentAngle}deg)`
            }
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    padding: 150px;
}

.flex {
    margin-right: 50px;
}

.setOpacity {
    opacity: 0.5;
}

.active {
    background-color: #888;
}

.btn {
    padding: 15px 30px;
    color: #fff;
    background-color: blue;
    margin-right: 15px;
}

.reduct_width {
    margin-top: 20px;
}

.img-wrapper {
    width: 680px;
    height: 480px;
    background-color: #cecece;
  }

</style>
