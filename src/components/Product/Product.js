import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { increment, decrement } from '../../@store/actions/share.action'

function Product(props) {

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
                {
                    props.shareReducer.count > 0
                        ? [
                            <button className="btn btn-primary" onClick={props.increment} key="1">incre</button>,
                            <button className="btn btn-primary" onClick={props.decrement} key="2">decre</button>
                        ] : < button className="btn btn-primary" onClick={props.increment}>incre</button>
                }

            </div>
        </div >
    )
}

const mapStateToProps = (state) => ({
    shareReducer: state.shareReducer
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ increment, decrement }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)


