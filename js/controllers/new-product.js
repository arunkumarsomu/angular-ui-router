angular
  .module("store")
  .controller("NewProductController", NewProductController)

NewProductController.$inject = ['Products', '$state']
function NewProductController(Products, $state) {
  var ctrl = this

  ctrl.fakeSave = function() {
    $state.go('products.detail', { id: ctrl.name })
  }

  ctrl.save = function() {
    Products.save(ctrl.product).then(function(record) {
      $state.go('products.detail', { id: record.id })
    })
  }
}
