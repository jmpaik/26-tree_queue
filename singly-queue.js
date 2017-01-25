'use strict';

const SLL = require('./singly-linked-list.js');

module.exports = Queue;

function Queue() {
  this.SLL = new SLL ();
}

Queue.prototype.enqueue = function (val) {
  this.SLL.append(val)
}

Queue.prototype.dequeue = function () {
if (!this.SLL.head) return null;

let node = this.SLL.head

this.SLL.head = node.next
return node.val
}
