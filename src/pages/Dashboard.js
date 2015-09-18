var React = require('react'),
NavBar = require('../components/NavBar'),
routerModule = require('react-router'),
Router = routerModule.Router,   
Route = routerModule.Route,
Link = routerModule.Link;
var Dashboard = React.createClass({
  render: function() {
    return (
      <div className="dashboard">
        <NavBar/>
         {this.props.children}
      </div>
    )
  } 
});

module.exports = Dashboard;








