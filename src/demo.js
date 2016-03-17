// Given a linked list of integers and an integer value,
// delete every node of the linkedlist containing that value.

var deleteValues = function (list, value) {
  var currentNode = list.first;

  while (currentNode !== null) {
    if (currentNode.value === value) {
      if (currentNode === list.first) {
        list.first = currentNode.next;
        currentNode.next.prev = null;
      } else if (currentNode === list.last) {
        list.pop();
      } else {
        currentNode.next.prev = currentNode.prev;
        currentNode.prev.next = currentNode.next;
      }
    }

    currentNode = currentNode.next;
  }
};

var printListValues = function (list) {
  var currentNode = list.first;
  var values = [];

  while (currentNode !== null) {
    values.push(currentNode.value);
    currentNode = currentNode.next;
  }

  console.log(values);
};

link1 = new Link (1);
list = new LinkedList (link1);
link2 = new Link (2);
list.push(link2);
link3 = new Link (3);
list.push(link3);
link4 = new Link (4);
list.push(link4);
printListValues(list);
deleteValues(list, 1);
printListValues(list);
