<template>
  <div class="pie">
    <ColorPie ttile="ColorPie"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import ColorPie from '@/components/ColorPie.vue' // @ is an alias to /src

@Options({
  components: {
    ColorPie
  }
})
export default class Pie extends Vue {}
</script>
