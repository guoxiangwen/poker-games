<template>
    <div class="card" v-bind:class="back?'suit_back':'suit_clubs'">
        <span v-bind:text="back?'':'options.text'"></span>
    </div>
</template>


<script>
export default {
    name: 'card',
    data(){
        return{
            back:false
        }
    },
    props:{
        options:{
            type:Object,
            default(){
                return{
                    type:"suit_back",
                    text:"7"
                }
            }
        }
    },
    method:{

    }
}
</script>

<style lang="less" scoped>
.card {
    position: relative;
    margin-right: 10px;
    width: 150px;
    height: 220px;
    border-radius: 10px;
    background: #fff;
    -webkit-box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.3);
    box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.3);
    &:hover {
        cursor: pointer;
    }
    span {
        margin-left: 45px;
        line-height: 220px;
        vertical-align: middle;
        font: 100px/220px Georgia, Times New Roman, serif;
    }
}


.suit_content(@content, @color) {
    content: @content;
    color: @color
}

.suit_position_before() {
    font-size: 35px;
    position: absolute;
    top: 5px;
    left: 5px;
}

.suit_position_after() {
    font-size: 35px;
    position: absolute;
    bottom: 5px;
    right: 5px;
}


.suit_diamonds {
    &:before {
        .suit_position_before();
        .suit_content("♦", #ff0000)
    }
    &:after {
        .suit_position_after();
        .suit_content("♦", #ff0000)
    }
}


.suit_hearts {
    &:before {
        .suit_position_before();
        .suit_content("♥", #ff0000)
    }
    &:after {
        .suit_position_after();
        .suit_content("♥", #ff0000)
    }
}


.suit_clubs {
    &:before {
        .suit_position_before();
        .suit_content("♣", #000)
    }
    &:after {
        .suit_position_after();
        .suit_content("♣", #000)
    }
}


.suit_spades {
    &:before {
        .suit_position_before();
        .suit_content("♠", #000)
    }
    &:after {
        .suit_position_after();
        .suit_content("♠", #000)
    }
}

.suit_back {
    background: #ff0000;
}
</style>