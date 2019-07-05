import React, {
  Component
} from 'react';
import {FormattedMessage} from 'react-intl';


class TranslatedComponent extends Component {
  render() {
    const cartCount = 3

    return (
      <div>
        <p className="main">
          <FormattedMessage
            id="categories.man"
            defaultMessage = 'Man'
          />
        </p>
        <p>
          <FormattedMessage
            id="cart.content"
            defaultMessage = {
              `You have {cartCount, number} {cartCount, plural,
                      one {product}
                      other {products}
                    } in your cart`
            }
            values={{cartCount}}
          />
        </p>
      </div>
    );
  }
}

export default TranslatedComponent;
