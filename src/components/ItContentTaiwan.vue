<template>
  <div class="it_content_card_taiwan">
    <img
      :src="activeTaiwanImg"
      alt="taiwan"
      class="taiwan"
      draggable="false"
    >
    <img
      src="@/assets/images/taiwan_lb.png"
      alt="taiwan_lb"
      class="taiwan_corner lb"
      draggable="false"
    >
    <img
      src="@/assets/images/taiwan_rb.png"
      alt="taiwan_rb"
      class="taiwan_corner rb"
      draggable="false"
    >
    <img
      src="@/assets/images/taiwan_lt.png"
      alt="taiwan_lt"
      class="taiwan_corner lt"
      draggable="false"
    >
    <img
      src="@/assets/images/taiwan_rt.png"
      alt="taiwan_rt"
      class="taiwan_corner rt"
      draggable="false"
    >
  </div>
</template>

<script>
export default {
  name: "ItContentTaiwan",
  props: {
    activeTaiwanImg: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variable.scss";
@import "@/assets/scss/_extend.scss";
@import "@/assets/scss/_mixin.scss";
.it_content_card_taiwan {
  position: relative;
  width: 282.2px;
  margin-right: 15px;
  padding: 60px 38px;
  background-color: $taiwan;
  .taiwan {
    width: 206.2px;
  }
  .taiwan_corner {
    position: absolute;
    width: 28.3px;
    &.lb {
      left: 12px;
      bottom: 12px;
    }
    &.rb {
      right: 12px;
      bottom: 12px;
    }
    &.lt {
      top: 12px;
      left: 12px;
    }
    &.rt {
      top: 12px;
      right: 12px;
    }
  }
}
@include pad-media {
  .it_content_card_taiwan {
    display: none;
  }
}
</style>