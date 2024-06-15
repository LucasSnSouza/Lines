import { defineStore } from "pinia";

export const useNavigationStore = defineStore('navigation', {
    state: () => ({
        title: null,
    }),
    getters: {
        getTitle: (state) => state.title
    },
    actions: {
        setTitle(title) {
            this.title = title;
        },
        goback(){
            this.setTitle(null);
            this.$router.push( { name: "main-board"} );
        }
    }
})