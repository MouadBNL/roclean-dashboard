<template>
    <LayoutManager>
        <div class="flex-1 container mx-auto flex items-center justify-center">
            <div class="w-11/12 md:w-8/12 xl:w-5/12">
                <NCard>
                    <h1 class="text-center text-3xl font-extrabold mb-8 mt-0">Roclean</h1>
                    <NForm :model="credentials" :rules="rules" ref="formRef" @submit.prevent="handleLogin">
                        <NFormItem label="Email" path="email">
                            <NInput v-model:value="credentials.email" placeholder="adc@xyz.com" autofocus
                                @keyup.enter="handleLogin" />
                        </NFormItem>
                        <NFormItem label="Mod de passe" path="password">
                            <NInput v-model:value="credentials.password" placeholder="******" type="password"
                                @keyup.enter="handleLogin" />
                        </NFormItem>
                        <NFormItem>
                            <NButton @click="handleLogin" type="primary">Connexion</NButton>
                        </NFormItem>
                    </NForm>
                </NCard>
            </div>
        </div>
    </LayoutManager>
</template>

<script lang="ts" setup>
import LayoutManager from '../layouts/LayoutManager.vue';
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { NCard ,NForm, NFormItem, NInput, NButton } from 'naive-ui'
const formRef = ref<any>(null)
const credentials = ref({
    email: '',
    password: ''
})
const rules = {
    email: [{
        required: true,
        validator(rule:any, value:any) {
            if(!value) {
                return new Error('un e-mail est requis')
            }
            else if(! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) return new Error('veuillez entrer un email valide')
            return true
        },
        trigger: ['input', 'blur'],
    }],
    password: [{
        required: true,
        // validator (rule:any, value:any) {
        //     if(!value) throw new Error('un mot de passe est requis')
        //     return true
        // },
        trigger: ['input', 'blur'],
        message: 'un mot de passe est requis'
    }]
}
const router = useRouter()
const handleLogin = async (e:any) => {
    let passVlidation = false
    formRef.value?.validate(async (errors: Array<any>|null|undefined) => {
        if(!errors || errors.length  == 0){
            passVlidation = true
            router.push({name: 'dashboard'})
        }
    })
}
</script>