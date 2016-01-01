angular.module('myApp', [])
  .directive('highChart', function () {
  return {
    restrict: 'C',
    replace: true,
    scope: {
      type:'=',
	  xaxis:'=',
	  yaxis:'=',
	  title:'=',
	  data:'='
    },
    controller: function ($scope, $element, $attrs) {
     

    },
    template: '<div id="container" style="margin: 0 auto">not working</div>',
    link: function (scope, element, attrs) {
     
      var chart = new Highcharts.Chart({
        chart: {
          renderTo: 'container',
        },
        title: {
            text: scope.title
        },
        xAxis: {
            categories: scope.xaxis
        },
        yAxis: {
            categories: scope.yaxis,
            title: null
        },
        series: [{
            type:scope.type,
            showInLegend:true,
            data:scope.data  
        }]
      });
      scope.$watch("type", function (newValue) {
			 chart.series[0].update({
						type: newValue
					});
		}, true);

       scope.$watch("xaxis", function (newValue) {
        chart.xAxis[0].setCategories(newValue, true);
      }, true);
	  scope.$watch("data", function (newValue) {
        chart.series[0].setData(newValue, true);
      }, true);
         scope.$watch("yaxis", function (newValue) {     
        chart.yAxis[0].setCategories(newValue, true);
      }, true);
      scope.$watch("title", function (newValue) {     
        chart.yAxis[0].setCategories(newValue, true);
      }, true);
    }
  }
});
