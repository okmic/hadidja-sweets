import { Input } from "./Basket.styled";

const InputBasket = ({id, amount, inputBasket }) => {
   const onChangeInput = (event) => {
    inputBasket(id, Number(event.target.value))
   } 
    return <Input>
                <input value={amount} type="number" onChange={onChangeInput} />
        </Input>
}

export default InputBasket