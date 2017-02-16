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
            this._head.next = this._tail;
            this._tail.prev = this._head;
        }
        else if (this.length === 1) {
            this._tail = node;
            this._head.next = this._tail;
            this._tail.prev = this._head;
        } 
        else {
            this._tail.next = node;
            node.prev = this._tail;
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
            return node.data;
        }
    }

    insertAt(index, data) {
        var insertedNode = new Node(data,null,null);
        insertedNode.data = data;
        if(index >= 0 && index <= this.length) {
            if(index == 0){
                insertedNode.next = this._head;
                this._head.prev = insertedNode;
                this._head = insertedNode;
                this.length++;
            }
            else if(index == this.length) {
                this._tail.next = insertedNode;
                insertedNode.prev = this._tail;
                this._tail = insertedNode;
                this.length++;
            }
            else {
                var node = this._head;
                var prevNode = new Node();
                while(index--){
                    node = node.next;
                }
                prevNode = node.prev;
                prevNode.next = insertedNode;
                insertedNode.prev = prevNode;
                insertedNode.next = node;
                node.prev = insertedNode;
                this.length++;
            }
        }
    }

    isEmpty() {
        return this.length ? false: true;
    }

    clear() {

    }

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {
        var node = this._head,
            counter = 0;
        while (node.data != data && counter < this.length) {
            node = node.next;
            counter++;
        }
        if (counter > this.length) {
            return "-1";
         }
        else {
            return counter;
        }
    }
}

module.exports = LinkedList;
