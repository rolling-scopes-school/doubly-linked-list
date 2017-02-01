const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var node = new Node(data);
        if (this.length == 0) {
            this._head = node;
            this._tail = node;
        } else {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }
        this.length++;
        return this;
    }

    head() {
        if (this.length == 0) {
            return null;
        } else {
            return this._head.data;
        }
    }

    tail() {
        if (this.length == 0) {
            return null;
        } else {
        return this._tail.data;
        }
    }

    at(index) {
        if (index <= this.length-1 && index >= 0) {
            var node = this._head;
            var i = 0;
            while (i != index) {
                node = node.next;
                i++;
            } 
        } return node.data;
    }

    insertAt(index, data) {
        if (index <= this.length-1 && index >= 0) {
            var node = this._head;
            var i = 0;
            while (i != index) {
                node = node.next;
                i++;
            }  node.data = data;
        } return this;
    }

    isEmpty() {
        if (this.length == 0) {
            return true;
        } else {
            return false;
        }
    }


    clear() {
        this.length = 0;
        this._head = null;
        this._tail = null;
        return this;
    }

    deleteAt(index) {
        if (index <= this.length-1 && index >= 0) {
            var node = this._head;
            var i = 0;
             while (i != this.length - 1) {
                node.data = node.next.data;
                node = node.next;
                i++;
            }
            node.data = null;
            node.next = null;
            return this;
        } 
    }

    reverse() {
        var i = 0;
        while (i < Math.floor(this.length/2)) {
            this._head.data = this._tail.data;
            this._head = this._head.next ;
            this._tail = this._tail.prev;
            i++;
        } return this;
    }

    indexOf(data) {
        var index = 0;
        var node = this._head;
        while (this.length != index) {
            if (node.data == data) {
                return index;
            }
            node = node.next;
            index++;
        }
        return -1;
    }
}

module.exports = LinkedList;
