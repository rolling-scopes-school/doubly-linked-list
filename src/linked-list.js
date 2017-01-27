const Node = require('./node');

class LinkedList {
    constructor() { 

        this.data = []; 
        this.length = 0 

    }

    append(data) {

        this.data[this.data.length] = data

    }

    head() { 

        return this.data[0]

    }

    tail() { 

        return this.data[this.data.length-1]

    }

    at(index) { 

        return this.data[index]

    }

    insertAt(index, data) { 

        this.data[index] = data

    }

    isEmpty() { 

        return this.data.length == 0

    }

    clear() { 

        for (var i = this.data.length - 1; i >= 0; i--) {
            this.data[i] = null
        }

    }

    deleteAt(index) { 

        this.data.splice(this.data.indexOf(index), 1)

    }

    reverse() {

        this.data.reverse()

    }

    indexOf(data) {

        for (var i = this.data.length - 1; i >= 0; i--) {
            if (this.data[i] == data) {
                return i
            } else {
                return -1
            }
        }

    }
}

module.exports = LinkedList;
