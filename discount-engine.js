
class DiscountEngine{
calculate(total){
if(total>500) return {discount:15}
if(total>300) return {discount:10}
return null
}
}
