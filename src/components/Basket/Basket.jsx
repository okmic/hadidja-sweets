import Icon from "../Icon/Icon"
import {AiFillCloseCircle} from 'react-icons/ai';
import { Toggle, ToggleItem, Basement, Button, Buttons, Description, Item, Title, WrapperBasket } from "./Basket.styled"
import { NavLink } from "react-router-dom";

const Basket = ({ cartItems, onAddedBasket, onRemoveBasket, calculateTotal, showSidebar }) => <WrapperBasket>
  <Toggle>
    <ToggleItem onClick={showSidebar}>
      <Icon
        IconR={AiFillCloseCircle}
        color="#000"
        colorHover="#3e220b"
      />
    </ToggleItem>
  </Toggle>
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
        <b>{item.amount}</b>
        <Button onClick={() => onAddedBasket(item.id)}>+</Button>
        <span>&#8381; {item.amount * item.price}</span>
      </Buttons>
    </Item>
  ))}
  {cartItems.length > 0
    ? <Basement>
      <h5>Итого: &#8381; {calculateTotal(cartItems).toFixed(2)}</h5>
      <NavLink to="/To-Order">
        <Button>Оформить заказ</Button>
        </NavLink>
    </Basement>
    : null
  }

</WrapperBasket>

export default Basket