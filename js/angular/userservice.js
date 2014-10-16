(function(window, angular) {
  'use strict';

  // Deferred Object which will be resolved when the Facebook SDK is ready
  // and the `fbAsyncInit` function is called.

  /**
   * @name User
   * @kind function
   * @description
   * An Angularjs module to take approach of User javascript sdk.
   *
   * @author parkjungun <pheadra4@gmail.com>
   */
  angular.module('user', ['facebook',
                          'googleplus']).
    /**
     * UserService Servie
     */
    service('UserService', ['$rootScope', '$http', 'Facebook', 'GooglePlus', '$q',
                    function($rootScope,   $http,   Facebook,   GooglePlus,   $q) {

		 this.UserInfo = function(csrftoken, authtoken) {
		      var deferred = $q.defer();

		      $http({url:'user/getfortoken',
		    	  method:'POST',
		    	  data:'csrf-token=' + csrftoken + '&token=' + authtoken +'&provider=WEB',
		    	  headers:{'Content-Type': 'application/x-www-form-urlencoded'}})
		      .then(function(response) {
		        if (response.data.user) {
		          deferred.resolve(response.data);
		        }else{
		          deferred.reject(response.data)
		        }
		      }, function(x) {
		        deferred.reject({ error: "Server Error" });
		      });
		      return deferred.promise;
			};

	    this.Login = function(email, password, token) {
	      var deferred = $q.defer();

	      $http({url:'user/login',
	    	  method:'POST',
	    	  data:'csrf-token='+token+'&email=' +email+ '&password='+password+'&provider=WEB',
	    	  headers:{'Content-Type': 'application/x-www-form-urlencoded'}})
	      .then(function(response) {
	        if (response.data.user) {
	          var data = response.data;
	          deferred.resolve(data);
	        }else{
	          deferred.reject(response.data);
	        }
	      }, function(x) {
	        deferred.reject({ error: "Server Error" });
	      });

	      return deferred.promise;
		};


		this.Signup = function(name, email, password, token){
			var deferred = $q.defer();
		    $http({url:'user/add',
		    	  method:'POST',
		    	  data:'csrf-token='+token+'&email=' +email+ '&password='+password+'&name='+name+'&provider=WEB',
		    	  headers:{'Content-Type': 'application/x-www-form-urlencoded'}})
	       .then(function(response) {
	    	   console.log(response);
	    	   if ( response.data.email ) {
		        	deferred.resolve(response.data);
		        }else{
		        	deferred.reject(response.data);
		        }
	        }, function(x) {
	        	deferred.reject({ error: "Server Error" });
	        });
		    return deferred.promise;
		};

	    this.Logout = function(provider){
	    	try{
		    	if (provider =='FACEBOOK') {
		    		Facebook.logout();
		    	} else if (provider == 'GOOGLE') {
		    		GooglePlus.logout();
		    	}
	    	}catch(exception){
	    	}
	    };

		this.FacebookIsReady = function(){
			return Facebook.isReady()
		};

	    this.FacebookMe = function() {
          Facebook.api('/me', function(response) {
                console.log(JSON.stringify(response));
          });
	    };

	    this.FacebookLogin = function() {
	       Facebook.login(function(response) {
	       });
	    };


	    this.GooglePlusIsReady = function(){
			return GooglePlus.isReady()
		};

	     this.GoogleMe = function(){

	    	 GooglePlus.getUser().then(function (user) {
	    		 console.log(JSON.stringify(user));

	         });

	    	 return deferred.promise;
		 };

		 this.GoogleLogin = function () {
		        GooglePlus.login().then(function (authResult) {
                    console.log(JSON.stringify(authResult));
		        }, function (err) {
		            console.log(err);
		        });
		      };

    }]).

    /**
     * Module initialization
     */
    run([
      '$rootScope',
      '$q',
      '$window',
      '$timeout',
      function($rootScope,  $q, $window, $timeout) {

      }
    ]);

})(window, angular);