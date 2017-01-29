const Node = require('./node');

class LinkedList {
    constructor() {
        this.lenght = 0;
        this.head = null;
        this.tail = null;
    }

    append(data) {}

    head() {
        if (this.lenght == 0) {
            return null;
        } 
        return this.head.data;
    }

    tail() {
        if (this.lenght == 0) {
            return null;
        }
        return this.tail.data;
    }

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {
        return this.lenght === 0;
    }

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
