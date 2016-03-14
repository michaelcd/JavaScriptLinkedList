function Link () {
  this.value = null;
  this.prev = null;
  this.next = null;
}

Link.prototype.insert = function (link) {
  this.next = link;
  link.prev = this;
};

Link.prototype.remove = function () {
  this.prev.next = null;
  this.prev = null;
};



var linkedList = function (head) {
  this.head = head;
  this.last = head;
};


linkedList.prototype.first = function () {
  return this.head;
};

linkedList.prototype.last = function () {
  return this.last;
};

linkedList.prototype.push = function (node) {
  this.last().insert(node);
  this.last = node;
};

linkedList.prototype.pop = function () {
  var popped = this.last;
  this.last = this.last.prev;
  this.last.next = null;
  popped.prev = null;
  return popped;
};
