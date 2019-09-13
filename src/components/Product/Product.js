import React from 'react'
import { Link } from 'react-router-dom'

export default function (props) {

    const image = props.product.images[0] ? `http://localhost:5000/${props.product.images[0]}` : 'https://picsum.photos/id/586/200';
    return (
        <div className="card">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.product.title}</h5>
                <p className="card-text">{props.product.productName}.</p>
                <Link to={`/product-details/${props.product.id}`}>
                    <button className="btn btn-primary">Go somewhere</button>
                </Link>
            </div>
        </div>
    )
}
