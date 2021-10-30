<template>
  <section class="it_content">
    <ItContentHeader />
    <div class="it_content_card">
      <ItContentTaiwan :active-taiwan-img="activeTaiwanImg" />
      <div class="it_content_list">
        <ul class="it_content_list_menu">
          <li
            v-for="(item, index) in listData"
            :key="item.city"
            :class="{ active: index == activeNumber }"
          >
            <div
              class="option"
              @click.self="
                ($event) => changeActiveNumberPhoneHandler(index, $event)
              "
              @mouseenter="($event) => changeActiveNumberHandler(index, $event)"
            >
              {{ item.city }}
              <img
                v-show="index == activeNumber"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABIUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////wV68vgAAAAXdFJOUwDS60T04LMEC/qgwxJgJRtSk4huL3s3IL2dFAAAAVJJREFUSMfFlVGugzAMBEsoAQKUACW5/01bNQEjU8uLVL23nyP/YMab2+1/Mtj6Et+yxOiu8C1zfGfGeU7t4icLyGmgSwNxwDilKdJAW2KcMlZp4h4wTnmYNGEeGKc872miGjFOCW2aKHqMU3ye6BqMH+zKy+eSSZyy5gkHcsqUJyaQU7JjcQU5SWYF+awq36anxzilF/TscW2fGP+FtkHQM6jaloKepa5tFLSNmraLoOfyB9rOID99zgRy3hj8YyTONSkajPM+NSPG91ihTa3SsrNwQrNyWoNw7oNSA5uRDuT8eroa4/ul54VXPcb5k8ivVeK8B0/N4pTGWYUWXJV29IL6XjmJrVQsyHeDjWC2wcyuRozz54EXrsRPneBBzvtrATk3eAI5r5Kuxjg3uOgxzl9NbnCjmd2kjbcB5Id/NX03WOLHrbffDZb4Ye/uGn/nBaMVRsH0/mQ3AAAAAElFTkSuQmCC"
                draggable="false"
                alt="arrow"
              >
            </div>
            <ul
              v-show="index == activeNumber"
              class="info"
            >
              <li
                v-for="content in item.cityContent"
                :key="content.title"
              >
                <a
                  :href="content.isFull ? 'javascript:;' : content.href"
                  :target="content.isFull ? '_self' :'_blank'"
                  :class="{ full: content.isFull }"
                >
                  <p>{{ content.title }}</p>
                  <button>
                    {{ content.isFull ? "名額已滿" : "立即申請" }}
                    <img
                      v-if="!content.isFull"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAAAyCAMAAAAA5ocEAAAAk1BMVEUAAAD//4b//5P/+4H/9YD/9ID/+IL//4P//4f/9YD/9YD/9YD/94H/9YD/94H/9YD/9YH/94H/9oH/9ID/9YD/9YD/9YD/9YD/9ID/9YD/9YD/9YD/9oH/9YD/+YH/9ID/9YD/9ID/9YH/9oH/9YD/9YD/9oH/9YD/9ID/9ID/9YD/9YD/9YD/9oH/9oD/9ID/9YCmpv7KAAAAMHRSTlMABwMV++wiDwv39OM7u0OKai0b8N/P6MXAr5tkNjMm2cqme1y1oVdP19NJk4JzVaiFQJgOAAACYUlEQVRYw5VXWZaCMBAMIPsyCiIugKKOjg46uf/pZuvw1V2+9G+9qhA6VemonyrOjhKrW4cyGDSlApXFuolErq8/PAn0Up32QDjRWh8ikat1GvBgVP+AVSsJt4n+rTpkubc/0GfZbv4HxoWgvNX/VXN7HglMOPZOU50E6XfC94y0OxA4uzDMNyM9fylty54b8O3FD1mWtuznjMDB5aU/J2nEfmcPFoE5WULacxogNmeohU/gQTDUSPiqV5bsYEmgZKgH4f5CWbK9G4GSHeeCNLHB74rWBJKhxINfdYpjg4XdDYFxgaWTTHFsZMetZCiqk1k6U7bs4ws7XmZgV5h9emHHK0nP7sqWfY+NoXg73o30VUE2F8cVtmMRo160FbBjv8J2zGKUuhO7YdjlfjIUlt4xIGaHB9FQlEDgDGC2k2M7dhXhD6U4NrLjAO3oNASPvKGQVwtNdWXvZAI/eTtN+YKOFvvJJiG29sF11VSs8BeBX1DYXwAL4+DZuCDFsXCSoRsxZ4Uf6FK7GOEO5dnagcIBODJVhzbbsMLj5BHcALBsHaEftSythZ8mEkI87sDOomzee3BE82w7qwoSTgVhsOwRRlwbm76jefXmodmtZPMtmYRBgt1C286qnoKz6tGsUYe2nVXBytgHCR8i286q0gi3nPDZ2CeyfTAob0mhmrFXCPLlgDqrwj0YX5y1lCTUWfTmq83wgoRzB3U2gpfek1u1AaFKDRAfwAbeoazYgMQVH+1ZBabTqAb3i3sGUT69b44CGNbgsefmJCxVkNLYKkgPIujk1FmpyiMAQwQ6o4x9A+oT0ianE5dkAAAAAElFTkSuQmCC"
                      draggable="false"
                      alt="arrow"
                    >
                  </button>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <ItContentHints />
  </section>
