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

function LinkedList (head) {
  this.first = head;
  this.last = head;
}

// LinkedList.prototype.first = function () {
//   return this.head;
// };
//
// LinkedList.prototype.last = function () {
//   return this.last;
// };

LinkedList.prototype.push = function (node) {
  this.last.insert(node);
  this.last = node;
};

LinkedList.prototype.pop = function () {
  var popped = this.last;
  this.last = this.last.prev;
  this.last.next = null;
  popped.prev = null;
  return popped;
};
