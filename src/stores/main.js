import { defineStore } from "pinia";
import router from "@/router";

export const useMainStore = defineStore("main",  {
    id: "main",

    persist: true,

    state: () => ({
        token: null,
        id: null,
    }),

    actions: {
        logout() {
            this.token = null;
            router.push({path: "/"});
            router.go();
        }
    },

    getters: {
        isLogined: state => state.token != null,
    },
});