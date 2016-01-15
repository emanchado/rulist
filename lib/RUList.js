var RUList = function() {
    this.length = 0;
    this.array = [];
};

RUList.prototype = {
    add: function(item) {
        this.length++;
        this.array.unshift(item);
    },

    get: function(i) {
        return this.array[i];
    }
};

module.exports = RUList;
