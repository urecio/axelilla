angular.module('axApp', [])
.controller('axCtrl', function ($scope, $timeout) {
  $scope.scrollPositions = {
    mountains: $('#mountains-step')[0].getBoundingClientRect().top,
    estatua: $('#estatua-step')[0].getBoundingClientRect().top,
    digital: $('#digital-step')[0].getBoundingClientRect().top,
    explosion: $('#personajes')[0].getBoundingClientRect().top,
    cueva: $('#cueva-step')[0].getBoundingClientRect().top
  };
  $timeout(function () {
    skrollr.init();
  });
})
