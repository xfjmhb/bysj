//自定义密码校验规则
export const checkPass = (rule: any,value: any,callback:any)=>{
    if(value === ""){
        callback(new Error("请输入密码"))
    }else{
        //正则校验6-18位数字、大小写字母、特殊符号
        const regPwd = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])[0-9!@#$%^&*A-Za-z]{6,18}$/
        if(!regPwd.test(value)){
            callback(new Error("密码应为6-18位数字、大小写字母、特殊符号"))
        }else{
            callback()
        }
    }
}