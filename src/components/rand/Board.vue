<template>
<div  class="board-wrapper">


  <div class="wrapper">
    <BoardItem v-for="field in fields" :field="field" :key="'item-' + field.id" />
      </div>
      <p>Сложность: <strong>{{difficult}}</strong></p>
      <button @click="start" class="btn">Старт</button>
  
</div>
</template>

<script>
import BoardItem from './BoardItem.vue'
import {ref,onBeforeMount} from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{
    BoardItem
  },
  setup(){
    const difficult = ref(3);
    const fields = ref([]);
    const number = 25

    const init = () => {
      fields.value = []
      for(let i = 0; i < number; i++){
        fields.value.push({
          id:i,
          clicked:false,
          value:0
        })
      }
    }

    onBeforeMount(init)
    return {
      difficult,
      fields,
      init,
      number
    }
  },
    methods:{
      start(){
        this.init()
        this.prepareGame()
      },
      prepareGame(){
        for(let i = 0; i < this.difficult;i++){
          const index = this.rand(0,this.number - 1)
          if(this.fields[index].value !== 1){
            this.fields[index].value = 1;
          }else{
            i--;
          }
        }
      },
      rand(min,max){
        return Math.floor(Math.random() * (max-min)) + min;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  width: 300px;
  margin:  0 auto;
}
.btn{
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  outline: none;
  background-color: rgb(26, 206, 68);
  color: aliceblue;
  font-size: 14px;  
}
.board-wrapper {
    margin-bottom: 100px;
  }

</style>
