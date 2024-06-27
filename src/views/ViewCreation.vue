<template>

    <div class="creation-wrapper color-brand-two flex flex-column gap-md p-lg">

        <div>
          <h1 class="font-md"> Criação </h1>
          <p 
            class="font-xsm"
          >
            Area de criação, aqui você pode gerar e editar todos as fontes do game a sua vontade.
          </p>
        </div>

        <div 
            v-if="storage.interface?.includes('name')"
            class="w-full flex gap-md"
        >
            <InputText
                v-model="form['name']"
                class="w-full"
                placeholder="Qual será o nome da entidade"
                title="Nome da entidade"
                :value="form['name']"
                :limit-char="100"
            />
        </div>

        <div 
            v-if="storage.interface?.includes('description')"
            class="w-full flex gap-md"
        >
            <InputNote
                v-model="form['description']"
                class="w-full"
                placeholder="Descreva melhor sobre a entidade"
                title="Descrição da entidade"
                :value="form['description']"
                :limit-char="200"
            />
        </div>

        <div 
            v-if="storage.interface?.includes('choice-damage')"
            class="w-full flex gap-md"
        >
            <InputCheckbox
                type="one"
                class="w-full"
                v-model="form['useDamage']"
                :value="true"
                :checked="form?.useDamage"
                title="Está entidade utiliza o sistema de dano"
            />
        </div>

        <div
            v-if="form?.useDamage" 
            class="w-full flex gap-md"
        >
            <InputText
                v-model="form['damage']"
                class="w-full"
                placeholder="Valor do ataque"
                title="Dano potencial"
                :value="form['damage']"
            />
            <InputText
                v-model="form['defense']"
                class="w-full"
                placeholder="Valor do defesa"
                title="Defesa potencial"
                :value="form['defense']"
            />
        </div>

        <div class="w-full flex gap-md">

            <ButtonBasic
                type="one"
                class="w-full p-lg rounded-md flex flex-column gap-md"
                @click="setEntity()"
            >
                <p class="color-brand-one text-start font-sm">Editar entidade</p>
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
                owner: this.getCurrentRegister().name
            },
            storage: StorageGet(this.$route.query?.filter)
        }
    },
    components: {
        ...Button,
        ...Input,
        ...Misc
    },
    created(){
        useNavigationStore().setTitle(this.$route.meta?.title);
        if (this.$route.query?.index){
            this.form = this.storage.items[this.$route.query?.index];
        }
    },
    methods: {
        getPageTitle(){
            return useNavigationStore().getTitle;
        },
        getCurrentRegister(){
            return StorageGet('Administration').ProfileDefault;
        },
        setEntity(){
            if(this.$route.query?.index){
                this.storage.items[this.$route.query?.index] = this.form;
            }
            else{
                this.storage.items.push(this.form);
            }
            StorageSet("StorageTools", "items", this.storage.items);
            this.$router.push({ name: 'catalog', query: { title: this.$route.query?.title, filter: this.$route.query?.filter } });
        }
    }
}

</script>

<style lang="scss" scoped>

.creation-wrapper{
    padding-top: 70px;
}

</style>