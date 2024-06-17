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
                :value="form['fullname']"
                v-model="form['fullname']"
            />
        </div>

        <div class="w-full flex gap-md">
            <InputText
                class="w-full"
                placeholder="Nome usado para exibição"
                title="Como quer ser chamado"
                :value="form['name']"
                v-model="form['name']"
            />
        </div>

        <div class="w-full flex gap-md">
            <InputSelect
                v-model="form['state']"
                title="Em que estado vive"
                placeholder="Lista de estado"
                class="w-full"
                :form="[
                    { label: 'São Paulo', value: 'São Paulo' },
                    { label: 'Minas Gerais', value: 'Minas Gerais' },
                    { label: 'Bahia', value: 'Bahia' }
                ]"
            />
            <InputSelect
                v-model="form['city']"
                title="E qual a cidade"
                placeholder="Lista de cidade"
                class="w-full"
                :form="[
                    { label: 'Xique xique', value: 'Xique xique' },
                    { label: 'Cerquilho', value: 'Cerquilho' },
                    { label: 'Itapeba', value: 'Itapeba' }
                ]"
            />
        </div>

        <div class="w-full flex gap-md">
            <InputText
                class="w-full"
                placeholder="Email para validações e notificações"
                title="Informe um email para contato"
                :value="form['email']"
                v-model="form['email']"
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
            form: {}
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
            StorageSet("Administration", "ProfileDefault",this.form);
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