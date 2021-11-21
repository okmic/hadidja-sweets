import { Item, WrapperBasket } from "./Basket.styled"

const Basket = ({cartItems, onAddedBasket, onRemoveBasket, calculateTotal}) => <WrapperBasket>
<h6>Your Shopping Cart</h6>
          {cartItems.length === 0 ? <p>No items in cart.</p> : null}
            {cartItems.map(item => (
        <Item
          key={item.id}
        >
          <img src={item.image} alt={item.image} />
          {item.id}
          {item.title}
          <button onClick={() => onRemoveBasket(item.id, item.amount)}>-</button>
          {item.amount}
          <button onClick={() => onAddedBasket(item.id)}>+</button>
        </Item>
      ))}
      <h6>Total: ${calculateTotal(cartItems).toFixed(2)}</h6>
</WrapperBasket>

export default Basket