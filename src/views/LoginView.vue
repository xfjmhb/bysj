<template>
  <div class="login">
    <div class="content">
      <h3><span>欢迎登录</span></h3>
      <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules">
        <el-form-item prop="username">
          <el-input
            v-model="ruleForm.username"
            style="width: 240px; margin: 0 auto"
            placeholder="请输入用户名"
            :prefix-icon="User"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="ruleForm.password"
            style="width: 240px; margin: 0 auto"
            placeholder="请输入密码"
            :prefix-icon="Lock"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            style="width: 220px; margin: 30px auto"
            @click="submitForm(ruleFormRef)"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from "@element-plus/icons-vue";
import { ref, reactive } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { useRouter } from "vue-router";
import { useLoginStore } from "@/stores/login";
//导入工具 - 密码校验
//自定义密码校验规则
import { checkPass } from "@/assets/js/utils";

const loginStore = useLoginStore();
const router = useRouter();

//定义表单标识
const ruleFormRef = ref<FormInstance>();

//定义表单model指定的数据
const ruleForm = reactive({
  username: "",
  password: "",
});

//定义表单验证规则
const rules = reactive<FormRules>({
  username: [
    {
      required: true,
      message: "请输入用户名",
      trigger: "blur",
    },
    {
      min: 2,
      max: 20,
      message: "用户名应在2-20个长度",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      validator: checkPass,
      trigger: "blur",
    },
  ],
});

//点击登录按钮进行表单提交
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      //校验通过
      //保存用户信息至pinia仓库
      loginStore.changeUserInfo(ruleForm);
      //保存用户信息至localStorage的浏览器缓存中
      localStorage.setItem("userInfo", JSON.stringify(ruleForm));
      //跳转首页
      router.push("/");
    } else {
      console.log("error submit!", fields);
    }
  });
};
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100vh;
  background: url(../assets/img/animal-tp.jpg);
  background-size: cover;
  position: relative;
  .content {
    width: 400px;
    height: 300px;
    background-color: #ffffff;
    position: absolute;
    left: 40%;
    top: 20%;
    //盒阴影
    box-shadow: 0 0 5px;
    //圆角
    border-radius: 28px;
    padding: 20px 10px;
    h3 {
      text-align: center;
      font-size: 25px;
      margin-bottom: 30px;
      span {
        border-bottom: 3px solid #409eff;
      }
    }
    .el-form {
      // :deep  修改elementplus底层样式,进行样式穿透
      :deep .el-input__wrapper {
        box-shadow: none;
        border-bottom: 1px solid #cccccc;
        border-radius: 0;
      }
      :deep .el-form-item__error {
        left: 70px;
      }
    }
  }
}
</style>
