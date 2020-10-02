const router = require('express').Router()
const faker = require('faker')
const Product = require('../models/product')
const Reviews = require('../models/product')

router.get('/generate-fake-data', (req, res, next) => {
  for (let i = 0; i < 90; i++) {
    let product = new Product()

    product.category = faker.commerce.department()
    product.name = faker.commerce.productName()
    product.price = faker.commerce.price()
    product.image = 'https://via.placeholder.com/250?text=Product+Image'

    product.save((err) => {
      if (err) throw err
    })
  }
  res.end()
})

router.get('/products', (req, res, next) => {
    const perPage = 10

  // return the first page by default
  const page = req.query.page || 1

  Product
    .find({})
    .skip((perPage * page) - perPage)
    .limit(perPage)
    .sort({_id: 'asc'})
    .exec((err, products) => {
      // Note that we're not sending `count` back at the moment, but in the future we might want to know how many are coming back so we can figure out the number of pages
      Product.count().exec((err, count) => {
        if (err) return next(err)

        res.send(products)
        console.log(products);
      })
    })
})
// get specific a product by its id
router.get('/products/:product', (req, res, next) => {
    let productId = req.params.product

  Product
    .findById(productId).exec((err, product) => {
        if (err) {
            throw err;
        } else {
            res.send(product);
        }
    })
})

// post products, receive request as body 
// key values can be sent as an array
module.exports = router