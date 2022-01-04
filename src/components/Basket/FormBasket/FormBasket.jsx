import { NavLink } from "react-router-dom"
import { Title } from "../Basket.styled"
import { ButtonFormBasket, FormLabel, FormWrapper, WrapperFormBasket } from "./FormBasket.styled"

let FormBasket = (props) => {

    return (
        <WrapperFormBasket>
            <ButtonFormBasket>
                <NavLink to="/">
                    <button>Сome back</button>
                </NavLink>
            </ButtonFormBasket>
            <FormWrapper>
                <Title>
                    <h3>Total: $ {props.calculateTotal(props.cartItems).toFixed(2)}</h3>
                </Title>
                <form>
                    <FormLabel>
                        <b>Your name:</b>
                        <input type="text" placeholder="Your name" value={props.name} onChange={props.handleNameChanged} />
                    </FormLabel>
                    <FormLabel delay="0.5s">
                        <b>Your phone:</b>
                        <input id="name" type="tel" placeholder="+7(988)888-88-88" value={props.phone} onChange={props.handlePfoneChanged} />
                    </FormLabel>
                    <FormLabel delay="1s">
                        <button className="button" onClick={() => props.handleButton(props.name, props.surname, props.phone, props.email)}>To order</button>
                    </FormLabel>
                </form>
            </FormWrapper>
        </WrapperFormBasket>
    )
}

export default FormBasket