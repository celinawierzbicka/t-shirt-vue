<template>
    <div class="t-shirt-preview" :style="{background: 'url(' + require(`~/assets/${side}.jpg`) + ')' }" >
        <img class="print" :src="url">
    </div>
</template>

<script>

export default {
    props: {
        url: {
            type: String,
            required: true
        },
        side: {
            type: String,
            default: 'front'
        }
    }
}
</script>

<style lang="scss" scoped>
    .t-shirt-preview {
        width: 300px;
        height: 300px;
        background-repeat: no-repeat !important;
        background-size: cover !important;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .print {
        width: 100px;
        height: 100px;
    }
</style>