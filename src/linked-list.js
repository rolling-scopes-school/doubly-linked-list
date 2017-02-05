const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = new Node();
        this._tail = new Node();
        this.length = 0;
    }

    append(data) {
        var node = new Node(data,null,null);
        if (this.length === 0) {
            this._head = node;
            this._tail = node;
        } else {
            this.tail.next = node;
            node._prev = this._tail;
            this._tail = node;
        }
        this.length++;
        return node;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        if (index >= 0 && index < this.length) {
            var node = this._head;
            while (index--) {
                node = node.next;
            }
            return node;
        }
    }

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
