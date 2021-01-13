<template>
  <div>
    <div class="color-pie">
      <h3>{{ title }}</h3>
      <div class="color-pie-container">
        <div class="pie-item1"></div>
        <div class="pie-item2"></div>
        <div class="pie-item3"></div>
        <div class="color-pie-container-inner">
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    title: String
  }
})
export default class HelloWorld extends Vue {
  title!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$size:720px;
$sizeInner:480px;
.color-pie{
  h3 {
    margin: 40px 0 0;
  }
  .color-pie-container{
    position: relative;
    height: $size;
    width: $size;
    margin: 0 auto;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius:  50%;
    background-color: aliceblue;
    .color-pie-container-inner{
      height: $sizeInner;
      width: $sizeInner;
      border-radius: 50%;
      background-color: #fff;
    }
    .pie-item1{
      position: absolute;
      height: $size / 2;
      width: $size / 2;
      left:$size / 2 ;
      bottom: $size / 2 ;
      background-color: #ff0000;
    }
    .pie-item2{
      position: absolute;
      height: $size / 2;
      width: $size / 2;
      left:$size / 2 ;
      bottom: $size / 2 ;
      transform-origin:0  $size / 2;
      transform: rotate(120deg);
      -ms-transform: rotate(120deg); /* IE 9 */
      -webkit-transform: rotate(120deg); /* Safari and Chrome */
      background-color: #00ff00;
    }
    .pie-item3{
      position: absolute;
      height: $size / 2;
      width: $size / 2;
      left:$size / 2 ;
      bottom: $size / 2 ;
      transform-origin:0  $size / 2;
      transform: rotate(240deg);
      -ms-transform: rotate(240deg); /* IE 9 */
      -webkit-transform: rotate(240deg); /* Safari and Chrome */
      background-color: #0000ff;
    }
  }
}

</style>
