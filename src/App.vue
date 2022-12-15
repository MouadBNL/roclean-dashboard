<template>
	<n-config-provider>
		<header class="flex gap-8">
			<h1>Roclean</h1>
			<nav>
				<ul class="flex gap-4">
					<li>
						<router-link :to="{name: 'home'}">Home</router-link>
					</li>
					<li>
						<router-link :to="{name: 'about'}">About</router-link>
					</li>
				</ul>
			</nav>
		</header>

		<div>
			<RouterView/>
		</div>
	</n-config-provider>
</template>

<script setup lang="ts">
import { NButton, NConfigProvider } from 'naive-ui'
</script>