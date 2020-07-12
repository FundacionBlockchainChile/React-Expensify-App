import expensesReducer from '../../reducers/expenses'
import expenses from "../fixtures/expenses";

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT'})
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = { type: "REMOVE_EXPENSE", id: expenses[1].id };
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense by id', () => {
    const action = { type: "REMOVE_EXPENSE", id: '-1' };
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

// should add an expense
test("should add an expense", () => {
    const expense = {
      id: "4",
      description: "Test",
      note: "lorem ipsum",
      amount: 500,
      createdAt: 100
    }
    const action = { type: "ADD_EXPENSE", expense };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense])
});

// should edit an expense
test("should edit an expense", () => {
    const action = {
      type: "EDIT_EXPENSE",
      id: expenses[2].id,
      updates: {
        description: "Test"
      },
    };
    const state = expensesReducer(expenses, action)
    expect(state[2].description).toEqual("Test");
});

// should not edit expense if expense not found
test("should not edit expense if expense not found", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: 0,
    updates: {
      description: "Test",
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});





