import React from 'react'
import styled from 'styled-components'

let LoginContainer = styled.div`
display:grid;
grid-template-columns: 55% 45%;
color:#203765;

.image-container{
    padding:20vh;
    background-color:#f0f4fc;
    text-align:center;
}
.form-container{
    display:flex;
flex-direction:column;
align-items:center;
padding-top:40vh;
// text-align:center;
background-color:#fff;
width:100%;
height:100vh;
}


input,button,select{
    color:#949baf;
    font-size:1rem;
    padding: 0.6rem 1.2rem;
    margin:0.6rem 0;
    border: 1.5px solid #d3ddff;
    outline:none;
    border-radius:10px;
    width:15rem;
}
button,select{
    width:17.5rem;
    
    
}
button{
    margin-top:5vh;
    width:17.5rem;
    color:#fff;
    background-color:#fc6964;
    
}

`;

export default function Login() {
    return (
        <>
            <LoginContainer>

                <div className='image-container'>
                    <h2>Welcome to App Name</h2>
                    <p>Get ahead of the Curve.Join the next generation of health heroes.</p>
                    <img src="/Images/LoginImg.png" alt="Images" />
                </div>
                <div className='form-container'>
                    <h2>Sign-in to your account</h2>
                    <input type="text" name="Username" placeholder='Username' />
                    <input type="text" name="Username" placeholder='Password' />
                    <select placeholder='Select Unit Name'>
                        <optgroup label='Select Unit Name'>
                            <option value="d">Select Unit Name</option>
                            <option value="c">b</option>
                            <option value="b">c</option>
                        </optgroup>
                    </select>
                    <button>Sign In</button>

                </div>
            </LoginContainer>

        </>
    )
}
