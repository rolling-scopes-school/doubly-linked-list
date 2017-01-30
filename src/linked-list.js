const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this.data = [];
    }

    append(data) {
        var node = new Node();
        node.data = data;

        this.data[this.length] = data;

        if (this.length === 0) {
            this._head = node;
            this._tail = node;
        }

        this.length++;

        return this;
    }

    head() {
        return this.data[0];
    }

    tail() {
        return this.data[this.data.length-1];
    }

    at(index) {
        return this.data[index];
    }

    insertAt(index, data) {
        this.data[index] = data;
        return this;
    }

    isEmpty() {
        return this.length === 0;
    }

    clear() {
        this.length = 0;

        for (var i = this.data.length - 1; i >= 0; i--) {
            this.data[i] = null;
        }
        return this;
    }

    deleteAt(index) {
        this.data.splice(index, 1)
        this.length--;
        return this;
    }

    reverse() {
        this.data.reverse()
        return this;
    }

    indexOf(data) {
        return this.data.indexOf(data);
    }
}

module.exports = LinkedList;
