import React from "react";
import { connect } from "react-redux";
import selectExpenses from "../selectors/expenses";
import expensesTotal from "../selectors/expenses-total";
import numeral from "numeral";

export const ExpensesSummary = (props) => (
         <div>
           <h3>Viewing {props.expenses.length} expenses totalling {numeral(props.total / 100).format('$0,0.00')}</h3>
         </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
    total: expensesTotal(selectExpenses(state.expenses, state.filters))
  };
};

export default connect(mapStateToProps)(ExpensesSummary);