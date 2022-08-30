import axios from "axios";
import errorLog from "./error-log";
import { Notify } from 'quasar'
import loadingIcon from "./loading-icon";
import {useMainStore} from '@/stores/main'

const instance = axios.create({
    baseURL: process.env.VUE_APP_API_BASEURL,
});

instance.interceptors.request.use(function (config) {
    loadingIcon.show();

    const mainStore = useMainStore();
    if (mainStore.token !== null) {
        config["headers"] = {
            Authorization: `Bearer ${mainStore.token}`,
        };
    }

    console.log("api: ", config);
    return config;
});

instance.interceptors.response.use(
    function (response) {
        loadingIcon.hide();
        return Promise.resolve(response);
    },

    function (error) {
        loadingIcon.hide();
        errorLog.sendMessage(0, JSON.stringify(error));
        Notify.create({
            color: "deep-orange",
            textColor: "white",
            message: error.message,
        });
        return Promise.reject(error);
    }
);

export default instance;
