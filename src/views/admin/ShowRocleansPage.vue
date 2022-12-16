<template>
    <div class="container mx-auto">
        <div class="flex items-end justify-between mb-8">
            <h2 class="text-2xl font-bold">
                {{ roclean.name }}
                <span class="text-gray-400 font-light" v-if="roclean.id">#{{ roclean.id }}</span>
            </h2>
            <p>Launched {{ roclean.running }} ago</p>
        </div>

        <NCard class="mb-8" title="States">
            <div class="grid grid-cols-2 gap-8">
                <p>
                    <span class="text-xl font-thin block mb-4">Battery</span>
                    <NProgress :percentage="Math.floor(roclean.battery)" :status="batteryState" :height="24">
                        <span class="block w-7">{{ Math.floor(roclean.battery) }}%</span>
                    </NProgress>
                </p>
                <p>
                    <span class="text-xl font-thin block mb-4">Capacity</span>
                    <NProgress :percentage="Math.floor(roclean.capacity)" :status="capacityState" :height="24">
                        <span class="block w-7">{{ Math.floor(roclean.capacity) }}%</span>
                    </NProgress>
                </p>
            </div>
        </NCard>

        <div class="mb-12">
            <div class="mapouter rounded-lg overflow-hidden shadow">
                <div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no"
                        marginheight="0" marginwidth="0"
                        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Ibn to fail&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>

            </div>
        </div>

        <NCard class="mb-12" :title="`Overview | ${stats?.total}`">
            <div class="grid grid-cols-6">
                <div class="flex items-center justify-center">
                    <div>
                        <NProgress type="circle" color="#259E73" rail-color="#259E7322"
                            :percentage="stats.percentages.glass as number">
                            <svg class="h-12" viewBox="0 0 15 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12.5561 0C13.4304 0 14.1625 0.675 14.2362 1.54512L14.9736 10.4256C15.2896 14.2225 12.7352 17.5553 9.18538 18.3674V23.625H11.7134C12.6457 23.625 13.3988 24.3791 13.3988 25.3125C13.3988 26.2459 12.6457 27 11.7134 27H7.5H3.28656C2.35434 27 1.60119 26.2459 1.60119 25.3125C1.60119 24.3791 2.35434 23.625 3.28656 23.625H5.81462V18.3727C2.2648 17.5605 -0.289593 14.2277 0.0264149 10.4309L0.763766 1.55039C0.837502 0.675 1.56959 0 2.44387 0H12.5561ZM11.6134 10.7104L11.0077 3.375H3.99231L3.38136 10.7104C3.18123 13.1203 5.08254 15.1875 7.5 15.1875C9.91746 15.1875 11.8188 13.1203 11.6134 10.7104Z"
                                    fill="#259E73" />
                            </svg>
                        </NProgress>
                        <h4 class="text-lg font-bold text-center text-gray-600">Glass</h4>
                        <h5 class="text-sm font-normal text-gray-500 text-center">{{ stats.percentages.glass }}%</h5>
                    </div>
                </div>
                <div class="flex items-center justify-center">
                    <div>
                        <NProgress :height="2" color="#259E73" rail-color="#259E7322" type="circle"
                            :percentage="stats.percentages.metal as number">
                            <svg class="h-12" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M25.9279 9.11272C26.1003 9.58859 25.9549 10.1192 25.5831 10.4583L23.2502 12.6134C23.3095 13.0674 23.3418 13.5323 23.3418 14.0027C23.3418 14.4731 23.3095 14.9381 23.2502 15.3921L25.5831 17.5472C25.9549 17.8863 26.1003 18.4169 25.9279 18.8928C25.6909 19.5437 25.4053 20.1672 25.0767 20.7689L24.8234 21.212C24.4678 21.8136 24.0691 22.3825 23.6327 22.9185C23.3149 23.3124 22.7869 23.4436 22.3127 23.2905L19.3118 22.3223C18.5898 22.8857 17.7924 23.3561 16.9411 23.7117L16.2677 26.8349C16.1599 27.3327 15.7828 27.7265 15.2871 27.8086C14.5436 27.9344 13.7785 28 12.9973 28C12.2161 28 11.451 27.9344 10.7075 27.8086C10.2118 27.7265 9.83469 27.3327 9.72694 26.8349L9.05347 23.7117C8.2022 23.3561 7.40481 22.8857 6.68285 22.3223L3.68726 23.296C3.21314 23.4491 2.68514 23.3124 2.36726 22.924C1.93085 22.388 1.53216 21.8191 1.17657 21.2174L0.923341 20.7744C0.594688 20.1727 0.309136 19.5491 0.0720751 18.8982C-0.100333 18.4223 0.0451363 17.8918 0.416892 17.5526L2.74979 15.3975C2.69053 14.9381 2.6582 14.4731 2.6582 14.0027C2.6582 13.5323 2.69053 13.0674 2.74979 12.6134L0.416892 10.4583C0.0451363 10.1192 -0.100333 9.58859 0.0720751 9.11272C0.309136 8.46181 0.594688 7.83825 0.923341 7.23657L1.17657 6.79351C1.53216 6.19183 1.93085 5.62297 2.36726 5.08693C2.68514 4.6931 3.21314 4.56183 3.68726 4.71498L6.68824 5.68314C7.4102 5.11975 8.20759 4.64935 9.05886 4.29381L9.73233 1.17054C9.84008 0.672788 10.2172 0.278961 10.7129 0.196913C11.4564 0.0656378 12.2215 0 13.0027 0C13.7839 0 14.549 0.0656378 15.2925 0.191444C15.7882 0.273491 16.1653 0.667318 16.2731 1.16507L16.9465 4.28834C17.7978 4.64388 18.5952 5.11428 19.3171 5.67767L22.3181 4.70951C22.7923 4.55636 23.3203 4.6931 23.6381 5.08146C24.0745 5.6175 24.4732 6.18636 24.8288 6.78804L25.0821 7.2311C25.4107 7.83278 25.6963 8.45634 25.9333 9.10725L25.9279 9.11272ZM13.0027 18.3786C15.3841 18.3786 17.3129 16.4204 17.3129 14.0027C17.3129 11.5851 15.3841 9.62688 13.0027 9.62688C10.6213 9.62688 8.69249 11.5851 8.69249 14.0027C8.69249 16.4204 10.6213 18.3786 13.0027 18.3786Z"
                                    fill="#259E73" />
                            </svg>
                        </NProgress>
                        <h4 class="text-lg font-bold text-center text-gray-600">Metal</h4>
                        <h5 class="text-sm font-normal text-gray-500 text-center">{{ stats.percentages.metal }}%</h5>
                    </div>
                </div>
                <div class="flex items-center justify-center">
                    <div>
                        <NProgress type="circle" color="#259E73" rail-color="#259E7322"
                            :percentage="stats.percentages.paper as number">
                            <svg class="h-12" viewBox="0 0 27 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0 2.25V4.5C0 5.32969 0.670312 6 1.5 6H2.25H4.5V2.25C4.5 1.00781 3.49219 0 2.25 0C1.00781 0 0 1.00781 0 2.25ZM5.25 0C5.71875 0.628125 6 1.40625 6 2.25V16.5C6 18.1547 7.34531 19.5 9 19.5C10.6547 19.5 12 18.1547 12 16.5V16.2516C12 14.7328 13.2328 13.5 14.7516 13.5H22.5V4.5C22.5 2.01562 20.4844 0 18 0H5.25ZM21.75 21C24.6516 21 27 18.6516 27 15.75C27 15.3375 26.6625 15 26.25 15H14.7516C14.0625 15 13.5 15.5578 13.5 16.2516V16.5C13.5 18.9844 11.4844 21 9 21H17.25H21.75Z"
                                    fill="#259E73" />
                            </svg>

                        </NProgress>
                        <h4 class="text-lg font-bold text-center text-gray-600">Paper</h4>
                        <h5 class="text-sm font-normal text-gray-500 text-center">{{ stats.percentages.paper }}%</h5>
                    </div>
                </div>
                <div class="flex items-center justify-center">
                    <div>
                        <NProgress type="circle" color="#259E73" rail-color="#259E7322"
                            :percentage="(stats.percentages.plastic as number)">
                            <svg class="h-12" viewBox="0 0 14 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.8125 0H9.1875C9.91484 0 10.5 0.585156 10.5 1.3125V3.5H3.5V1.3125C3.5 0.585156 4.08516 0 4.8125 0ZM0 8.29609C0 7.44297 0.492188 6.66641 1.26875 6.3L2.60312 5.67656C3.20469 5.39766 3.86094 5.25 4.52266 5.25H9.47734C10.1391 5.25 10.7953 5.39766 11.3969 5.67656L12.7312 6.3C13.5078 6.66094 14 7.4375 14 8.29609C14 9.08359 13.5898 9.77266 12.9664 10.1609C13.5953 10.6422 14 11.3969 14 12.25C14 13.1633 13.5352 13.9672 12.8242 14.4375C13.5297 14.9078 14 15.7117 14 16.625C14 17.5383 13.5352 18.3422 12.8242 18.8125C13.5297 19.2828 14 20.0867 14 21C14 21.9133 13.5352 22.7172 12.8242 23.1875C13.5297 23.6578 14 24.4617 14 25.375C14 26.8242 12.8242 28 11.375 28H2.625C1.17578 28 0 26.8242 0 25.375C0 24.4617 0.464844 23.6578 1.17578 23.1875C0.464844 22.7172 0 21.9133 0 21C0 20.0867 0.464844 19.2828 1.17578 18.8125C0.464844 18.3422 0 17.5383 0 16.625C0 15.7117 0.464844 14.9078 1.17578 14.4375C0.464844 13.9672 0 13.1633 0 12.25C0 11.3969 0.404687 10.6422 1.03359 10.1609C0.410156 9.77266 0 9.08359 0 8.29609ZM3.5 13.125C3.5 13.6062 3.89375 14 4.375 14H9.625C10.1062 14 10.5 13.6062 10.5 13.125C10.5 12.6438 10.1062 12.25 9.625 12.25H4.375C3.89375 12.25 3.5 12.6438 3.5 13.125ZM4.375 19.25C3.89375 19.25 3.5 19.6437 3.5 20.125C3.5 20.6063 3.89375 21 4.375 21H9.625C10.1062 21 10.5 20.6063 10.5 20.125C10.5 19.6437 10.1062 19.25 9.625 19.25H4.375Z"
                                    fill="#259E73" />
                            </svg>
                        </NProgress>
                        <h4 class="text-lg font-bold text-center text-gray-600">Plsatic</h4>
                        <h5 class="text-sm font-normal text-gray-500 text-center">{{ stats.percentages.plastic }}%</h5>
                    </div>
                </div>
                <div class="flex items-center justify-center">
                    <div>
                        <NProgress type="circle" color="#259E73" rail-color="#259E7322"
                            :percentage="stats.percentages.organic as number">
                            <svg class="h-12" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M24 1.5C24 6.825 20.0344 11.2266 14.8969 11.9062C14.5641 9.40312 13.4625 7.14375 11.8359 5.37656C13.6313 2.17031 17.0625 0 21 0H22.5C23.3297 0 24 0.670312 24 1.5ZM0 4.5C0 3.67031 0.670312 3 1.5 3H3C8.79844 3 13.5 7.70156 13.5 13.5V15V19.5C13.5 20.3297 12.8297 21 12 21C11.1703 21 10.5 20.3297 10.5 19.5V15C4.70156 15 0 10.2984 0 4.5Z"
                                    fill="#259E73" />
                            </svg>
                        </NProgress>
                        <h4 class="text-lg font-bold text-center text-gray-600">Organic</h4>
                        <h5 class="text-sm font-normal text-gray-500 text-center">{{ stats.percentages.organic }}%</h5>
                    </div>
                </div>
                <div class="flex items-center justify-center">
                    <div>
                        <NProgress type="circle" color="#259E73" rail-color="#259E7322"
                            :percentage="stats.percentages.others as number">
                            <svg class="h-12" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19.25 14C19.25 15.2141 19.1844 16.3844 19.0695 17.5H8.93047C8.81016 16.3844 8.75 15.2141 8.75 14C8.75 12.7859 8.81563 11.6156 8.93047 10.5H19.0695C19.1898 11.6156 19.25 12.7859 19.25 14ZM20.825 10.5H27.557C27.8469 11.6211 28 12.7914 28 14C28 15.2086 27.8469 16.3789 27.557 17.5H20.825C20.9398 16.3734 21 15.2031 21 14C21 12.7969 20.9398 11.6266 20.825 10.5ZM26.9828 8.75H20.6008C20.0539 5.25547 18.9711 2.32969 17.5766 0.459375C21.8586 1.59141 25.3422 4.69766 26.9773 8.75H26.9828ZM18.8289 8.75H9.17109C9.50469 6.75938 10.0188 4.99844 10.6477 3.57109C11.2219 2.28047 11.8617 1.34531 12.4797 0.754687C13.0922 0.175 13.6008 0 14 0C14.3992 0 14.9078 0.175 15.5203 0.754687C16.1383 1.34531 16.7781 2.28047 17.3523 3.57109C17.9867 4.99297 18.5008 6.75391 18.8289 8.75ZM7.39922 8.75H1.01719C2.65781 4.69766 6.13594 1.59141 10.4234 0.459375C9.02891 2.32969 7.94609 5.25547 7.39922 8.75ZM0.442969 10.5H7.175C7.06016 11.6266 7 12.7969 7 14C7 15.2031 7.06016 16.3734 7.175 17.5H0.442969C0.153125 16.3789 0 15.2086 0 14C0 12.7914 0.153125 11.6211 0.442969 10.5ZM10.6477 24.4234C10.0133 23.0016 9.50469 21.2406 9.17109 19.25H18.8289C18.4953 21.2406 17.9812 23.0016 17.3523 24.4234C16.7781 25.7141 16.1383 26.6492 15.5203 27.2398C14.9078 27.825 14.3992 28 14 28C13.6008 28 13.0922 27.825 12.4797 27.2453C11.8617 26.6547 11.2219 25.7195 10.6477 24.4289V24.4234ZM7.39922 19.25C7.94609 22.7445 9.02891 25.6703 10.4234 27.5406C6.13594 26.4086 2.65781 23.3023 1.01719 19.25H7.39922ZM26.9828 19.25C25.3422 23.3023 21.8641 26.4086 17.582 27.5406C18.9766 25.6703 20.0539 22.7445 20.6062 19.25H26.9828Z"
                                    fill="#259E73" />
                            </svg>
                        </NProgress>
                        <h4 class="text-lg font-bold text-center text-gray-600">Undefined</h4>
                        <h5 class="text-sm font-normal text-gray-500 text-center">{{ stats.percentages.others }}%</h5>
                    </div>
                </div>
            </div>
        </NCard>
    </div>
