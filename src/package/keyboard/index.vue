<template>
    <van-popup 
        v-model:show="isShow" 
        position="bottom" 
        round 
        :overlay="true"
        close-on-click-overlay
    >   
        <!-- 模块: 需要添加车辆才会出现的部分 -->
        <div class="keyboard-header-container">
            <!-- 模块: 头部 -->
            <header>
                <p>添加车辆</p>
                <!-- 关闭按钮 -->
                <p class="keyboard-close-icon"><van-icon name="cross" /></p>
            </header>
            <!-- 模块: 车牌号输入框 -->
            <div class="keyboard-control">
                <p class="keyboard-label">车牌</p>
                <!-- 部分: 输入框 -->
                <div class="keyboard-content">
                    {{content == "" ? '请输入车牌号' : content}}
                </div>
                <van-button type="default" class="keyboard-add-button" @click="add">添加</van-button>
            </div>
            <!-- 模块: 车辆类型选择 -->
            <div class="keyboard-control">
                <p class="keyboard-label">类型</p>
                <!-- 部分: 类型选择 -->
                <ul class="keyboard-type">
                    <li v-for="(item, index) in staticTypes" 
                        :key="item.name" 
                        :style="{background: item.color}"
                        @click="doCheckType(index)"
                    >
                        {{item.name}}
                        <div class="type-active" v-show="indexType == index">
                            <!-- 三角 -->
                            <div class="active-tripe"></div>
                            <!-- 对勾 -->
                            <van-icon name="success" />
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <!-- 模块: 省份选择 -->
        <div class="keyboard-provinces" v-show="content.length != 0">
            <!-- 单个省份样式 -->
            <div v-for="(item, index) in staticProvince" :key="index" 
                :class="item != '' ? 'only-key' : 'empty-key'"
                @click=""
                >
                {{item}}
            </div>
            <!-- 删除按钮 -->
            <div class="delete-key" @click="">
                <img src="@/assets/images/keyboard/keyboard_delete.png" alt="">
            </div>
        </div>

        <!-- 模块: 数字 & 字母选择 -->
        <div class="keyboard-number-letter" v-show="content.length == 0">
            <!-- 模块: 数字选择 -->
            <div class="keyboard-number">
                <div v-for="(item, index) in staticNumber" 
                    :key="index" 
                    :class="{'only-key': true, 'single-disabled': false}"
                    @click=""
                >
                    {{item}}
                </div>
            </div>
            <!-- 模块: 字母选择 -->
            <div class="keyboard-letter">
                <!-- 单个字母样式 -->
                <div v-for="(item, index) in staticLetter" :key="index" 
                    :class="{'only-key': item != '', 'empty-key': item == '', 'letter-disabled': false}"
                    @click=""
                >
                    {{item}}
                </div>
                <!-- 删除按钮 -->
                <div class="delete-key" @click="">
                    <img src="@/assets/images/keyboard/keyboard_delete.png" alt="">
                </div>
            </div>
        </div>


    </van-popup>
</template>

<script lang="ts" setup>
    import { ref, toRefs, readonly } from "vue";
    import { vehicleType } from "./model";

    const props = defineProps({
        //状态: 组件容器开关
        isShow: {
            type: Boolean
        }
    });

    //静态值: 车辆类型
    const staticTypes = readonly<vehicleType[]>([
        { name: "黄牌", color: "#FFC11D" },
        { name: "绿牌", color: "#66D58D" },
        { name: "蓝牌", color: "#1677FE" },
    ])
    //静态值: 省份
    const staticProvince = readonly<string[]>([
        "京", "沪", "浙", "苏", "粤", "鲁", "晋", "冀","豫", "川", "渝", "辽", "吉",
        "黑", "皖", "鄂","津", "贵", "云", "桂", "琼", "青", "新", "藏","蒙", "宁", 
        "甘", "陕","闽", "赣", "湘", "", "",
    ]);
    //静态值: 数字
    const staticNumber = readonly<string[]>([
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
    ]);
    //静态值: 字母
    const staticLetter = readonly<string[]>([
        "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q",
        "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", ""
    ]);

    //状态值: 组件开关
    const { isShow } = toRefs(props);
    //数据值: 车牌号输入框内容
    const content = ref<string>("");
    //索引值: 当前选中的类型 (默认: 黄牌 0)
    const indexType = ref<number>(0);

    //操作: 点击添加
    const add = () => {

    }
    //操作: 点击类型
    const doCheckType = (index: number) => {
        indexType.value = index;
    }
</script>

<style lang="scss" scoped>
    @import "./index.scss";
</style>