</template>

<script>
import { getPosition, checkIsPhone } from "@/assets/modules/common.js";
import ItContentTaiwan from "@/components/ItContentTaiwan";
import ItContentHints from "@/components/ItContentHints";
import ItContentHeader from "@/components/ItContentHeader";
export default {
  name: "ItContnet",
  components: {
    ItContentTaiwan,
    ItContentHints,
    ItContentHeader,
  },
  props: {
    listData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      activeNumber: 0,
    };
  },
  computed: {
    activeTaiwanImg() {
      if (!this.listData.length) return;
      let imgName = this.listData.filter(
        (item, i) => this.activeNumber === i
      )[0].cityImg;
      let imgSrc = require(`@/assets/images/${imgName}`);
      return imgSrc;
    },
  },
  methods: {
    changeActiveNumberHandler(index) {
      if (!checkIsPhone()) return;
      this.activeNumber = index;
    },
    changeActiveNumberPhoneHandler(index, $event) {
      if (checkIsPhone()) return;
      this.activeNumber = index;
      this.$nextTick(() => {
        window.scrollTo(0, getPosition($event.target).y);
      });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variable.scss";
@import "@/assets/scss/_extend.scss";
@import "@/assets/scss/_mixin.scss";
.it_content {
  background-image: url("../../src/assets/images/cardBg.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 30px 39px 10px;
}
.it_content_card {
  display: flex;
}

.it_content_list {
  flex: 1 1 0;
  position: relative;
}

.it_content_list_menu {
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: width 0.5s;
  width: 32%;
}
.it_content_list_menu > li + li {
  margin-top: 4px;
}
.it_content_list_menu > li {
  background-color: #f5fbff;
  &.active {
    .option {
      color: #fff;
    }
    background-color: $primary;
  }
}

.it_content_list_menu .info {
  @include psa(0, 0);
  width: 67%;
  height: 100%;
  padding: 20px;
  background-color: #f5fbff;
}

.it_content_list_menu .info li + li {
  border-top: 2px solid $hints;
}

.it_content_list_menu .info a {
  display: flex;
  justify-content: space-between;
  padding: 25px 0;
  p {
    @include font($b-font, 35px);
    padding-left: 20px;
    font-weight: 700;
    color: #0063b5;
    letter-spacing: 2.4px;
    pointer-events: none;
  }
  button {
    @include font($m-font, 55px);
    width: 200px;
    height: 55px;
    margin-right: 10px;
    color: #f5fbff;
    text-align: center;
    letter-spacing: 1.8px;
    pointer-events: none;
    background: linear-gradient(282deg, #fd8e25 1%, #fed230);
    border-radius: 0 20px 0 20px;
  }
  img {
    width: 29px;
  }
  &:hover {
    background: #c9d9ea;
  }
  &.full {
    cursor: initial;
    button {
      background: #b2b2b2;
      color: #000;
    }
  }
  &.full:hover {
    background: #c9d9ea;
    background-color: #f5fbff;
  }
}

.it_content_list_menu .option {
  @extend %flex-center;
  @include font(32px, 74px);
  position: relative;
  font-weight: 700;
  color: $hints;
  height: 100%;
  cursor: pointer;
  img {
    @include psa(50%, initial, initial, 75%);
    transform: translateY(-50%);
    width: 28px;
  }
}
</style>

<style lang="scss">
@import "@/assets/scss/_variable.scss";
@import "@/assets/scss/_extend.scss";
@import "@/assets/scss/_mixin.scss";
@include pad-media {
  .it_content {
    width: 80%;
    margin: 0 auto;
    background-position: 50%;
    padding: 30px 30px 83px;
  }
  .it_content_list_menu {
    width: 100%;
  }
  .it_content_list_menu .option {
    position: relative;
    @include font(26px, 60px);
    height: 60px;
    &::after {
      content: "";
      @include psa(28px, initail, initail, calc(50% + 65px));
      width: 0;
      height: 0;
      border-color: #5f5f5f transparent transparent;
      border-style: solid;
      border-width: 10px 6px 0;
    }
    img {
      display: none;
    }
  }
  .it_content_list_menu .active .option {
    &::after {
      border-color: #fff transparent transparent;
      transform: rotate(180deg);
    }
  }
  .it_content_list_menu .info {
    padding: 0 20px;
    position: static;
    width: 100%;
    height: auto;
  }
  .it_content_list_menu .info a {
    flex-direction: column;
    align-items: center;
    p {
      padding-left: 0;
      height: 35px;
    }
    button {
      @include font(20px, 40px);
      @include width(180px);
      height: 40px;
      margin-top: 20px;
      margin-right: 0;
    }
  }
}
@include phone-media {
  .it_content {
    @include width(90%);
  }
}
</style>
