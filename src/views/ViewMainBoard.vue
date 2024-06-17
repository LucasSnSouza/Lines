<template>

    <div class="main-board-wrapper h-full p-lg bg-gradient-brand-one">
        <div class="main-board-title">
          <h1 class="color-brand-one font-lg" v-if="user_name">Oi {{ user_name }}</h1>
          <ButtonBasic
            v-else
            type="one"
            class="w-full p-lg rounded-lg shadow-sm"
            @click="$router.push( { name: 'configuration' } )"
          >
            <p class="color-brand-one text-start font-sm">Precisamos de algumas configurações</p>
          </ButtonBasic>
          <p
            v-if="user_name" 
            class="color-brand-one font-xsm"
          >
            Não existem avisos no momento
          </p> 
        </div>
        <div class="main-board-adventures-action">
          <ButtonBasic
            v-if="isExistStorage('Adventures')"
            type="one"
            class="w-full p-lg rounded-lg shadow-sm"
          >
            <h1 class="color-brand-one text-start font-md">Nome da Aventura</h1>
            <p class="color-brand-one text-start font-xsm">Ultimo acontecimento da aventura</p>
            <p class="color-brand-one text-start font-xsm">Continuar</p>
          </ButtonBasic>
          <ButtonBasic
            v-else
            type="two"
            class="w-full p-lg rounded-lg shadow-sm"
          >
            <p class="color-brand-one text-start font-sm">Você ainda não possui uma aventura</p>
          </ButtonBasic>
        </div>
        <div>
          <div v-if="user_name" class="color-brand-one">
            <h1 class="font-md">Recursos</h1>
            <p 
              class="font-xsm"
            >
              Nenhuma historia pode ser criada sem recursos para serem usados
            </p>
          </div>
          <div v-else>
            <h1 class="color-brand-one font-md">Aviso importante</h1>
            <p 
              class="color-brand-one font-xsm"
            >
              Infelizmente ainda não foi encontrado um registro, precisamos da configuração inicial para que você tenha a melhor experiencia possivel.
            </p>
          </div>
        </div>
        <div class="main-board-manager-actions color-brand-one">

          <div 
            v-if="user_name"
            class="gap-md"
          >
            <ButtonBasic
              type="one"
              class="w-full p-lg rounded-lg flex flex-column gap-md color-brand-one"
              @click="$router.push( { name: 'catalog', query: { title: 'Ferramentas' } } )"
            >
              <MiscIcon
                icon="sword-icon"
                :size="[22, 22]"
              />
              <div>
                <h1 class="text-start font-sm">Ferramentas</h1>
                <p class="text-start font-xsm">
                  {{ isExistStorage('Tools') ? `5 Registrados` : "A categoria está vazia" }} 
                </p>
              </div>
            </ButtonBasic>
  
            <ButtonBasic
              type="one"
              class="w-full p-lg rounded-lg flex flex-column gap-md color-brand-one"
              @click="$router.push( { name: 'catalog', query: { title: 'Materiais' } } )"
            >
              <MiscIcon
                icon="item-icon"
                :size="[24, 24]"
              />
              <div>
                <h1 class="text-start font-sm">Materiais</h1>
                <p class="text-start font-xsm">
                  {{ isExistStorage('Materials') ? `5 Registrados` : "A categoria está vazia" }}
                </p>
              </div>
            </ButtonBasic>
  
            <ButtonBasic
              type="one"
              class="w-full p-lg rounded-lg flex flex-column gap-md color-brand-one"
              @click="$router.push( { name: 'catalog', query: { title: 'Vestimentas' } } )"
            >
              <MiscIcon
                icon="clouth-icon"
                :size="[22, 22]"
              />
              <div>
                <h1 class="text-start font-sm">Vestimentas</h1>
                <p class="text-start font-xsm">
                  {{ isExistStorage('Clouths') ? `5 Registrados` : "A categoria está vazia" }}
                </p>
              </div>
            </ButtonBasic>
  
            <ButtonBasic
              type="one"
              class="w-full p-lg rounded-lg flex flex-column gap-md color-brand-one"
              @click="$router.push( { name: 'catalog', query: { title: 'Efeitos' } } )"
            >
              <MiscIcon
                icon="particle-icon"
                :size="[22, 22]"
              />
              <div>
                <h1 class="text-start font-sm">Efeitos</h1>
                <p class="text-start font-xsm">
                  {{ isExistStorage('Effects') ? `5 Registrados` : "A categoria está vazia" }}
                </p>
              </div>
            </ButtonBasic>
  
            <ButtonBasic
              type="one"
              class="w-full p-lg rounded-lg flex flex-column gap-md color-brand-one"
              @click="$router.push( { name: 'catalog', query: { title: 'Magias' } } )"
            >
              <MiscIcon
                icon="hand-icon"
                :size="[22, 22]"
              />
              <div>
                <h1 class="text-start font-sm">Magias</h1>
                <p class="text-start font-xsm">
                  {{ isExistStorage('Spells') ? `5 Registrados` : "A categoria está vazia" }}
                </p>
              </div>
            </ButtonBasic>
          </div>

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
    },
    methods: {
      isExistStorage(storage){
        return StorageGet(storage);
      }
    }
}

</script>

<style lang="scss" scoped>

.main-board-title{
  padding-top: 70px;
  padding-bottom: 20px;
}

.main-board-adventures-action{
  padding-bottom: 20px;
}

.main-board-manager-actions{
  padding-top: 15px;
  
  div:first-child{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

}

</style>