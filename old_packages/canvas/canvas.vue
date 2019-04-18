<template>
    <div class="dv-virtual-canvas">
        <div class="dv-virtual-canvas-wrapper">
            <dv-scroll :pattern="'center'" :horizontal="horizontal" :vertical="vertical" :vWidth="width" :vHeight="height"   @callbacks="scrollCallback">
                <div ref="canvas-content" class="dv-virtual-canvas-content" :style="translateScale">
                    <slot></slot>
                </div>
            </dv-scroll>
        </div>
        <div class="dv-virtual-canvas-bar">
            <div class="dv-virtual-canvas-bar-wrapper">
                <dv-slider-bar v-model="scale"></dv-slider-bar>
            </div>
        </div>
    </div>
</template>
<script>
import dvScroll from '../scroll/scroll.vue';
export default {
    name: 'dv-virtual-canvas',
    data () {
        return {
            horizontal: true,
            vertical: true,
            scale: 100,
            width: this.cWidth,
            height: this.cHeight
        };
    },
    props: {
        cWidth: {
            type: Number,
            default: 800
        },
        cHeight: {
            type: Number,
            default: 600
        }
    },
    computed: {
        translateScale: function () {
            return {
                width: this.width + 'px',
                height: this.height + 'px',
                'transform': 'scale('+this.scale / 100 +', '+this.scale / 100 +')'
            };
        }
    },
    watch: {
        scale (newVal, oldVal) {
            console.log(newVal, oldVal)
        }
    },
    methods: {
        scrollCallback () {

        }
    },
    components: {
        dvScroll
    }
}
</script>

<style lang="less" scoped>
    .dv-virtual-canvas {
        width: 100%;
        height: 100%;
        position: relative;
        border: 1px solid red;
        // background: #f9f9f9;

        .dv-virtual-canvas-bar {
            width: 100%;
            height: 45px;
            bottom: 0;
            position: absolute;

            &-wrapper {
                width: 200px;
                height: 100%;
                position: absolute;
                right: 0;
            }
        }
        .dv-virtual-canvas-wrapper {
            border: 1px solid blue;
            width: 100%;
            top: 0;
            bottom: 40px;
                overflow: hidden;
                position: absolute;

            .dv-virtual-canvas-content {
                position: relative;
                border: 1px solid green;
            }
        }
    }
</style>
