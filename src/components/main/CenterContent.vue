<!--这是底部切换选项组件-->
<template>
  <div id="CenterContentBox">
    <div class="CenterContent">
      <ul>
        <li v-for="(item,index) in CenterContentList" :key="index">
          <img :src="item.ImgUrl" alt />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  props: ["CenterContentList"]
};
</script>

<style lang="scss" scoped>
// 星光游乐园,中间内容部分开始
.CenterContent {
  width: r(343);
  height: r(231);
  margin: 0 auto;
  li {
    width: r(163);
    height: r(100);
    float: left;
    margin-right: r(8);
    margin-top: r(10);
    img {
      @include imgs;
    }
  }
}
</style>