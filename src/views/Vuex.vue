<template>
  <div class="test_content1">
    <h3>使用vuex</h3>
    <input type="text" v-model="state.name" />
    <button @click="changeName">修改vuex的值</button>
  </div>
</template>

<script> 
import { getCurrentInstance } from 'vue'
export default {
  setup () {
    const GCI = getCurrentInstance
    const { ctx } = getCurrentInstance()
    console.log(ctx.$store)
    const state = ctx.$store.state
    const store = ctx.$store

    const changeName = () => {
      store.commit('changeName', 'liu')
    }
    return {
      GCI,
      state,
      changeName
    }
  }

}
</script>

<style lang="scss" scoped>
</style>
