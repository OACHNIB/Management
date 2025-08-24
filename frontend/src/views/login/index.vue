<template>
    <div class="common-layout">
        <el-container>
            <el-header class="header_wrapped">
                <div class="header-content">
                    <h3>通用后台管理系统</h3>
                    <span class=""welcome>欢迎您的登录</span>
                </div>
            </el-header>
            <el-main>
                <div class="login-wrapped">
                    <el-card class="box-card">

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
</template>

<script lang="ts" setup>
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
</style>