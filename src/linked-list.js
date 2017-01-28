const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }


    /*The method appends a new node to the linked list.
     * If the linked list is empty, the new node is head and tail of the linked list. 
     * Or, if the linked list is not empty, this method sets the current tail as 
     * a previous member of the new node and a new node as the tail.
     */
    append(data) {
        var node = new Node(data);
        if (this.isEmpty()) {
            this._head = node;
        } else {
            node.prev = this._tail;
            this._tail.next = node;
        }
        this._tail = node;
        this.length++;
        return this;
    }


    /*If the head of the linked list is null method returns null, 
     *otherwise it returns the node data
     */
    head() {
        return this._head === null ? null : this._head.data;
    }

    /*If the tail of the linked list is null method returns null, 
     *otherwise it returns the node data
     */
    tail() {
        return this._tail === null ? null : this._tail.data;
    }


    /*The method for search node by index*/
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


    /*If the linked list contains a node 
     * according to the index, 
     * the method returns the node data,
     * otherwise it returns "undefined".
     */
    at(index) {
        var current = this.findNode(index);
        if (current) {
            return current.data;
        }
        return undefined;
    }


    /*The method inserts data according to the index*/
    insertAt(index, data) {
        if (this.length === 0 || this.length === index) {
            this.append(data);
            return this;
        }
        var current = this.findNode(index);
        if (current) {
            current.data = data;
        }
        return this;
    }


    /*The method returns true if linked list is empty,
     * otherwise it returns false
     */
    isEmpty() {
        if (this._head == null) {
            return true;
        }
        return false;
    }


    /*The method clears the linked list*/
    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }


    /*The method removes a node according to the index*/
    deleteAt(index) {
        //search node in accordance with the index
        var current = this.findNode(index);
        if (current) {

            //if the node is not the last
            if (current.next) {
                current.next.prev = current.prev;
            } else {
                //if the last, reinstall tail
                this._tail = current.prev;
            }


            //if the node is not the first
            if (current.prev) {
                current.prev.next = current.next;
            } else {
                //if the first, reinstall head
                this._head = current.next;
            }
            this.length--;
        }
        return this;
    }


    /*The method changes the sequence in the linked list*/
    reverse() {
        if (this.length > 1) {

            //swap head and tail
            var temp = this._head;
            this._head = this._tail;
            this._tail = temp;

            var current = this._head;
            while (current) {
                //swap prev and next of the node
                temp = current.next;
                current.next = current.prev;
                current.prev = temp;
                current = current.next;
            }
        }
        return this;
    }

    /*The method returns a index according to the entered data. 
     *If the linked list has no nodes with such data, method returns -1.
     */
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
