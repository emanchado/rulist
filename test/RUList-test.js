/*global describe, it, before */

var buster = require('buster');
var RUList = require('../lib/RUList');

buster.spec.expose();
var expect = buster.expect;

describe("Recently-Used List", function() {
    before(function() {
        this.list = new RUList();
    });

    it("has no items once created", function() {
        expect(this.list.length).toEqual(0);
    });

    it("can add a simple item", function() {
        this.list.add('one');
        expect(this.list.get(0)).toEqual('one');
        expect(this.list.length).toEqual(1);
    });

    it("adds items at the beginning", function() {
        this.list.add('one');
        this.list.add('two');
        expect(this.list.get(0)).toEqual('two');
    });
});
