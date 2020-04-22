<template>
  <div style=" width: 100%;height: 100%" class="element">
    <div style="width: 100%;height: 100%">
      <slide :slides="slides" :inv="inv" :style="styleObject"></slide>
    <div class="login-center">
      <div class="login-box">
        <div class="login-box-top">
          <span class="font-login">
           用户登录
          </span>
          <el-button
            type="text"
            @click="registerAccount"
            class="go-register">快速注册
          </el-button>
        </div>
        <div class="login-form">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item prop="account" label="账号"  style="border-color: #2164bd">
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
                style="width: 100%;background: #2164bd;border-color: #2164bd;"
                :loading="loading">登录
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import slide from '../packages/components/slide/slide'
import {Auth} from "../store/user/auth";
import {Msg} from "../tools/message";

export default {
  name: 'home',
  components: {
    slide
  },
  data () {
    return {
      loading:false,
      slides: [
        {'src': require('../assets/images/logo1.jpg')},
        {'src': require('../assets/images/logo2.jpg')},
        {'src': require('../assets/images/logo3.jpg')},
        {'src': require('../assets/images/logo4.jpg')},
        {'src': require('../assets/images/logo5.jpg')},
        {'src': require('../assets/images/logo6.jpg')}
      ],
      inv: 2000,
      styleObject: {
        width: '100%',
        height: '100%'
      },
      oading: false,
      ruleForm: {
        account: '',
        passWord: '',
        remember: false
      },
      rules: {
        account: [
          {required: true, message: '请输入账号', trigger: 'blur'},
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
    window.addEventListener ? window.addEventListener('keyup', this.Enter) : null
    this.getUser()
  },
  mounted () {
    this.$refs['adminput'].focus()
  },
  destroyed () {
    window.removeEventListener('keyup', this.Enter)
  },
  methods: {
    Enter () {
      document.onkeyup = (e) => {
        var currKey = 0;
        let event = e || window.event;
        currKey = e.keyCode || e.which || e.charCode;
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
        if (valid) {
          this.loading = true;
          this.$store.dispatch('accountLoginSubmit', this.ruleForm).then((res) => {
            this.loading = false;
            console.log(res);
            if (res.status) {
              Msg.success('登录成功');
              this.$router.push({path: '/admin'})
            } else {
              Msg.error('账号或密码错误');
            }
          }).catch(() => {
            console.log("error");
            this.loading = false
          })
        } else {
          return false
        }
      })
    },
    registerAccount: function () {
      this.$router.push({path: '/register'})
    }
  }
}
</script>

<style scoped>
  .login-center {
    position: absolute;
    height: 400px;
    width: 300px;
    margin-left: 550px;
    margin-top: -600px;
  }
      .login-box {
        width: 399px;
        padding: 15px 28px 25px;
        background: #fff;
        border: 1px solid #eaeaea;
        -webkit-box-shadow: 0 0 25px #cac6c6;
        box-shadow: 0 0 25px #cac6c6;
        position: absolute;
      }
  .font-login {
    display: inline-block;
    vertical-align: middle;
    font-size: 20px;
    color: #000;
    /*padding-left: 10px;*/
  }
  .go-register {
    color:#2164bd;
    /*padding: 0 5px 0 0;*/
    font-size: 16px;
    float: right;
  }
</style>
