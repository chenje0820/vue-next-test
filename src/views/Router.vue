<template>
  <div class="test_content1">
    <h3>使用路由</h3>
    <button type="text" @click="goToHome">跳转到首页</button> |
    <button type="text" @click="goToTest">跳转到测试页</button>
  </div>
</template>


<script>
// 使用router(方法1):引入项目注册的路由表

// 使用router(方法2): 引入useRouter 
import { getCurrentInstance } from 'vue'
import router from "../router/index";
import { useRouter } from 'vue-router';
export default {
  setup () {
    // 获取当前路由
    const REF = getCurrentInstance
    const { ctx } = getCurrentInstance()
    console.log(ctx.$router.currentRoute.value)
    // 
    const router1 = useRouter()
    const goToHome = () => {
      router.push('/')
    }
    const goToTest = () => {
      router.push('/test')
    }
    return {
      REF,
      goToHome,
      router1,
      goToTest
    }
  }

}
</script>

<style lang="scss" scoped>
</style>