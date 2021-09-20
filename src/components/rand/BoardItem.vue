<template>
  <div :class="'item ' + (field.value === 1 ? 'item-active' : '')">  
  </div>
</template>

<script>
export default {
props:{
    field:{
        type:Object,
        required:true
    }
}
}
</script>

<style>
.item{
    position: relative;
    width: 50px;
    height: 50px;
    background-color: #ccc;
    cursor: pointer;
    margin: 5px;
    float: left;
    transition: .4s;
    transform-style: preserve-3d;
}
.item-active{
    background-color: red;
    transform: rotateX(180deg);
}
</style>
