<template>
    <LayoutManager>
        <div class="mx-auto container py-12">
            <h1 class="text-2xl font-bold mb-8">About our project</h1>

            <p class="mb-4 text-lg text-gray-600">Our project tackles the 13th SDG (sustainable development goal) which
                is climate change that's mainly
                caused by pollution. Poor waste management plays a huge role in deteriorating the environment and
                harming the life of many species including us, human beings.</p>
            <p class="mb-4 text-lg text-gray-600">The solution that we came up with is a smart trash collector, which is
                an autonomous robot that moves
                around and collects different types of trash by detecting them and putting them in a box integrated in
                the robot itself. The garbage is detected by sensors and supported by an AI system that guides the
                actuators. This project not only collects trash but also identifies its category to be able to sort it
                by type (plastic, glass, paper…)</p>

            <p class="mb-4 text-lg text-gray-600">The robot is connected to a mobile application that helps control it
                and display statistics about the
                collected waste, as well as information about the robot's state.</p>
        </div>
    </LayoutManager>
</template>

<script lang="ts" setup>
import LayoutManager from '../layouts/LayoutManager.vue';


</script>