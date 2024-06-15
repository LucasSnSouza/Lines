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
                title="Qual seu nome?"
            />
        </div>

        <div class="w-full flex gap-md">
            <InputText
                class="w-full"
                placeholder="Nome usado para exibição"
                title="Qual seu apelido"
            />
        </div>

    </div>

</template>

<script>

import * as Input from "@/components/Input"

import { useNavigationStore } from '@/stores/navigation.js'

export default{
    components: {
        ...Input
    },
    created(){
        useNavigationStore().setTitle('Configurações');
    }
}

</script>

<style lang="scss" scoped>

.configuration-wrapper{
    padding-top: 80px;
}

</style>