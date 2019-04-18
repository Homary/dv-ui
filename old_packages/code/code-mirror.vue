<template>
    <div class="code-editor">
            <!-- 官方文档中使用 id，这里禁止使用，在后期打包后容易出现问题，使用 ref 或者 DOM 就行 -->
      <div class="ace-editor" ref="ace"></div>
    </div>
</template>
<script>
import CodeMirror from 'codemirror';

export default {
  name: "dv-code-editor",
  data() {
    return {
      code: null,
      codeMirror: null,
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
    //   this.code = JSON.stringify(newVal, ' ', ' ', 2);
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
    // this.code = JSON.stringify(this.value, ' ', ' ', 2);

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
