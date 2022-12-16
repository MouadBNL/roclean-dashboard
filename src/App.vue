<template>
	<n-config-provider preflight-style-disabled :theme-overrides="themeOverrides">
		<NMessageProvider>
			<NLoadingBarProvider>
				<RouterView />
			</NLoadingBarProvider>
		</NMessageProvider>
	</n-config-provider>
</template>

<script setup lang="ts">
import { NButton, NConfigProvider, NLoadingBarProvider, NMessageProvider } from 'naive-ui'

const themeOverrides = { 'common': { 'primaryColor': '#17888AFF', 'primaryColorHover': '#1F9EA0FF', 'primaryColorPressed': '#0E6365FF', 'primaryColorSuppl': '#17888AFF' } }
</script>