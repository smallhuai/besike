<template>
  <div id="login">
    <div class="toMy">
      <span>&lt;</span>
    </div>
    <div class="centerContent">
      <div class="loginfast">快速注册</div>
      <div class="tel">手机号</div>
      <p class="userphone">
        <span>+86</span>
        <label for>
          <input type="text" v-model="userInfo.uname" />
        </label>
      </p>
      <div class="password">
        <p>
          <span>密码</span>
          <span>隐藏</span>
        </p>
        <p>
          <input type="password" v-model="userInfo.upwd" />
        </p>
      </div>
      <div class="btn">
        <span @click="usersMsg">注册</span>
      </div>
    </div>
    <div></div>
    <router-view></router-view>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      userInfo: {
        uname: "",
        upwd: "",
        avatar: "https://avatars0.githubusercontent.com/u/22588905?v=4&s=120"
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
    //获取用户信息的函数
    usersMsg() {
      let userInfo = {
        uname: this.userInfo.uname,
        upwd: this.userInfo.upwd,
        avatar: this.userInfo.avatar
      };
      if (this.userInfo.uname.length != 11) {
        Toast("请输入正确的手机号码");
      } else {
        this.$apis.register(userInfo).then(res => {
            if(res.data.code==2000){
                this.$router.push("/login")
            }else{
                Toast("该账号已存在");
            }
        });
      }
    }
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang=scss>
#login {
  color: #fff;
  background: rgba(54, 209, 220, 1);
  height: r(667);
  .toMy {
    height: r(44);
    font-size: r(18);
    line-height: r(44);
    padding-left: r(20);
    box-sizing: border-box;
  }
  /* 中间账号登录 */
  .centerContent {
    padding: 0 r(22);
    box-sizing: border-box;
    .loginfast {
      font-size: r(40);
      height: r(50);
      line-height: r(50);
    }
    .tel {
      height: r(22);
      line-height: r(22);
    }
    .userphone {
      height: r(42);
      line-height: r(42);
      border-bottom: 1px solid #ffffff;
      span:nth-child(1) {
        display: inline-block;
        height: r(25);
        width: r(40);
        background-color: #fff;
        line-height: r(25);
        color: rgb(21, 127, 131);
        text-align: center;
      }
      label {
        input {
          width: r(283);
          height: r(25);
          border: none;
          color: #fff;
          background: rgba(54, 209, 220, 1);
        }
      }
    }
    .password {
      height: r(64);
      border-bottom: 1px solid #ffffff;
      p:nth-child(1) {
        margin-top: r(20);
        height: r(25);
        line-height: r(25);
        span:nth-child(2) {
          float: right;
        }
      }
      p:nth-child(2) {
        input {
          color: #fff;
          height: r(25);
          width: 100%;
          border: none;
          background: rgba(54, 209, 220, 1);
        }
      }
    }
    /* 登录和注册按钮 */
    .btn {
      margin-top: r(10);
      span {
        display: inline-block;
        width: r(130);
        height: r(40);
        line-height: r(40);
        text-align: center;
        border: 1px solid #fff;
        border-radius: r(20);
        font-size: r(18);
      }
      span:nth-child(2) {
        float: right;
      }
    }
  }
}
</style>