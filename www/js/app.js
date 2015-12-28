angular.module('starter', ['ionic', 'starter.controllers', 'ionic-material'])


.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    // Disable caching during development
    $ionicConfigProvider.views.maxCache(0);


    ////////////////////////////////////////
    // States Begin
    ////////////////////////////////////////

    $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })




    .state('app.dashboard', {
        url: '/dashboard',
        views: {
            'menuContent': {
                templateUrl: 'templates/dashboard.html',
                controller: 'DashboardController'
            },

            // This is the example use of ionic-material-design component in a specific state
            /*
            'fabContent': {
                template: '<button id="fab-activity" class="button button-fab button-fab-top-right expanded button-energized-900 flap"><i class="icon ion-paper-airplane"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-activity').classList.toggle('on');
                    }, 200);
                }
            }*/
        }
    })


    .state('app.login', {
        url: '/login',
        views: {
            'menuContent': {
                templateUrl: 'templates/login.html',
                controller: 'LoginController'
            },
        }
    })
    ;

    //Default app landing state
    $urlRouterProvider.otherwise('/app/login');

    ////////////////////////////////////////
    // States end
    ////////////////////////////////////////

})


.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})
;
