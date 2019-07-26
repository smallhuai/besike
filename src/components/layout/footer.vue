<template>
  <div id="foot">
    <mt-tabbar v-model="selected" :fixed="true">
      <!-- 组件上面绑修饰符要用native -->
      <mt-tab-item
        :id="'box'+index"
        v-for="(item,index) in  navList"
        :key="index"
        @click.native="sel(index)"
        :class="{'is-selected':item.path==$route.path}"
      >
        <span :class="item.class"></span>
        <p>{{item.name}}</p>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        { path: "/index", name: "首页", class: "iconfont icon-shouye" },
        {
          path: "/goodlistDetail",
          name: "分类",
          class: "iconfont icon-fenleixuanzhong"
        },
        { path: "/cart", name: "购物车", class: "iconfont icon-gouwuche" },
        { path: "/my", name: "我的", class: "iconfont icon-wode" }
      ],
      selected: "",
      clinx: 0
    };
  },
  methods: {
    sel(index) {
      // this.$router.push(this.navList.path);
      this.clinx=index
      this.$router.push(this.navList[index].path) 
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.foot {
  height: r(70);

}
.mint-tabbar.is-fixed{
  z-index:999;
}
.mint-tab-item {
  color: #999;
}
.mint-tabbar > .mint-tab-item.is-selected {
  background-color: #eaeaea;
  color: #26a2ff;
}
</style>
