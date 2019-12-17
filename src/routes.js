const express = require('express')
const routes = express.Router()

const recipes = require('./app/controllers/recipesController')
const chefs = require('./app/controllers/chefsController')
const site = require('./app/controllers/siteController')

// client
routes.get('/', site.home)
routes.get('/about', site.about)
routes.get('/recipes', site.recipesList)
routes.get('/recipes/:id', site.recipe)
routes.get('/chefs', site.chefsList)

// admin
routes.get('/admin/recipes', recipes.index)
routes.get('/admin/recipes/create', recipes.create)
routes.post('/admin/recipes', recipes.post)
routes.get('/admin/recipes/:id', recipes.show)
routes.get('/admin/recipes/:id/edit', recipes.edit)
routes.put('/admin/recipes', recipes.put)
routes.delete('/admin/recipes', recipes.delete)

routes.get('/admin/chefs', chefs.index)
routes.get('/admin/chefs/create', chefs.create)
routes.post('/admin/chefs', chefs.post)
routes.get('/admin/chefs/:id', chefs.show)
routes.get('/admin/chefs/:id/edit', chefs.edit)
routes.put('/admin/chefs', chefs.put)
routes.delete('/admin/chefs', chefs.delete)





module.exports = routes