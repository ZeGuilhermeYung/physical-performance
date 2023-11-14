import styled from "styled-components";
import photo from "../../assets/img/pedro_felix_profile.enc";
import logo from "../../assets/img/logo-pro-sport.png";

export default function Header () {

  return (
    <Top>
      <img src={logo} alt="Logo Pro Sport" />
      <button>
        <h6>Olá,<br/>Pedro Félix!</h6>
        <img data-test="avatar" src={photo} alt="user profile image" />
      </button>
    </Top>       
  );
}

const Top = styled.header`
width: 100%;
height: 70px;
background-color: #526A89;
padding: 10px 28px 10px 60px;
display: flex;
justify-content: space-between;
align-items: center;
position: fixed;
left: 0px;
top: 0px;
z-index: 5;
box-sizing: border-box;

img {
  height: 65px;
}

button {
  width: auto;
  height: auto;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button img {
  width: 53px;
  height: 53px;
  border-radius: 50%;
  object-fit: cover;
}

button h6 {
  width: auto;
  height: auto;
  max-width: 200px;
  max-height: 50px;
  font-size: 15px;
  text-align: center;
  margin-right: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
}`