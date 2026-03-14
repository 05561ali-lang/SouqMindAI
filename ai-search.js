
class AIProductSearch{
constructor(products){this.products=products}
search(q){
q=q.toLowerCase()
return this.products.filter(p =>
p.title.toLowerCase().includes(q) ||
p.category.toLowerCase().includes(q)
)
}
}
