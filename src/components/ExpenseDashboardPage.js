import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from './ExpenseListFilters'

const ExpeneDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpeneDashboardPage;