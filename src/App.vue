<template>
  <div class="main-app-wrapper h-full">
    <header class="header-main-page w-full flex y-center justify-center p-md">
      <MiscIcon
        icon="lines-icon"
        :size="[30,30]"
      />
    </header>
    <div class="container-main-page">
      <RouterView />
    </div>
  </div>
</template>

<script>

import { RouterLink, RouterView } from 'vue-router';
import { StorageSet, StorageGet, StorageFind } from '@/utils/Storage.js'

import * as Button from '@/components/Button';
import * as Misc from '@/components/Misc';

import { ExampleAdministrationAcount } from '@/constants/PrefabApp.js'

export default{
  components: {
    ...Button,
    ...Misc
  },
  created(){
    if(!StorageFind('storage', { value: 'Administration' })){
      StorageSet("Administration", "ProfileDefault", ExampleAdministrationAcount)
    }
  }
}

</script>

<style scoped>

.header-main-page{
  height: 80px;
  position: absolute;
}

.container-main-page{
  height: 100%;
}

</style>
