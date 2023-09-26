# ToDos List App

* "Shopping"
* "Home work"
* "Go to the gym"

### create TODOs App

#### create function
Given the array `const toDosStore = ["Shopping","Home work","Go to the gym"]`
##### 1. Add item
* create a function named `insertTodo` that takes 2 Arguments, the first is an array the second is a string, the function must add the string to the array.

##### 2. Add Items
* create a function named `insertTodosArr` that takes 2 Arguments, both are arrays, the function must add the second array to the first.

##### 3. Remove Item
* create a function named `removeTodo` that takes 2 Arguments, the first is an array the second is a number that represents the number of the todo task in the list (Note that this number is not the same as the index number), the function must delete a task from the array that corresponds with the given number.

##### 4. Edit Item
* create a function named `editTodo` to edit any item by order number
* the function takes 3 Arguments ==> the first Argument is the target array, the second is item's number by order and the third Argument is the new item value

##### 5. Edit Items
* create a function named `updateTodos` to edit todos by passing an array of todo's order numbers 
* the function takes 3 Arguments ==> the first Argument is the target array, the second is an array of item order numbers and the third Argument is an array of new item values
##### 6. Read TodosList
* create a function named `RenderToDosListTemplate`
* this function takes an array as an argument and returns a string.
* if the passed array is empty it should return the string "To do list store is empty"
* Otherwise it should return a string in the following format:

```
ToDo List: 
 1- Shopping 
 2- Meet with PR department 
 3- Pay bills 
 4- Buy milk 
 5- Visiting Tommy 
 6- Check the internet connection 
 7- Go to supermarket 
 8- Meet with Ghassan 
 9- New test 
```

##### Call Stack
```js
insertTodo(toDosStore,"test1");
insertTodo(toDosStore,"test2");
insertTodo(toDosStore,"test4");
insertTodo(toDosStore,"test5");
removeTodo(toDosStore,3);
removeTodo(toDosStore,5);
insertTodo(toDosStore,"Call Alex");
editTodo(toDosStore,3, "Pay bills");
editTodo(toDosStore,5, "Visiting Tommy");
insertTodosArr(toDosStore,["Go to supermarket", "Meet with Ghassan", "New test"]);

updateTodos(toDosStore,
  [2, 4, 6],
  ["Meet with PR department", "Buy milk", "Check the internet connection"]
);
```

* render todo template
```js
console.log(RenderToDosListTemplate(toDosStore));
// toDosStore is empty ==> To do list is empty


/* expected result in the terminal: 
 ToDo List: 
 1- Shopping 
 2- Meet with PR department 
 3- Pay bills 
 4- Buy milk 
 5- Visiting Tommy 
 6- Check the internet connection 
 7- Go to supermarket 
 8- Meet with Ghassan 
 9- New test 
 */
```