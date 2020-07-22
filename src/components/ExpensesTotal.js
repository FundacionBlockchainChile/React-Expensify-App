import React from "react";
import { connect } from "react-redux";
import selectExpenses from "../selectors/expenses";

export const ExpenseTotal = (props) => (
         <div>
           <h3>You have {props.expenses.length} number of expenses.</h3>
         </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpenseTotal);