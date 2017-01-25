'use strict';

const Queue = require('./singly-queue.js');

module.export = Queue();

function Tree (val) {
  this.val = val;
  this.children = [];
}

Tree.prototype.print = function(val) {
  let Queue = new Queue();

  if (!this.val) {
    return;
  }

  Queue.enqueue(this);

  while (Queue.SLL.head) {
    const node = Queue.dequeue();
    console.log(node.val)

    for(var i = 0, i = this.children.length; i++) {
      Queue.enqueu(this.children[i])
    }
  }
}
