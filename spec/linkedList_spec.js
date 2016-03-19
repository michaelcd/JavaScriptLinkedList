describe("Link constructor", function () {
  var link = new Link ();

  it("defaults to null for value, prev, and next", function () {
    expect(link.value).toBe(null);
    expect(link.next).toBe(null);
    expect(link.prev).toBe(null);
  });
});

describe("Link.prototype.insert", function () {
  var link1 = new Link ();
  var link2 = new Link ();
  link1.insert(link2);

  it("adds a link as a child and updates the #next value", function () {
    expect(link1.next).toBe(link2);
  });

  it("updates the #prev value of the child", function () {
    expect(link2.prev).toBe(link1);
  });
});

describe("Link.prototype.remove", function () {
  var link1 = new Link ();
  var link2 = new Link ();
  link1.insert(link2);
  link2.remove();

  it("updates parent node #next value", function () {
    expect(link1.next).toBe(null);
  });

  it("updates self #prev value", function () {
    expect(link2.prev).toBe(null);
  });
});

describe("LinkedList", function () {
  var link1 = new Link ();
  var link2 = new Link ();
  var list = new LinkedList (link1);
  list.push(link2);

  describe("LinkedList.prototype.push", function () {
    it("defaults the first value to the head", function () {
      expect(list.first).toBe(link1);
    });

    it("adds a link to the list", function () {
      expect(list.first.next).toBe(link2);
    });

    it("updates the last value when a link is added", function () {
      expect(list.last).toBe(link2);
    });
  });

  describe("LinkedList.prototype.pop", function () {
    var link1 = new Link ();
    var link2 = new Link ();
    var link3 = new Link ();
    var list = new LinkedList (link1);
    list.push(link2);
    list.push(link3);

    it("returns the popped link", function () {
      expect(list.pop()).toBe(link3);
    });

    it("updates the last value of the list", function () {
      expect(list.last).toBe(link2);
    });
  });
});
