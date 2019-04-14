<template>
  <div class="mh-login">
    <div class="login-top">
      <div style="margin:0 160px">
        <div>
          <img src="../../assets/images/logo_black.png" class="logo_black">
          <div class="slider">
            <a href="">首页</a>
            <a href="">物流查询</a>
            <a href="">在线下单</a>
            <a href="">客服中心</a>
            <a href="">关于我们</a>
          </div>
        </div>
      </div>
    </div>
    <div class="login-center">
      <div>
        <img src="../../assets/images/loginleft.jpg" style="height: 770px"/>
      </div>
      <div class="login-box">
        <div class="login-box-top">
          <span>
            <img src="../../assets/images/loginlogo.jpg" class="login-logo">
            <emp class="font-login">会员登录</emp>
          </span>
          <el-button
            type="text"
            @click="registerAccount"
            class="go-register">快速注册
          </el-button>
        </div>
        <div class="login-form">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item prop="account" label="账号">
              <el-input
                type="text"
                v-model="ruleForm.account"
                ref="adminput"
                auto-complete="off"
                placeholder="请输入账号">
              </el-input>
            </el-form-item>
            <el-form-item prop="passWord" label="密码">
              <el-input
                type="password"
                v-model="ruleForm.passWord"
                auto-complete="off"
                placeholder="请输入密码">
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                @click.native.prevent="submitForm"
                style="width: 100%"
                :loading="loading">登录
              </el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="login-box-bottom">
          <span><img src="../../assets/images/line.png" style="width: 145px"></span>
          <span>更多登录方式</span>
          <span><img src="../../assets/images/line.png" style="width: 145px"></span>
          <img src="../../assets/images/expr_q.png" style="width:44px;height: 44px;margin-top: 10px">
        </div>
      </div>
    </div>
    <div class="login-bottom">
      <span>copyright</span>
    </div>
  </div>
</template>

<script>
import {version} from '../../../package'
import {Auth} from '../../store/user/auth'
import {Msg} from '../../tools/message'

export default {
  name: 'Login',
  components: {},
  /** state 默认信息 */
  data () {
    return {
      loading: false,
      ruleForm: {
        account: '',
        passWord: '',
        remember: false
      },
      rules: {
        account: [
          {required: true, message: '请输入注册手机号', trigger: 'blur'},
          {min: 5, max: 12, message: '长度在 5 到 12 个字符', trigger: 'blur'}
        ],
        passWord: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 5, max: 12, message: '长度在 5 到 12 个字符', trigger: 'blur'}
        ]
      }
    }
  },
  created () {
    window.addEventListener ? window.addEventListener('keyup', this.Enter) : null;
    this.getUser()
  },
  /** 计算属性 */
  computed: {},
  /** 完成挂载 */
  mounted () {
    this.$refs['adminput'].focus()
  },
  destroyed () {
    window.removeEventListener('keyup', this.Enter)
  },
  /** 方法事件 */
  methods: {
    Enter () {
      document.onkeyup = (e) => {
        var currKey = 0
        let event = e || window.event;
        currKey = e.keyCode || e.which || e.charCode
        if (currKey === 13) {
          if (event) {
            e.returnValue = false
          } else {
            e.preventDefault()
          }
          this.submitForm()
        }
      }
    },
    getUser () {
      this.ruleForm = Auth.getAccountPwd() || {}
    },
    submitForm () {
      this.$refs['ruleForm'].validate((valid) => {
        // if (valid) {
        this.loading = true
        // this.$store.dispatch('accountLoginSubmit', this.ruleForm).then((res) => {
        //   this.loading = false
        //   if(res.status){
        Msg.success('登录成功');
        this.$router.push({path: '/admin'})
        // }
        // else{
        //   Msg.error("登陆失败");
        // }

        // }).catch(() => {
        //   this.loading = false
        // })
        // } else {
        //   return false
        // }
      })
    },
    registerAccount: function () {
      this.$router.push({path: '/register'})
    }
  },
  /** 监听函数 */
  watch: {
    $route () {
      this.path = this.$route.path.split('/')[2]
    }
  }
}
</script>

<style lang="scss">
  .mh-login {
    width: 100%;
    height: 100%;
  }

  .login-top {
    background-color: white;
    height: 75px;
    width: 100%;
  }

  .login-center {
    height: 770px;
    background-color: #067fc6;

    .login-box {
      border-radius: 10px;
      width: 399px;
      height: 413px;
      margin: 130px 0 0;
      padding: 0 28px 25px;
      background: #fff;
      border: 1px solid #eaeaea;
      box-shadow: 0 0 25px #cac6c6;
      position: absolute;
      top: 100px;
      left: 65%;

      .title {
        text-align: center;
        color: #505458;
      }
    }

    .el-form-item {
      .el-form-item__label {
        color: #3D3D3D;
      }
    }
  }

  input.el-input__inner {
    border: 1px solid #DCDCDC;
    border-radius: 3px !important;
    padding: 1px 0;
    text-indent: 10px;
  }

  .el-form-item__content {
    margin-bottom: 5px;
  }

  .login-box-top {
    width: 100%;
    height: 40px;
    padding-top: 25px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid #cdcfd7;
  }

  .login-box-bottom {
    text-align: center;
  }

  .login-bottom {
    height: 29.6px;
    color: #B3B3B3;
    font-size: 12px;
    background: #7070;
  }

  a {
    margin-right: 55px;
    text-decoration: none;
    color: #202027
  }

  .login-form {
    margin-top: 20px;
    text-align: center;
  }

  .go-register {
    padding: 0 5px 0 0;
    font-size: 14px;
  }

  .slider {
    margin-left: 65px;
    float: left;
    margin-top: 30px;
  }

  .logo_black {
    width: 172px;
    height: 50px;
    margin-top: 10px;
    float: left;
  }

  .login-logo {
    width: 26px;
    height: 25px;
    display: inline-block;
    vertical-align: middle;
  }

  .font-login {
    display: inline-block;
    vertical-align: middle;
    font-size: 20px;
    color: #000;
    padding-left: 10px;
  }
</style>
