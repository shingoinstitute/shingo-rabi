(function(){
  angular.module('ShingoRabi')
  .factory('dialog', ['$mdDialog', dialogService]);

  function dialogService($mdDialog){
    return {
      create: function(controller, template, locals){
        return $mdDialog.show({
          controller: controller,
          templateUrl: template,
          parent: angular.element(document.body),
          targetEvent: null,
          clickOutsideToClose: true,
          fullscreen: true,
          locals: locals
        });
      },
      alert: function(title, body, okText){
        var alert = $mdDialog.alert()
          .title(title)
          .textContent(body)
          .ok(okText);

        return $mdDialog.show(alert);
      },
      prompt: function(title, textContent, placeholder, intialValue, okText, cancelText){
        var prompt = $mdDialog.prompt()
          .title(title)
          .textContent(textContent)
          .placeholder(placeholder)
          .ariaLabel(placeholder)
          .initialValue(intialValue)
          .targetEvent(null)
          .ok(okText)
          .cancel(cancelText);
        return $mdDialog.show(prompt);
      }
    }
  }
})();
