function LinkedList (head) {
  this.first = head;
  this.last = head;
}

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
