<template>
   <div class="menutabs-container">
      <div class="menutabs-title">
          <ul>
          <li v-for="(item, index) in menu" @mouseover="mouseoverHandler($event, item, index)" @mouseout="mouseoutHandler($event, item, index)">
              <div>
                  <i :class="item.icon"></i>
                  <span>{{item.name}}</span>
              </div>
          </li>
      </ul>
      </div>
      <div class="menutabs-content" :style="contentStyle" @mouseover="contentMouseoverHandler" @mouseout="contentMouseout">
          <slot></slot>
          <div class="menutabs-list-type">
            <div v-for="(subItem, index) in subMenu" @mouseover="subMenuMouseover($event, subItem, index)">
              <span v-text="subItem.name"></span>
            </div>
          </div>
          <div class="menutabs-list">
              <div class="menutabs-list-item" v-for="(menuItem, subIdx) in menuList" @click="menuClickhandler($event, menuItem, subIdx)">
                <img :src="menuItem.icon" alt="">
                <span>{{menuItem.alias}}</span>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "menutabs",
  data: function() {
    return {
      contentDisplay: "none",
      isShowContent: "false",
      subMenu: [],
      menuList: [],
    };
  },
  props: ["menu"],
  computed: {
    contentStyle: function() {
      return {
        display: this.contentDisplay
      };
    }
  },
  methods: {
    mouseoverHandler: function($event, item, index) {
      this.contentDisplay = "flex";
      // this.$emit("tab", { item: item, index: index });
      this.subMenu = item.sub;
      //默认选中第一个子菜单
      this.subMenuMouseover(undefined, this.subMenu[0], 0);
    },
    mouseoutHandler: function($event) {
      if (this.isShowContent) {
        this.contentDisplay = "none";
      }
    },
    contentMouseoverHandler: function() {
      this.isShowContent = true;
    },
    contentMouseout: function() {
      this.isShowContent = false;
    },
    subMenuMouseover ($event, subItem, index) {
      this.menuList = subItem.sub;
    },
    menuClickhandler ($event, item, index) {
      this.$emit('menu-change', item, index,  (calllbackParams) => {});
    }
  },
  watch: {
    isShowContent: function(newVal, oldVal) {
      if (newVal == false) {
        this.contentDisplay = "none";
      } else {
        this.contentDisplay = "flex";
      }
    }
  }
};
</script>
<style lang="less" scoped>
.menutabs-container {
  position: relative;
  font-size: 14px;
  color: #ffffff;
  width: 340px;
  height: 100%;
  z-index: 3;
}
span {
  font-family: 微软雅黑;
  font-size: 14px;
  
}
.menutabs-title {
  display: block;
  // background-color: @primary-color;
  background-color:#329dba;
  position: relative;
  height: 100%;
  font-size: 14px;

  ul {
    display: flex;
  }
  ul li {
    position: relative;
    flex-direction: column;
    display: block;
    justify-content: space-between;
    margin-left: 40px;
    i {
      font-size: 1.2em;
    }
    span {
      text-align: right;
      width: 40px;
      font-size: 14px;
    }
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      height: 100%;
      //width: 100px;
      font-size: 20px;
      .icon {
        text-align: center;
        justify-content: flex-start;
        align-items: center;
      }
      >span {
        justify-content: flex-start;
        align-items: center;
        text-align: center;
      }
    }
  }
  ul li:nth-child(1) {
    margin-left: 0px;
  }
}
.menutabs-content {
  position: relative;
  background: rgba(32, 136, 166, 0.8);
  height: 300px;
  color: #ffffff;
  z-index: 2;
  overflow: auto;
  display: flex;


  .menutabs-content-panel {
    display: flex;
    margin-left: 5px;
    margin-right: 25px;
    flex-wrap: wrap;
    justify-content: flex-start;
    position: relative;
    width: 100%;
    height: 100%;
    padding-bottom: 25px;

    .menutabs-content-icon-wraper {
      width: 96px;
      height: 75px;
      margin-left: 10px;
      margin-top: 5px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      cursor: pointer;
      .dv-comp-img {
        width: 96px;
        height: 65px;
      }
      span {
        width: 100px;
        display: inline-block;
        height: 15px;
        text-align: center;
        line-height: 12px;
        font-size: 12px;
      }
    }
  }
  //子菜单标题
  .menutabs-list-type {
    width: 20%;
    height: 100%;
    border-right: 1px solid rgba(255, 255, 255, 0.8);

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 16px;
      margin-top: 15px;
    }
    span {
    }
  }
  //子菜单列表
  .menutabs-list {
    width: 80%;
    height: 100%;
    
    div {
      width: 96px;
      float: left;
      margin-left: 10px;
      margin-top: 10px;

      img {
        display: block;
      }
      span  {
        display: block;
        text-align: center;
        line-height: 14px;
        margin-top: 4px;
      }
    }

    .menutabs-list-item {
      cursor: pointer;
    }
  }
}
</style>
