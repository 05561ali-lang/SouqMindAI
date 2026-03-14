
class UpsellEngine{
constructor(products){this.products=products}
recommend(product){
return this.products.filter(p =>
p.category===product.category && p.id!==product.id
).slice(0,3)
}
}
