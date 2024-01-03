# ES6 Basics - Unique Readme

Welcome to the ES6 Basics project! 🚀 In this modified version of the readme, we're spicing things up while keeping the core code intact. Let's dive into the enhanced aspects of each task:

## Tasks To Complete

### 0. Const or let?

[0-constants.js](0-constants.js) now showcases the elegance of ES6 by utilizing `const` and `let` effectively.

```javascript
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
```
+ [x] 1. Block Scope
1-block-scoped.js demonstrates the power of block-scoping in ES6.
```
export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    let task = true;
    let task2 = false;
  }

  return [task, task2];
}
```
