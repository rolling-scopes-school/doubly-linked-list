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

        return(this)




    }

    head() {
    	if (this.length!=0) {
    		return(this.linkedlist[0].data);
    	}
        else {return(null)};
       
    }

    tail() {
    	if (this.length!=0){
    		return(this.linkedlist[this.length-1].data);
    	}
        else {return(null)};

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
        return(this)

    }

    isEmpty() {
       	return(this.length==0);
    }

    clear() {
        if (this.length!=0) {
            while(this.length!=0) {
                this.linkedlist.pop();
                this.length--;
            }
        }
    }

    deleteAt(index) {
        if (this.length!=0) {
            this.linkedlist.splice(index-1,1);
            this.linkedlist[index-1].next=this.linkedlist[index];
            this.linkedlist[index].prev=this.linkedlist[index-1];
            this.length--;
        }
      
        return(this)

    }

    reverse() {
    	if (this.length!=0) {
    		this.linkedlist.reverse();
    		this.linkedlist[0].prev=null;
    		this.linkedlist[0].next=this.linkedlist[1];
    		this.linkedlist[this.length-1].next=null;
    		this.linkedlist[this.length-1].prev=this.linkedlist[this.length-2];
    		for (var i=1;i<this.length-1;i++) {
    			this.linkedlist[i].prev=this.linkedlist[i-1];
    			this.linkedlist[i].next=this.linkedlist[i+1];
    		}
    	} else {return(null)}
        return(this)
    }

    indexOf(data) {
    	if (this.length!=0) {
    		for (var i=0; i<this.length; i++) {
    			if (this.linkedlist[i].data===data) {return(i)}
    		}
    	return -1;

    	}
    }
}

module.exports = LinkedList;
