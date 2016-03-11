var link = function () {
  this.value = null;
  this.prev = null;
  this.next = null;
};

var linkedList = function (head) {
  this.head = head;
  this.last = head;
};

link.prototype.next = function () {};
link.prototype.prev = function () {};
link.prototype.remove = function () {};
link.prototype.insert = function () {};

linkedList.prototype.first = function () {};
linkedList.prototype.last = function () {};
linkedList.prototype.push = function () {};
linkedList.prototype.pop = function () {};
