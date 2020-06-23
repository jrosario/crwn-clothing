import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem =>
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
        }
        <div className='total'>TOTAL: ${total}</div>

        <div className='test-warning'>
            *Please use the following test credit cards for payments*
            <br />
            <table id="test-checkout">
                <thead>
                    <tr>
                        <td>Brand</td><td>Number</td><td>Exp. Date</td><td>CVC</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Visa</td><td>4242 4242 4242 4242</td><td>Any future date</td><td>123</td>
                    </tr>
                    <tr>
                        <td>Master Card</td><td>5555 5555 5555 4444</td><td>Any future date</td><td>123</td>
                    </tr>
                    <tr>
                        <td>American Express</td><td>3782 822463 10005</td><td>Any future date</td><td>1234</td>
                    </tr>
                    <tr>
                        <td>Discover</td><td>6011 1111 1111 1117</td><td>Any future date</td><td>123</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <StripeCheckoutButton price={total} />
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);