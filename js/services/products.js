angular
  .module("store")
  .factory("Products", Products)

Products.$inject = ['$http']
function Products($http) {

  return {
    all: function() {
      return $http.get("http://localhost:4567/products").then(function(res) {
        return res.data
      })
    },
    save: function(data) {
      console.log('should save', data)
      return Promise.resolve({
        id: 5
      })
    }

      // Mock data
      // return Promise.resolve([
      //   { id: 1, name: "Foo" },
      //   { id: 5, name: "Bar" }
      // ])
  }
}
