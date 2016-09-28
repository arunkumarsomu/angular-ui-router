require 'sinatra/base'
require 'json'
require 'pry'

require 'faker'
include Faker

require 'rack/cors'

Products = 15.times.map do |i|
  {
    id:          i + 1,
    name:        Commerce.product_name,
    price:       Commerce.price,
    category:    Commerce.department,
    description: Company.catch_phrase,
    sold:        rand(5 .. 100)
  }
end

class Api < Sinatra::Base
  use Rack::Cors do
    allow do
      origins '*'
      resource '*', headers: :any, methods: :any
    end
  end

  get "/products" do
    Products.to_json
  end

  post "/products" do
    product = JSON.parse(request.body.read)["product"]
    product[:id] = Products.count + 1
    product[:sold] = rand(5 .. 10)

    Products.push product

    product.to_json
  end

  patch "/products/:id" do
    p = Products.find { |p| p[:id] == params[:id].to_i }
    return "not found" unless p

    raise "Not Implemented"
  end

  delete "/products/:id" do
    Products.delete_if { |p| p[:id] == params[:id].to_i }

    "ok"
  end

  run!
end
