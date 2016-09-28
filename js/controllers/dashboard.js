angular
  .module("store")
  .controller("DashboardController", DashboardCtrl)

DashboardCtrl.$inject = ['Products']
function DashboardCtrl(Products) {
  console.log("dashboard", Products)

  var ctrl = this

  Products.all().then(function(prods) {
    ctrl.count = prods.length

    var rev = 0
    prods.forEach(function(p) {
      rev += p.sold * p.price
    })
    ctrl.revenue = rev
  })
}
