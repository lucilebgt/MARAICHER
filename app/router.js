import express from 'express';
const router = express.Router();

import *as controllers from './controllers.js';

//rte ->about
router.get('/about', controllers.about);

//rte-> liste des produits = home
router.get('/', controllers.home);

//rte -> la fiche produit

router.get('/product/:slug', controllers.productPage);
router.get('/legumes', controllers.categoryLegumes);
router.get('/fruits', controllers.categoryFruits);


export default router;