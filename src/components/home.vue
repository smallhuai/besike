<template>
  <div>
    <!-- 底部导航 -->
    <footernav v-if="$route.path!='/goodderection'"></footernav>
    <router-view></router-view>
  </div>
</template>

<script>
import footernav from "@/components/layout/footer";
export default {
  data() {
    return {};
  },
  created() { 
    //页面初始化的时候调用一次vuexInit 获取Store中存储的数据
    this.$store.commit("vuexInit");
  },
  mounted() {
    // this.$eventHub.$on("test", res => {
    //   alert(res);
    // });
  },
  components: {
    footernav
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
