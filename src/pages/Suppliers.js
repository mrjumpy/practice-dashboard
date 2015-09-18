var React = require('react'),
Faker = require('faker'),
Griddle = require('griddle-react');

var Suppliers = React.createClass({
  render: function() {
    var fakeData = [];
    for(var i = 0 ; i < 1000 ; i++){
      var obj = {
        supplier: Faker.company.companyName(),
        boss: Faker.internet.userName(),
        phone: Faker.phone.phoneNumber() 
      };
      fakeData.push(obj);
    }
    return (
       <div className="container-fluid">
        <h1 className="page-header">Suppliers</h1>
        <div className="row">
          <div className="col-md-12">
            <Griddle results={fakeData} useFixedHeader={true} resultsPerPage={15} showFilter={true} noDataMessage={"No data could be found."} />
          </div>
        </div>
       </div>
    )
  } 
});

module.exports = Suppliers;













