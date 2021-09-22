const { Run } = require("./lib");
const { expect } = require('chai');

describe('Run', () => {

    it('should result 3 for 10111', () => {
        var books = '10111';
        var result = Run(books, ['101']);
        expect(result.length).to.equal(3);
        expect(result).to.eql([ '012', '013', '014' ]);
    });

    it('should result 5 for 10101', () => {
        var books = '10101';
        var result = Run(books, ['101', '010']);
        expect(result.length).to.equal(5);
        expect(result).to.eql([ '012', '014', '034', '234', '123' ]);
    });
});