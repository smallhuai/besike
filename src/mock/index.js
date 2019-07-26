import { UsersData } from './data/userInfo'

// ajax  拦截器
import axios from 'axios'
// yarn add axios-mock-adapter
import MockAdapter from 'axios-mock-adapter';
import Store from 'storejs'
// 初始化 拦截器对象
let mock = new MockAdapter(axios);

// 模拟get请求 
mock.onPost('/login').reply(config => {
  // 接口传入数据在 config下面获取
  let userMsg = JSON.parse(config.data).data //传入过来的用户数据
  //遍历数据库中所存在的用户信息 
  /*1000表示登录成功,
  2000表示账号不存在
3000表示密码错误
*/
  let flag = true;
  for (var i = 0; i < UsersData.length; i++) {
    if (userMsg.uname == UsersData[i].uname) {
      if (userMsg.upwd == UsersData[i].upwd) {
        return [200, { msg: "登录成功", code: 1000, userMsg: UsersData[i] }]
        flag = false;
      } else {
        return [200, { msg: "密码错误", code: 2000 }]
        flag = false
      }
    }
  }
  if (flag) {
    return [200, { msg: "该账号不存在", code: 3000 }]
  }
})
mock.onPost("/register").reply(config => {
  console.log(config);
  let userInfo = JSON.parse(config.data).data
  let bool = true;
  for (var i = 0; i < UsersData.length; i++) {
    if (userInfo.uname == UsersData[i].uname) {
      return [200, { msg: "该账号已经存在", code: 1000 }];
      bool = false;
    }   
  }
  if (bool) {
    UsersData.push(userInfo);
    return [200, { msg: "注册成功", code: 2000 }];
  }
})

export default axios;	//注意暴露axios


// 在 core/api/index.js  引入  mock暴露 "axios"

// import mock from  "@/mock"


/*
// ,发送ajax模板  例子
 login(data){
    return mock.post("/login",{
      data: data
    })
  }
   login(data){
    return mock.get("/login",{
      params: data
    })
  }
*/










// mock.onGet('/login').reply(config => {
// 	console.log(config)
// 	console.log(UsersData[0])
// 	// 做一个数据效验
// 	var data={
// 				code: 200,
// 				msg: ''
// 			};

// 	if(false) {
// 			data.msg="登陆成功";
// 			data.code=1;
// 	}else{
// 			data.msg="账号或者密码错误";
// 			data.code=500
// 	}
// 	return [200,UsersData[0]];
// });

// mock.onPost('/test').reply(config => {
// 	console.log(config)
// 	console.log(UsersData[0])
// 	// 做一个数据效验
// 	var data={
// 				code: 200,
// 				msg: ''
// 			};

// 	if(false) {
// 			data.msg="登陆成功";
// 			data.code=200;

// 	}else{
// 			data.msg="账号或者密码错误";
// 			data.code=500
// 	}
// 	return [200,UsersData[0]];
// });


// 
