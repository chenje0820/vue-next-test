<template>
  <div class="test_content1">
    <h3>状态属性及状态的绑定+计算属性的监听</h3>
    <hr />
    <div>计数：{{ count }}</div>
    <div>count*2：{{ doubleCount }}</div>
    <button @click="addNumber">计数++</button>
    <hr />
    <input type="text" v-model="textInfo" />
  </div>
</template>

<script>
import { ref, watch, computed } from 'vue'
export default {
  setup () {
    //1. 用ref方法定义状态
    const count = ref(0)
    const textInfo = ref()
    console.log(textInfo.value)
    //2. 计数
    const addNumber = () => {
      count.value++
    }
    //3.computed
    const doubleCount = computed(() => count.value * 2)
    //4.1 watch(单个)
    watch(() => count.value,
      val => {
        console.log('watch监听count', val)
      })
    //4.2 watch(多个)
    watch([count, () => textInfo.value], ([count, textInfo], [Pcount, PtextInfo]) => {
      console.log('新count:' + count, '旧count:' + Pcount)
      console.log('新textInfo:' + textInfo, '旧textInfo:' + PtextInfo)
    })
    // 5. 将方法及变量return出去
    return {
      count,
      textInfo,
      addNumber,
      doubleCount
    }
  }
}
</script>

<style lang="scss" scoped>
</style>