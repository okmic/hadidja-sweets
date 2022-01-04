import Icon from "../Icon/Icon"
import {AiFillCloseCircle} from 'react-icons/ai';
import { Toggle, ToggleItem, Basement, Button, Buttons, Description, Item, Title, WrapperBasket, Close } from "./Basket.styled"
import { NavLink } from "react-router-dom";
import InputBasket from "./InputBasket";
import { memo } from "react";

const Basket = ({ cartItems, onAddedBasket, onRemoveBasket, calculateTotal, showSidebar, deleteItemBasket, inputBasket }) => <WrapperBasket>
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
    <h3>Your Cart</h3>
    {cartItems.length === 0 ? <h5>There are no items in your cart.</h5> : null}
  </Title>
  {cartItems.map(item => (
    <Item
      key={item.id}
    >
      <Close onClick={() => deleteItemBasket(item.id)}>
      <Icon
        IconR={AiFillCloseCircle}
        color="red"
        colorHover="#3e220b"
      />
      </Close>
      <Description>
        <img src={item.image} alt={item.image} />
        {item.title}
      </Description>
      <Buttons>
        <Button active={item.amount <= 1 && true} buttonSize={true} onClick={() => onRemoveBasket(item.id, item.amount)}>{item.amount <= 1 ? "Удалить" : "-"}</Button>
        <InputBasket id={item.id} amount={item.amount} inputBasket={inputBasket} />
        <Button onClick={() => onAddedBasket(item.id)}>+</Button>
        <span>&#8381; {item.amount * item.price}</span>
      </Buttons>
    </Item>
  ))}
  {cartItems.length > 0
    ? <Basement>
      <h5>Total: $ {calculateTotal(cartItems).toFixed(2)}</h5>
      <NavLink to="/To-Order">
        <Button>To order</Button>
        </NavLink>
    </Basement>
    : null
  }

</WrapperBasket>

export default memo(Basket)