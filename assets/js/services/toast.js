(function(){
  angular.module('ShingoRabi')
  .factory('toast', ['$mdToast', toastService]);

  function toastService($mdToast){
    return {
      create: function(message, position){
        if(!position){
          position = {
            bottom: true,
            top: false,
            left: false,
            right: false,
            center: true
          };
        }
        var pin = Object.keys(position)
          .filter(function(pos) { return position[pos]; })
          .join(' ');
        var t = $mdToast.simple()
                    .textContent(message)
                    .position(pin)
                    .hideDelay(3000);
        $mdToast.show(t);
      }
    }
  }
})();
