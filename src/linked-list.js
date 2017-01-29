const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._tail = null;
        this._head = null;
    }

    append(data) {
        var node = new Node(data);        
        if (this.length) {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }
        else {
            this._head = node;
            this._tail = node;
        }
        
        this.length++;

        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        var currentNode = this._head,
        _length = this.length,
        count = 0;
        while(count < index){
            currentNode = currentNode.next;
            count++;
        }
        return currentNode.data;
    }

    insertAt(index, data) {
        var node = new Node(data);
        var currentNode = this._head,
        _length = this.length,
        count = 0;
        
        if (index == 0){
            this._head.prev = node;
            this._head = node;
            return this.data; 
        }
        else if (index == this.length){
            this._tail.next = currentNode;
            this._tail = this._tail.next;
            currentNode = node;
            return this.data;
        }
        else {
            while(count < index){
                currentNode = currentNode.next;
                count++;
            }
            
            node.prev = currentNode.prev;
            currentNode.prev.next = node;
            currentNode.prev = node;
            node.next = currentNode;
            return this;
        } 
    }

    isEmpty() {
        if (this.length === 0){
            return true;
        }
        else {
            return false;
        }
    }

    clear() {
        this._head.data = null;
        this.length = 0;
        this._tail.data = null;
    }

    deleteAt(index) {
        if (index < this.length) {

            var node = this._head;
            var i = 0;
            while (i < index) {
                node = node.next;
                i++;
            }
            while (i != this.length - 1) {
                node.data = node.next.data;
                this._tail = node;
                node = node.next;
                i++;
            }
            node.data = null;
            node.next = null;
            this.length--;
            return this;
        }

    }

    reverse() {
        var node = new Node();
        var node_head = this._head,
        node_tail = this._tail,
        i = 0;
        while ( i < Math.floor(this.length / 2)) {
            node.data = node_tail.data;
            node_tail.data = node_head.data;
            node_head.data = node.data;
            node_head = node_head.next;
            node_tail = node_tail.prev;
            i++;
        }
        return this;
    };

    indexOf(data) {
        var node = this._head,
        i = 0;
        while (i != this.length){
            if (node.data == data){
                return i;
            }
            else {
                node = node.next;
                i++;
            }  
        }
        return -1;
    }
}

module.exports = LinkedList;
