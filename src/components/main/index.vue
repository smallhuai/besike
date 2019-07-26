<template>
  <div>
    <!-- 此页为app首页 -->
    <div class="top">
      <!-- 城市组件选择开始 -->
      <choosecity></choosecity>
      <!-- 轮播组件-->
      <topbanner :SwiperBannerList="SwiperBannerList"></topbanner>
      <!-- 优势图片开始 和吐司活动-->
      <advantage></advantage>
      <!-- 顶部蛋糕循环渲染数据组件部分开始 -->
      <cooklist :TopIconList="TopIconList"></cooklist>
      <!-- 广播开始 -->
      <notice :NoticeList="NoticeList"></notice>
      <!-- 星光游乐园开始 -->
      <CenterContent :CenterContentList="CenterContentList"></CenterContent>
    </div>
    <!-- 更多商品入口1 传入参数为SaleList[0]-->
    <moregoods :SaleList="SaleList[0]" v-if="SaleList.length!=0"></moregoods>
    <!-- 第一部分轮播 传入参数SaleListchild[0]-->
    <swiper v-if="SaleListchild.length!=0">
      <div
        class="swiper-slide swiper-slide-active"
        style="margin-right: 30px;"
        v-for="(item,index) in SaleListchild[0]"
        :key="index"
        @click="jumptail(item)"
      >
        <img :src="item.imgurl" alt />
        <p>{{item.Name}}</p>
        <p>
          <span class="price">￥{{item.Price}}</span>
          <span class="size">/{{item.Size}}</span>
        </p>
      </div>
    </swiper>
    <!-- 更多商品入口2 传入参数为SaleList[1]-->
    <moregoods :SaleList="SaleList[1]" v-if="SaleList.length!=0"></moregoods>
    <!-- 第二部分轮播 传入参数SaleListchild[1]-->
    <swiper v-if="SaleListchild.length!=0">
      <div
        class="swiper-slide swiper-slide-active"
        style="margin-right: 30px;"
        v-for="(item,index) in SaleListchild[1]"
        :key="index"
        @click="jumptail(item)"
      >
        <img :src="item.imgurl" alt />
        <p>{{item.Name}}</p>
        <p>
          <span class="price">￥{{item.Price}}</span>
          <span class="size">/{{item.Size}}</span>
        </p>
      </div>
    </swiper>
    <!-- 更多商品入口3 传入参数为SaleList[2]-->
    <moregoods :SaleList="SaleList[2]" v-if="SaleList.length!=0"></moregoods>
    <!-- 第三部分轮播 传入参数SaleListchild[2]-->
    <swiper v-if="SaleListchild.length!=0">
      <div
        class="swiper-slide swiper-slide-active"
        style="margin-right: 30px;"
        v-for="(item,index) in SaleListchild[2]"
        :key="index"
        @click="jumptail(item)"
      >
        <img :src="item.imgurl" alt />
        <p>{{item.Name}}</p>
        <p>
          <span class="price">￥{{item.Price}}</span>
          <span class="size">/{{item.Size}}</span>
        </p>
      </div>
    </swiper>
  </div>
</template>                                                                         
<script>
import choosecity from "@/components/main/choosecity";
import topbanner from "@/components/main/topbanner";
import advantage from "@/components/main/advantage";
import cooklist from "@/components/main/cooklist";
import notice from "@/components/main/notice";
import CenterContent from "@/components/main/CenterContent";
import moregoods from "@/components/main/moregoods";
import bottomToggle from "@/components/main/bottomToggle";

export default {
  data() {
    return {
      SwiperBannerList: [],
      TopIconList: [],
      NoticeList: "",
      CenterContentList: [],
      SaleList: [],
      SaleListchild: []
    };
  },
  computed: {
    isTopic() {}
  },
  mounted() {
    this.pageinit();
  },
  methods: {
    pageinit() {
      this._getIndexData(res => {
        //1.获取轮播的数据
        this.SwiperBannerList = res.SwiperBannerList;
        //2.获取顶部蛋糕的部分
        this.TopIconList = res.TopIconList;
        // 广播部分
        this.NoticeList = res.NoticeList;
        //星光游乐园开始
        this.CenterContentList = res.CenterContentList;
        this.SaleList = res.SaleList;
        this.SaleList.forEach((item, index) => {
          this.SaleListchild.push(JSON.parse(item.CakeList));
        });
        this.SaleListchild.forEach((item1, index) => {
          item1.forEach((items, index) => {
            items.imgurl = this.$global.geturl(items);
          });
        });
      });
    },
    _getIndexData(callback) {
      this.$apis.getIndexData().then(res => {
        callback(res.data.Tag.mainresult);
      });
    },
    //https://res.bestcake.com/m-images/ww/变量/变量.变量?
    // 拼接this.SaleListchild中所有图片的路径
    geturl(items) {
      //  图片的路径 SupplyNo为 NS : ns.jpg SupplyNo KSK的为 :jd.png SupplyNo RP :rp.jp
      let imgurl = "";
      if (items.SupplyNo.indexOf("KSK") != -1) {
        imgurl = `https://res.bestcake.com/m-images/ww/jd/${items.Name}.png`;
      } else if (items.SupplyNo.indexOf("NS") != -1) {
        imgurl = `https://res.bestcake.com/m-images/ww/ns/${items.Name}.jpg`;
      } else if (items.SupplyNo.indexOf("RP") != -1) {
        imgurl = `https://res.bestcake.com/m-images/ww/rp/${items.Name}.jpg`;
      } else if (items.SupplyNo.indexOf("JZ") != -1) {
        imgurl = `https://res.bestcake.com/m-images/ww/jz/${items.Name}.png`;
      }
      return imgurl;
    },
    jumptail(item) {
      // 点击的时候 跳入购物车详情页面
      this.$router.push({
        path: "/goodderection",
        query: {
          City: this.$store.state.city,
          SupplyNo: item.SupplyNo,
          Name: item.Name,
          id: item.Id||item.ID
        }
      });
    }
  },
  watch: {},
  components: {
    choosecity,
    topbanner,
    advantage,
    cooklist,
    notice,
    CenterContent,
    moregoods,
    bottomToggle
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
