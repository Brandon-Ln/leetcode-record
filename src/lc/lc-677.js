class TrieNode{
    constructor(){
        this.next = new Array(26).fill(undefined)
    }
}

class MapSum {
    constructor() {
        this.root = new TrieNode()
    }

    insert(key, val) {
        let curr = this.root
        for(let i = 0;i<key.length;i++){
            const code = key.charCodeAt(i) - 'a'.charCodeAt(0)
            if(!curr.next[code]) curr.next[code] = new TrieNode()
            curr = curr.next[code] 
        }
        curr.val = val
    }

    sum(prefix) {
        let sum = 0
        let curr = this.root
        // 计算子树
        for(let i = 0;i<prefix.length;i++){
            const code = prefix.charCodeAt(i) - 'a'.charCodeAt(0)
            if(!curr.next[code].val){
                return 0
            }
            curr = curr.next[code]
        }
        return sum
    }
}

const test = new MapSum()
test.insert('apple', 3)
test.sum('ap', 3)