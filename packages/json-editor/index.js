import JsonEditor from './src/json-editor';
JsonEditor.install = function (Vue) {
    Vue.component(JsonEditor.name, JsonEditor);
}
export default JsonEditor;