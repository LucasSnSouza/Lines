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
            :form="[{ label: 'sistema', value: 'system' }, { label: 'pessoal', value: 'pessoal' }]"
        />

        <InputSelect
            v-model="form['tagFilter']"
            placeholder="Filtrar por alguma tag"
            :form="form?.tags"
        />

        <div class="catalog-items flex flex-column gap-sm">

            <ButtonBasic
                v-for="(item, index) of form?.items || []"
                type="three"
                class="flex text-start w-full gap-md rounded-md shadow-sm color-brand-two"
                :class="{'p-md': item?.thumbnail, 'p-lg': !item?.thumbnail}"
                :key="index"
            >
                <div 
                    v-if="item?.thumbnail"
                    class="flex x-center y-center h-full aspect-ratio rounded-sm bg-color-brand-four"
                    style="height: 50px;"
                >
                    <MiscIcon
                        :icon="item?.thumbnail"
                        :size="[22,22]"
                        color="#3c3c3c"
                    />
                </div>
                <div class="flex flex-column">
                    <h1 class="font-sm">{{ item?.name }}</h1>
                    <p class="color-brand-four font-xsm">{{ item?.description }}</p>
                </div>
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
                items: [],
                tags: StorageGet('Warehouse').Warehouse.tags
            },
        }
    },
    components: {
        ...Button,
        ...Input,
        ...Misc
    },
    watch: {
        'form.ownerFilter': function(value) {
            this.form.items = StorageGet('StorageTools')?.Tools.filter((item) => {
                if(this.form?.tagFilter){
                    return item?.owner === value && item?.tags.includes(this.form?.tagFilter);
                }
                else{
                    return item?.owner === value;
                }
            })
        },
        'form.tagFilter': function(value) {
            this.form.items = StorageGet('StorageTools')?.Tools.filter((item) => {
                return item?.tags.includes(value);
            })
        }
    },
    created(){
        useNavigationStore().setTitle(this.$route.query.title);
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

}

</style>