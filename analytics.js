
class StoreAnalytics{
constructor(){this.views=0;this.cartAdds=0}
trackView(){this.views++}
trackCart(){this.cartAdds++}
report(){return{views:this.views,cartAdds:this.cartAdds}}
}
