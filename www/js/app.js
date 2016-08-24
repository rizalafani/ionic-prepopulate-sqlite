// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform, $rootScope, $cordovaSQLite) {
    $ionicPlatform.ready(function() {
        if(window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }

        if(window.StatusBar) {
            StatusBar.styleDefault();
        }

        if (window.cordova) {
            window.plugins.sqlDB.copy("data.db", 0, function() {
                console.log("Copy done");
                $rootScope.db = $cordovaSQLite.openDB({name: "data.db", location: 'default'});
            }, function(error) {
                console.error("There was an error copying the database: ");
                console.error(error);
                $rootScope.db = $cordovaSQLite.openDB({name: "data.db", location: 'default'});
            });

            console.log("Run on device");
        }
    });
})

.controller('MyCtrl', function($scope, $rootScope, $cordovaSQLite){
    $scope.selectAll = function(){
        if (window.cordova) {
            $scope.items = [];
            var query = "SELECT * FROM mahasiswa";
            $cordovaSQLite.execute($rootScope.db, query, []).then(function(res) {
                console.log(res.rows);
                if(res.rows.length > 0) {
                    for(var i = 0; i < res.rows.length; i++) {
                        //alert(res.rows.item(i).nama)
                        console.log("SELECTED -> " + res.rows.item(i).nama);
                        $scope.items.push(res.rows.item(i));
                    }
                } else {
                    //alert("No results found");
                    console.log("No results found");
                }
            }, function (err) {
                console.error(err);
            });
        }else{
            $scope.items = [
                {nama: "Foo"}, {nama: "Bar"}, {nama: "Baz"}
            ];
        }
    }
})
