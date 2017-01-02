(function(){
  'use strict';

  angular.module('ShingoRabi')
  .controller('DashboardController', ['$scope', '$location', 'projects', 'dialog', 'toast', '_', DashboardController]);

  /**
  * @description The controller for the Dashboard view. Lists projects and
  *    provides functions to add and copy projects via the projectsService.
  * @param $scope - The angular scope of the controller.
  * @param $location - The locationService.
  * @param projects - The projectsService.
  * @param dialog - The dialogService.
  * @param toast - The toastService.
  * @param _ - The lodash Constant.
  */
  function DashboardController($scope, $location, projects, dialog, toast, _){
    // Initialize View Model (vm)
    var vm = this;

    // Array to hold projects
    vm.projects = new Array();

    /**
    * @description Uses the projectsService to load projects via HTTP calls.
    *   If there is an error, toast the user with an appropriate message.
    *   Stores results into vm.projects.
    */
    vm.loadProjects = function(){
      projects.read()
      .then(function(results){
        vm.projects = results.data;
      })
      .catch(function(err){
        if(err)
          toast.create('Projects can\'t be loaded at this time...');
      });
    }

    /**
    * @description Creates a custom Dialog from the addProject template to
    *    add a new project. Checks for a valid project and catches errors.
    *    Toasts user with appropriate messages.
    */
    vm.addProject = function(){
      dialog.create(function($scope, $mdDialog){
        $scope.project = {}
        $scope.answer = function(){
          $mdDialog.hide($scope.project);
        }
        $scope.cancel = function(){
          $mdDialog.cancel();
        }
      }, 'templates/addProject.tmpl.html')
      .then(function(project){
          if(projects.isValid(project))
            return projects.create(project)
          else
            throw new 'Project was not valid';
      })
      .then(function(response){
        vm.loadProjects();
      })
      .catch(function(err){
        if(err)
          toast.create('Project was not added!');
      });
    }

    /**
    * @description Copies an existing project using the projectsService.
    * @param id - the unique ID of the project to copy.
    */
    vm.copyProject = function(id){
      var index = _.findIndex(vm.projects, {'id': id});
      if(index > -1){
        vm.projects.push(projects.copy(vm.projects[index]));
      }
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
    vm.loadProjects();
  }
})();
