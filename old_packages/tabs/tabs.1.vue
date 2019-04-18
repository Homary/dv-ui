<template>
<div class="dv-tab">
      <div class="dv-tab-title">
          <div :style="attrStyle" class="dv-tab-title-style" @click="clickHandler('config', $event)">
            <div>组件属性{{current}}</div>
          </div>
          <div :style="dataStyle" class="dv-tab-title-data" @click="clickHandler('data', $event)">
            <div>数据</div>
          </div>
      </div>
      <div class="dv-tab-body">
            <div  class="dv-tab-body-style">
                <slot v-if="current == 'config'" name="config"></slot>
            </div>
            <div  class="dv-tab-body-data">
                <slot v-if="current == 'data'" name="data"></slot>
            </div>
      </div>
</div>
</template>

<script>
    export default {
        name: 'dvTabs',
        data: function () {
            return {
                current: 'config'
            };
        },
        props: [],
        computed: {
            attrStyle: function () {
                return {
                    'border-top': this.current == 'config' ? '2px solid #00baff': ''
                }
            },
            dataStyle: function () {
                return {
                    'border-top': this.current == 'data' ? '2px solid #00baff': ''
                }
            }
        },
        methods: {
            clickHandler: function (type, $event) {
                this.current = type;
            }
        },
        mounted: function () {},
    }
</script>

<style lang='less' scoped>
@import "../style/custom.less";
@tab-prefix: ~"@{css-prefix}tab";
.@{tab-prefix} {
  width: 100%;
  height: 100%;
  font-size: 14px;
  color: #FFFFFF;
  background: #f9f9f9;
  //border: 1px solid deeppink;
  position: relative;
  display: flex;
  flex-direction: column;
  &-title {
    display: flex;
    height: 50px;
    width: 100%;
    justify-content: flex-start;
    text-align: center;
    align-items: center;
    background: rgba(39,52,62, 1);

    &-style {
      cursor: pointer;
      width: 50%;
      height: 50px;
      align-items: center;
      display: flex;
      justify-content: center;
      line-height: 50px;
    }

    &-data {
      cursor: pointer;
      display: flex;
      width: 50%;
      height: 50px;
      justify-content: center;
      align-items: center;
      line-height: 50px;
    }
  }
  &-body {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;

    &-style {
      width: 100%;
      height: 100%;
      position: relative;
    }
    &-data {
      width: 100%;
      height: 100%;
      position: relative;
    }
  }
}
</style>
