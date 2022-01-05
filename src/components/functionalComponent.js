import{Form,Button,Table}from 'react-bootstrap'
import './functionalComponents.css'
import {createRef, useState} from 'react'




export default function AddProduct() {

 let initialValue = [ ]
  const [products,setProduct]=useState(initialValue)
 const formData = createRef();
 
//  const incIndex 



    const add = (event)=>{
        event.preventDefault();
    // console.log(event.target.product_name.value);
    //    const formData = event.target;
    //    const newProduct={
    //     product_name:formData.product_name.value,
    //     price: formData.price.value,
    //     qty: formData.qty.value

    //}


  console.log(formData.current);
  
   const newProduct ={
  product_name : formData.current.product_name.value,
  price: formData.current.price.value,
  qty: formData.current.qty.value
}



    //  console.log(newProduct);
  setProduct([...products,newProduct]);
  console.log(products);

    }

const increQty = (event)=>{
 const indexOfArray =event.target.value;
 products[indexOfArray].qty =  products[indexOfArray].qty+1
 setProduct([...products])

}
const decreQty = (event)=>{
  const indexOfArray =event.target.value;
  products[indexOfArray].qty =  products[indexOfArray].qty-1
  setProduct([...products])
 
 }






    return (
        <div className='container'>
            <Form onSubmit={add} ref={formData}>
                <Form.Group className="mb-3" controlId="formBasicProductName">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="type" placeholder="product Name" name="product_name" />
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Label>price</Form.Label>
                    <Form.Control type="number" placeholder="price" name="price" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicQty">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="number" placeholder="Quantity" name="qty" />
                </Form.Group>

               
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <Table >
  <thead>
    <tr>
      <th>index</th>
      <th>Product Name</th>
      <th>Price</th>
      <th>Quality</th>
      <th>Optoins</th>
    </tr>
  </thead>
  <tbody>
    {
      products.map((item,index)=>{
     return(

      <tr key={index}>
      <td>{index}</td>
      <td>{item.product_name}</td>
      <td>{item.price}</td>
      <td>{item.qty}</td>
      <td>
        <button variant="success" onClick={event=>increQty(event)}
         value={index}
        >EDIT</button>
        <button varient="primary" onClick={event=>decreQty(event)} 
        value={index}
        >DELETE</button>
      </td>
    </tr>

     )  
     
    
      })
    }
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    
  </tbody>
</Table>

        </div>
    )
}




