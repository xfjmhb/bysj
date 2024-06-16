import { ref } from "vue";
import { defineStore } from "pinia";

//创建保存登录的用户信息仓库
export const useLoginStore = defineStore("loginId",()=>{
    //定义用户信息状态
    const userInfo = ref<any>(JSON.parse(<string>localStorage.getItem("userInfo")))

    //修改用户信息状态的方法
    const changeUserInfo = (params:any) => {
        userInfo.value = params
    }

    //返回用户信息的状态和方法
    return {
        userInfo,
        changeUserInfo
    }
})