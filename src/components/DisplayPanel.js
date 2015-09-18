var React = require('react'),
fecha = require('fecha'),
Faker = require('faker');
var DisplayPanel = React.createClass({
    getInitialState: function() {
        return {
            income: 0,
            date: null
        };
    },
    componentDidMount: function() {
        var self = this;
        self.income = 0;
        if (self.isMounted()) {
            self.interval_id = setInterval(function() {
            self.income += Faker.random.number(500);
            self.setState({
                income: self.income,
                date: fecha.format(new Date(), 'hh:mm A MM/DD/YYYY')
            });
        }, self.props.frequency);
        }
    },
    componentWillUnmount: function(){
      clearInterval(this.interval_id);
    },
    render: function() {
        return (
            <div className="panel panel-green">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {this.props.title}
                    </h3>
                </div>
                <div className="panel-body">
                    <h2><i className="fa fa-usd"></i>{this.state.income}</h2>
                    <span><i className="fa fa-clock-o"></i> {this.state.date}</span>
                </div>
             </div>
        )
    } 
});

module.exports = DisplayPanel;