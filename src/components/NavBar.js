var React = require('react'),
UserMenu = require('./Dropdown/UserMenu'),
SideBar = require('./SideBar');

var NavBar = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="/dashboard.html">Trend Admin</a>
            </div>
            <UserMenu/>
            <SideBar/>
        </nav>
    )
  }
});

module.exports = NavBar;


                
                   
 