import { useState } from "react";
import FormBasket from "./FormBasket";

let FormBasketContainer = (props) => {
    const [name, setName] = useState({name: ''})
    const [phone, setPhone] = useState({phone: ''})

    let handleSubmit = (event) => {
        event.preventDefault()
    }

    let handleNameChanged = (event) => {
        setName({name: event.target.value})
    } 

    let handlePfoneChanged = (event) => {
        setPhone({phone: event.target.value})
    } 


    const handleButton = (name, surname, phone, email) => {
        let array = [
            { "Имя пользователя: ": name },
            {"Телефон: ": phone}
        ]
        console.log(array);
    }


    return <FormBasket 
    calculateTotal={props.calculateTotal}
    cartItems={props.cartItems}
    name={name.name}
    phone={phone.phone}
    handleSubmit={handleSubmit}
    handleNameChanged={handleNameChanged}
    handlePfoneChanged={handlePfoneChanged}
    handleButton={handleButton}
    />
}

export default FormBasketContainer