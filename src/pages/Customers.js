var React = require('react'),
Faker = require('faker'),
Griddle = require('griddle-react');

var Customers = React.createClass({
  render: function() {
    var fakeData = [];
    for(var i = 0 ; i < 1000 ; i++){
      var obj = {
        customer: Faker.internet.userName(),
        prodct: Faker.internet.userName(),
        qty: Faker.random.number(10),
        cost: Faker.random.number(1000)
      };
      fakeData.push(obj);
    }
    return (
       <div className="container-fluid">
        <h1 className="page-header">Customers</h1>
        <div className="row">
          <div className="col-md-12">
            <Griddle results={fakeData} useFixedHeader={true} resultsPerPage={15} showFilter={true} noDataMessage={"No data could be found."} />
          </div>
        </div>
       </div>
    )
  } 
});

module.exports = Customers;













