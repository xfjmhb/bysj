<template>
  <div class="common-layout">
    <el-container>
      <el-header style="height: 300px">
        <!-- 走马灯 -->
        <el-carousel :interval="4000" type="card" height="300px">
          <el-carousel-item v-for="item in 6" :key="item">
            <h3 text="2xl" justify="center">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </el-header>
      <el-main>
        <el-divider />
        <!-- hot -->
        <div>
          <ul>
            <li>
              <el-card style="max-width: 480px">
                <div class="title">熊猫</div>
                <img
                  src="D:\cs1\demo1\src\assets\img\panada.jpeg"
                  style="width: 200px"
                />
                <div style="width: 200px">
                  大熊猫（学名：Ailuropoda
                  melanoleuca）：属于熊科、大熊猫属哺乳动物，是中国特有种。大熊猫仅有两个亚种
                  ，四川亚种和秦岭亚种，主要栖息地是中国四川、陕西和甘肃的山区。
                </div>
              </el-card>
            </li>
            <li>
              <el-card style="max-width: 480px">
                <div class="title">熊猫</div>
                <img
                  src="D:\cs1\demo1\src\assets\img\panada.jpeg"
                  style="width: 200px"
                />
                <div style="width: 200px">
                  大熊猫（学名：Ailuropoda
                  melanoleuca）：属于熊科、大熊猫属哺乳动物，是中国特有种。大熊猫仅有两个亚种
                  ，四川亚种和秦岭亚种，主要栖息地是中国四川、陕西和甘肃的山区。
                </div>
              </el-card>
            </li>
            <li>
              <el-card style="max-width: 480px">
                <div class="title">熊猫</div>
                <img
                  src="D:\cs1\demo1\src\assets\img\panada.jpeg"
                  style="width: 200px"
                />
                <div style="width: 200px">
                  大熊猫（学名：Ailuropoda
                  melanoleuca）：属于熊科、大熊猫属哺乳动物，是中国特有种。大熊猫仅有两个亚种
                  ，四川亚种和秦岭亚种，主要栖息地是中国四川、陕西和甘肃的山区。
                </div>
              </el-card>
            </li>
            <li>
              <el-card style="max-width: 480px">
                <div class="title">熊猫</div>
                <img
                  src="D:\cs1\demo1\src\assets\img\panada.jpeg"
                  style="width: 200px"
                />
                <div style="width: 200px">
                  大熊猫（学名：Ailuropoda
                  melanoleuca）：属于熊科、大熊猫属哺乳动物，是中国特有种。大熊猫仅有两个亚种
                  ，四川亚种和秦岭亚种，主要栖息地是中国四川、陕西和甘肃的山区。
                </div>
              </el-card>
            </li>
          </ul>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import type { ImageProps } from "element-plus";

const fits = [
  "fill",
  "contain",
  "cover",
  "none",
  "scale-down",
] as ImageProps["fit"][];
const url =
  "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg";
</script>

<style lang="less" scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
//

ul {
  overflow: hidden;
}

li {
  float: left;
  margin-left: 4%;
  list-style: none;
}

.title {
  text-align: center;
  border-bottom: 1px solid #95d475;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
}
</style>
