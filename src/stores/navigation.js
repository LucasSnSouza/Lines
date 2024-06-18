import { defineStore } from "pinia";

export const useNavigationStore = defineStore('navigation', {
    state: () => ({
        title: null,
        scroll: false,
    }),
    getters: {
        getTitle: (state) => state.title,
        getScroll: (state) => state.scroll,
    },
    actions: {
        setTitle(title) {
            this.title = title;
        },
        setScroll(boolean){
            this.scroll = boolean;
        }
    }
})