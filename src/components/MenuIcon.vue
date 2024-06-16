<template>
    <div class="menuIcon">
        <el-icon :size="size" :color="color">
            <!-- <Edit/> -->
            <!-- component；组件标签 is属性指定组件名称 -->
            <component :is="name"></component>
        </el-icon>
    </div>
</template>

<script setup lang="ts">
//接收父组件传递过来的数据
defineProps<{
    name:any
    size ?:string
    color ?:string
}>()

</script>

<style lang="less" scoped>

</style>