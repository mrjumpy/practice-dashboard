var React = require('react'),
Faker = require('faker'),
Griddle = require('griddle-react');

var SalesPage = React.createClass({
  render: function() {
    var fakeData = [];
    for(var i = 0 ; i < 1000 ; i++){
      var obj = {
        barcode: Faker.random.number(1231923),
        name: Faker.name.findName(),
        qty: Faker.random.number(100),
        cost: Faker.random.number(1000),
        category: Faker.commerce.productName()
      };
      fakeData.push(obj);
    }
    return (
       <div className="container-fluid">
        <h1 className="page-header">Sales</h1>
        <div className="row">
          <div className="col-md-12">
            <Griddle results={fakeData} useFixedHeader={true} resultsPerPage={15} showFilter={true} noDataMessage={"No data could be found."} />
          </div>
        </div>
       </div>
    )
  } 
});

module.exports = SalesPage;













