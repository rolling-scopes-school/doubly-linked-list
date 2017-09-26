const Node = require('./node');

class LinkedList {
    constructor() {
    	this._head = null;
    	this._tail = null;
    	this.length = 0;
    }

    append(data) {
      let node = new Node(data);

    	if (this._tail == null) {
    		this._head = node;
    		this._tail = node;
    	}
      else {
        this._tail.next = node;
        node.prev = this._tail;
        this._tail = node;
      }
      this.length++;

      return this;
    }

    head() {
      return (this._head != null) ? this._head.data : null;
    }

    tail() {
      return (this._tail != null) ? this._tail.data : null;
    }

    getNodeByIndex(index) {
      let temp = this._head;

      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }

      return temp;
    }

    at(index) {
      let node = this.getNodeByIndex(index);

      return (node == null) ? null : node.data;
    }

    insertAt(index, data) {
      if (this.length === 0 && index === 0) {
        this.append(data);
      }
      else if (this.length !== 0 && index === 0) {
        let node = new Node(data);
        let currNode = this.getNodeByIndex(index);

        currNode.prev = node;
        node.next = currNode;
      }
      else {
        let node = new Node(data);
        let currNode = this.getNodeByIndex(index - 1);
        let nextNode = this.getNodeByIndex(index);

        node.prev = currNode;
        node.next = nextNode;
        currNode.next = node;
        nextNode.prev = node;
      }
      this.length++;

      return this;
    }

    isEmpty() {
      return this.length === 0;
    }

    clear() {
      this.length = 0;
      this._head = null;
    	this._tail = null;

      return this;
    }

    deleteAt(index) {
      let currNode = this.getNodeByIndex(index - 1);
      let nextNode = this.getNodeByIndex(index + 1);

      currNode.next = nextNode;
      if (nextNode != null) nextNode.prev = currNode;
      this.length--;

      return this;
    }

    reverse() {
      let currNode = this._head;
      let temp = null;

      while (currNode != null) {
        temp = currNode.prev;
        currNode.prev = currNode.next;
        currNode.next = temp;
        currNode = currNode.prev;
      }
      temp = this._head;
      this._head = this._tail;
      this._tail = temp;

      return this;
    }

    indexOf(data) {
      let temp = this._head;

      for (let i = 0; i < this.length; i++) {
        if (temp.data == data) return i;
        else temp = temp.next;
      }

      return -1;
    }
}

module.exports = LinkedList;
