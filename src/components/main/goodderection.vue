<template>
  <div id="goodderection">
    <mt-swipe class="banner">
      <mt-swipe-item v-for="(item,index) in bannerImgs" :key="index">
        <img :src="item" alt />
      </mt-swipe-item>
    </mt-swipe>
    <div class="NameBox">
      <div class="Name">{{routeData.Name}}</div>
      <div class="xin">新</div>
    </div>
    <!-- 产品描述开始 -->
    <div class="goodsdirection" v-if="resData.length!=0">
      <p class="fixclear">
        <span>甜度</span>
        <span>
          <img :src="`https://res.bestcake.com/m-images/ww/jz/tiandu_${infosData.Sweet}.png`" alt />
        </span>
      </p>
      <p class="fixclear">
        <span>口味</span>
        <span>{{infosData.CategoryName}}</span>
      </p>
      <p class="fixclear">
        <span>原材料</span>
        <span>{{infosData.Resource ||infosData.Resourse}}</span>
      </p>
      <p class="fixclear">
        <span>适合人群</span>
        <span>{{infosData.Details}}</span>
      </p>
      <p class="fixclear">
        <span>保鲜条件</span>
        <span>{{infosData.KeepFresh}}</span>
      </p>
    </div>
    <!-- 商品评价 -->
    <div class="evaluation">评价</div>
    <!-- 商品规格 -->
    <div class="kinds">
      <div class="kindssize">
        <span
          v-for="(item,index) in cakeSize"
          :key="index"
          :class="{'active':clinex==index}"
          @click="changclr(item,index)"
        >{{item.Size}}</span>
      </div>
    </div>
    <!-- 商品数量 -->
    <div class="proNum fixclear" v-if="resData.length!=0">
      <div>购买数量</div>
      <div>
        <span @click="sub">-</span>
        <span>{{Num}}</span>
        <span @click="add">+</span>
      </div>
    </div>
    <!-- 商品种类规格开始 -->
    <div class="specifications">
      <div class="jghuaxian fixclear">
        <p>划线价格</p>
        <p>商品的专柜价、吊牌价、正品零售价、厂商指导价或该商品的曾经展示过的销售价等，并非原价，仅供参考。</p>
      </div>
      <div class="jghuaxian fixclear">
        <p>未划线价格</p>
        <p>商品的实时标价，不因表述的差异改变性质。具体成交价格根据商品参加活动，或会员使用优惠券、积分等发生变化，最终以订单结算页价格为准。</p>
      </div>
    </div>
    <!-- 底部价格开始 -->
    <div class="proPrice">
      <div v-if="buyPrice.CurrentPrice!='undefined'">{{Num*buyPrice.CurrentPrice||""}}</div>
      <div>
        <span @click="addcart">加入购物车</span>
        <span @click="toLogin">立即购买</span>
      </div>
    </div>
  </div>
</template>

