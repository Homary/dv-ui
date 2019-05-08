import DVCodeEditor from './src/code-editor';
DVCodeEditor.install = function (Vue) {
    Vue.component(DVCodeEditor.name, DVCodeEditor);
}
export default DVCodeEditor;