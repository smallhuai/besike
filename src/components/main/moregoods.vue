<!--这是底部切换选项组件-->
<template>
  <div id>
    <div class="saletag">
      <img :src="SaleList.TabImgUrl" alt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  props: ["SaleList", "index"]
};
</script>

<style lang="scss" scoped>
//底部左右滑动的三个部分开始
.saletag {
  height: r(142);
  width: r(375);
  margin:0 auto;
  img {
    @include imgs;
  }
}
</style>