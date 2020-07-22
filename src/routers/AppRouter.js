import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import ExpensesTotal from '../components/ExpensesTotal'

// const ExpeneDashboardPage = () => <div>Dashboard</div>;
// const AddExpensePage = () => <div>Add Expense Page</div>;
// const EditPage = () => <div>Edit Page</div>;

// const HelpPage = () => <div>Help Page</div>;
// const NotFoundPage = () => (
//   <div>
//     404! - <Link to="/">Go Home</Link>
//   </div>
// );



const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <ExpensesTotal />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} exact={true} />
        <Route path="/edit/:id" component={EditExpensePage} exact={true} />
        <Route path="/help" component={HelpPage} exact={true} />
        <Route component={NotFoundPage} exact={true} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
