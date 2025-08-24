<template>
    <div class="common-layout">
        <el-container>
            <el-header class="header_wrapped">
                <div class="header-content">
                    <h3>通用后台管理系统</h3>
                    <span class="welcome">欢迎您的登录</span>
                </div>
            </el-header>
            <el-main>
                <div class="login-wrapped">
                    <el-card class="box-card">
                        <el-tabs v-model="activeName" class="demo-tabs" :stretch="true">
                            <el-tab-pane label="登录" name="first">
                                <el-form class="login-form">
                                    <el-form-item label="账号">
                                        <el-input v-model="loginData.account" placeholder="请输入账号"/>
                                    </el-form-item>
                                    <el-form-item label="密码">
                                        <el-input v-model="loginData.password" placeholder="请输入密码"/>
                                    </el-form-item>
                                    <!--底部外壳-->
                                    <div class="footer-wrapped">
                                        <div class="forget-password">
                                            <span class="forget-password-button" @click="openForget">忘记密码</span>
                                        </div>
                                    </div>
                                    <div class="footer-button">
                                        <el-button type="primary">登录</el-button>
                                    </div>
                                    <div class="footer-go-register">
                                        还没有账号？<span class="go-register">马上注册</span>
                                    </div>
                                </el-form>
                            </el-tab-pane>
                            <el-tab-pane label="注册" name="second">
                                <el-form class="">
                                    <el-form-item label="账号">
                                        <el-input v-model="registerData.account" placeholder="账号长度6-12位"/>
                                    </el-form-item>
                                    <el-form-item label="密码">
                                        <el-input v-model="registerData.password" placeholder="密码需长度6-12位含字母数字"/>
                                    </el-form-item>
                                    <el-form-item label="确认密码">
                                        <el-input v-model="registerData.password" placeholder="请再次输入密码"/>
                                    </el-form-item>
                                    <div class="footer-button">
                                        <el-button type="primary">注册</el-button>
                                    </div>
                                </el-form>
                            </el-tab-pane>
                        </el-tabs>
                    </el-card>
                </div>
            </el-main>
            <el-footer class="footer-wrapped">
                <div class="footer-content">
                    <div class="title">
                        <span>阿里云博客专家</span> | 
                        <span>阿里云博客专家</span> | 
                        <span>阿里云博客专家</span> | 
                        <span>阿里云博客专家</span> | 
                    </div>
                </div>
            </el-footer>
    </el-container>
  </div>
  <forget ref="forgetP"></forget>
</template>

<script lang="ts" setup>
import { ref,reactive } from 'vue'
import forget from './components/forget_password.vue'
const activeName = ref('first')

interface formData{
    account:number;
    password:string;
    repassword ? :string;
}

const loginData:formData=reactive({
    account:null,
    password:'',
})

const registerData:formData=reactive({
    account:null,
    password:'',
    repassword:'',
})

const forgetP=ref()

const openForget=()=>{
    forgetP.value.open()
}

</script>

<style lang="scss" scoped>
    .header_wrapped{
        .header-content{
            width:1200px;
            margin:0 auto;
            display:flex;
            justify-content: space-between;
            align-items: center;
            .welcome{
                font-size:13px;
            }
        }
    }

    .el-main{
        background-image:url('@/assets/code.png');
        height:600px;
        --el-main-padding:0;

        .login-wrapped{
            width:1200px;
            height:600px;
            margin:0 auto;

            .box-card{
                width:350px;
                height:375px;
                float:right;
                position:relative;
                top:14%;

                .login-form{
                    .footer-wrapped{
                        display:flex;
                        flex-direction:column;
                        .forget-password{
                            display:flex;
                            justify-content:flex-end;
                            margin:10px;

                            .forget-password-button{
                                font-size:12px;
                                color:#409eff;
                                cursor:pointer;
                            }

                        }
                    }

                    .footer-go-register{
                        font-size:12px;
                        margin:12px 0;
                        display:flex;
                        justify-content: center;

                        .go-register{
                            font-size:12px;
                            color:#409eff;
                            cursor:pointer;
                        }
                    }

                    .footer-button{
                        width:100%;
                        display:flex;
                        justify-content:center;
                    }

                }

            }
        }
    }
    .footer-wrapped{
        margin-top:10px;
        .footer-content{
            width:1200px;
            margin:0 auto;
            display:flex;
            justify-content: center;
            align-items: center;

            .title{
                color:#666;
            }

            span{
                color:#666;
                font-size:12px;
            }
        }
    }

    .el-form{
        margin-top:30px;
    }
    
    :deep(.el-tabs-item){
        color:#333;
        font-size:18px;
    }

    :deep(.el-input__inner){
        height:40px;
    }

    :deep(.el-form-item__label){
        height:40px;
        line-height:40px;
    }

    :deep(.el-button){
        width:300px;
        height:45px;
        font-size:16px;
    }

</style>