<template>
  <header class="it_header">
    <img
      class="d-block"
      src="@/assets/images/top.png"
      alt="青年Ｔ大使 立即申請"
      draggable="false"
    >
    <p class="it_header_title">
      依據您的所在地與發展興趣透過104線上應徵，履歷書審通過者一周內將有專人通知。
    </p>
  </header>
</template>

<script>
export default {
  name:"Header"
}
</script>
<style lang="scss">
@import "@/assets/scss/_variable.scss";
@import "@/assets/scss/_extend.scss";
@import "@/assets/scss/_mixin.scss";
.it_header {
  @extend %flex-center-column;
}
.it_header img {
  @include width(100%, 540px);
  padding: 50px 0;
}

.it_header_title {
  @include font($m-font, 35px);
  text-align: center;
  color: $white;
  padding-bottom: 60px;
  letter-spacing: 1.8px;
  text-shadow: 0 3px 6px rgba($color: #000000, $alpha: 0.3);
}

@include pad-media {
  .it_header_title {
    @include width(80%);
  }
}

@include phone-media {
  .it_header_title {
    @include width(90%);
  }
  .it_header_title > p {
    margin: 0;
  }
}
</style>