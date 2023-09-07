import { HeaderStyle } from "./styles";
import logo from '../../assets/logo.webp'

export default function Header(){
  return(
    <HeaderStyle>
      <img src = {logo} alt='Logo'/>
    </HeaderStyle>
  );
}