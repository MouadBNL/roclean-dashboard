<template>
    <LayoutManager>
        <div class="container mx-auto py-12">
            <div class="grid grid-cols-2">
                <div class="flex items-center">
                    <div class="py-48">
                        <h1 class="text-7xl text-primary font-extrabold mb-8 pb-4 border-b-8 border-primary rounded-2xl pr-16">
                            Roclean</h1>
                        <p class="text-4xl font-thin text-gray-600 mb-8">READY FOR A  CLEAN FUTURE</p>
                        <div class="flex gap-2">
                            <RouterLink :to="{name: 'login'}">
                                <NButton size="large" type="primary">Login</NButton>
                            </RouterLink>
                            <RouterLink :to="{name: 'login'}">
                                <NButton size="large">Request a demo</NButton>
                            </RouterLink>
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-end">
                    <div class="py-48">
                        <img src="../assets/landing.svg" alt="hero">
                    </div>
                </div>
            </div>
        </div>

        <section class="bg-white py-12">
            <div class="container mx-auto">
                <div class="grid grid-cols-3 gap-8">
                    <div class="h-full">
                        <img  class="rounded-lg shadow" src="../assets/roclean.png" alt="roclean example">
                    </div>
                    <div class="col-span-2">
                        <h2 class="text-2xl font-semibold border-b-2 border-primary mb-8 pb-2">About our project</h2>
            
                        <p class="mb-4 text-lg text-gray-600">Our project tackles the 13th SDG (sustainable development goal) which is climate change that's mainly
                            caused by pollution. Poor waste management plays a huge role in deteriorating the environment and
                            harming the life of many species including us, human beings.</p>
                        <p class="mb-4 text-lg text-gray-600">The solution that we came up with is a smart trash collector, which is an autonomous robot that moves
                            around and collects different types of trash by detecting them and putting them in a box integrated in
                            the robot itself. The garbage is detected by sensors and supported by an AI system that guides the
                            actuators. This project not only collects trash but also identifies its category to be able to sort it
                            by type (plastic, glass, paper…)</p>
            
                        <p class="mb-4 text-lg text-gray-600">The robot is connected to a mobile application that helps control it and display statistics about the
                            collected waste, as well as information about the robot's state.</p>
                    </div>
                </div>
            </div>
        </section>
    </LayoutManager>
</template>

<script lang="ts" setup>
import { NButton } from 'naive-ui';
import LayoutManager from '../layouts/LayoutManager.vue';


</script>