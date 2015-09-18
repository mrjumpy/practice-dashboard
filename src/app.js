var React = require('react'),
routerModule = require('react-router'),
Dashboard = require('./pages/Dashboard'),
Overview = require('./pages/Overview'),
Suppliers = require("./pages/Suppliers"),
SalesPage = require("./pages/SalesPage"),
Customers = require("./pages/Customers"),
Inventory = require("./pages/Inventory"),
Router = routerModule.Router,   
IndexRoute = routerModule.IndexRoute,
Route = routerModule.Route;

React.render((
  <Router>
    <Route path="/" component={Dashboard}>
      <IndexRoute component={Overview}/>
      <Route path="overview" component={Overview}/>
      <Route path="inventory" component={Inventory}/>
      <Route path="sales" component={SalesPage}/>
      <Route path="suppliers" component={Suppliers}/>
      <Route path="customers" component={Customers}/>
    </Route>
  </Router>
), document.body);


 



