<template>
<pre v-highlightjs>
    <code class="css">
        {
          border: 1px solid #fff;
        }
    </code>
</pre>
</template>
<script>
import VueHighlightJS from 'vue-highlightjs';
import Vue from 'vue';
 
Vue.use(VueHighlightJS);

export default {
    name: 'dv-code'
}
</script>
<style>
</style>