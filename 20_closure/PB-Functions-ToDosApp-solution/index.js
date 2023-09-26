const toDosStore = ["Shopping", "Home work", "Go to the gym"];


// create function to Insert new items to toDosStore
const insertTodo = (arr,newTodo) => arr.push(newTodo);

// create function to insert array of todos
// the function takes one Argument as array of todos items and push each item to toDosStore
const insertTodosArr = (arr,todos) => {
  for (let i = 0; i < todos.length; i++) {
    /*toDosStore.push(todos[i]);*/
    insertTodo(arr,todos[i]);
  }
};

// create function to remove any item by order number
// the function takes one Argument as item order number
// orderNumber ==> item order
// (orderNumber - 1) ==> item index
const removeTodo = (arr,orderNumber) => arr.splice(orderNumber - 1, 1);

// create function to edit any item by order number
// the function takes 2 Arguments ==> the first Argument is item order number and the Second Argument is new item value

const editTodo = (arr,orderNumber, newValue) =>
  (arr[orderNumber - 1] = newValue);


const updateTodos = (arr,todosOrder, newTodosValus) => {
  // your code
  for (let i = 0; i < newTodosValus.length; i++) {
    /**
     * todosOrder[i] - 1
    target item index 1 >> new value ==> Meet with PR department
    target item index 3 >> new value ==> By milk
    target item index 5 >> new value ==> Check the internet connect
     */
    // console.log(
    //   `target item index ${todosOrder[i] - 1} >> new value ==> ${
    //     newTodosValus[i]
    //   }`
    // );
    arr[todosOrder[i] - 1] = newTodosValus[i];
  }
};

// RenderToDosListTemplate function
// this function prints the end Results as string template.
// check if toDosStore is empty return a message (To do list stor is empty)
// else return todos template

const RenderToDosListTemplate = (arr) => {
  //check if toDosStore is empty return a message (To do list stor is empty)
  if (arr.length < 1) {
    return "To do list store is empty";
  } else {
    // toDosStore is not empty (we have todos items)
    // create a Variable ==> template store
    let template = "ToDo List: " + "\n";

    // for loop go Through toDosStore items and add each item to template
    for (let i = 0; i < arr.length; i++) {
      template = `${template} ${i + 1}- ${arr[i]} \n`;
    }

    return template;
  }
};

// Call Stack
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


console.log(RenderToDosListTemplate(toDosStore));
