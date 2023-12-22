import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { getPatients } from '../../../services/Patients.APIs';

export default function SearchBar({ searchList, setSearchList }) {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const [patientSearchName, setPatientSearchName] = useState('');

  const handleInputChange = async (event) => {
    const newSearchTerm = event.target.value;
    
    setPatientSearchName(newSearchTerm);
    
    if (newSearchTerm) {
      setSearchList(true);
      await getPatients(newSearchTerm)
        .then((res) => {
          setSearchResults(res.data);
        })
        .catch((error) => {
          setSearchResults([]);
          console.log(error.message);
        })
    } else {
      setSearchResults([]);
    }
  }

  function handleManualSearch(searchTerm) {
    navigate(`/patients?name=${searchTerm}`);
    setPatientSearchName("");
    setSearchResults([]);
  };

  function handleSearchResultsClick (searchResult) {
    navigate(`/patients/${searchResult.id}/evaluations`);
    setPatientSearchName("");
    setSearchResults([]);
  };

  return (
    <SearchBarContainer>
      <Wrapper
        type="search"
        placeholder="Procure pelo nome"
        value={patientSearchName}
        onClick={() => {setSearchList(true)}}
        onChange={handleInputChange}
        searchBarPopUp={(searchList) && (searchResults.length > 0)} />
      <SubmitSearch onClick={() => handleManualSearch(patientSearchName)}>
        <SearchIcon />
      </SubmitSearch>
      {(searchList) && (searchResults.length > 0) ?
        <ResultNamesList>
          {searchResults.map((searchResult, index) => (
            <li key={index} onClick={() => handleSearchResultsClick(searchResult)}>
              <h4>{searchResult.name}</h4>
            </li>
          ))}
        </ResultNamesList>
        : null}
    </SearchBarContainer>
  );
};

const SearchBarContainer = styled.div`
  width: 300px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;`

const Wrapper = styled.input`
  width: 250px;
  height: 100%;
  font-size: 23px;
  color: #FFFFFF;
  background-color: #13202B;
  padding-left: 12px;
  border-radius: ${props => (
    (props.searchBarPopUp) ? "7px 0 0 0"
    : "7px 0 0 7px"
  )};
  box-sizing: border-box;

:focus-visible {
 outline: none;
}
:-webkit-autofill {
  background-color: #05A9F1;
  opacity: 0.7;
}
:disabled {
  color: #AFAFAF;
  background-color: #F2F2F2;
}`

const SubmitSearch = styled.div`
  width: 50px;
  height: 100%;
  background-color: #05A9F1;
  border-radius: 0 7px 7px 0; 
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;`

const SearchIcon = styled(FaSearch)`
  font-size: 25px;
  color: #FFFFFF;`

const ResultNamesList = styled.ul`
  width: 250px;
  max-height: 300px;
  background-color: #13202B;
  padding: 0 15px 0 15px;
  border-radius: 0 0 7px 7px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 45px;
  left: 0;
  z-index: 5;
  box-sizing: border-box;
  li {
    width: 100%;
    height: 35px;
    padding: 0 5px 0 5px;
    cursor: pointer;
    border-top: 1px solid #05A9F1;
  }
  li:hover {
    background-color: #05A9F1;
    transition-delay: 0.1s;
  }`;