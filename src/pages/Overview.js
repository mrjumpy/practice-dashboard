var React = require('react'),
ChartPanel = require('../components/ChartPanel'),
Faker = require('faker'),
DisplayPanel = require('../components/DisplayPanel');
var Overview = React.createClass({
  render: function() {
    return (
      <div className="container-fluid">
        <h1 className="page-header">Overview</h1>      
        <div className="row">
            <div className="col-md-4 col-lg-4">
                <DisplayPanel title="Today's Sales" frequency="2500"/>
            </div>
            <div className="col-md-4 col-lg-4">
                <DisplayPanel title="Invoices Outstanding" frequency="1500"/>
            </div>
            <div className="col-md-4 col-lg-4">
                <DisplayPanel title="Gross Margin" frequency="4000"/>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4 col-lg-4">
                 <ChartPanel title="Sales by department" data={this._sales_dept()}/>
            </div>
            <div className="col-md-4 col-lg-4">
                 <ChartPanel title="Sales by location" data={this._sales_location()}/>
            </div>
            <div className="col-md-4 col-lg-4">
                 <ChartPanel title="Sales by time" data={this._sales_time()}/>
            </div>
        </div>
      </div>
    )
  },
  _sales_dept: function() {
    return [{
        value: Faker.random.number(1500),
        color:"#2196F3",
        highlight: "#111111",
        label: "Marketing"
    },{
        value: Faker.random.number(1500),
        color:"#3F51B5",
        highlight: "#111111",
        label: "Sales"
    },{
        value: Faker.random.number(1500),
        color:"#00BCD4",
        highlight: "#111111",
        label: "QA"
    },{
        value: Faker.random.number(1500),
        color:"#F7464A",
        highlight: "#111111",
        label: "Consultant"
    }];
  },
  _sales_location: function() {
    return [{
        value: Faker.random.number(1500),
        color:"#2196F3",
        highlight: "#111111",
        label: "JP"
    },{
        value: Faker.random.number(1500),
        color:"#3F51B5",
        highlight: "#111111",
        label: "NY"
    },{
        value: Faker.random.number(1500),
        color:"#00BCD4",
        highlight: "#111111",
        label: "CA"
    },{
        value: Faker.random.number(1500),
        color:"#F7464A",
        highlight: "#111111",
        label: "TW"
    },{
        value: Faker.random.number(1500),
        color:"#9C27B0",
        highlight: "#111111",
        label: "CN"
    }];
  },
  _sales_time: function() {
    return [{
        value: Faker.random.number(1000),
        color:"#2196F3",
        highlight: "#111111",
        label: "Q1"
    },{
        value: Faker.random.number(1000),
        color:"#3F51B5",
        highlight: "#111111",
        label: "Q2"
    },{
        value: Faker.random.number(1000),
        color:"#00BCD4",
        highlight: "#111111",
        label: "Q3"
    },{
        value: Faker.random.number(1000),
        color:"#F7464A",
        highlight: "#111111",
        label: "Q4"
    }];
  }
});

module.exports = Overview;








