<template>
  <div>
    <!-- 第二个导航开始 -->
    <div class="navlist fixclear">
      <ul class="fixclear">
        <li
          @click="sel1(index)"
          v-for="(item,index) in dataList"
          :key="index"
          :class="{'active1':clinx1==index}"
        >{{item.name}}</li>
      </ul>
    </div>
    <div class="goods fixclear">
      <!-- 产品循环部分 -->
      <div v-if="allgoods.length!=0">
        <div v-for="(item,index) in allgoods" :key="index" class="elements">
          <div @click="jumptail(item)">
            <img :src="item.ImgUrl" alt />
          </div>
          <div>{{item.Name}}</div>
          <div>{{item.Means}}</div>
          <div>
            <span>¥{{item.CurrentPrice}}</span>
            <span>/{{item.Size}}</span>
            <img
              src="https://res.bestcake.com\m-images-2\list-cart.png?v=1"
              @click="$store.commit('add',item)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      clinx1: 0,
      allgoods: []
    };
  },
  created() {
    this.sel1(0);
  },
  props: ["dataList"],
  mounted() {},
  methods: {
    sel1(index) {
      this.clinx1 = index;
      this.allgoods = this.dataList[index].list;
    },
    //跳入商品详情页的函数
    jumptail(item) {
      //query  {City: "上海",SupplyNo:"",Name:"xxxx",id:"1878"}
      this.$router.push({
        path: "/goodderection",
        query: {
          City: this.$store.state.City,
          SupplyNo: item.SupplyNo,
          Name: item.Name,
          id: item.ID
        }
      });
    },
    //添加到购物车的逻辑
    ...mapMutations(["add"])
    //点击加入购物车的时候,向购物车传入数据,所需要的数据有  query:{City: "上海",SupplyNo:"",Name:"",CurrentPrice:"",Id:"",Size:""}
    // addcart(item){
    //   this.$store.commit("add",cartdata)
    // }
  },
  watch: {
    dataList() {
      this.sel1(0);
    }
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// 第二个导航开始
.navlist {
  width: r(343);
  height: r(50);
  color: #333;
  margin: 0 auto;
  ul {
    @include cl;
    width: r(250);
    text-align: center;
  }
  ul li {
    height: r(30);
    line-height: r(30);
    margin: r(10) r(20);
    float: left;
  }
}
// 第二个切换栏的动态样式
.active1 {
  background: linear-gradient(to right, #95d5d8, #1fb1b9);
  font-weight: 600;
}
// 产品循环的部分
.goods {
  margin-bottom: r(100);
}
.elements:nth-child(2n) {
  margin-left: r(60);
}
.elements {
  margin-left: r(20);
  width: r(140);
  height: 5.75333rem;
  float: left;
  div:nth-child(1) {
    width: r(140);
    height: r(136);
    img {
      @include imgs;
    }
  }
  div:nth-child(3) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #999;
    padding-top: r(5);
    box-sizing: border-box;
  }
  div:nth-child(4) {
    height: r(21);
    padding: r(5) 0;
    box-sizing: border-box;
    span:nth-child(1) {
      color: red;
    }
    span:nth-child(2) {
      color: #999;
    }
    img {
      height: r(21);
      float: right;
    }
  }
}
.clear {
  margin-bottom: r(100);
}
</style>
