import { InputContainer } from "./styles";

export default function Input({value, onChange}){
  return (
    <InputContainer>
      <input type="text" placeholder="Search" onChange={onChange} value={value} />
    </InputContainer>
  )
}
