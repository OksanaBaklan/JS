const rewire = require("rewire");

beforeAll(() => (consoleSpy = jest.spyOn(console, "log")));

describe("1. Add item", () => {
  test("`insertTodo` function should add passed item to the `toDosStore` Array", () => {
    const solution = rewire("../index.js");
    const testArr = ["val1", "val2", "val3"];
    const insertTodo = solution.__get__("insertTodo");
    expect(insertTodo).toBeDefined();
    insertTodo(testArr, "check")
    expect(testArr).toEqual(expect.arrayContaining(["check"]));
  });
});
describe("2. Add items", () => {
  test("`insertTodosArr` function should add items of passed array to the `toDosStore`", () => {
    const solution = rewire("../index.js");
    const testArr = ["val1", "val2", "val3"];
    const insertTodosArr = solution.__get__("insertTodosArr");
    expect(insertTodosArr).toBeDefined();
    insertTodosArr(testArr, ["check1", "check2", "check3"])
    expect(testArr).toEqual([
      "val1",
      "val2",
      "val3",
      "check1",
      "check2",
      "check3",
    ]);
  });
});

describe("3. Remove Item", () => {
  test("`removeTodo` function should remove item from `toDosStore` by order Number", () => {
    const solution = rewire("../index.js");
    const testArr = ["val1", "val2", "val3"];
    const removeTodo = solution.__get__("removeTodo");
    expect(removeTodo).toBeDefined();
    removeTodo(testArr, 2)
    expect(testArr).toEqual([
      "val1",
      "val3"
    ]);
  });
});

describe("4. Edit Item", () => {
  test("`editTodo` function should edit an item in the `toDosStore` by order Number", () => {
    const solution = rewire("../index.js");
    const testArr = ["val1", "val2", "val3"];
    const editTodo = solution.__get__("editTodo");
    expect(editTodo).toBeDefined();
    editTodo(testArr, 2, "editIndex1")
    expect(testArr).toEqual([
      "val1",
      "editIndex1",
      "val3",
    ]);
  });
});

describe("5. Edit Items", () => {
  test("`updateTodos` function should edit an array of items in the `toDosStore` by order numbers", () => {
    const solution = rewire("../index.js");
    const testArr = ["val1", "val2", "val3", "val4"];
    const updateTodos = solution.__get__("updateTodos");
    expect(updateTodos).toBeDefined();
    updateTodos(testArr, [2, 4], ["update1", "update2"])
    expect(testArr).toEqual([
      "val1",
      "update1",
      "val3",
      "update2",
    ]);
  });
});

describe("6. Read TodosList", () => {
  test("`RenderToDosListTemplate` function should return string containing all items of `toDosStore` in the specified format", () => {
    const solution = rewire("../index.js");
    const toDosStore = solution.__get__("toDosStore");
    const RenderToDosListTemplate = solution.__get__("RenderToDosListTemplate");
    const result = RenderToDosListTemplate(toDosStore)
    expect(typeof result).toBe('string')
    expect(result).toContain(...toDosStore);
  });
});
