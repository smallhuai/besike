import Vuex from "vuex";
import Vue from "vue";
import apis from "@/core/api"
import { Indicator } from 'mint-ui';
import Store from 'storejs'
Vue.use(Vuex);
// Vuex作用是什么? 全局状态管理

//理解为 组件内部  data 属性
const state = {
    City: "上海",
    carlist: []
}
//定义  methods 同步方法   视图调用     this.$store.commit("xxxx",val)
const mutations = {
    // 没有第三个参数,购物车的逻辑,问题使得传入参数的时候,应该用传入参数的id与数组中的id进行比较
    add(state, data) {
        console.log(data);
        let goodInfo = {
            City: state.City,
            SupplyNo: data.SupplyNo,
            Name: data.Name,
            CurrentPrice: data.CurrentPrice,
            id: data.Id || data.ID,
            Size: data.Size,
            Num: data.Num || 1,
            Sweet:data.Sweet
        }
        console.log(goodInfo.Num);
        let flag = true;
        if (state.carlist.length != 0) {
            state.carlist.map((item) => {
                if (item.id == goodInfo.id) {
                    item.Num=item.Num+goodInfo.Num;
                    flag = false;
                }
            })
        }
        if (flag) {
            state.carlist.push(goodInfo)
        }
        //储存数据到Store中
        Store.set("carlist", state.carlist)
    },
    vuexInit() {
        Store.get("cartlist");
    }
}
// 定义 compunted  属性计算
const getters = {
    // count(state){
    //     return  state.num*state.price;
    // }
}
// --------------
//定义 异步方法 通用接口调用    视图调用     this.$store.dispatch("xxxx",val)
const actions = {
    // test(context,data){
    //     console.log(context)  //可以调用  mutations 方法    actions调actions自己的方法,也可以使用 getters,也可以使用state
    //     // apis.getItem().then((res)=>{
    //         // console.log(res)
    //     // })
    // },
}
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})