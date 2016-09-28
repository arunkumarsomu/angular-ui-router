angular
  .module("store")
  .controller("ProductDetailController", ProductDetailController)

ProductDetailController.$inject = ['$state', 'Products']
function ProductDetailController($state, Products) {
  var ctrl = this

  console.log('state is', $state)
  console.log('id is', $state.params.id)

  Products.all().then(function(products) {
    products.forEach(function(obj) {
      if (obj.id === Number($state.params.id)) {
        ctrl.product = obj
      }
    })
  })
}
