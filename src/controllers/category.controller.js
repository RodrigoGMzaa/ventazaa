const categoria = require('../models/category.js');

const categoryct = {};



categoryct.getCategorys = async (req, res) => {
   const categoris = await categoria.find();
   //res.json(categoris);
   res.render('categorias', {categoris});
}; 


categoryct.createCategorys = async (req, res) => {
   const {category} = req.body;
    
       const newcategory = new categoria({category});
       await newcategory.save();
       res.redirect('cate');
   
};

//para buscar por id

categoryct.getCategory = async (req, res) => {
   const category = await categoria.findById(req.params.id);
   res.json(category);
};

categoryct.editCategory = async (req, res) => {
   const{id} = req.params;
   const category = {
      category: req.body.category
   };
  await categoria.findByIdAndUpdate(id, {$set: category}, {new: true});
   res.json({status: 'categoria actualizada'});
};

categoryct.deletCategory = async (req, res) => {
   await categoria.findByIdAndRemove(req.params.id);
   res.redirect('/categorys/cate');
};
    

module.exports = categoryct;