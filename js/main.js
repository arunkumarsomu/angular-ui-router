angular
  .module("store", ["ui.router"])
  .config(configure)

configure.$inject = ['$stateProvider', '$urlRouterProvider']
function configure($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('dashboard', {
      url: '/',
      controller: 'DashboardController',
      controllerAs: 'dash',
      templateUrl: 'templates/home.html'
    })
    .state('products', {
      url: '/shop',
      controller: 'ProductListController',
      controllerAs: 'pc',
      templateUrl: 'templates/products.html'
    })
    .state('products.new', {
      url: '/new',
      controller: 'NewProductController',
      controllerAs: 'np',
      templateUrl: 'templates/product-form.html'
    })
    .state('products.detail', {
      url: '/:id',
      controller: 'ProductDetailController',
      controllerAs: 'pc',
      templateUrl: 'templates/product.html'
    })

  $urlRouterProvider.otherwise('/')

  console.log("setting up", $stateProvider)
}








//