</template>
<script lang="ts" setup>
import { NButton, NCard, NProgress, NSpace } from 'naive-ui';
import RobotCard from '../../components/RobotCard.vue';
import { RocleanProps, rocleans, getStats } from '../../data/rocleans'
import { computed, reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const roclean = reactive({
    id: '',
    name: '',
    capacity: 0,
    battery: 0,
    running: '',
    stats: {
        glass: 0,
        paper: 0,
        plastic: 0,
        organic: 0,
        others: 0,
        metal: 0
    }
})
const batteryState = computed(() => {
    if (roclean.battery > 66) {
        return 'success'
    } else if (roclean.battery > 33) {
        return 'warning'
    } else {
        return 'error'
    }
})

const capacityState = computed(() => {
    if (roclean.capacity > 85) {
        return 'error'
    } else if (roclean.capacity > 50) {
        return 'warning'
    } else {
        return 'success'
    }
})

const stats = computed(() => getStats(roclean))

onMounted(() => {
    const id = route.params.id

    if (id) {
        for (let i = 0; i < rocleans.value.length; i++) {
            const r = rocleans.value[i];
            if (r.id == id) {
                roclean.battery = r.battery as number
                roclean.capacity = r.capacity as number
                roclean.name = r.name as string
                roclean.running = r.running as string
                roclean.id = r.id as string
                roclean.stats = r.stats as any
                break;
            }
        }
    }
})
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