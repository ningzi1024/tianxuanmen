<template>
    <div class="wrap">
        <div class="content">
            <div class="nav">
                <a href="/home" class="home">首页</a>
                <a href="/aboutUs" class="on">关于玄天门</a>
                <a href="/show">道教文化</a>
                <a href="/">实修参悟</a>
                <a href="/product">精品法器</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'aboutUs'
}
</script>

<style scoped lang="less">
.wrap {
    margin: 0 auto;
    text-align: center;
    background: linear-gradient(to right, rgb(31, 28, 44), rgb(146, 141, 171));
    .content {
        padding: 10px auto;
        margin: 0 auto;
        width: 960px;
        min-height: 680px;
        .nav {
            overflow: hidden;
            background: #f8f8f8;
            border-radius: 10px;

            a {
                display: inline-block;
                text-decoration: none;
                font-weight: 600;
                font-size: 16px;
                padding: 20px 15px;
                float: left;
                margin-right: 30px;
                color: #333;

                &.home {
                    background: #06f;
                    color: #fff;
                }

                &.on {
                    border-radius: 10px;
                    background: rgba(68, 79, 187, .8);
                    color: #fff;
                }

                &:hover {
                    background: rgba(68, 79, 187, .8);
                    color: #fff;
                    border-radius: 10px;
                }

                &.home:hover {
                    background: #06f;
                    color: #fff;
                    border-radius: 10px 0 0 10px;
                }
            }
        }
    }
}
</style>