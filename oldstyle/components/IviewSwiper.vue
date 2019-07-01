<style lang="scss">
  .swiperRoot {
    position: fixed !important;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    overflow: auto;
    background-color: #000;
    z-index: 9 !important;
    transition: transform .9s;
    transform: scale(1);
    .swiperSlide {
      display: flex !important;
      justify-content: center;
      align-items: center;
    }
    .swiper-pagination-bullets {
      top: 30upx;
      bottom: initial !important;
      .swiper-pagination-bullet {
        background-color: #aaa;
      }
      .swiper-pagination-bullet.swiper-pagination-bullet-active {
        background-color: #fff;
      }
    }
  }

</style>