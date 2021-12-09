import React from 'react';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import NavList from "./modules/components/dashboard-navbar"
import Dashboard from "./modules/components/dashboard-page/dashboardpage"
import Pricing from "./modules/components/pricing-page/pricing" 
import Checkout from "./modules/components/checkout-page/checkout";
import CreateUser from "./modules/components/create-component-pages/create-user";
import CreateItem from "./modules/components/create-component-pages/create-item";
import CreateCustomerItem from "./modules/customer-dashboard/create-customer-item";
import CreateTransaction from "./modules/components/create-component-pages/create-transaction";
import CreateOrder from "./modules/components/create-component-pages/create-order";
import EditUser from "./modules/components/edit-component-pages/edit-user"; 
import EditItem from "./modules/components/edit-component-pages/edit-item";
import EditTransaction from "./modules/components/edit-component-pages/edit-transaction";
import EditOrder from "./modules/components/edit-component-pages/edit-order";
import EditPallet from "./modules/components/edit-component-pages/edit-pallet";
import EditBox from "./modules/components/edit-component-pages/edit-box";
import EditProduct from "./modules/components/edit-component-pages/edit-product";
import CustomersItemsList from "./modules/components/lists-pages/customer-item-details";
import CustomersItemList from "./modules/customer-dashboard/customer-itemslist";
import InvoiceList from "./modules/customer-dashboard/invoices";
import PalletList from "./modules/components/lists-pages/customer-pallet-details";
import BoxList from "./modules/components/lists-pages/customer-box-details";
import ProductList from "./modules/components/lists-pages/customer-product-details";
import UsersList from "./modules/components/lists-pages/userslist";
import TransactionsList from "./modules/components/lists-pages/transactionslist";
import OrdersList from "./modules/components/lists-pages/orderslist";
import ItemsList from './modules/components/lists-pages/itemslist';
import Login from "./modules/components/login-page/login";
import Register from "./modules/components/register-page/register";
import AdminRoute from "./modules/components/protected-routes/adminroute";
import CustomerRoute from "./modules/components/protected-routes/customerroute";
import OwnerRoute from "./modules/components/protected-routes/ownerroute";
import Index from './Home';

function App() {
  const [ user, setLoginUser] = useState({})
  return (
    <Router>
        <Switch>
            <Route exact path="/users">
            <NavList />
              <UsersList />
            </Route>
            <Route exact path="/items">
            <NavList />
              <ItemsList />
            </Route>
            <Route exact path="/orders">
            <NavList />
              <OrdersList />
            </Route>
            <Route exact path="/transactions">
            <NavList />
              <TransactionsList />
            </Route>
            <Route exact path="/pricing">
              <Pricing />
            </Route>
            <Route exact path="/checkout">
            <NavList />
              <Checkout />
            </Route>
            <Route exact path="/create-user">
            <NavList />
              <CreateUser />
            </Route>
            <Route exact path="/create-item">
              <CreateItem />
            </Route>
            <Route exact path="/create-transaction">
            <NavList />
              <CreateTransaction /> 
            </Route>
            <Route exact path="/create-order">
            <NavList />
              <CreateOrder />
            </Route>
            <Route path="/item/:id" component={CustomersItemsList} />
            <Route path="/pallet/:id" component={PalletList} />
            <Route path="/box/:id" component={BoxList} />
            <Route path="/product/:id" component={ProductList} />
            <Route path="/edituser/:id" component={EditUser} />
            <Route path="/edititem/:id1/:id2" component={EditItem} />
            <Route path="/editpallet/:id" component={EditPallet} />
            <Route path="/editbox/:id" component={EditBox} />
            <Route path="/editproduct/:id" component={EditProduct} />
            <Route path="/editorder/:id" component={EditOrder} />
            <Route path="/edittransaction/:id" component={EditTransaction} />
            <CustomerRoute path="/customer-dashboard/:id" component={CustomersItemList} />
            <AdminRoute path="/admin-dashboard/:id" component={Dashboard} />
            <OwnerRoute path="/owner-dashboard/:id" component={Dashboard} /> 
            <Route path="/invoice/:id" component={InvoiceList} />
            <Route path="/create-customer-item" component={CreateCustomerItem} /> 
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>    
          </Route>
          <Route path="/register">
            <Register />
          </Route>
            <Route exact path="/">
              <Index />
            </Route>
          </Switch>
    </Router>
  );
}

export default App;