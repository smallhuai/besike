<template>
  <div id="cart">
    <div v-if="!(carlist.length)" class="empty">购物车还是空的哦~~</div>
    <div class="cartlist">
      <div v-for="(item,index) in carlist" :key="index" class="cartlistbox">
        <div class="cartlistshow">
          <div class="show">
            <input type="checkbox" :id="'box'+index" v-model="selectlist" :value="item.id" @change="selectAll1"/>
          </div>
          <div class="showdetail">
            <div class="showimg" @click="topath(item)">
              <img :src="`https://res.bestcake.com/m-images/cart/${item.Name}.png`" alt />
            </div>
            <div class="showmore">
              <p>{{item.Name}}</p>
              <div class>
                <span>{{item.Size}}</span>
                <span class="jian" @click="sub(item,index)">-</span>
                <span>{{item.Num}}</span>
                <span @click="add(item,index)">+</span>
              </div>
              <p>{{item.Num*item.CurrentPrice}}.00</p>
            </div>
          </div>
        </div>
        <div class="youhui">
          <span>优惠方式</span>
          <span>不参与活动</span>
        </div>
      </div>
    </div>
    <div class="payfor">
      <div>
        <input type="checkbox" v-model="isselect" @change="allselect" id="all" />
        <span>全选</span>
        <span>清空</span>
      </div>
      <div>
        <p>
          合计:
          <span>{{totalPice}}.00</span>
        </p>
      </div>
      <div @click="toLogin">结算</div>
    </div>
    <!-- 底部宣传部分 -->
    <cartfixed></cartfixed>
  </div>
</template>

<script>
import cartfixed from "@/components/main/cartfixed";
import Store from "storejs";
export default {
  data() {
    return {
      carlist: [],
      isselect: false,
      selectlist: []
    };
  },
  created() {
    this.carlist = Store.get("carlist")||[];
    //页面初始化的时候调用一次vuexInit 获取Store中存储的数据
    this.$store.commit("vuexInit");
  },
  computed: {
    //总价的函数
    totalPice() {
      let totalPice = 0;
      this.carlist.map(el => {
        this.selectlist.map(item => {
          if (el.id == item) {
            totalPice += el.Num * el.CurrentPrice;
          }
        });
      });
      return totalPice;
    }
  },
  watch: {
    selectlist() {
      console.log(this.selectlist);
    }
  },
  methods: {
    // 购物车加的逻辑
    add(item) {
      item.Num++;
      this.carlist.forEach(el => {
        if (el.id == item.id) {
          Store.set("carlist", this.carlist);
        }
      });
    },
    // 购物车减的逻辑
    sub(item, index) {
      if (item.Num <= 1) {
        if (confirm("确定要删除吗?")) {
          this.carlist.splice(index, 1);
        }
        Store.set("carlist", this.carlist);
        return;
      }
      item.Num--;
      Store.set("carlist", this.carlist);
    },
    // 购物车跳转详情页的逻辑
    topath(item) {
      console.log(item);
      this.$router.push({path:"/goodderection", query:item});
    },
    //点击反选全选的时候,v-model绑定一个数据,value值绑定不一样的item.id,这样v-model就与产品的id相绑定了
    allselect() {
      if (this.isselect) {
        this.selectlist = [];
        this.carlist.map(item => {
          this.selectlist.push(item.id);
        });
      } else {
        this.selectlist = [];
      }
    },
    //所有商品单个选中的时候,显示所有的选项
    selectAll1() {
      if (this.selectlist.length == this.carlist.length) {
        this.isselect = true;
      }else{
        this.isselect = false;
      }
    },
    //点击结算的时候,如果没有登录,去登录页面
    toLogin(){
      if (Store.get("userInfo")) {
        console.log(Store.get("userInfo"));
        this.$router.push("/my")
      }else{
         console.log(Store.get("userInfo"));
        this.$router.push("/login")
      }  
    }
  },
  components: {
    cartfixed
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// 购物车页面渲染开始
// #cart{
//   width:100%;
// }
.empty{
  height: r(50);
  line-height: r(50);
  text-align: center;
}
.cartlistshow {
  display: flex;
  justify-content: space-between;
  align-content: center;
  .show {
    flex: 1;
    text-align: center;
    line-height: r(134);
    .select {
      display: inline-block;
      width: r(20);
      height: r(20);
      border: 1px solid #666;
      border-radius: 50%;
      overflow: hidden;
      position: relative;
      // background: url(https://res.bestcake.com/m-images/order/mw_firm_duihao_1.jpg)
      //   no-repeat;
      //background-size: 100%;
      input {
        width: r(20);
        height: r(20);
        position: absolute;
        top: r(50);
      }
    }
  }
  .showdetail {
    flex: 6;
    height: r(134);
    display: flex;
    align-content: center;
    justify-content: space-around;
    border-bottom: 1px solid #999;
    .showimg {
      width: r(125);
      img {
        @include imgs;
      }
    }
    .showmore {
      padding: r(30) 0;
      width: r(100);
      div {
        margin: r(10) 0;
        span:nth-child(1) {
          font-size: r(12);
          color: #999;
        }
        span {
          font-size: r(16);
        }
        .jian {
          margin-left: r(20);
          white-space: nowrap;
        }
      }
    }
  }
}
// 底部优惠开始
.youhui {
  height: r(44);
  line-height: r(44);
  padding-left: r(53);
  box-sizing: border-box;
  span:nth-child(1) {
    color: red;
  }
  span:nth-child(2) {
    margin-left: r(20);
    color: #666;
  }
}
.payfor {
  width: 100%;
  margin: 0 auto;
  height: r(60);
  display: flex;
  justify-content: space-around;
  line-height: r(60);
  font-size: r(14);
  position: fixed;
  bottom: 1.14rem;
  background-color: #fff;
  div:nth-child(1) {
    padding-left: r(20);
    box-sizing: border-box;
    .selectAll {
      display: inline-block;
      width: r(20);
      height: r(20);
      border: 1px solid #666;
      border-radius: 50%;
      overflow: hidden;
      position: relative;
      // background: url(https://res.bestcake.com/m-images/order/mw_firm_duihao_1.jpg)
      //   no-repeat;
      // background-size: 100%;
      input {
        width: r(20);
        height: r(20);
        position: relative;
        top: r(30);
      }
    }
  }
  div {
    flex: 1;
  }
  div:nth-child(2) {
    span {
      color: red;
      font-size: r(16);
    }
  }
  div:nth-child(3) {
    text-align: center;
    background: #02d4d7;
    font-size: r(16);
    color: #fff;
  }
}
</style>
