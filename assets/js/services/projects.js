(function(){
  'use strict';

  angular.module('ShingoRabi')
  .factory('projects', ['$http', '_', projectsService]);

  var BASE_URL = '/project';

  function projectsService($http, _){

    /**
    * @description Get a project(s) via the REST API (GET).
    * @param id - The unique DB ID of the project to read. If null read all projects.
    */
    function read(id){
      return $http({
        method: 'get',
        dataType: 'json',
        url: BASE_URL + (id ? '/' + id : '')
      });
    }

    /**
    * @description Create a new project via the REST API (POST).
    * @param project - The new project to add.
    */
    function create(project){
      return $http({
        method: 'post',
        dataType: 'json',
        url: BASE_URL,
        data: project
      });
    }

    // TODO: Write validator
    /**
    * @description Check that a project is valid.
    * @param project - The project to validate.
    */
    function isValid(project){
      if(!project.title) return false;
      if(!project.startDate) return false;
    }

    // Copy a project
    function copy(otherProject){
      var project = angular.copy(otherProject);
      project.title += " (COPY)"
      project.startDate = null;
      project.endDate = null;
      return create(project)
    }

    return {
      read: read,
      create: create,
      copy: copy,
      isValid: isValid
    }
  }
})();
