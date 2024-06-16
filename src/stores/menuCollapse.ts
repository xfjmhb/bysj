import { ref } from 'vue'
import { defineStore } from 'pinia'

//导出菜单仓库
export const useMenuStore = defineStore('menuId', () => {
    //定义菜单状态
    const menuBoo = ref<boolean>(false)

    //修改菜单状态的方法
    const changeMenuBoo = () =>{
        menuBoo.value = !menuBoo.value
    }

    //返回状态和方法
    return {
        menuBoo,
        changeMenuBoo
    }
})
