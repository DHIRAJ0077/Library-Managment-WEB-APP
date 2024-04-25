import React, {usestate } from "react";
import "bootstrap/dist/css/bootstrap.css";
export default function Cart() {
const [products, setProduct] = useState({ 
title: "",
price: "",
rating:"",
});
function Loadclick() {
fetch("/product.json")
.then((res)=>{
return res.json();

.then(products => {
setProduct (products);

}


return (


Load



{products.title}

{products.price}




DucatReactPract > src> { product.json >
{

"title": "Apple".

"price": "Large",

"rating": "Red"