const Node = require('./node');

class LinkedList {
    constructor()
    { const list = new LinkedList();
     const list = new LinkedList();
      
     expect(list.length).to.equal(0);
    }

    append(data)
    {
    const data = 42;

    const list = new LinkedList();

    list.append(data);

    expect(list._tail).to.be.an.instanceof(Node)
    expect(list._head).to.be.an.instanceof(Node)
    
    
    const list = new LinkedList();

    list.append(123);
    list.append(413);

    expect(list.length).to.equal(2);
    expect(list.tail()).to.equal(413);
    expect(list.head()).to.equal(123);
    }
    
    head() 
    {
    const list = new LinkedList();
    
            const data = 13;

            list.append(data);

            expect(list.head()).to.equal(data)
    }

    tail()
    {
    const list = new LinkedList();
       
            const data = 31;

            list.append(data);

            expect(list.tail()).to.equal(data)
    }

    at(index) 
    {
    const list = new LinkedList();

            list.append(1);
            list.append(123);
            list.append(444);

            expect(list.at(0)).to.equal(1);
            expect(list.at(1)).to.equal(123);
            expect(list.at(2)).to.equal(444);
    }

    insertAt(index, data) 
    {
        const list = new LinkedList();
            const data = 34;
            const position = 1;

            list.append(32);
            list.append(47);

            list.insertAt(position, data);

            expect(list.at(position)).to.equal(data);
    }

    isEmpty()
    {
    const list = new LinkedList();

            expect(list.isEmpty()).to.be.true;

            list.append(32);

            expect(list.isEmpty()).to.be.false;
    }

    clear()
    {
        const list = new LinkedList();

            list.append(32);
            list.append(47);

            list.clear();

            expect(list.head()).to.equal(null);
            expect(list.tail()).to.equal(null);
            expect(list.length).to.equal(0);
    }

    deleteAt(index) 
    {
    const list = new LinkedList();

            list.append(1);
            list.append(2);
            list.append(3);
            list.append(4);
            list.append(5);

            list.deleteAt(2);

            expect(list.at(2)).to.equal(4);
    }

    reverse() 
    {
    const list = new LinkedList();

            list.append(1);
            list.append(2);
            list.append(3);
            list.append(4);
            list.append(5);
            list.append(6);

            list.reverse();

            expect(list.head()).to.equal(6);
            expect(list.tail()).to.equal(1);

            expect(list.at(1)).to.equal(5);
            expect(list.at(2)).to.equal(4);
            expect(list.at(3)).to.equal(3);
            expect(list.at(4)).to.equal(2);
    }

    indexOf(data)
    {
        const list = new LinkedList();

            list.append(3);
            list.append(7);

            expect(list.indexOf(3)).to.equal(0);
            expect(list.indexOf(7)).to.equal(1);
        
        const list = new LinkedList();

            list.append(7);

            expect(list.indexOf(3)).to.equal(-1);
        
        
    }
}

module.exports = LinkedList;
