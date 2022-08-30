import globals from "@/globals";
// import axios from "axios";

/**
 * 오류 정보를 로그 서버로 전송
 */
export default {
    sendMessage(code, msg) {
        let memberId = 0;
        try {
            //
        } catch (e) {
            console.log(e);
        }

        const request = {
            memberId: memberId,
            module: globals.currentPath,
            errorCode: code,
            errorMsg: msg
        };

        // TODO: 짧은 시간 동안 반복 발생하는 오류 한 번에 처리하기
        try {
            console.log(request);
            // axios.post(process.env.VUE_APP_API_BASEURL + 'error', request);
        } catch (e) {
            console.log(e);
        }
    }
}