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
            :form="[{ label: 'sistema', value: 'system' }, { label: 'pessoal', value: getCurrentRegister().name }]"
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
                @click="$router.push( { name: 'creation', query: { title: this.$route.query.title, filter: this.$route.query?.filter, index: getIndex(item.name) } } )"
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

        <div class="tool-administration absolute flex">
            <ButtonBasic
                type="one"
                class="flex text-start y-center x-center w-full h-full gap-md rounded-md shadow-sm color-brand-two"
                @click="$router.push( { name: 'creation', query: { title: this.$route.query.title, filter: this.$route.query?.filter } } )"
            >
                <MiscIcon
                    icon="plus"
                    :size="[14,14]"
                    color="#FFFFFF"
                />
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
                tags: StorageGet('Warehouse').Warehouse.tags,
            },
            storage: StorageGet(this.$route.query?.filter)
        }
    },
    components: {
        ...Button,
        ...Input,
        ...Misc
    },
    watch: {
        'form.ownerFilter': function(value) {
            this.form.items = this.storage?.items.filter((item) => {
                if(this.form?.tagFilter){
                    return item?.owner === value && item?.tags ? item?.tags.includes(this.form?.tagFilter) : false ;
                }
                else{
                    return item?.owner === value;
                }
            })
        },
        'form.tagFilter': function(value) {
            this.form.items = this.storage?.items.filter((item) => {
                return item?.tags ? item?.tags.includes(value) : false;
            })
        }
    },
    created(){
        useNavigationStore().setTitle(this.$route.query.title);
    },
    methods: {
        getPageTitle(){
            return useNavigationStore().getTitle;
        },
        getCurrentRegister(){
            return StorageGet('Administration').ProfileDefault;
        },
        getIndex(value){
            return this.storage.items.findIndex((item) => item.name === value)
        }
    }
}

</script>

<style lang="scss" scoped>

.catalog-wrapper{
    padding-top: 70px;

    .tool-administration{
        bottom: var(--scale-brand-lg);
        right: var(--scale-brand-lg);
        width: 40px;
        height: 40px;
    }

}

</style>