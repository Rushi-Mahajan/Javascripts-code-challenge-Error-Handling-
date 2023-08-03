// 10. Filter by Category.
// Write a function that takes an array of products and returns a function that filters the array by a given product 
// category. The function must filter an eCommerce products array by a specific category. The closure filters 
// products using the filter() method. Finally, it returns a new array containing only the products with the same 
// category as the input

function clothingProducts(arrays){
    return function(Catergory){
        return arrays.filter((el)=>{
            return el.category==Catergory
        })
    }
}

var products=[
    {name:"shirt",category:"clothing"},
    {name:"Pant",category:"clothing"},
    {name:"Laptop",category:"electronics"},
    {name:"Classes",category:"Others"},
    {name:"Hat",category:"Other"},
]

console.log(clothingProducts(products)("clothing"))