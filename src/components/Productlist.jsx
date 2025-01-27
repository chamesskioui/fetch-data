import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';


function Productlist({search}) {
    const [products, setProducts] =useState([])

    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        const res=axios.get("https://dummyjson.com/products")
         .then((res)=>{setProducts(res.data.products)
            setLoading(false)
         })
         .catch((error)=>console.log(error))
        
    },[])
    console.log(products);
    
  return (
    <div style={{ display:"flex",justifyContent:"center",alignItems:"center",gap:"20px",flexWrap:"wrap"}}>
        {loading ? <Spinner animation="border" variant="success" />:
   products.filter(el=>search!=""?el.title.toLowerCase().includes(search.toLowerCase()):el).map(el=>
        <Card style={{ width: '18rem',height:"" }}>
        <Card.Img style={{height:"300px"}} variant="top" src={el.images[0]} />
        <Card.Body>
          <Card.Title style={{fontSize:"1rem"}}>{el.title}</Card.Title>
          <Card.Text style={{overflow:"auto",height:"200px"}}>
          {el.description}
          </Card.Text>
          <Card.Text>
          {el.category}
          </Card.Text>
          <Card.Text>price:{el.price}$</Card.Text>
         
        </Card.Body>
      </Card>
    )}
    </div>
  )
}

export default Productlist