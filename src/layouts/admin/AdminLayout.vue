<template>
    <NLayout style="height: 100vh">
    <n-layout-header style="height: 64px;" bordered>
		<div class="flex justify-between items-center px-6 h-full">
			<div>
        <router-link :to="{name: 'dashboard'}">
            <div class="flex items-center gap-4">
                <img class="h-8 w-8" src="../../assets/roclean_logo.png" alt="Roclean logo"/>
                <h2 class="text-xl font-black m-0 text-black no-underline">Roclean</h2>
            </div>
        </router-link>
			</div>
			<div class="flex items-center gap-5">
        <div class="h-8 w-8 bg-gray-50 relative rounded-full overflow-hidden">
          <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="absolute top-0 left-0 h-full w-full object-cover" >
        </div>
				<span class=" inline-block">
					First User
				</span>
				<NButton type="error" @click="handleLogout">
					Se déconnecter
				</NButton>
			</div>
		</div>
	</n-layout-header>
    <n-layout position="absolute" style="top: 64px; bottom: 64px;" has-sider>
      <n-layout-sider
        content-style="padding: 24px;"
        collapse-mode="transform"
        :collapsed-width="20"
        show-trigger="arrow-circle"
        :native-scrollbar="false"
        bordered
      >
        <TheAuthLayoutSidebar />
      </n-layout-sider>
      <n-layout content-style="padding: 24px;" :native-scrollbar="false" class="bg-gray-50">
        <main class="container mx-auto">
          <router-view :key="route.fullPath"></router-view>
        </main>

      </n-layout>
    </n-layout>
    <n-layout-footer
      position="absolute"
      style="height: 64px; padding: 24px;"
      bordered
    >
      Réalisé par Benali Mouad, mouadbnl.2k01@gmail.com
    </n-layout-footer>
  </NLayout>
</template>

<script setup lang="ts">
import TheAuthLayoutSidebar from './AdminLayoutSidebar.vue'
import { NLayout, NLayoutHeader, NLayoutSider, NButton, NLayoutFooter, useMessage, useLoadingBar } from "naive-ui"
import { useRouter, useRoute } from 'vue-router'
const route = useRoute()
const router= useRouter()
const handleLogout = () => {
    router.push({name: 'home'})
}
</script>