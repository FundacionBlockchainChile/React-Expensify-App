import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";
import expenses from "../fixtures/expenses";


test("should render ExpenseSummary with 1 expense", () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={235} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseSummary with number total", () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={23} expensesTotal={23532525234542} />);
  expect(wrapper).toMatchSnapshot();
});
