<template>

    <div class="configuration-wrapper color-brand-two flex flex-column gap-md p-lg">

        <div>
          <h1 class="font-md">{{ getPageTitle() }}</h1>
          <p 
            class="font-xsm"
          >
            Aqui você deve organizar os conteudos que seram usados em historias, você pode filtrar e criar novos recursos para que tenha sempre historias mais personalizadas para o seu uso.
          </p>
        </div>

        <ButtonGroup
            v-model="form['ownerFilter']"
            :form="[{ label: 'sistema', value: 'sistema' }, { label: 'pessoal', value: 'pessoal' }]"
        />

        <InputSelect
            v-model="form['tagFilter']"
            placeholder="Filtrar por alguma tag"
            :form="tags"
        />

    </div>

</template>

<script>

import * as Button from '@/components/Button';
import * as Input from '@/components/Input';
import * as Misc from '@/components/Misc';

import { StorageSet, StorageGet, StorageFind } from '@/utils/Storage.js';

import { useNavigationStore } from '@/stores/navigation.js'

export default{
    data(){
        return {
            form: {},
            tags: []
        }
    },
    components: {
        ...Button,
        ...Input,
        ...Misc
    },
    created(){
        useNavigationStore().setTitle(this.$route.query.title);
        this.tags = StorageGet('Warehouse').Warehouse.tags.map((item) => {
            return { label: item, value: item }
        })
    },
    methods: {
        getPageTitle(){
            return useNavigationStore().getTitle;
        }
    }
}

</script>

<style lang="scss" scoped>

.configuration-wrapper{
    padding-top: 70px;
}

</style>