const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }
    /*Append new node to the LinkedList 
     * If LinkedList is empty head and tail are new node.
     * Or if LinkedList is not empty then set node.prev as current tail
     * and set new tail as new node.
     */
    append(data) {
        var node = new Node(data);
        if (this.isEmpty()) {
            this._head = node;
        } else {
            node.prev = this._tail;
            this._tail.next = node;
        }
        this._tail = node;
        this.length++;
        return this;
    }

    head() {
        return this._head === null ? null : this._head.data;
    }

    tail() {
        return this._tail === null ? null : this._tail.data;
    }

    findNode(index) {
        var current = this._head;
        if (index >= 0 && index < this.length) {
            for (var i = 0; i < this.length; i++) {
                if (i === index) {
                    return current;
                }
                current = current.next;
            }
        }
        return null;
    }

    at(index) {
        var current = this.findNode(index);
        if (current) {
            return current.data;
        }
        return undefined;
    }

    insertAt(index, data) {
        if (this.length === 0 || this.length === index) {
            this.append(data);
            return this;
        }
        var current = this.findNode(index);
        if (current) {
            current.data = data;
        }
        return this;
    }

    /*Returns true if LinkedList is empty otherwise returns false*/
    isEmpty() {
        if (this._head == null) {
            return true;
        }
        return false;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        var current = this.findNode(index);
        if (current) {
            if (current.next) {
                current.next.prev = current.prev;
            } else {
                this._tail = current.prev;
            }
            if (current.prev) {
                current.prev.next = current.next;
            } else {
                this._head = current.next;
            }
            this.length--;
        }
        return this;
    }

    reverse() {
        if (this.length > 1) {
            var temp = this._head;
            this._head = this._tail;
            this._tail = temp;


            var current = this._head;
            while (current) {
                temp = current.next;
                current.next = current.prev;
                current.prev = temp;
                current = current.next;
            }
        }
        return this;
    }

    indexOf(data) {
        var current = this._head;
        var i = 0;
        while (current) {
            if (current.data === data) {
                return i;
            }
            current = current.next;
            i++;
        }
        return -1;
    }
}

module.exports = LinkedList;
