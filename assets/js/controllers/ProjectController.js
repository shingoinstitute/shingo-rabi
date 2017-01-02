(function(){
  'use strict';

  angular.module('ShingoRabi')
  .controller('ProjectController', ['$scope', '$location', '$routeParams', 'projects', 'dialog', 'toast', '_', ProjectController]);

  /**
  * @description The controller for the Workshop Detail view. Lists projects and
  *    provides functions to add and copy projects via the projectsService.
  * @param $scope - The angular scope of the controller.
  * @param $location - The locationService.
  * @param projects - The projectsService.
  * @param dialog - The dialogService.
  * @param toast - The toastService.
  * @param _ - The lodash Constant.
  */
  function ProjectController($scope, $location, $routeParams, projects, dialog, toast, _){
    var id = $routeParams.id;

    // Initialize View Model (vm)
    var vm = this;

    // Array to hold projects
    vm.project = {};

    /**
    * @description Uses the projectsService to load project via HTTP calls.
    *   If there is an error, toast the user with an appropriate message.
    *   Stores result into vm.project.
    */
    vm.loadProject = function(){
      projects.read(id)
      .then(function(results){
        vm.project = results.data;
      })
      .catch(function(err){
        if(err)
          toast.create('Project can\'t be loaded at this time...');
      });
    }

    /**
    * @description Uses the locationService to go to the specified path.
    * @param path - the path to navigate to
    */
    vm.go = function(path){
      $location.path(path);
    }

    // Load the projects when
    // the controller is loaded
    vm.loadProject();
  }
})();
