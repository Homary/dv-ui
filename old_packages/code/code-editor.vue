<template>
    <div class="code-editor">
            <!-- 官方文档中使用 id，这里禁止使用，在后期打包后容易出现问题，使用 ref 或者 DOM 就行 -->
      <div class="ace-editor" ref="ace"></div>
    </div>
</template>
<script>
import ace from "ace-builds";
// import "ace-builds/webpack-resolver"; // 在 webpack 环境中使用必须要导入
import "ace-builds/src-noconflict/theme-monokai"; // 默认设置的主题
import "ace-builds/src-noconflict/mode-javascript"; // 默认设置的语言模式

export default {
  name: "dv-code-editor",
  data() {
    return {
      code: null,
      aceEditor: null,
      themePath: "ace/theme/monokai", // 不导入 webpack-resolver，该模块路径会报错
      modePath: "ace/mode/javascript" // 同上
    };
  },
  props: {
    value: {
      type: [Object, String, Number, Array]
    }
  },
  watch: {
    value: function (newVal, oldVal) {
      // this.aceEditor.getSession().set
      debugger;
      this.code = JSON.stringify(newVal, ' ', ' ', 2);
        //  this.aceEditor.getSession().setValue(JSON.stringify(newVal));
    }
  },
  methods: {
    change () {
      try {
           this.$emit('input', JSON.parse(this.aceEditor.getSession().getValue()))
      } catch (error) {
        console.log('[Error] parse code error', error);
      }
    }
  },
  mounted() {
    this.code = JSON.stringify(this.value, ' ', ' ', 2);
    this.aceEditor = ace.edit(this.$refs.ace, {
      // maxLines: Infinity, // 最大行数，超过会自动出现滚动条
      minLines: 10, // 最小行数，还未到最大行数时，编辑器会自动伸缩大小
      fontSize: 14, // 编辑器内字体大小
      value: this.code ? this.code : '',
      theme: this.themePath, // 默认设置的主题
      mode: this.modePath, // 默认设置的语言模式
      tabSize: 4 // 制表符设置为 4 个空格大小
    });

      // 激活自动提示
      this.aceEditor.setOptions({
          enableSnippets: true,
          enableLiveAutocompletion: true,
          enableBasicAutocompletion: true
        });
    // 绑定一个 change 事件，调用 change 方法
    this.aceEditor.getSession().on('change', this.change)


    // this.aceEditor.setValue(this.value);
  }
};
</script>
<style lang="less" scoped>
.code-editor {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 10px;

  .ace-editor {
    position: absolute;
    left: 0;
    right: 0;
    padding: 10px;
    bottom: 0;
    top: 0;
    padding: 10px;
  }
}
</style>
