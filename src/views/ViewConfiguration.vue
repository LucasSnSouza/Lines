<template>

    <div class="configuration-wrapper flex flex-column gap-md h-full p-lg bg-gradient-brand-two">

        <div class="w-full flex flex-column gap-md">
            <h1 class="color-brand-two font-lg">Criar nova conta</h1>
            <p class="color-brand-two text-start font-sm">Precisamos de alguns dados para registrar sua conta, após isso você tera acesso a nosso gerenciador completo.</p>
        </div>

        <div class="w-full flex gap-md">
            <InputText
                class="w-full"
                placeholder="Informe seu nome completo"
                title="Qual seu nome"
                :value="form_data['fullname']"
                v-model="form_data['fullname']"
            />
        </div>

        <div class="w-full flex gap-md">
            <InputText
                class="w-full"
                placeholder="Nome usado para exibição"
                title="Como quer ser chamado"
                :value="form_data['name']"
                v-model="form_data['name']"
            />
        </div>

        <div class="w-full flex gap-md">
            <InputText
                class="w-full"
                placeholder="Somente nome"
                title="Em que cidade mora"
                :value="form_data['city']"
                v-model="form_data['city']"
            />
            <InputText
                class="w-full"
                placeholder="Sigla UF"
                title="A que estado pertence"
                :value="form_data['state']"
                v-model="form_data['state']"
            />
        </div>

        <div class="w-full flex gap-md">
            <InputText
                class="w-full"
                placeholder="Email para validações e notificações"
                title="Informe um email para contato"
                :value="form_data['email']"
                v-model="form_data['email']"
            />
        </div>

        <div class="w-full flex gap-md">
            <InputPicture
            />
        </div>

        <div class="w-full flex gap-md">

            <ButtonBasic
                type="one"
                class="w-full p-lg rounded-lg flex flex-column gap-md"
                @click="setAccount()"
            >
                <p class="color-brand-one text-start font-sm">Finalizar formulario</p>
            </ButtonBasic>
            
        </div>

    </div>

</template>

<script>

import { StorageSet, StorageGet, StorageFind } from '@/utils/Storage.js';

import * as Input from "@/components/Input"
import * as Button from '@/components/Button';

import { useNavigationStore } from '@/stores/navigation.js'

export default{
    data() {
        return {
            form_data: {}
        }
    },
    components: {
        ...Input,
        ...Button
    },
    created(){
        useNavigationStore().setTitle('Configurações');
    },
    methods: {
        setRoute(route){
            this.$router.push( { name: route } )
        },
        setAccount(){
            StorageSet("Administration", "ProfileDefault",this.form_data);
            useNavigationStore().setTitle(null);
            this.setRoute('main-board');
        }
    }
}

</script>

<style lang="scss" scoped>

.configuration-wrapper{
    padding-top: 80px;
}

</style>