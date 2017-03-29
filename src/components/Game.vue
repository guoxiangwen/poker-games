<template>
    <div id="game" class="app-container">
        <card text="J" type="diamonds"></card>
        <card text="Q" type="hearts"></card>
        <card text="K" type="clubs"></card>
        <card text="A" type="spades"></card>
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
        components: {
            Card
        }
    }
</script>

<style lang="less" scoped>
    .app-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    .card-container {
        margin-top: 100px;
        box-sizing: border-box;
        width: 100%;
        display: flex;
        flex-flow: row;
        flex-wrap: wrap;
        // align-items: center;
        justify-content: space-between;
    }
    main>div {
        box-sizing: border-box;
        width: 100%;
        min-height: 500px;
        padding: 20px 20px;
        display: flex;
        flex-flow: row;
        flex-wrap: wrap;
        // align-items: center;
        justify-content: space-between;
    }
}
</style>