<template>
  <ul class="it_content_list_info">
    <li
      v-for="content in currentCityContent"
      :key="content.title"
    >
      <a
        :href="content.isFull ? 'javascript:;' : content.href"
        :target="content.isFull ? '_self' : '_blank'"
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
</template>

<script>
export default {
  name: "ItContentListMenu",
  props: {
    currentCityContent: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped></style>
