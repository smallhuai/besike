<template>
<!-- 此页为商品分类页 -->
  <div id="goodlistDetail">
    <!-- 顶部导航开始 -->
    <div class="topList fixclear">
      <div
        @click="sel(index)"
        v-for="(item,index) in nameList "
        :key="index"
        :class="{'active':clinx==index}"
      >{{item}}</div>
    </div>
    <!-- 产品展示部分开始 -->
    <goods v-if="dataList.length" :dataList="dataList"></goods>
  </div>
</template>

<script>
import goods from "@/components/main/goodlist";
export default {
  data() {
    return {
      goodlist: [
        { name: "经典", mark: "KSK", list: [] },
        { name: "女神", mark: "NS", list: [] },
        { name: "拌手礼", mark: "JZ", list: [] },
        { name: "乳品", mark: "RP", list: [] }
      ],
      nameList: ["自营", "贝式严选"],
      clinx: 0,
      dataList: [],
    };
  },
  mounted() {
    this.pageinit();
  },
  created() {},
  methods: {
    pageinit() {
      //图片的路径 SupplyNo为 NS 女神系列 : ns.jpg  SupplyNo KSK的为经典系列 :jd.png  SupplyNo RP 乳品系列 :rp.jp  SupplyNo JZ的为伴手礼系列   jz.png
      this._getgooddata(res => {
        this.goodlist.map((item, index) => {
          res.map((item1, index) => {
            if (item1.SupplyNo.indexOf(item.mark) != -1) {
              item1.ImgUrl = this.$global.geturl(item1);
              item.list.push(item1);
            }
          });
        });
      });
      this.sel(0)
    },
    // 获取接口数据
    _getgooddata(callback) {
      this.$apis.GetCakeByName().then(res => {
        callback(res.data.Tag.cakelist);
      });
    },
    // 点击获取分类导航的数据
    sel(index) {
      this.clinx = index;
   
      if (index == 0) {
        this.dataList = this.goodlist.slice(0, 3);
               
      } else if (index == 1) {
        this.dataList = this.goodlist.slice(3);
      }
    }
  },
  props: [""],
  components: {
    goods
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// 顶部导航开始
.topList {
  font-size: r(18);
  overflow: hidden;
  div {
    height: r(48);
    line-height: r(48);
    width: r(187);
    float: left;
    text-align: center;
  }
}
// 动态tab切换的类名
.active {
  border-bottom: 2px solid #1db0b8;
  color: #1db0b8;
}
// 第二个导航开始
.navlist {
  width: r(343);
  height: r(30);
  color: #333;
  margin: 0 auto;
  ul {
    width: r(250);
    margin: 0 auto;
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
</style>
