const Node = require('./node');

class LinkedList {
    constructor() {
      this.length = 0;
      this._head = null;
      this._tail = null;
    }

    append(data) {
      const node = new Node(data);

      if (this.length === 0) {
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
      return (this._head) ? this._head.data : this._head;
    }

    tail() {
      return (this._tail) ? this._tail.data : this._tail;
    }

    findNode(index){
      let current = this._head;

      for (let i = 0; i < this.length; i++){
        if (i !== index) {
          current = current.next;
        } else {
          return current;
        }
      }
    }

    at(index) {
      if (index > -1 && index < this.length){

        if (index === 0) {
          return this._head.data;

        } else if (index === this.length - 1) {
          return this._tail.data;

        } else {
          return this.findNode(index).data;
        }
      } else {
        return -1;
      }
      }

    insertAt(index, data) {
      const node = new Node(data);

      if (this.length === 0) {
        this._head = node;
        this._tail = node;

        return this;
      }

      if (index > -1 && index < this.length) {
        if (index === 0) {
          this._head.prev = node;
          node.next = this._head;
          this._head = node;

        } else if (index === this.length - 1) {
          this._tail.next = node;
          node.prev = this._tail;
          this._tail = node;

        } else {
          const target = this.findNode(index);
          target.prev.next = node;
          node.prev = target.prev.next;
          target.prev = node;
          node.next = target;
        }
      }
      return this;
    }

    isEmpty() {
      return this.length === 0 ? true : false;
    }

    clear() {
      this._head = null;
      this._tail = null;
      this.length = 0;

      return this;
    }

    deleteAt(index) {
      if (index > -1 && index < this.length) {
        if (index === 0) {
          if(this.length === 1) {
            this._head = null;
            this._tail = null;
            this.length--;

            return this;
          }

          this._head.next.prev = null;
          this._head = this._head.next;

        } else if (index === this.length - 1) {
          this._tail.prev.next = null;
          this._tail = this._tail.prev;

        } else {
          let target = this.findNode(index);
          target.prev.next = target.next;
          target.next.prev = target.prev;
        }
        this.length--;
        return this;
      }
      return -1;

    }

    reverse() {
      if (this.length < 2) {
        return this;
      }


      let current = this._head,
          following;
      this._head = this._tail;
	    this._tail = current;


      for (let i = 0; i < this.length; i++) {
        following = current.next;
        current.next = current.prev;
        current.prev = following;
        current = following;
      }
      return this;
    }

    indexOf(data) {
      let current = this._head;

      for (let i = 0; i < this.length; i++) {

        if (current.data === data) {
          return i;
        }

        current = current.next;
      }

        return -1;
      }
    }

module.exports = LinkedList;