<template>
  <div class="tags">
    <span
      v-for="(item, index) in tags"
      v-show="!item.pages || (item.pages && item.pages.length > 0)"
      :key="index"
      :class="{'active': item.name == currentTag}"
      :style="{ 'backgroundColor': getOneColor(), 'font-size': getSize(item) }"
      @click="tagClick(item)">{{item.name}}</span>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue-demi'
import { getOneColor } from '@theme/helpers/other'
import { useInstance } from '@theme/helpers/composable'

export default defineComponent({
  props: {
    currentTag: {
      type: String,
      default: ''
    }
  },
  setup (props, ctx) {
    const instance = useInstance()
    const tags = computed(() => {
      return  [{ name: instance.$recoLocales.all, path: '/tag/' }, ...instance.$tagesList]
      // sort taglist
      // let head = list.slice(0,1)
      // let tail = list.slice(1, list.length)
      // tail.sort(function(a, b) {
      //   return b.pages.length - a.pages.length;
      // })
      // return head.concat(tail);
    })

    const tagClick = tag => {
      ctx.emit('getCurrentTag', tag)
    }
    function getSize(item) {
      if(item.name == "All" || !item.pages)
        return 21;
      return (item.pages.length * 2 + 10).toString() + "px";
    }

    return { tags, tagClick, getOneColor, getSize }
  }
})
</script>

<style scoped>
.tags::-webkit-scrollbar{
  width: 0 !important;
}
.tags{
  overflow: auto;
}
</style>
<style lang="stylus" scoped>
.tags
  margin 30px 0
  max-height: 360px
  span
    vertical-align: middle;
    margin: 4px 4px 10px;
    padding: 4px 8px;
    display: inline-block;
    cursor: pointer;
    border-radius: $borderRadius
    background: #fff;
    color: #fff;
    font-size: 13px;
    box-shadow var(--box-shadow)
    transition: all .5s
    &:hover
      transform scale(1.1)
      box-shadow: 2px 0.5px 3px 1px #808080;
    &.active
      transform scale(1.2)
      margin: 4px 12px 10px;
      box-shadow: 2px 0.5px 3px 1px #808080;
</style>
