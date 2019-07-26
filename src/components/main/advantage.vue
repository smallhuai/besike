<!--这是底部切换选项组件-->
<template>
  <div id="advantageBox">
    <div class="advantage">
      <img src="https://res.bestcake.com/images/newIndex/title.png?v=1" alt />
    </div>
    <!-- 吐司活动开始 -->
    <div class="tusiActive">
      <img src="https://res.bestcake.com/images/newindex/tusi.gif" alt />
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
#advantageBox{
  width: r(343);
  margin: 0 auto;
}
// 优势部分
.advantage {
  img {
    @include imgs;
  }
}
// 吐司活动部分
.tusiActive {
  img {
    @include imgs;
  }
}
</style>