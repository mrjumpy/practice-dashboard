var React = require('react'),
routerModule = require('react-router'),
Link = routerModule.Link;

var SideBar = React.createClass({
  render: function() {
    return (
      <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav side-nav" onClick={this.escape}>
                    <li className="active">
                        <Link to="/overview">
                            <i className="fa fa-fw fa-dashboard"></i> overview
                        </Link>
                    </li>
                    <li>
                        <Link to="/sales">
                            <i className="fa fa-fw fa-bar-chart-o"></i> Sales
                        </Link>
                    </li>
                    <li>
                        <Link to="/inventory">
                            <i className="fa fa-fw fa-bar-chart-o"></i> Inventory
                        </Link>
                    </li>
                    <li>
                        <Link to="/suppliers">
                            <i className="fa fa-fw fa-bar-chart-o"></i> Suppliers
                        </Link>
                    </li>
                    <li>
                        <Link to="/customers">
                            <i className="fa fa-fw fa-bar-chart-o"></i> Customers
                        </Link>
                    </li>
                     
                </ul>
            </div>
    )
  },
  escape: function(){
      $('.navbar-toggle').click();
  }
});

module.exports = SideBar;






                
                   
 

