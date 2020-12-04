<template>
  <div>vue声明周期：控制台查看结果</div>
</template>

<script>
import { setup, ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

export default {
  name: 'LifeCycle',

  beforeCreate () {
    console.log('beforeCreate')
  },

  created () {
    console.log('created')
  },

  setup () {
    console.log('setup')

    onBeforeMount(() => {
      console.log('beforeMounted')
    })
    onMounted(() => {
      console.log('onMounted')
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })
    onUpdated(() => {
      console.log('onUpdated')
    })
    onBeforeUnmount(() => {
      console.log('beforeMounted')
    })
    onUnmounted(() => {
      console.log('onUnmounted')
    })

    return {
    }
  }
}
</script>
