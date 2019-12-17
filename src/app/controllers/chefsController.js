const Chef = require('../models/Chef')

module.exports = {
  index(req, res) {
    Chef.all(function(chefs) {
      return res.render('admin/chefs/index', { chefs })
    })
  },
  create(req, res) {
    const pageTitle = 'Criando chef'

    return res.render('admin/chefs/create', { pageTitle })
  },
  post(req, res) {
    const keys = Object.keys(req.body)

    for (key of keys) {
      if (req.body[key] == "")
        return res.send('Please, fill all fields!')
    }

    Chef.create(req.body, function(chef) {
      return res.redirect(`/admin/chefs/${chef.id}`)
    })
  },
  show(req, res) {
    Chef.find(req.params.id, function (chef) {
      Chef.findChefRecipes(req.params.id, function (recipes) {
      //  if (!chef) res.send('Chef not found!')
       return res.render('admin/chefs/show', { chef, recipes })
      })
    })
  },
  edit(req, res) {
    const pageTitle = 'Editando chef'

    Chef.find(req.params.id, function(chef) {
      if (!chef) res.send('Chef not found!')

      return res.render('admin/chefs/edit', { chef, pageTitle })
    })
  },
  put(req, res) {
    const keys = Object.keys(req.body)

    for (key of keys) {
      if (req.body[key] == "")
        return res.send('Please, fill all fields!')
    }

    Chef.update(req.body, function() {
      return res.redirect(`/admin/chefs/${req.body.id}`)
    })
  },
  delete(req, res) {
    Chef.find(req.body.id, function (chef) {
      if (chef.total_recipes >= 1) {
        res.send('Chefs que possuem receitas não podem ser deletados')
      } else {
        Chef.delete(req.body.id, function() {
          return res.redirect('/admin/chefs')
        })
      }
    })
  }
}