<template>
    <article>
        <NCard>
            <img class="block object-cover rounded-lg aspect-video mb-4" :src="imgUrl" alt="robot image">
            <div class="flex justify-between mb-4">
                <h3 class="text-gray-800 font-semibold text-xl">
                    {{ props.name }}
                    <span class="text-gray-400 font-light" v-if="props.id">#{{ props.id }}</span>
                </h3>
                <RouterLink v-if="props.id" :to="{name: 'show-roclean', params: { id: props.id }}">
                    <NButton>Open</NButton>
                </RouterLink>
            </div>
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
import { NButton, NCard, NProgress, NSpace } from 'naive-ui'
import { computed } from 'vue'


interface Props {
    id?: string
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