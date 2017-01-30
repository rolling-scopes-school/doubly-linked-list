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
    }

    isEmpty() {
        return this.length === 0;
    }

    clear() {
        this.length = 0;

        for (var i = this.data.length - 1; i >= 0; i--) {
            this.data[i] = null;
        }
    }

    deleteAt(index) {
        this.data.splice(index, 1)
        this.length--;
    }

    reverse() {
        this.data.reverse()
    }

    indexOf(data) {
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i] === data) {
                return i;
            } else {
                console.log(this.data[i] != data);
            }
        }
    }
}

module.exports = LinkedList;
