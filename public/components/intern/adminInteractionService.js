intern.factory('lpk_admin', ['$http', '$rootScope', function($http, $rootScope){
    return {
        addNews: function(newsEntry){

            return $http.post("/news/add", newsEntry)
        },

        updateNews: function(newsEntry){

            return $http.post("/news/update", newsEntry)
        },

        addEvents: function(eventsEntry){

            return $http.post("/events/add", eventsEntry)
        },

        updateEvents: function(eventsEntry){

            return $http.post("/events/update", eventsEntry)
        },

        deleteImage: function(path){
            return $http.post("/deleteImage", {path: path})
        },

        deleteEntry: function(entry){
            return $http.post('/entry/delete', entry)
        }

    }
}])