import React from 'react'
import styled from 'styled-components';


let DropdownOutline = styled.div`
.input-wrapper {
    position: relative;
  }
  
  select {
    border: 1px solid rgb(102 146 254);
    border-radius: 6px;
    position: relative;
    width: fit-content;
    margin: 10px;
    line-height: 6ex;
    height:3rem;
    outline:none;
    padding:0.6rem 0;
    font-weight:bold;
    padding-left:5px;
    color:#203765;
  }
  
  label {
    color:#203765;
    position: absolute;
    top: 0.2ex;
    z-index: 1;
    left: 2em;
    background-color: white;
    padding: 0 5px;
  }
`;

export default function DropdownBtn(props) {

    return (
        <DropdownOutline>
            <div className="input-wrapper">

                <label htmlFor="first">{props.type}</label>
                <select style={props.style} name="Select your Category">
                      <option  value={props.Text}>{props.data}</option>
                    
                    </select>

                    
            </div>
        </DropdownOutline>
    )
}
