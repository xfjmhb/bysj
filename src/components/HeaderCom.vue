<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    router="true"
  >
    <el-menu-item index="/">首页 </el-menu-item>
    <el-sub-menu index="2">
      <template #title>宠物介绍 </template>
      <el-menu-item index="/what"> 宠物是什么 </el-menu-item>
      <el-menu-item index="/qiyuan">宠物的起源 </el-menu-item>
      <el-menu-item index="/yiyi">宠物的好处和意义 </el-menu-item>
    </el-sub-menu>
    <el-menu-item index="/pingzhong">宠物及品种 </el-menu-item>
    <el-menu-item index="/jiaoliu">交流 </el-menu-item>
    <el-menu-item index="5">
      <el-avatar :size="30" :src="circleUrl" />
      <el-dropdown>
        <span class="el-dropdown-link">
          {{ loginStore.userInfo.username }}
          <el-icon class="el-icon--right">
            <CaretBottom />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item @click="clickOut">注销</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-menu-item>
  </el-menu>

  <!-- 头像组件 -->
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useLoginStore } from "@/stores/login";

const activeIndex = ref("1");
const activeIndex2 = ref("1");

const router = useRouter();
const loginStore = useLoginStore();
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const circleUrl = ref<string>(
  "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
);

//取出用户缓存信息
const userInfo = ref(JSON.parse(<string>localStorage.getItem("userInfo")));

//点击注销
const clickOut = () => {
  //清楚pinia和缓存中的用户信息
  loginStore.changeUserInfo(null);
  localStorage.removeItem("userInfo");
  //跳转登录页
  router.push("/login");
};
</script>

<style lang="less" scoped>
.menu {
  .el-menu {
    border-right: none;
  }
}
</style>
