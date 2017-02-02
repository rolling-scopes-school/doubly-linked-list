const Node = require('./node');

class LinkedList {
    constructor() {
    	this.length=0;
    	this._head=null;
    	this._tail=null;
    }

    append(data) {
    	var node=new Node(data);

    	if (this._head==null) {
    		this._head=node;
    		this._tail=node;
    		this.length++;}

    }

    head() {}

    tail() {}

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {
       	return(this.length==0);
    }

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
