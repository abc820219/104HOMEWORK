<template>
  <div id="app">
    <Header />
    <ItContent
      :list-data="listData"
      class="bounceIn"
    />
  </div>
</template>

<script>
import Header from "@/components/Header";
import ItContent from "@/components/ItContent";
export default {
  name: "App",
  components: { Header, ItContent },
  data() {
    return {
      listData: [
        {
          city: " 苗栗縣 ",
          cityImg: "taiwan-0.png",
          cityContent: [
            {
              title: "智慧製造類",
              isFull: false,
              href: "https://www.104.com.tw/job/7draw",
            },
            {
              title: "AI導入類",
              isFull: false,
              href: "https://www.104.com.tw/job/7draw",
            },
            {
              title: "數位行銷類",
              isFull: true,
              href: "https://www.104.com.tw/job/7draw",
            },
            {
              title: "智慧服務類",
              isFull: true,
              href: "https://www.104.com.tw/job/7draw",
            },
          ],
        },
        {
          city: " 台中市 ",
          cityImg: "taiwan-1.png",
          cityContent: [
            {
              title: "智慧製造類",
              isFull: true,
              href: "https://www.104.com.tw/job/7draw",
            },
            {
              title: "AI導入類",
              isFull: true,
              href: "https://www.104.com.tw/job/7draw",
            },
            {
              title: "數位行銷類",
              isFull: true,
              href: "https://www.104.com.tw/job/7draw",
            },
            {
              title: "智慧服務類",
              isFull: false,
              href: "https://www.104.com.tw/job/7draw",
            },
          ],
        },
        {
          city: " 彰化市 ",
          cityImg: "taiwan-2.png",
          cityContent: [
            {
              title: "智慧製造類",
              isFull: true,
              href: "https://www.104.com.tw/job/7draw",
            },
            {
              title: "AI導入類",
              isFull: false,
              href: "https://www.104.com.tw/job/7draw",
            },
            {
              title: "數位行銷類",
              isFull: false,
              href: "https://www.104.com.tw/job/7draw",
            },
            {
              title: "智慧服務類",
              isFull: true,
              href: "https://www.104.com.tw/job/7draw",
            },
          ],
        },
        {
          city: " 台南市 ",
          cityImg: "taiwan-3.png",
          cityContent: [
            {
              title: "智慧製造類",
              isFull: true,
              href: "https://www.104.com.tw/job/7draw",
            },
            {
              title: "AI導入類",
              isFull: true,
              href: "https://www.104.com.tw/job/7draw",
            },
            {
              title: "數位行銷類",
              isFull: false,
              href: "https://www.104.com.tw/job/7draw",
            },
            {
              title: "智慧服務類",
              isFull: false,
              href: "https://www.104.com.tw/job/7draw",
            },
          ],
        },
        {
          city: " 高雄市 ",
          cityImg: "taiwan-4.png",
          cityContent: [
            {
              title: "智慧製造類",
              isFull: true,
              href: "https://www.104.com.tw/job/7draw",
            },
            {
              title: "AI導入類",
              isFull: true,
              href: "https://www.104.com.tw/job/7draw",
            },
            {
              title: "數位行銷類",
              isFull: false,
              href: "https://www.104.com.tw/job/7draw",
            },
            {
              title: "智慧服務類",
              isFull: false,
              href: "https://www.104.com.tw/job/7draw",
            },
          ],
        },
        {
          city: " 台東縣 ",
          cityImg: "taiwan-5.png",
          cityContent: [
            {
              title: "智慧製造類",
              isFull: true,
              href: "https://www.104.com.tw/job/7draw",
            },
            {
              title: "AI導入類",
              isFull: true,
              href: "https://www.104.com.tw/job/7draw",
            },
            {
              title: "數位行銷類",
              isFull: false,
              href: "https://www.104.com.tw/job/7draw",
            },
            {
              title: "智慧服務類",
              isFull: true,
              href: "https://www.104.com.tw/job/7draw",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variable.scss";
@import "@/assets/scss/_extend.scss";
@import "@/assets/scss/_mixin.scss";
[v-cloak] {
  display: none;
}
body {
  background-image: url("../src/assets/images/joinNowBg.png");
  background-size: cover;
  background-repeat: no-repeat;
}
#app {
  @include width(100%, 1200px);
  margin: 0 auto;
  padding-bottom: 80px;
}
</style>
