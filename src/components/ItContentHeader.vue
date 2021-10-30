<template>
  <div class="it_content_header">
    <div class="it_content_header_title">
      <img
        src="@/assets/images/orangeArrowLeft.png"
        alt="orangeArrowLeft"
        draggable="false"
      >
      <p>
        <span> 免學費！ </span> 25週變身「青年T大使」！<br>
        還能領 <span>10.9萬</span>實作獎勵金，立即申請GO
      </p>
      <img
        src="@/assets/images/orangeArrowRight.png"
        alt="orangeArrowRight"
        draggable="false"
      >
    </div>
  </div>
</template>
<script>
export default {
  name:"ItContentHeader"
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/_variable.scss";
@import "@/assets/scss/_extend.scss";
@import "@/assets/scss/_mixin.scss";
.it_content_header_title {
  @extend %flex-center;
  @include font($b-font, 42px);
  font-weight: 700;
  margin-bottom: 30px;
  text-align: center;
  letter-spacing: 2.4px;
  img {
    width: 48px;
    height: 81px;
  }
  > p {
    margin: 0 22px;
  }
  span {
    color: $primary;
  }
}
@include pad-media {
  .it_content_header_title {
    font-size: 26px;
    img {
      display: none;
    }
  }
}
</style>