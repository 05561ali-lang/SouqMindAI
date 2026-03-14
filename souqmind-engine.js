
class SouqMindAI{

constructor(products){

this.products=products
this.search=new AIProductSearch(products)
this.upsell=new UpsellEngine(products)
this.discount=new DiscountEngine()

}

handleQuery(q){

q=q.toLowerCase()

if(q.includes("ارخص")){
return [...this.products].sort((a,b)=>a.price-b.price).slice(0,5)
}

if(q.includes("افضل")){
return [...this.products].sort((a,b)=>b.sales-a.sales).slice(0,5)
}

return this.search.search(q)

}

}
