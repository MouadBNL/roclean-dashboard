<template>
    <component :is="GuestLayoutVue">
        <slot />
    </component>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import AdminLayoutVue from './admin/AdminLayout.vue'
import GuestLayoutVue from './guest/GuestLayout.vue'

const layout = ref()
</script>