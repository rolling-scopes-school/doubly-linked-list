const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
        this.array = [];
    }

    append(data) {
        const node = new Node(data);

        if (this.isEmpty()) {   
            this._head = node;
            this._tail = node;
            this._head.next = this._tail;
            this._tail.prev = this._head;
            this.array.push(this._head);
        } else {
            if (this._head === this._tail) {
                this._tail = node;
                this._head.next = this._tail;
                this._tail.prev = this._head;
                this.array.push(this._tail);
            } else {
                const prevNode = this._tail;
                this._tail = node;
                this._tail.prev = prevNode;
                prevNode.next = this._tail;
                this.array.push(this._tail);
            }

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
        return this.array[index].data;
    }

    insertAt(index, data) {

        if ((!index && !this.length) || index == this.length) {
            this.append(data);
            return;
        }

        const node = new Node(data);

        this.array.splice(index, 0, node);

        let nextIn = this.array[index + 1];
        let prevIn = this.array[index - 1];
        prevIn.next = node;
        nextIn.prev = node;
        node.next = nextIn;
        node.prev = prevIn;

        this.length++;

    }

    isEmpty() {
        if (!this.length) {
            return true; 
        }
        return false;
    }

    clear() {
        this._head.data = null;
        this._head.next = null;
        this._tail.data = null;
        this._tail.prev = null;
        this.array = [];
        this.length = 0;

        return this;
    }

    deleteAt(index) {
        if (index === 0) {
            this.array.shift();
            this.length--;
            if (this.isEmpty()) {
                this._head.data = null;
            } else {
                this._head = this.array[0];
            }         
            if (!this.length) return this;
            this.array[0].prev = null;
            return this;
        }

        if (index === (this.length - 1)) {
            this.array.pop();
            this.length--;
            this._tail = this.array[this.length - 1];
            this.array[this.length - 1].next = null;
            return this;
        }

        this.array.splice(index, 1);
        this.length--;
        this.array[index].prev = this.array[index - 1];
        this.array[index - 1].next = this.array[index];

        return this;
    }

    reverse() {
        let first = this._head;
        let last = this._tail;
        this.array.reverse();
        this._head = last;
        this._tail = first;
        this._head.prev = null;
        this._head.next = this.array[1];
        this._tail.next = null;
        this._tail.prev = this.array[this.length - 2];

        for (let i = 1; i <= (this.length - 2); i++) {
            this.array[i].prev = this.array[i-1];
            this.array[i].next = this.array[i+1];
        }
        return this;

    }

    indexOf(data) {

        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i].data === data) {
                return i;
            }
        }
        return -1;
    }
}

module.exports = LinkedList;
