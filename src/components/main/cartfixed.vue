<template>
  <div id="cartfixed" class="fixclear">
    <div>Hot Recommend</div>
    <div>热销新品推荐</div>
    <div class="promore">
      <p class="imgs">
        <img src="https://res.bestcake.com\m-images\cart\mw_firm_sq.jpg" alt />
      </p>
      <p>伴手礼系列-吉致生巧</p>
      <p>
        <span>168.00/1盒</span>
        <img src="https://res.bestcake.com\m-images\order\mw_firm_gwc.jpg" alt />
      </p>
    </div>
    <div class="promore second">
      <p class="imgs">
        <img src="https://res.bestcake.com\m-images\cart\mw_firm_sq.jpg" alt />
      </p>
      <p>伴手礼系列-吉致生巧</p>
      <p>
        <span>168.00/1盒</span>
        <img src="https://res.bestcake.com\m-images\order\mw_firm_gwc.jpg" alt />
      </p>
    </div>
    <div class="promore">
      <p class="imgs">
        <img src="https://res.bestcake.com\m-images\cart\mw_firm_sq.jpg" alt />
      </p>
      <p>伴手礼系列-吉致生巧</p>
      <p>
        <span>168.00/1盒</span>
        <img src="https://res.bestcake.com\m-images\order\mw_firm_gwc.jpg" alt />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    //  this.$store.commit("add")
  },
  mounted() {
    // this.$eventHub.$on("test", res => {
    //   alert(res);
    // });
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#cartfixed {
  background-color: #e3e3e3e3;
  padding-top: r(300);
  width: r(375);
  padding: 0 r(10);
  box-sizing: border-box;
  div {
    width: r(200);
    margin: 0 auto;
    text-align: center;
    height: r(40);
    line-height: r(40);
  }
  div:nth-child(1) {
    padding-top: r(150);
    border-bottom: 2px solid #000;
    font-weight: bold;
    font-size: r(20);
  }
  .second{
    margin-left: r(30);
  }
  .promore {
    width: r(150);
    height: r(278);
    float: left;
    p {
      text-align: left;
    }
    .imgs {
      width: r(165);
      height: r(165);
      img {
        @include imgs;
      }
    }
    p:nth-child(3) {
      padding-right: r(20);
      box-sizing: border-box;
      img {
        width: r(23);
        float: right;
      }
    }
  }
}
</style>
