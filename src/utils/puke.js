/**
 * 扑克算法库
 */
class Puke {
    /**
     * 对象深拷贝
     * @param {*} source 
     */
    static deepClone(source) {
            if (Object.prototype.toString.call(source) != '[object Array]' &&
                Object.prototype.toString.call(source) != '[object Object]') {
                throw new Error("请传入数组或对象")
            } else {
                let result = Object.prototype.toString.call(source) === '[object Array]' ? [] : {}
                for (let key in source) {
                    result[key] = typeof source[key] === 'object' ? this.deepClone(source[key]) : source[key]
                }
                return result;
            }
        }
        /**
         * 洗牌算法
         * @param {*arr} arr 
         */
    static shuffle(arr) {
            if (!arr) {
                throw '错误，请传入正确数组';
            }

            var newArr = this.deepClone(arr);
            for (var i = newArr.length - 1; i >= 0; i--) {
                // 随机范围[0,1)
                var randomIndex = Math.floor(Math.random() * (i + 1));
                var itemAtIndex = newArr[randomIndex];
                newArr[randomIndex] = newArr[i];
                newArr[i] = itemAtIndex;
            }
            return newArr;
        }
        /**
         * 生成一副扑克牌
         */
    static generatePoker() {
            // 第一步:定义四个花色，这里就用中文了
            // var cardType = ['♠', '♥', '♣', '♦'];
            //这里为了方便和react css结合判断用className来表示四中花色
            var cardType = ['spades-', 'hearts-', 'clubs-', 'diamonds-']

            // 第二步:定义13张普通牌
            var cardValue = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

            // 第三步:定义2张特殊牌，大王与小王
            var specialCard = ['大王', '小王'];

            // 第四步:根据上述数组生成54张牌
            var allCards = [];
            for (var i = 0, len1 = cardType.length; i < len1; i++) {
                for (var j = 0, len2 = cardValue.length; j < len2; j++) {
                    allCards.push(cardType[i] + cardValue[j]);
                }
            }
            // allCards = allCards.concat(specialCard);

            return allCards;
        }
        /**
         * 开始发牌
         * @param {*每人发的张数} num 
         * @param {*几个人玩} people 
         */
    static dealPoker(num, people) {
            if (!num || num > 54 || typeof(num) !== 'number') {
                throw '错误，传入的数字非法，只能是[1-54]';
            }
            // 生成扑克牌
            var allCards = this.generatePoker();

            // 洗牌-不污染原先的数组
            var randomCards = this.shuffle(allCards);
            //开始发牌
            let cardList = randomCards.splice(0, num * people)

            let result = [];
            //todo list
            for (let p = 1; p <= people; p++) {
                result[p] = cardList.splice(0, num)
            }
            return result;
        }
        /**
         * 根据已发扑克牌，重新生成数据结构
         * @param {*已发的扑克牌} [
         *  ["hearts-A","clubs-A"],
         * ["hearts-K","clubs-K"]
         * ]
         * @return [
         *  [{type:"hearts",text:"A"},{type:"clubs",text:"A"}],
         * [{type:"hearts",text:"K"},{type:"clubs",text:"K"}],
         * ]
         */
    static deal() {

        let cardsArr = this.dealPoker(3, 3);
        // console.log("原数组:", cardsArr)
        let cards = cardsArr.map(p => {
                return p.map(c => ({ type: c.split('-')[0], text: c.split('-')[1] }))
            })
            // console.log(cards)

        return cards;
    }
}
export default Puke;