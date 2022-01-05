import { Form,Button,Table } from "react-bootstrap";
import { createRef,Component } from "react" ;
export default class AddInventory extends Component{
    constructor(){
        super();
        this.state = {
            products:[]
        }
        const formData = createRef();
    }
    

      add = (event)=>{
        event.preventDefault();
  


//   console.log(formData.current);
  
    const newProduct ={
   product_name : this.formData.current.product_name.value,
   price: this.formData.current.price.value,
   qty: Number (this.formData.current.qty.value)
 }

this.state.products.push(newProduct);

    //  console.log(newProduct);
  this.setProduct({

products: this.state.products
});


    }

 increQty = (event)=>{
 const indexOfArray =event.target.value;
this.state. products[indexOfArray].qty =this.state. products[indexOfArray].qty+1
//  setProduct([...products])

}
 decreQty = (event)=>{
  const indexOfArray =event.target.value;
 this.state. products[indexOfArray].qty = this.state. products[indexOfArray].qty-1
//   setProduct([...products])
 
 }


   
   

    render(){
        return(
            <div className='container'>
            <Form onSubmit={this.add} ref={this.formData}>
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
      this.state.products.map((item,index)=>{
     return(

      <tr key={index}>
      <td>{index}</td>
      <td>{item.product_name}</td>
      <td>{item.price}</td>
      <td>{item.qty}</td>
      <td>
        <button variant="success" onClick={event=>this.increQty(event)}
         value={index}
        >EDIT</button>
        <button varient="primary" onClick={event=>this.decreQty(event)} 
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
}