<template>
    <div class="flex flex-col min-h-screen bg-gray-100">
        <header class="bg-white border-b border-gray-300">
            <div class="container mx-auto flex items-center justify-between py-4">
                <router-link class="block" :to="{name: 'home'}">
                    <div class="flex items-center gap-4">
                        <img class="h-10 w-10" src="../../assets/roclean_logo.png" alt="roclean logo">
                        <h1 class="text-xl font-bold text-gray-800">Roclean</h1>
                    </div>
                </router-link>
    

                <nav>
                    <ul class="flex gap-6">
                        <li>
                            <router-link class="block py-2 px-4 hover:bg-gray-200 transition" :to="{name: 'home'}">Home</router-link>
                        </li>
                        <li>
                            <router-link class="block py-2 px-4 hover:bg-gray-200 transition" :to="{name: 'about'}">About</router-link>
                        </li>
                    </ul>
                </nav>

                <div class="flex gap-4">
                    <NButton @click="() => router.push({name: 'login'})">Login</NButton>
                    <NButton type="primary">Join us</NButton>
                </div>
            </div>
        </header>
    
        <main class="flex-grow flex flex-col">
            <slot />
        </main>
    
        <footer class="mt-auto py-16 border-t border-gray-300 bg-white">
            <div class="container mx-auto">
                <p class="text-center">Made with ❤️ By Roclean team | All rights reserved &copy; 2022</p>
            </div>
        </footer>
    </div>
</template>

<script lang="ts" setup>
import { NButton } from 'naive-ui'
import { useRouter } from 'vue-router'

const router = useRouter()

</script>