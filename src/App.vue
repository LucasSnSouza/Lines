<template>
  <div class="main-app-wrapper h-full">
    <header class="header-main-page w-full flex y-center  p-lg">
      <MiscIcon
        v-if="!navigationStore.getTitle"
        icon="lines-icon"
        :size="[30,30]"
      />
      <div
        v-else 
        class="w-full flex justify-between y-center"
      >
        <ButtonBasic
          type="one"
          class="rounded-md p-md ghost"
          @click="goback()"
        >
          <MiscIcon
            icon="left-arrow-icon"
            :size="[16, 16]"
            color="#000000"
          />
        </ButtonBasic>
        <p 
          class="color-brand-two text-start font-sm p-md"
          style="border-right: 2px solid var(--color-brand-two);"
        >
          {{ navigationStore.getTitle }}
        </p>
      </div>
    </header>
    <div class="container-main-page">
      <RouterView />
    </div>
  </div>
</template>

<script>

import { RouterLink, RouterView } from 'vue-router';
import { StorageSet, StorageGet, StorageFind } from '@/utils/Storage.js'

import { useNavigationStore } from '@/stores/navigation.js'

import * as Button from '@/components/Button';
import * as Misc from '@/components/Misc';

import { ExampleAdministrationAcount } from '@/constants/PrefabApp.js'

export default{
  data(){
    return {
      navigationStore: useNavigationStore() 
    }
  },
  components: {
    ...Button,
    ...Misc
  },
  created(){
    if(!StorageFind('storage', { value: 'Administration' })){
      StorageSet("Administration", "ProfileDefault", ExampleAdministrationAcount)
    }
  },
  methods: {
    goback(){
      this.navigationStore.setTitle(null);
      this.$router.push( { name: 'main-board' } );
    }
  }
}

</script>

<style scoped>

.header-main-page{
  height: 80px;
  position: fixed;
  /* backdrop-filter: blur(10px); */
}

.container-main-page{
  height: 100%;
}

</style>
