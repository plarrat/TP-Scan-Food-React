export default function productSearch(search, products){
    let res = products.filter(productData =>{
        let searchMini = search.toLowerCase();
        let product = productData.product;
        
        if(product.product_name_fr.toLowerCase().indexOf(searchMini) > -1) return productData;
        if(product.brands.toLowerCase().indexOf(searchMini) > -1) return productData;
        if(product.code.toLowerCase().indexOf(searchMini) > -1) return productData;
    })
    return res;
}