<template>
	<n-config-provider preflight-style-disabled>
		<NMessageProvider>
			<NLoadingBarProvider>
				<RouterView/>
			</NLoadingBarProvider>
		</NMessageProvider>
	</n-config-provider>
</template>

<script setup lang="ts">
import { NButton, NConfigProvider, NLoadingBarProvider, NMessageProvider } from 'naive-ui'
</script>