<script>
import Store from "storejs"
import { MessageBox} from 'mint-ui'
export default {
  data() {
    return {
      //页面初始化的数据
      routeData: "", //路由的数据,拼接图片的途径
      bannerImgs: "", //详情轮播数据
      resData: "", //请求接口返回的数据,根据routeData中的获取
      infosData: {}, //商品描述信息
      cakeSize: [], //商品的种类
      buyPrice: {}, //对应的产品的价格
      Num: 1, //购买数量
      //逻辑数据
      clinex: ""
    };
  },
  created() {
    this.routeData = this.$route.query;
    // 使用全局的方法封装的
    this.bannerImgs = this.$global.getimg(this.routeData);
    // 接口中取出的数据
    this._getgooddetail(res => {
      this.resData = res;
      this.infosData = this.getInfo(this.resData, this.$store.state.City);
      this.cakeSize = this.getSize(this.resData, this.$store.state.City);
    });
    // 商品描述信息
  },
  mounted() {},
  methods: {
    //获取接口的数据函数
    _getgooddetail(callback) {
      // 兼容四种参数接口处理
      let KSKParams = {
        City: this.$store.state.City,
        ProName: this.routeData.Name,
        c: "Product",
        m: "GetCakeByName",
        v: new Date().getTime()
      };
      let NSParams = {
        Name: this.routeData.Name,
        c: "NsCakeCenter",
        m: "GetNSCakeByName",
        v: new Date().getTime()
      };
      let JZParams = {
        City: this.$store.state.City,
        ProName: this.routeData.Name,
        c: "IndexCenter",
        m: "GetjzCakeInfo",
        v: new Date().getTime()
      };
      let RPParams = {
        Name: this.routeData.Name,
        c: "NsCakeCenter",
        m: "GetRuPCakeByName",
        v: new Date().getTime()
      };
      // 传入不同的参数来调取接口,根据routeData的数据来判断,经典入口来调取接口的结果
      if (this.routeData.SupplyNo.indexOf("KSK") != -1) {
        this.$apis.getgooddetail(KSKParams).then(res => {
          callback(res.data.Tag);
        });
      }
      //女神数据兼容的入口
      else if (this.routeData.SupplyNo.indexOf("NS") != -1) {
        this.$apis.getgooddetail(NSParams).then(res => {
          callback(res.data.Tag);
        });
      }
      //拌手礼数据兼容入口
      else if (this.routeData.SupplyNo.indexOf("JZ") != -1) {
        this.$apis.getgooddetail(JZParams).then(res => {
          callback(res.data.Tag);
        });
      }
      //乳品数据兼容入口
      else if (this.routeData.SupplyNo.indexOf("RP") != -1) {
        this.$apis.getgooddetail(RPParams).then(res => {
          callback(res.data.Tag);
        });
      }
    },
    //封装一个函数,要取得里面的数据中的甜度,口味,原材料,适合人群,保鲜材料
    getInfo(resData, City) {
      let infosData = {};
      // 是一个数组的时候所取到的值
      if (Array.isArray(resData)) {
        console.log("111");
        if (resData.length == 1) {
          infosData = resData[0];
          infosData.Sweet = resData[0].CakeType[0].Sweet; //甜度
          infosData.Details =
            JSON.parse(resData[0].Details).details_tips || "所有人群"; //适合人群
        } else {
          //数组长度不为1的时候
          resData.map(item => {
            if (City == item.City) {
              infosData = item;
              infosData.Details = JSON.parse(item.Details).details_tips;
            }
          });
        }
      } else {
        // 数据类型是对象的时候
        infosData = resData.infos;
        infosData.Sweet = resData.infos.CakeType[0].Sweet;
        infosData.Details = JSON.parse(resData.Detail[0]).details_tips;
      }
      return infosData;
    },
    //封装一个函数,去取得数中的size和价格,整合数组,通过遍历,渲染到到页面
    getSize(resData, City) {
      //如果为数据的时候
      let cakeSize = [];
      if (Array.isArray(resData)) {
        if (resData.length == 1) {
          cakeSize.push(resData[0]);
        }
        resData.map((item, index) => {
          if (City == item.City) {
            cakeSize.push(item);
          }
        });
      } else {
        resData.infos.CakeType.map(item => {
          item.Name = resData.infos.Name;
          cakeSize.push(item);
        });
      }
      this.changclr(cakeSize[0], 0);
      return cakeSize;
    },
    //点击的时候切换样式
    changclr(item, index) {
      this.clinex = index;
      this.buyPrice = item;
    },
    //点击的时候,数量++
    add() {
      this.Num++;
      this.buyPrice.Num = this.Num;
    },
    //点击的数量减减
    addcart() {
      MessageBox.confirm("确认去结算").then(action => {
        this.$store.commit("add", this.buyPrice);
        this.$router.push("/cart")
      });  
    },
    sub() {
      this.Num--;
      if (this.Num <= 0) {
        this.Num = 1;
      }
    },
    //去结算的时候,如果已经登录,就去购物车页面,没登录 就提示去登录页面
     toLogin(){
       console.log("1111");
      if (Store.get("userInfo")) {
        this.$router.push("/cart")
      }else{
        this.$router.push("/login")
      }  
    }
  },
  components: {}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#goodderection {
  background-color: #f7f7f7;
  margin-bottom: r(50);
}
.banner {
  height: r(379);
  img {
    @include imgs;
  }
}
.NameBox {
  background: #fff;
  height: r(100);
  font-size: r(20);
  padding-top: r(10);
  .Name {
    padding-bottom: r(30);
    text-align: center;
    height: r(28);
    font-weight: bold;
    box-sizing: border-box;
  }
  .xin {
    width: r(30);
    height: r(28);
    margin: 0 auto;
    font-weight: bold;
    background: red;
    line-height: r(28);
    text-align: center;
  }
}

// 产品描述开始
.goodsdirection {
  background: #fff;
  margin-top: r(20);
  padding: r(10) r(8);
  font-size: r(14);
  p {
    margin-top: r(20);
    span {
      display: block;
      float: left;
      line-height: r(18);
    }
    span:nth-child(1) {
      color: #999;
      width: r(100);
      margin-left: r(20);
    }
    span:nth-child(2) {
      vertical-align: baseline;
      width: r(200);
      color: #333;
    }
  }
}
// 产品评价开始
.evaluation {
  height: r(44);
  margin-top: r(10);
  background-color: #fff;
}
// 商品种类开始
.specifications {
  padding: 0 r(20);
  padding-top: r(46);
  height: r(200);
  font-size: r(14);
  box-sizing: border-box;
  .jghuaxian {
    margin-bottom: r(30);
    p {
      float: left;
    }
    p:nth-child(1) {
      width: r(86);
      color: #333;
    }
    p:nth-child(2) {
      width: r(238);
      color: #999;
    }
  }
}
.kindssize {
  margin-top: r(20);
  padding: r(20) 0;
  background-color: #fff;
  box-sizing: border-box;
  span {
    padding:0 r(8);
    display: inline-block;
    text-align: center;
    margin-left: r(10);
    height: r(25);
    line-height: r(25);
    color: #333;
    border: 1px solid #ddd;
    font-size: r(14);
  }
}
// size切换时候的样式
.active {
  background-color: #02d3d6;
  border: none !important;
}
// 购买数量
.proNum {
  margin-top: r(20);
  color: #333;
  background-color: #fff;
  padding: 0 r(20);
  font-size: r(14);
  div {
    height: r(44);
    line-height: r(44);
    span {
      display: inline-block;
      margin-left: r(5);
    }
  }
  div:nth-child(1) {
    width: r(100);
    float: left;
  }
  div:nth-child(2) {
    width: r(100);
    float: right;
    text-align: right;
  }
}
// 底部价格部分
.proPrice {
  padding-left: r(20);
  height: r(52);
  line-height: r(52);
  display: flex;
  font-size: r(18);
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  background: #fff;
  div:nth-child(1) {
    color: red;
  }
  div:nth-child(2) {
    span {
      display: inline-block;
      width: r(93);
      text-align: center;
      height: r(52);
      line-height: r(52);
    }
    span:nth-child(2) {
      background-color: #02d3d6;
      color: #fff;
      font-weight: 600;
    }
  }
}
</style>