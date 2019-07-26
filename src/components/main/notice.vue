<!--这是底部切换选项组件-->
<template>
  <div id="broadcastBox">
    <div class="broadcast">
      <div class="bd-left">通知</div>
      <!--滚动方向 direction 4个值 up down left right  默认从右向左-->
      <div class="bd-right">
        <marquee v-text="NoticeList"></marquee>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  props: ["NoticeList"]
};
</script>

<style lang="scss" scoped>
// 广播开始
.broadcast {
  margin: 0 auto;
  overflow: hidden;
  color: #1fb1b8;
  width: r(343);
  height: r(40);
  .bd-left {
    width: r(34);
    height: r(18);
    float: left;
    background-color: #1fb1b8;
    color: #fff;
    line-height: r(18);
    margin-top: r(10);
    text-align: center;
    border-radius: r(2);
    white-space: nowrap;
  }
  .bd-right {
    width: r(296);
    height: r(40);
    line-height: r(40);
    float: right;
  }
}
</style>