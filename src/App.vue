<template>
	<n-config-provider preflight-style-disabled>
		<RouterView/>
	</n-config-provider>
</template>

<script setup lang="ts">
import { NButton, NConfigProvider } from 'naive-ui'
</script>