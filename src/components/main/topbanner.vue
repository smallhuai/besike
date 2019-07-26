<!--这是底部切换选项组件-->
<template>
  <div id="topbanner">
    <div>
      <mt-swipe class="banner">
        <mt-swipe-item v-for="(item,index) in SwiperBannerList" :key="index">
          <img :src="item.ImgUrl" alt />
        </mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  props:["SwiperBannerList"]
};
</script>

<style lang="scss" scoped>
// 顶部轮播部分
.banner {
  width: r(343);
  height: r(180);
  margin: 0 auto;
  border-radius: r(10);
  img {
    width: 100%;
    height: auto;
  }
}
</style>