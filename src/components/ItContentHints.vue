<template>
  <div class="it_content_list_hints">
    ※歡迎依照您的所在地域發展興趣，申請加入各區/類青年T大使！ <br>
    ※因申請人數眾多，未通過者恕不通知。
  </div>
</template>
<script>
export default {
  name: "ItContentHints",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variable.scss";
@import "@/assets/scss/_extend.scss";
@import "@/assets/scss/_mixin.scss";
.it_content_list_hints {
  @include font(20px, 24px);
  margin-top: 5px;
  margin-left: 297.2px;
  color: $hints;
}
@include pad-media {
  .it_content_list_hints {
    margin-left: 0;
    margin-bottom: 10px;
  }
}
</style>