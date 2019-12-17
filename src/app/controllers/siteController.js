const Recipe = require('../models/Recipe')
const Chef = require('../models/Chef')

module.exports = {
  home(req, res) {
    const { filter } = req.query

    if (filter) {
      Recipe.findBy(filter, function(recipes){
        return res.render('site/recipesList', { filter, recipes })

      })
    } else {
      Recipe.all(function(recipes) {
        return res.render('site/home', { recipes })

      })
    }
  },
  about(req, res) {
    const { filter } = req.query

    if (filter) {
      Recipe.findBy(filter, function(recipes){
        return res.render('site/recipesList', { filter, recipes })

      })
    } else {
      return res.render('site/about.njk')
    }
  },
  recipesList(req, res) {
    const { filter } = req.query

    if (filter) {
      Recipe.findBy(filter, function(recipes){
        return res.render('site/recipesList', { filter, recipes })

      })
    } else {
      Recipe.all(function(recipes) {
        return res.render('site/recipesList', { recipes })
      })
    }

  },
  recipe(req, res) {
    const { filter } = req.query

    if (filter) {
      Recipe.findBy(filter, function(recipes){
        return res.render('site/recipesList', { filter, recipes })

      })
    } else {
      Recipe.find(req.params.id, function(recipe) {
        if (!recipe) res.send('Recipe not found!')
  
        return res.render('site/recipe', { recipe })
      })
    }
    
  },
  chefsList(req, res) {
    const { filter } = req.query

    if (filter) {
      Recipe.findBy(filter, function(recipes){
        return res.render('site/recipesList', { filter, recipes })

      })
    } else {
        Chef.chefTotalRecipes(function(chefs) {

          return res.render('site/chefsList', { chefs })
        })
    }
  },
}