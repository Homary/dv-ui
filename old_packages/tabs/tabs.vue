<template>
  <div class="dv-tabs">
    <ul class="dv-tabs-title">
      <li
        v-for="(tab, index) in tabList"
        v-bind="tab.dataAttrs"
        :key="index"
        :class="{'dv-tabs-title-active': isActive(index), 'disabled': tab.disabled}"
        @click="select(index)">
        {{ tab.title.name }}
        <i v-if="tab.title.icon" :class="[tab.title.icon, isActive(index) ? 'dv-tabs-title-iactive': '']"></i>
      </li>
    </ul>
    <div class="dv-tabs-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'dv-tabs',
    data() {
      return {
        tabList: [],
        activeTabIndex: 0
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.select(0);
        this.activeTabIndex = this.getInitialActiveTab();
        this.$root.$on('select-tab', index => this.select(index));
      });
    },
    methods: {
      isActive(index) {
        return this.activeTabIndex === index;
      },
      select(index) {
        const tab = this.tabList[index];
        if (!tab.isDisabled) {
          this.activeTabIndex = index;
        }
        this.$emit('changed', tab);
      },
      getInitialActiveTab() {
        const index = this.tabList.findIndex(tab => tab.active);
        return index === -1 ? 0 : index;
      }
    }
  }
</script>
<style lang='less' scoped>
@css-prefix: 'dv';
@tab-prefix: ~"@{css-prefix}tabs";
.@{tab-prefix} {
  width: 100%;
  height: 100%;
  font-size: 14px;
  color: #666;
  background: #f9f9f9;
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
    background: #f9f9f9;
    &-active {
        border-top: 2px solid rgba(0,186,255);
        background: #fde383;
    }
    &-iactive {
      color: rgba(0,186,255);
    }
    li {
        cursor: pointer;
        width: 50%;
        height: 50px;
        align-items: center;
        display: flex;
        justify-content: center;
        line-height: 50px;
        bottom: 2px solid rgba(39,52,62, 1);
    }
  }
  &-content {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>
