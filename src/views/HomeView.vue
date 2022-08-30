<template>
  <div>
    <div class="row flex flex-center">
        <q-btn @click="getUserInfo" label="사용자 정보 가져오기" color="primary" />
    </div>
    <div class="row q-pa-md">
        <q-input v-model="result" type="textarea" style="width: 100%;" rows="20" square outlined  />
    </div>
  </div>
</template>

<script>
import apiUsers from '@/api/users';

export default {
    data() {
        return {
            result: "",
        }
    },

    methods: {
        getUserInfo() {
            apiUsers.getUserDetail(1)
            .then(res => {
                this.result = JSON.stringify(res.data, null, 4);
            })
            .catch(err => {
                console.log(err);
            });
        },
    },
}
</script>
