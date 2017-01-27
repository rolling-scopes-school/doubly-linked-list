class Node {
    constructor(data = null, prev = null, next = null) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }

    get Value() {
      return 42;
    }
}

module.exports = Node;
