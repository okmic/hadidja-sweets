import { NavLink } from "react-router-dom"
import { Description, Title } from "../Basket.styled"
import { ButtonFormBasket, FormLabel, FormWrapper, ItemForm, WrapperFormBasket, WrapperItemsBasket } from "./FormBasket.styled"

let FormBasket = (props) => {

    return (
        <WrapperFormBasket>
            <ButtonFormBasket>
                <NavLink to="/">
                    <button>Вернуться назад</button>
                </NavLink>
            </ButtonFormBasket>
            <WrapperItemsBasket>
                {props.cartItems.map(item =>
                    <ItemForm key={item.id}>
                        <Description>
                            <img src={item.image} alt={item.image} />
                        </Description>
                        <Description>
                            <b>{item.title}</b>
                            <span>Цена за единицу: {item.price}&#8381;</span>
                            <span>Количество: {item.amount}</span>
                            <span>Итого: {item.amount * item.price}&#8381;</span>
                        </Description>
                    </ItemForm>
                )}
            </WrapperItemsBasket>
            <FormWrapper>
                <Title>
                    <h3>Итого: &#8381; {props.calculateTotal(props.cartItems).toFixed(2)}</h3>
                </Title>
                <form>
                    <FormLabel>
                        <b>Ваше Имя:</b>
                        <input type="text" placeholder="Иван" value={props.name} onChange={props.handleNameChanged} />
                    </FormLabel>
                    <FormLabel>
                        <b>Ваш номер телефона:</b>
                        <input id="name" type="tel" placeholder="+7(988)888-88-88" value={props.phone} onChange={props.handlePfoneChanged} />
                    </FormLabel>
                    <FormLabel>
                        <button className="button" onClick={() => props.handleButton(props.name, props.surname, props.phone, props.email)}>Заказать</button>
                    </FormLabel>
                </form>
            </FormWrapper>
        </WrapperFormBasket>
    )
}

export default FormBasket