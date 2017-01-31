const Node = require('./node');

class LinkedList {
    constructor()
    { const list = new LinkedList();
     this.length=0;
    }

    append(data)
    {
    const data = 42;

    const list = new LinkedList();

    list.append(data);

    expect(list._tail).to.be.an.instanceof(Node)
    expect(list._head).to.be.an.instanceof(Node)
    }

    head() {}

    tail() {}

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
