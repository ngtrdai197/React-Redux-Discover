import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProductById } from '../@store/actions';
import Product from '../components/Product/Product';

function ProductDetailsContainer(props) {
    useEffect(() => {
        props.getProduct(props.match.params.productId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.match.params.productId]);

    if (!props.product) return <h2>Loading ....</h2>

    return (
        <div className="col-3 mx-auto mt-3">
            <Product product={props.product} />
        </div >
    )
}

const mapStateToProps = (state) => ({
    product: state.productReducer.product
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getProduct: getProductById }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsContainer);

