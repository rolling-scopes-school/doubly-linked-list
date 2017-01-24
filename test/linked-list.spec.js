const Node = require('../src/node');
const LinkedList = require('../src/linked-list');

describe('LinkedList', () => {
    describe('#constructor', () => {
        const list = new LinkedList();

        it('assign 0 to this.length', () => {
            expect(list.length).to.equal(0);
        })
    });

    describe('#append', () => {
        it('should assign any nodes to this._head and this._tail if list is empty', () => {
            const data = 42;

            const list = new LinkedList();

            list.append(data);

            expect(list._tail).to.be.an.instanceof(Node)
            expect(list._head).to.be.an.instanceof(Node)
        });

        it('should add new data to the end of list', () => {
            const list = new LinkedList();

            list.append(123);
            list.append(413);

            expect(list.length).to.equal(2);
            expect(list.tail()).to.equal(413);
            expect(list.head()).to.equal(123);
        });

    });
    describe('#head', () => {
        const list = new LinkedList();
        it('should return data from the this.head', () => {
            const data = 13;

            list.append(data);

            expect(list.head()).to.equal(data)
        });
    });
    describe('#tail', () => {
        const list = new LinkedList();
        it('should return data from the this.tail', () => {
            const data = 31;

            list.append(data);

            expect(list.tail()).to.equal(data)
        });
    });
    describe('#at', () => {
        it('should return Node.data by index', () => {
            const list = new LinkedList();

            list.append(1);
            list.append(123);
            list.append(444);

            expect(list.at(0)).to.equal(1);
            expect(list.at(1)).to.equal(123);
            expect(list.at(2)).to.equal(444);

        });
    });
    describe('#insertAt', () => {
        it('should insert data by index', () => {
            const list = new LinkedList();
            const data = 34;
            const position = 1;

            list.append(32);
            list.append(47);

            list.insertAt(position, data);

            expect(list.at(position)).to.equal(data);
        });
    });
    describe('#isEmpty', () => {
        it('should return true if list is empty', () => {
            const list = new LinkedList();

            expect(list.isEmpty()).to.be.true;

            list.append(32);

            expect(list.isEmpty()).to.be.false;
        });
    });

    describe('#clear', () => {
        it('should clear the list', () => {
            const list = new LinkedList();

            list.append(32);
            list.append(47);

            list.clear();

            expect(list.head()).to.equal(null);
            expect(list.tail()).to.equal(null);
            expect(list.length).to.equal(0);
        });
    });
    describe('#deleteAt', () => {
        it('should delete element by index', () => {
            const list = new LinkedList();

            list.append(1);
            list.append(2);
            list.append(3);
            list.append(4);
            list.append(5);

            list.deleteAt(2);

            expect(list.at(2)).to.equal(4);
        });
    });
    describe('#reverse', () => {
        it('should reverse the list', () => {
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
        });
    });
    describe('#indexOf', () => {
        it('should return index of element if data is found', () => {
            const list = new LinkedList();

            list.append(3);
            list.append(7);

            expect(list.indexOf(3)).to.equal(0);
            expect(list.indexOf(7)).to.equal(1);
        });

        it('should return -1 if data not found', () => {
            const list = new LinkedList();

            list.append(7);

            expect(list.indexOf(3)).to.equal(-1);
        })
    });
    describe('chaining', () => {
        it('append reverse deleteAt insertAt methods should be chainable', () => {
            const list = new LinkedList();

            function fn() {
                list.append(4).reverse().deleteAt(0).clear().insertAt(0, 3);
            }

            expect(fn).to.not.throw();
        })
    })
});
