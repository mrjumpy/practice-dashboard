var React = require('react'),
Faker = require('faker'),
Griddle = require('griddle-react');

var Inventory = React.createClass({
  render: function() {
    var fakeData = [];
    for(var i = 0 ; i < 1000 ; i++){
      var obj = {
        barcode: Faker.random.number(1000),
        name: Faker.commerce.productName(),
        qty: Faker.random.number(100) 
      };
      fakeData.push(obj);
    }
    return (
       <div className="container-fluid">
        <h1 className="page-header">Inventory</h1>
        <div className="row">
          <div className="col-md-12">
            <Griddle results={fakeData} useFixedHeader={true} resultsPerPage={15} showFilter={true} noDataMessage={"No data could be found."} />
          </div>
        </div>
       </div>
    )
  } 
});

module.exports = Inventory;













