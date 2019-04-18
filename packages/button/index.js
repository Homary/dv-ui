import DVButton from './src/button';

DVButton.install = function (Vue) {
    Vue.component(DVButton.name, DVButton);
}

export default DVButton;