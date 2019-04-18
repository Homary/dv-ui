import DVColor from './src/color';

DVColor.install = function (Vue) {
   Vue.component(DVColor.name, DVColor)
}

export default DVColor;
