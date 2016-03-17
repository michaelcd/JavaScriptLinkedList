function Link (value) {
  this.value = value || null;
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
