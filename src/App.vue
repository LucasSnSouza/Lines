<template>
  <RouterView />
</template>

<script>

import { RouterLink, RouterView } from 'vue-router';
import { StorageSet, StorageGet, StorageFind } from '@/utils/Storage.js'

import { ExampleAdministrationAcount } from '@/constants/PrefabApp.js'

export default{
  created(){
    if(!StorageFind('storage', { value: 'Administration' })){
      StorageSet("Administration", "ProfileDefault", ExampleAdministrationAcount)
    }
  }
}

</script>

<style scoped>

</style>
