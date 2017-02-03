const Node = require('./node');

class LinkedList {
    constructor() {
    	this.length=0;
    	this._head=null;
    	this._tail=null;
    	this.linkedlist=[];
    	
    	
    }

    append(data) {
    	var node=new Node(data);

    	if (this.length==0) {
    		this._head=node;
    		this._tail=node;
		}
		
		else {this.linkedlist[this.length-1].next=node;
			node.prev=this.linkedlist[this.length];
		}

		this.linkedlist.push(node);
		this.length++;




    }

    head() {
    	if (this.length!=0) {
    		return(this.linkedlist[0].data);
    	}
    }

    tail() {
    	if (this.length!=0){
    		return(this.linkedlist[this.length-1].data);
    	}
    }

    at(index) {
    	if (this.length!=0){
    		return(this.linkedlist[index].data);
    	}

    }

    insertAt(index, data) {
    	if (this.length!=0) {
    		this.linkedlist[index].data=data;
    	}

    }

    isEmpty() {
       	return(this.length==0);
    }

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
