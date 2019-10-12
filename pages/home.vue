<template>
    <el-container>
        <div class="banner">
<!--            <el-image :src="src" alt="" lazy></el-image>-->
            <img src="../assets/image/banner.png" alt="">
        </div>
        <el-main>
            <div class="nav">
                <a href="/home" class="home">首页</a>
                <a href="/aboutUs">关于玄天门</a>
                <a href="/show">道教文化</a>
                <a href="/">实修参悟</a>
                <a href="/product">精品法器</a>
            </div>
        </el-main>
        <el-footer>
            footer
        </el-footer>
    </el-container>
</template>

<script>
import { Container, Footer, Main, Image} from 'element-ui'
export default {
    name:'home',
    comments:{
        [Container.name]: Container,
        [Footer.name]:Footer,
        [Main.name]:Main,
        [Image.name]: Image
    },
    data(){
        return {
            src: 'http://localhost:3000/assets/image/banner.png'
            // src:'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
        }
    }
}
</script>

<style scoped lang="less">
.el-container{
    text-align: center;
    margin: 0 auto;
    background: #F5F5F5;
    .banner{
        width: 100%;
        padding: 0;
        img{
            max-width:100%;
        }
    }
    .el-main{
        width: 960px;
        margin: 0 auto;
        .nav{
            overflow: hidden;
            background: #f8f8f8;
            border-radius: 10px;
            margin-top:-21px;
            a{
                display: inline-block;
                text-decoration: none;
                font-weight: 600;
                font-size: 16px;
                padding: 20px 15px;
                float: left;
                margin-right: 30px;
                color: #333;
                &.home{
                    background: #06f;
                    color: #fff;
                }
                &.on{
                    border-radius: 10px;
                    background: rgba(68,79,187,.8);
                    color: #fff;
                }
                &:hover{
                    background: rgba(68,79,187,.8);
                    color: #fff;
                    border-radius: 10px;
                }
                &.home:hover{
                    background: #06f;
                    color: #fff;
                    border-radius: 10px 0 0 10px;
                }
            }
        }
    }
}
</style>