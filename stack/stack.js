class Stack {
  constructor() {
    this.items = [];
  }

  add(value) {
    this.items.push(value);
  }

  remove() {
    this.items.splice(this.items.length - 1, 1);
  }

  peak() {
    const itemPeak = this.items[this.items.length - 1];
    console.log(itemPeak);
  }

  listItems() {
    const itemJoin = this.items.join(", ");
    console.log(itemJoin);
  }

  isEmpty() {
    console.log(this.items.length === 0);
  }
}

const stack = new Stack();

stack.isEmpty();

stack.add(5);

stack.peak();

stack.remove();

stack.add(6);

stack.peak();

stack.remove();

stack.isEmpty();

stack.listItems();
