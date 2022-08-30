import { defineStore } from "pinia";

export const useEtcStore = defineStore("etc",  {
    id: "etc",

    state: () => ({
        loading: false,
    }),
});