const Node = require('./node');

class LinkedList {
    constructor() {
        this._head=null;
        this._tail=null;
        this.length=0;        
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
        }else
        {
            node.prev = this._tail;
            this._tail.next = node;
        }
        this._tail = node;
        this.length++;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
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
        var current = this.findNode(index);
        if (current) {
            current.data = data;
            return true;
        }
        return false;
    }

    /*Returns true if LinkedList is empty otherwise returns false*/
    isEmpty() {
        if (this._head==null) {
            return true;
        }
        return false;
    }

    clear() {}

    deleteAt(index) {}

    reverse() {}

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
