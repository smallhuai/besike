<!--这是底部切换选项组件-->
<template>
  <div id="IconListBox">
    <div class="IconList">
      <div v-for="(item,index) in TopIconList" :key="index" class="Icon" @click="toPath">
        <img :src="item.ImgUrl" alt />
        <p>{{item.ActName}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toPath(){
      this.$router.push("/goodlistDetail")
    }
  },
  mounted() {},
  props:["TopIconList"]
};
</script>

<style lang="scss" scoped>
// 产品蛋糕部分
.IconList {
  display: flex;
  flex-wrap: wrap;
  padding-top: r(15);
  width: r(343);
  height: r(210);
  margin: 0 auto;
}

.Icon {
  margin-left: r(20);
  height: r(98);
  width: r(60);
  text-align: center;
  img {
    @include imgs;
  }
  p {
    margin-top: 10px;
    width: r(60);
    height: r(10);
    white-space: nowrap;
  }
}
</style>