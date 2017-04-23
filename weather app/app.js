var app = angular.module('Weather', []);

app.factory('WeatherApi', function($http) {
  var obj = {};
  
  obj.getLoc = function() {
    return $http.jsonp("http://ipinfo.io/json?callback=JSON_CALLBACK");
  };
  obj.getCurrent = function(city) {
    var api = "http://api.openweathermap.org/data/2.5/weather?q=";
    var units = "&units=metric";
    var appid = "&APPID=de266a0463f7d4d92d5aeb22c81a8731"
    var cb = "&callback=JSON_CALLBACK";
    
    return $http.jsonp(api + city + units+ appid + cb);
  };
  return obj
});

app.controller('Ctrl', function($scope, WeatherApi) {
  $scope.Data = {};
  $scope.unit ='C';
  $scope.sysChange = false;
  WeatherApi.getLoc().success(function(data) {
    var city = data.city + ',' + data.country;
    $scope.city = data.city;
    $scope.country = data.country;
    WeatherApi.getCurrent(city).success(function(data) {
      CurrentWeather(data)
    });
  });

  function CurrentWeather(data) {
    $scope.temperature = Math.round(data.main.temp);
    $scope.Cel = Math.round(data.main.temp);
    $scope.des = data.weather[0].main;
    $scope.Fah = Math.round( ($scope.temperature * 9)/5 + 32 );
    $scope.iconUrl='http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
    
  }
  
  $scope.changeUnit= function(){
   if($scope.sysChange){
     $scope.unit ='C';
     $scope.temperature = $scope.Cel;
     return $scope.sysChange = false;
     }
    $scope.unit ='F';
    $scope.temperature = $scope.Fah;
    return $scope.sysChange = true;
  }
});