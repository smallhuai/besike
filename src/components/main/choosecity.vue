<!--这是底部切换选项组件-->
<template>
  <div id>
    <!-- 城市选择开始 -->
    <div class="topcity">
      <img src="https://res.bestcake.com/images/newIndex/localtion.png" alt />
      <span>北京</span>
      <img src="https://res.bestcake.com/images/newIndex/more.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
// 顶部城市部分
.topcity {
  height: r(44);
  width: r(343);
  position: relative;
  line-height: r(44);
  img:nth-child(1) {
    height: r(22);
    width: r(18);
  }
  img:nth-child(3) {
    height: r(16);
    width: r(9);
  }
}
</style>