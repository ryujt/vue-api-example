import rest from "@/utils/rest";

export default {
    async getUserDetail(id) {
        return new Promise((resolve, reject) => {
            rest.get(`users/${id}`)
            .then(response => {
                if (response.data.resultCode) {
                    reject(response);
                    return;
                }
                resolve(response);
            }).catch(error => {
                console.log(error);
            });
        });
    },
}