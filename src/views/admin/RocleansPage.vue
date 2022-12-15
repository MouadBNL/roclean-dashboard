<template>
    <div class="container mx-auto">
        <h2 class="text-2xl font-bold mb-8">Rocleans</h2>
        <div class="grid grid-cols-4 gap-4 mb-12">
            <RobotCard v-for="(r, i) in rocleans" :key="i" :name="r.name" :battery="r.battery" :id="r.id"
                :capacity="r.capacity" :running="r.running" />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { NButton, NCard, NProgress, NSpace } from 'naive-ui';
import RobotCard from '../../components/RobotCard.vue';
import { RocleanProps, rocleans } from '../../data/rocleans'
import { computed } from 'vue'



const shownRocleans = computed(() => rocleans.value.slice(0, 4))
</script>
<style>
.mapouter {
    position: relative;
    text-align: right;
    width: 100%;
    height: 400px;
}

.gmap_canvas {
    overflow: hidden;
    background: none !important;
    width: 100%;
    height: 500px;
}

.gmap_iframe {
    height: 400px !important;
}
</style>