<template>
    <div>
        <n-menu
            :options="getMenu(menuOptions)"
        />
    </div>
</template>

<script setup lang="ts">
import { NMenu } from 'naive-ui'
import { h, resolveComponent } from 'vue';
const menuOptions = [
    {
        label: () => h(
            resolveComponent('router-link') as any,
            {
                to: {
                    name: 'dashboard'
                }
            },
            { default: () => 'Dashboard'}
        ),
        key: 'dashboard'
    },
    {
        label: () => h(
            resolveComponent('router-link') as any,
            {
                to: {
                    name: 'my-rocleans'
                }
            },
            { default: () => 'My Robots'}
        ),
        key: 'rocleans'
    },
    {
        label: () => h(
            resolveComponent('router-link') as any,
            {
                to: {
                    name: 'dashboard'
                }
            },
            { default: () => 'My Profile'}
        ),
        key: 'profile'
    },
]
const getMenu = (menu: any[]) => {
    return menu.filter((item) => {
        return true
    })
} 
</script>