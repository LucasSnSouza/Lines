<template>

    <div class="main-board-wrapper h-full p-lg bg-gradient-brand-one">
        <div class="main-board-title">
          <h1 class="color-brand-one font-xlg" v-if="user_name">Oi {{ user_name }}</h1>
          <h1 class="color-brand-one font-lg" v-else>Olá Configure seu perfil</h1>
          <p class="color-brand-one font-sm">Não existem avisos no momento</p> 
        </div>
        <div class="main-board-adventures-action">
          <ButtonBasic
            type="one"
            class="w-full p-lg rounded-lg shadow-sm"
          >
            <h1 class="color-brand-one text-start font-md">Nome da Aventura</h1>
            <p class="color-brand-one text-start font-xsm">Ultimo acontecimento da aventura</p>
            <p class="color-brand-one text-start font-xsm">Continuar</p>
          </ButtonBasic>
        </div>
        <div>
          <h1 class="color-brand-one font-lg">Adicionais</h1>
        </div>
        <div class="main-board-manager-actions gap-md">

          <ButtonBasic
            type="one"
            class="w-full p-lg rounded-lg"
          >
            <MiscIcon
              icon="sword-icon"
              :size="[24, 24]"
            />
            <h1 class="color-brand-one text-start font-md">Ferramentas</h1>
            <p class="color-brand-one text-start font-sm">15 Registrados</p>
          </ButtonBasic>

          <ButtonBasic
            type="one"
            class="w-full p-lg rounded-lg"
          >
            <MiscIcon
              icon="item-icon"
              :size="[24, 24]"
            />
            <h1 class="color-brand-one text-start font-md">Materiais</h1>
            <p class="color-brand-one text-start font-sm">30 Registrados</p>
          </ButtonBasic>

          <ButtonBasic
            type="one"
            class="w-full p-lg rounded-lg "
          >
            <MiscIcon
              icon="clouth-icon"
              :size="[24, 24]"
            />
            <h1 class="color-brand-one text-start font-md">Vestimentas</h1>
            <p class="color-brand-one text-start font-sm">4 Registrados</p>
          </ButtonBasic>

          <ButtonBasic
            type="one"
            class="w-full p-lg rounded-lg "
          >
            <MiscIcon
              icon="particle-icon"
              :size="[24, 24]"
            />
            <h1 class="color-brand-one text-start font-md">Efeitos</h1>
            <p class="color-brand-one text-start font-sm">6 Registrados</p>
          </ButtonBasic>

          <ButtonBasic
            type="one"
            class="w-full p-lg rounded-lg "
          >
            <MiscIcon
              icon="hand-icon"
              :size="[24, 24]"
            />
            <h1 class="color-brand-one text-start font-md">Magias</h1>
            <p class="color-brand-one text-start font-sm">12 Registrados</p>
          </ButtonBasic>

        </div>
    </div>

</template>

<script>

import { StorageSet, StorageGet, StorageFind } from '@/utils/Storage.js';

import * as Button from '@/components/Button';
import * as Misc from '@/components/Misc';

export default{
    data(){
        return {
            user_name: StorageGet('Administration')['ProfileDefault']?.name,
        }
    },
    components: {
      ...Button,
      ...Misc
    },
    created(){
    }
}

</script>

<style lang="scss" scoped>

.main-board-title{
  padding-top: 80px;
  padding-bottom: 20px;
}

.main-board-adventures-action{
  padding-bottom: 20px;
}

.main-board-manager-actions{
  padding-top: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

</style>