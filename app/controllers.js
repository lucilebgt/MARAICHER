import fruits from './fruits.js';
import countries from './countries.js';


export const about =(req,res)=>{
    res.render('about');
}

export const home=(req,res)=>{
    res.render('home',{
        fruitsDetail:fruits,
        categoryUrl:'produits',

    });
}

export const productPage=(req,res)=>{
const productUrl=req.params.slug;
const categoryName=productUrl;
const productFound=fruits.find(element=>element.slug===productUrl);
if(productFound){
    res.render('product',{
        fruitDetails:productFound,
        categoryName:productUrl,
        
    });
    }else{
        res.status(404).render('error404')
    }}

// export const fruitPage=(req,res)=>{
//         const categoryFound=fruits.find(element=>element.category=== 'fruits');
//         if(categoryFound){
//             res.render('product',{
//                 fruitDetails: categoryFound,
//                 categoryUrl:req.params.slug,
                
//             });
//             }else{
//                 res.status(404).render('error404')
//             }}
export const categoryFruits=(req,res)=>{
    const  categoryFilter = fruits.filter(element=>element.category === 'fruits'); 
            res.render('home',{
            fruits:categoryFilter,
            categoryUrl:'fruits',
            });   

}    
export const categoryLegumes=(req,res)=>{
    const  categoryFilter = fruits.filter(element=>element.category === 'legumes'); 
        res.render('home',{
            fruits:categoryFilter,
            categoryUrl:'legumes',
            });   

}