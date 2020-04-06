<template>
    <div class="page-info">
        <h2 class="page-info-title">{{title}}</h2>
        <p class="page-info-body"><i>- {{body}}</i></p>
        <hr>
    </div>
</template>

<script>
export default {
    name: 'PageInfo',
    props: {
        title: String,
        body: String
    }
}
</script>

<style lang='scss' scoped>
@import '../../theme/colors.scss';
//the information about the page shown at the top
.page-info{
    padding: 0px 0px 10px 0px;

    .page-info-body{
        color: $des-color-text-dark;
        padding-left: 1%;
    }
}
</style>
