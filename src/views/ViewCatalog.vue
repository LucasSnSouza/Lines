<template>

    <div class="catalog-wrapper color-brand-two flex flex-column gap-md p-lg">

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
            :form="form?.tags"
        />

        <div class="catalog-items gap-sm">

            <ButtonBasic
                v-for="(item, index) of form?.items || []"
                type="one"
                class="w-full p-lg rounded-lg shadow-sm"
                :key="index"
            >
                
            </ButtonBasic>

        </div>

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
            form: {
                items: StorageGet('StorageTools')?.Tools
            },
        }
    },
    components: {
        ...Button,
        ...Input,
        ...Misc
    },
    created(){
        useNavigationStore().setTitle(this.$route.query.title);
        this.form['tags'] = StorageGet('Warehouse').Warehouse.tags.map((item) => {
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

.catalog-wrapper{
    padding-top: 70px;

    .catalog-items{
        display: grid;
        grid-template-columns: 50% 50%;
    }
}

</style>