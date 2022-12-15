<template>
    <article>
        <NCard>
            <img class="block rounded-lg aspect-video mb-4" :src="imgUrl" alt="robot image">
            <h3 class="text-gray-800 font-semibold text-xl mb-4">{{ props.name }}</h3>
            <div class="text-gray-600">
                <p class="mb-2">Running: {{ props.running }}</p>
                <p>
                    <span>Battery</span>
                    <NProgress :percentage="Math.floor(props.battery)" :status="batteryState">
                        <span class="block w-7">{{ Math.floor(props.battery) }}%</span>
                    </NProgress>
                </p>
                <p>
                    <span>Capacity</span>
                    <NProgress :percentage="Math.floor(props.capacity)" :status="capacityState">
                        <span class="block w-7">{{ Math.floor(props.capacity) }}%</span>
                    </NProgress>
                </p>
            </div>
        </NCard>
    </article>
</template>

<script lang="ts" setup>
import { NCard, NProgress, NSpace } from 'naive-ui'
import { computed } from 'vue'
import { RocleanProps } from '../data/rocleans'

interface Props {
    name: string,
    running: string,
    capacity: number,
    battery: number
}


const batteryState = computed(() => {
    if (props.battery > 66) {
        return 'success'
    } else if (props.battery > 33) {
        return 'warning'
    } else {
        return 'error'
    }
})

const capacityState = computed(() => {
    if (props.capacity > 85) {
        return 'error'
    } else if (props.capacity > 50) {
        return 'warning'
    } else {
        return 'success'
    }
})

const props = withDefaults(defineProps<Props>(), {
    name: 'Roclean XYZ',
    capacity: 60,
    battery: 80,
    running: "1h35min"
})


const imgUrl = computed(() => {
    return `https://dummyimage.com/600x400/259e74/ffffff&text=${props.name}`
})

</script>