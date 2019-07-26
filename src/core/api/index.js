import request from "./http"
import mock from "@/mock"
class Apis {
    // json1811.ashx?v=1562741893374&c=NewIndexController&m=index
    getIndexData() {
        return request({
            method: 'get',
            url: '/json1811.ashx',
            params: {
                "v": "1562741438965",
                "c": "NewIndexController",
                "m": "index"
            }
        });
    }
    //商品详情页的接口  http://m.bestcake.com/json1811.ashx?v=1563282962961&c=NsCakeCenter&m=GetJdListNew
    // GetCakeByName() {
    //     return request({
    //         method: 'get',
    //         url: '/json1811.ashx',
    //         params: {
    //             "v": "1563282362269",
    //             "c": "Product",
    //             "m": "GetCakeByName"
    //         }
    //     });
    // }
    GetCakeByName() {
        return request({
            method: 'get',
            url: '/json1811.ashx',
            params: {
                "v": "1563282962961",
                "c": "NsCakeCenter",
                "m": "GetJdListNew"
            }
        });
    }
    getgooddetail(params) {
        return request({
            method: 'get',
            url: '/json1811.ashx',
            params
        });
    }
    login(data) {
        return mock.post('/login',{
            data
        })
    }
    register(data){
        return mock.post('/register',{
            data
        })
    }
}
export default new Apis();