import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import photo from "../../../assets/img/pedro_felix_profile.enc";
import SearchBar from "./SearchBar";

export default function Header ({ searchList, setSearchList }) {
  const navigate = useNavigate();

  return (
    <Top>
      <RoutesButtons>
        <HomeButtonConatiner>
          <HomeButton/>
        </HomeButtonConatiner>
        <PatientsButton onClick={() => navigate('/patients')}>
          <h2>Alunos</h2>
        </PatientsButton>
      </RoutesButtons>
      <SearchBar 
        searchList={searchList}
        setSearchList={setSearchList} />
      <LogginButton>
        <h6>Olá,<br/>Pedro Félix!</h6>
        <img src={photo} alt="user profile image" />
      </LogginButton>
    </Top>       
  );
}

const Top = styled.header`
width: 100%;
height: 70px;
background-color: #243441;
padding: 10px 28px 10px 28px;
display: flex;
padding-left: 380px;
justify-content: space-between;
align-items: center;
position: fixed;
right: 0;
top: 0;
z-index: 4;
box-sizing: border-box;
img {
  height: 65px;
}`

const RoutesButtons = styled.div`
  width: 220px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;`

const HomeButtonConatiner = styled.div`
  width: 100px;
  height: 100%;
  border-right: 1px solid #05A9F1;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;`

const HomeButton = styled(AiFillHome)`
  font-size: 40px;
  color: #FFFFFF;`

const PatientsButton = styled.button`
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;`

const LogginButton = styled.button`
  width: 150px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
img {
  width: 53px;
  height: 53px;
  border-radius: 50%;
  object-fit: cover;
}
h6 {
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