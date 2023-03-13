<template lang="">
 <div class="c-loader" v-if=loaderState>
  <img class="img-fluid" :width="width" src="@/assets/img/loader.gif"/>
 </div>
</template>
<script>
export default {
 props: ['height', 'width', 'loaderState'],
}
</script>
<style scoped >
.c-loader {
 position: absolute;
 left: 0;
 top: 0;
 background-color: #fff;
 z-index: 10;
 width: 100%;
 height: 100%;
 text-align: center;
 display: flex;
 align-items: center;
 justify-content: center;
 min-height: 130px;
}
</style>