var React = require('react'),
PieChart = require("react-chartjs").Pie;

var ChartPanel = React.createClass({
 
    render: function() {
        var options = {
            responsive: true,
            //Boolean - Whether we should show a stroke on each segment
            segmentShowStroke : true,
            //String - The colour of each segment stroke
            segmentStrokeColor : "#fff",
            //Number - The width of each segment stroke
            segmentStrokeWidth : 2,
            //Number - The percentage of the chart that we cut out of the middle
            percentageInnerCutout : 0, // This is 0 for Pie charts
            //Number - Amount of animation steps
            animationSteps : 100,
            //String - Animation easing effect
            animationEasing : "easeOutBounce",
            //Boolean - Whether we animate the rotation of the Doughnut
            animateRotate : true,
            //Boolean - Whether we animate scaling the Doughnut from the centre
            animateScale : false
        }
        
        return (
            <div className="panel panel-red">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {this.props.title}
                    </h3>
                </div>
                <div className="panel-body">
                    <div>
                        <PieChart ref="pieChart" data={this.props.data} options={options}/>
                    </div>
                </div>
             </div>
        )
    } 
});

module.exports = ChartPanel;