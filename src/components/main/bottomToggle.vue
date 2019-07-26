<!--这是底部切换选项组件-->
<template>
  <div id="bottomToggle">
    <mt-tabbar :fixed="true" id="wraper">
      <mt-tab-item class="item current">
        <p class="iconfont">&#xe628;</p>
        <p class="txt">首页</p>
      </mt-tab-item>
      <mt-tab-item class="item">
        <p class="iconfont">&#xe610;</p>
        <p class="txt">分类</p>
      </mt-tab-item>
      <mt-tab-item class="item">
        <p class="iconfont">&#xe641;</p>
        <p class="txt">购物车</p>
      </mt-tab-item>
      <mt-tab-item class="item">
        <p class="iconfont">&#xe62b;</p>
        <p class="txt">我的</p>
      </mt-tab-item>
    </mt-tabbar>
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
#bottomToggle {
  width: r(375);
  margin-top: 60px;
  background-color: #eaeaea;
}
#wraper {
  height: r(62);
  width: r(375);
  margin: 0 auto;
}
#wraper .item {
  color: #999;
  font-size: r(14);
  height: r(62);
  padding: r(10);
  text-align: center;
}
#wraper .item.current{
  color:#f90;
}
.iconfont {
  font-size: r(30);
}
.txt {
margin-top:r(6);
font-size:r(14);
}
</style>