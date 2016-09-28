angular
  .module("store")
  .controller("ProductListController", ProductListCtrl)

ProductListCtrl.$inject = ['Products']
function ProductListCtrl(Products) {
  var ctrl = this

  Products.all().then(function(products) {
    ctrl.list = products
  })
}
