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

    at(index) {}

    insertAt(index, data) {}
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

    indexOf(data) {}
}

module.exports = LinkedList;
