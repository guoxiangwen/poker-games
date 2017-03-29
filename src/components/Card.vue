
<template>
    <div class="card" v-bind:class="back?'card suit_back':check_suit()" @click="handleClick()">
        <span v-text="back?'':text"></span>
    </div>
</template>

 
<script>
    export default {
        created() {
            this.check_suit();
        },
        name: 'card',
        data() {
            return {
                back: true
            }
        },
        props: {
            type: {
                required: true
            },
            text: {
                default: "A"
            }
        },
        methods: {
            handleClick: function() {
                this.back = !this.back
            },
            check_suit: function() {
                switch (this.type) {
                    case "diamonds":
                        return "card suit_diamonds";
                        break;
                    case "hearts":
                        return "card suit_hearts"
                        break;
                    case "clubs":
                        return "card suit_clubs"
                        break;
                    case "c":
                        return "card suit_spades";
                        break;
                    default:
                        return "suit_spades";
                        break;
                }
            }
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
        transition: .8s ease-in-out;
        &:hover {
            cursor: pointer;
        }
        span {
            // margin-left: 45px;
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
        background: linear-gradient(115deg, transparent 75%, rgba(255, 255, 255, .8) 75%) 0 0, linear-gradient(245deg, transparent 75%, rgba(255, 255, 255, .8) 75%) 0 0, linear-gradient(115deg, transparent 75%, rgba(255, 255, 255, .8) 75%) 7px -15px, linear-gradient(245deg, transparent 75%, rgba(255, 255, 255, .8) 75%) 7px -15px, #36c;
        background-size: 11px 30px;
        transform: rotateY(-180deg);
    }
</style>