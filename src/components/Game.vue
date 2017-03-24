<template>
    <div id="game">
    {{title}}
    <card></card>
    </div>
</template>

<script>
import Card from './Card.vue'
export default {
    name: 'game',
    data() {
        return {
            title: 'poker'
        }
    },
    components:{
        Card
    }
}
</script>

<style lang="less" scoped>
</style>