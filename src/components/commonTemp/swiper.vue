<template>
  <div>
    <div class="swiper-container swiper-container-horizontal">
      <div
        class="swiper-wrapper"
        style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.pageInit();
  },
  methods: {
    pageInit() {
      this.$nextTick(() => {
        new Swiper(".swiper-container", {
          pagination: ".swiper-pagination",
          slidesPerView: 2,
          paginationClickable: true,
          freeMode: true,
          spaceBetween: 30
        });
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.swiper-container {
  margin: r(20) 0;
  margin-left: r(20);
  margin-right: r(10);
}
.swiper-slide {
  box-shadow: 5px 5px 5px 5px #f7dfef inset;
  border-radius: 8px;
  height: 6.5rem;
  width: r(150) !important;
  img {
    @include imgs;
  }
  p {
    height: r(40);
    padding: 0 r(20);
    .price {
      color: red;
    }
    .size {
      color: #999;
    }
  }
}
</style>