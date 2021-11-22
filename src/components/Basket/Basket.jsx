import { Basement, Button, Buttons, Description, Item, Title, WrapperBasket } from "./Basket.styled"

const Basket = ({ cartItems, onAddedBasket, onRemoveBasket, calculateTotal }) => <WrapperBasket>
  <Title>
    <h3>Ваша Корзина</h3>
    {cartItems.length === 0 ? <h5>В корзине нет товаров</h5> : null}
  </Title>
  {cartItems.map(item => (
    <Item
      key={item.id}
    >
      <Description>
        <img src={item.image} alt={item.image} />
        {item.title}
      </Description>
      <Buttons>
        <Button active={item.amount <= 1 && true} buttonSize={true} onClick={() => onRemoveBasket(item.id, item.amount)}>{item.amount <= 1 ? "Удалить" : "-"}</Button>
        {item.amount}
        <Button onClick={() => onAddedBasket(item.id)}>+</Button>
        <span>&#8381; {item.amount * item.price}</span>
      </Buttons>
    </Item>
  ))}
  {cartItems.length > 0 
  ? <Basement>
      <h6>Итого: &#8381;{calculateTotal(cartItems).toFixed(2)}</h6>
      <Button>Оформить заказ</Button>
  </Basement>
  : null
  }

</WrapperBasket>

export default Basket