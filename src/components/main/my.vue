<template>
  <div id="my">
    <!-- 底部导航 -->
    <div class="headimg">
      <div class="imghd">
        <img src="https://res.bestcake.com/m-images/order/mw-person-tx.png" alt />
        <div>{{userName}}</div>
      </div>
    </div>
    <div class="rank">
      <div>
        <p>会员等级</p>
        <p>V0</p>
      </div>
      <div>
        <p>极致币</p>
        <p>0</p>
      </div>
      <div>
        <p>优惠卷</p>
        <p>0</p>
      </div>
      <div>
        <p>兑换卷</p>
        <p>0</p>
      </div>
    </div>
    <div class="mine">
      <div>
        <div class="imgs">
          <img src="https://res.bestcake.com\m-images\order\mw-person-dd.png" alt />
        </div>我的订单
        <span>></span>
      </div>
      <div>
        <div class="imgs">
          <img src="https://res.bestcake.com\m-images\order\mw_firm_ad.jpg" alt />
        </div>收货地址
        <span>></span>
      </div>
      <div class="exit" @click="exit">退出登录</div>
    </div>
    <div class="kefu">
      <p>客服热线：400-627-5757</p>
      <p>服务协议与证照信息</p>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import Store from "storejs";
import footernav from "@/components/layout/footer";
export default {
  data() {
    return {
      userName: ""
    };
  },
  created() {
    if (Store.get("userInfo")) {
      this.userName = Store.get("userInfo").uname; 
    } 
  },
  beforeRouteEnter(to, from, next) {
    if (Store.get("userInfo")) {
      next();
    } else {
      next(vm => {
        vm.$router.push("/login");
      });
    }
  },
  methods:{
    exit(){
      console.dir(Store);
      Store.clear("userInfo")
      //  Store.set("userInfo")='';
      this.$router.push("/index")
    }
  },
  mounted() {},
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#my {
  background-color: #e3e3e3e3;
}
.headimg {
  height: r(105);
  display: flex;
  justify-content: center;
  padding: r(20) 0;
  background-color: #fff;
  .imghd {
    width: r(78);
    height: r(80);
    img {
      @include imgs;
    }
  }
}
.rank {
  background-color: #fff;
  height: r(80);
  display: flex;
  justify-content: space-around;
  p {
    padding: r(5) 0;
    text-align: center;
  }
}
.mine {
  margin-top: r(10);
  background-color: #fff;
  padding: 0 r(20);
  div {
    height: r(44);
    line-height: r(44);
    span:nth-child(2) {
      display: inline-block;
      float: right;
      font-size: r(18);
    }
    .imgs {
      float: left;
      width: r(20);
      img {
        height: r(18);
        margin-top: 0.33333rem;
      }
    }
  }
  div:nth-child(1) {
    border-bottom: 1px solid #e3e3e3;
  }
}
.kefu{
  padding: r(120);
  text-align: center;
  p{
    width: r(150);
    padding:r(20) 0;
  }
}
.exit{
  height: r(50);
  line-height: r(50);
  text-align: center;
  font-size: r(20);
  border: 1px solid #999;
}
</style>
