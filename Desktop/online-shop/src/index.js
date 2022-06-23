import React from 'react'
import ReactDom from 'react-dom'
import "./css/main.css"

const products = [
    {
        id: 1,
        name: "backpack",
        img: "./backpack.jpg",
        price: 19.99,
    }
    ,
    {
        id: 2,
        name: "mug",
        img: "./mug.jpg",
        price: 6.99,
    }
    ,
    {
        id: 3,
        name: "hoodie",
        img: "./hoodie.jpg",
        price: 59.99,
    }
    ,
    {
        id: 4,
        name: "modern phone",
        img: "./phone.jpeg",
        price: 199.99,
    }
]


function Shop() {
  return  <>
        <article className="page-top">
        <button className="open-cart-btn">
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        </button>
        <h2>my online shop</h2>
        <div className="gradient"></div>
      </article>

      <article className="all-items">
        <h2>list of products</h2>
        <div className="item-container">
          {products.map((item) => {
            return <Item key={item.id} product={item}/>
          })}
        </div>
      </article>

  </>
}

function Item(props) {
  const {name, img, price} = props.product

  return <>
        <div className="item">
            <div className="img" style={{background: `url(${img})`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat",}}></div>
            <h3>{name}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, reprehenderit?</p> 
            <div className="details">
                <h4 className="price">${price}</h4>
                <button className="add-to-cart-btn">add to cart</button>
            </div>  
        </div>
  </>
}

ReactDom.render(<Shop/>, document.getElementById("root"))