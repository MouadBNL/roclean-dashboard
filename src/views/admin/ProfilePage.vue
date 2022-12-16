<template>
    <div class="container mx-auto">
        <h2 class="text-2xl font-bold mb-8">My Profile</h2>
        <n-card title="Information utilisateur" class="mb-8">
            <n-form :model="user" ref="formRef" :rules="rules">
                <div class="flex ga-8 flex-wrap">


                    <div class="w-full lg:w-1/3">
                        <div class="w-full">
                            <div class="h-64 w-64 bg-gray-50 relative rounded-full overflow-hidden mb-4 mx-auto">
                                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" class="absolute h-full w-full object-cover">
                            </div>

                            <div class="flex flex-wrap items-center justify-center gap-4">
                                <n-upload style="display: inline-block;width: fit-content; height: fit-content;"
                                    action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f" :multiple="false"
                                    accept=".jpeg,.png,.jpg,.gif,.svg">
                                    <n-button>Changer ma photo de profile</n-button>
                                </n-upload>
                            </div>
                        </div>
                    </div>


                    <div class="w-full lg:w-2/3 mt-16">
                        <div class="flex flex-wrap md:flex-nowrap gap-8">
                            <n-form-item path="first_name" label="Prénom" class="w-full md:w-1/2">
                                <n-input v-model:value="user.first_name" @keydown.enter.prevent placeholder="Mouad" />
                            </n-form-item>
                            <n-form-item path="last_name" label="Nom" class="w-full md:w-1/2">
                                <n-input v-model:value="user.last_name" @keydown.enter.prevent placeholder="Benali" />
                            </n-form-item>
                        </div>
                        <n-form-item path="email" label="Email">
                            <n-input v-model:value="user.email" @keydown.enter.prevent
                                placeholder="mouad.benali1@uit.ac.ma" />
                        </n-form-item>
                        <div class="flex flex-wrap md:flex-nowrap gap-8">
                            <n-form-item path="password" label="Mot de passe" class="w-full md:w-1/2">
                                <n-input v-model:value="user.password" @keydown.enter.prevent type="password"
                                    placeholder="********" />
                            </n-form-item>
                            <n-form-item path="password_confirmation" label="Confirmez le mot de passe"
                                class="w-full md:w-1/2">
                                <n-input v-model:value="user.password_confirmation" @keydown.enter.prevent
                                    type="password" placeholder="********" />
                            </n-form-item>
                        </div>
                        <div class="flex flex-wrap md:flex-nowrap justify-end">
                            <NButton type="success" @click="() => { }">Mettre à jour mes identifiants</NButton>
                        </div>
                    </div>
                </div>
            </n-form>
        </n-card>
    </div>
</template>
<script lang="ts" setup>
import { NCard, NButton, NForm, NFormItem, NInput, NUpload, useMessage } from 'naive-ui'
import RobotCard from '../../components/RobotCard.vue';
import { RocleanProps, rocleans } from '../../data/rocleans'
import { computed, reactive, ref } from 'vue'
import { trashPercentages, trashStats, trashTotal } from '../../data/collected_trash'

const formRef = ref<any>(null)
const user = reactive({
    first_name: 'First',
    last_name: 'User',
    email: 'test@email.com',
    password: undefined,
    password_confirmation: undefined
})
const rules = {
    first_name: {
        required: true,
        trigger: ['input', 'blur'],
        validator: (rule: any, value: string) => {
            if (!value) return new Error('Prénom est requis')
            else if (value.length > 255) return new Error('Prénom ne doit pas depasser 255 charactere')
            else return true
        }
    },
    last_name: {
        required: true,
        trigger: ['input', 'blur'],
        validator: (rule: any, value: string) => {
            if (!value) return new Error('Nom est requis')
            else if (value.length > 255) return new Error('Nom ne doit pas depasser 255 charactere')
            else return true
        }
    },
    email: {
        required: true,
        trigger: ['input', 'blur'],
        validator: (rule: any, value: string) => {
            if (!value) return new Error('Email est requis')
            else if (value.length > 255) return new Error('Email ne doit pas depasser 255 charactere')
            else if (! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) return new Error('veuillez entrer un email valide')
            else return true
        }
    },
    role: {
        required: true,
        trigger: ['input', 'blur'],
        validator: (rule: any, value: string) => {
            if (!value) return new Error('Role est requis')
            else return true
        }
    },
    password: {
        required: true,
        trigger: ['input', 'blur'],
        validator: (rule: any, value: string) => {
            if (!value) return new Error('Mot de passe est requis')
            else if (value.length > 255) return new Error('Mot de passe ne doit pas depasser 255 charactere')
            else if (value.length < 8) return new Error('Mot de passe ne doit pas avoir mois de 8 charactere')
            else return true
        }
    },
    password_confirmation: {
        required: true,
        trigger: ['input', 'blur'],
        validator: (rule: any, value: string) => {
            if (!value) return new Error('La confirmation du mot de passe est requise')
            else if (value != user.password) return new Error('Le mot de passe n\'est pas le même')
            else return true
        }
    }
}
const shownRocleans = computed(() => rocleans.value.slice(0, 4))
</script>
<style>
.mapouter {
    position: relative;
    text-align: right;
    width: 100%;
    height: 400px;
}

.gmap_canvas {
    overflow: hidden;
    background: none !important;
    width: 100%;
    height: 500px;
}

.gmap_iframe {
    height: 400px !important;
}
</style>