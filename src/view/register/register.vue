<template>
  <div class="mh-register">
    <div class="register-center">
      <div class="register-box">
        <div class="register-box-top">
          <img src="../../assets/images/register_tit.png">
        </div>
          <a class="register-go-login" href="./home">登录</a>
        <div class="form">
        <el-form :model="formData" :rules="rules" ref="formData">
          <el-form-item prop="userName">
            <el-input
              v-model="formData.userName"
              placeholder="请设置账号">
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              v-model="formData.password"
              placeholder="请输入密码">
            </el-input>
          </el-form-item>
          <el-form-item prop="rePassWord">
            <el-input
              type="password"
              v-model="formData.rePassWord"
              auto-complete="off"
              placeholder="请再次输入密码">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              class="primary_button"
              type="primary"
              @click="registerAccount"
              :loading="loading">注册
            </el-button>
          </el-form-item>
        </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {RegisterApi} from './registerApi'
import {Msg} from '../../tools/message'

export default {
  components: {},
  data () {
    var checkPass = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('请再次输入密码'))
      } else if (value !== this.formData.password) {
        return callback(new Error('两次密码不一致'))
      } else {
        return callback()
      }
    }
    var checkAccount = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('请输入账号'))
      } else if ((value.trim().length < 5) || (value.trim().length > 12)) {
        return callback(new Error('长度在 5 到 12 个字符'))
      } else if (value !== '') {
        this.formData.account = value
        RegisterApi.checkAccount(this.formData).then(res => {
          if (res.data.data) {
            return callback(new Error('账号已存在'))
          } else {
            return callback()
          }
        })
      } else {
        return callback()
      }
    }
    return {
      loading: false,
      formData: {
        userName: '',
        password: '',
        account: '',
        rePassWord: ''
      },
      rules: {
        userName: [{validator: checkAccount, trigger: 'blur', required: true}
        ],
        password: [
          {required: true, message: '请输入登录密码', trigger: 'focus'},
          {min: 5, max: 12, message: '长度在 5 到 12 个字符', trigger: 'focus'}
        ],
        rePassWord: [{validator: checkPass, trigger: 'blur', required: true}]
      }
    }
  },
  created () {
  },
  /** 计算属性 */
  computed: {},
  /** 完成挂载 */
  mounted () {
  },
  destroyed () {
  },
  /** 方法事件 */
  methods: {
    returnLogin: function () {
      this.$router.push({path: '/home'})
      
    },
    registerAccount: function () {
      this.$refs['formData'].validate((valid) => {
        if (valid) {
          this.formData.account = this.formData.userName
          this.loading = true
          RegisterApi.register(this.formData).then((res) => {
            this.loading = false
            if (res.data.data) {
              Msg.success('注册成功');
              this.returnLogin();
            } else {
              Msg.error('注册失败')
            }
          }).catch(() => {
            this.loading = false
          })
        } else {
          return false
        }
      })
    }
  },
  /** 监听函数 */
  watch: {}
}
</script>

<style lang="scss">
  .mh-register {
    width: 100%;
    height: 100%;
    background: url("../../assets/images/loginBackground.png");
    background-size: cover;
    margin-top: -20px;
  }
  .register-center {
    height: 700px;
    margin: 20px auto;
  }
    .register-box {
      border-radius: 10px;
      width: 661px;
      height: 510px;
      margin-top: 100px;
      margin-left: 400px;
      padding: 0 28px 25px;
      background: #fff;
      border: 1px solid #fff;
      -webkit-box-shadow: 0 15px 40px rgba(51, 162, 247, 0.2);
      box-shadow: 0 15px 40px rgba(51, 162, 247, 0.2);
      position: absolute;
    }
      .title {
        text-align: center;
        color: #505458;
      }

      .el-input__inner{
          width: 400px;
          height: 50px;
          margin-top: 15px;
          margin-bottom: 10px;
      }

    .el-form-item {
      .el-form-item__label {
        color: #3D3D3D;
      }
    }


  .register-go-login {
    background: url("../../assets/images/go-login.png");
    color: white;
    width: 92px;
    height: 49px;
    display: block;
    position: absolute;
    top: 35px;
    left: 638px;
    line-height: 54px;
    letter-spacing: 2px;
    text-decoration:none;
    text-indent: 33px;
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

  .register-box-top {
    text-align: center;
  }
  .form{
    text-align: center;
    .el-form-item__error{
      margin-left: 140px;
    }
  }
  .primary_button{
    background-color: #33a2f7;
    width: 200px ;
    height:48px;
    border-radius: 25px;
    border: none;
    font-size: 16px;
    margin-top: 20px;
  }
</style>
