import React, { useContext, useEffect, useState } from 'react'
import "./product.scss"
import { BasketContext } from '../../context/BasketContext'
function Products() {
    const [product, setProduct] = useState([])

    const { basket,addBasket } = useContext(BasketContext);

    useEffect(() => {
        fetch("https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products")
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [])


    return (
        <div>
            <section id='product'>
                <div className="container">
                    <div className="product_header">
                        <h1>PRODUCT OVERVIEW</h1>
                    </div>
                    <div className="product_filter">
                        <div className="filters">
                            <ul>
                                <li>All Products</li>
                                <li>Women</li>
                                <li>Men</li>
                                <li>Bag</li>
                                <li>Shoes</li>
                                <li>Watches</li>
                            </ul>
                        </div>
                        <div className="search">
                            <button className='filter_aside'>
                                <i class="fa-solid fa-bars-staggered"></i> Filter
                            </button>
                            <button className='search_btn'>
                                <i class="fa-solid fa-magnifying-glass"></i> Search
                            </button>
                        </div>
                    </div>
                    <div className="products">

                        {
                            product.map((x) => (
                                <ul key={x}>
                                    <div className="product_image">
                                        <img src={x.images} alt="" />

                                        <div className="buttons">
                                            <i className="fa-solid fa-circle-info"></i>
                                            <i onClick={()=>{addBasket(x)}} className="fa-solid fa-cart-shopping"></i>
                                            <i className="fa-solid fa-heart"></i>
                                        </div>
                                    </div>
                                    <li>{x.model}</li>
                                    <li>$ {x.price}</li>

                                </ul>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Products