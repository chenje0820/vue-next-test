<template>
  <div class="test_content1">
    <!-- <el-button type="text" @click="goLifeRouter">1.生命周期函数</el-button> -->
    <router-link tag="li" :to="{ path: '/other/lifeCycle' }"
      >1.生命周期函数</router-link
    >
    <router-view></router-view>
  </div>
</template>

<script>
import { getCurrentInstance } from "vue"
import router from "../router/index";
export default {
  setup () {
    const { ctx } = getCurrentInstance()
    console.log(ctx.$router.currentRoute.value)
    const goLifeRouter = () => {
      router.push('/other/lifeCycle')
    }
    return {
      goLifeRouter
    }
  }

}
</script>


<style lang="scss">
</style>


