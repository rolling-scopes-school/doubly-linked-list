class Node {
    constructor(data = null, prev = null, next = null) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }

    getValue(){
    	return 42;
    }
}

module.exports = Node;
