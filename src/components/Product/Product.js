import React from 'react'
import { Link } from 'react-router-dom'

export default function Product(props) {

    const image = props.product.images[0] ? props.product.images[0] : 'https://picsum.photos/id/586/200';
    return (
        <div className="card">
            <img src={image} className="card-img-top" alt="..." style={{ height: '200px', width: '100%' }} />
            <div className="card-body">
                <h5 className="card-title">{props.product.title}</h5>
                <p className="card-text">{props.product.productName}.</p>
                <Link to={`/product-details/${props.product.id}`}>
                    <button className="btn btn-primary">Show details</button>
                </Link>
            </div>
        </div >
    )
}

