
angular.module('myapp', ['ngRoute']).config(['$routeProvider',function($routeProvider)
{
$routeProvider
.when('/', {
 templateUrl: 'home.html',
 
})
.when('/frontend', {
    templateUrl: 'frontend.html',
   
   })
   .when('/backend', {
    templateUrl: 'backend.html',
    
   })
   .when('/database', {
    templateUrl: 'database.html',
    
   })
   .when('/seo', {
    templateUrl: 'contact-us.html',
   })
   .when('/english', {
    templateUrl: 'english.html',
    
   })
   .when('/hireme', {
    templateUrl: 'hireme.html',
    
   })
   .when('/website-designer-in-delhi', {
    templateUrl: 'website-designer-in-delhi.html',
    
   })
.otherwise({
 redirectTo: '/'
}); 
}]); 
