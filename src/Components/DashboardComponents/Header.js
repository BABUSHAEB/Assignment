import React from 'react'
import styled from 'styled-components'
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import CurrencyRupeeRoundedIcon from '@mui/icons-material/CurrencyRupeeRounded';
import DropdownBtn from './DropdownBtn';
import QueueScheduleContainer from './QueueScheduleContainer';
import Activity from './Activity';
import Historycharts from './Historycharts';

let HeaderComponents = styled.div`

.welcome-container{
    background:#203765;
    height:10rem;
    color:white;
    width:74.3rem;;
    padding-left:80px;
    padding-top:1rem;
    position: absolute;
    left: 80px;
    top: 0;
    z-index: 1;
    

}
.heading{
    font-size:2.5rem;
    padding:0;
    margin:0;
}
p{
    margin:0;
}
.total-container{
    box-shadow: 2px 2px 3px rgb(102 146 254);
    width:50rem;
    height:12rem;
    background:rgb(240 246 254);
    border-radius:10px;
    margin:0;
    padding:2px 3px;
    position: absolute;
    left: 8rem;
    top: 8rem;
    z-index: 1;

}
div.total-earning{
    margin:0;
    padding:0;
    height:6rem;
    background-color:white;
    border-radius:10px;
    box-shadow: 2px 2px 3px rgb(102 146 254);
    color:#203765;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    
}
.earnings-label{
    font-size:1rem;
    margin:0px 0.8rem;
    font-weight:600;
    padding-top:0.5rem;
    color:#203765;
}
.earnings-amount{
    font-size:1.6rem;
    font-weight:bold;
    margin:0px 0.8rem;
    padding-bottom:auto;
    color:#203765;
}
.display-type{
    display:flex;
    flex-direction:row;
    justify-content:space-around;
}


`;

export default function Header() {
    let totalappointment = [{
        field: "Appointments",
        Visiter: 54
    }, {
        field: "EMR Finalised",
        Visiter: 47
    }, {
        field: "Patient Registrations",
        Visiter: 120
    }, {
        field: "KR4ALL Visits",
        Visiter: 54
    }];
   
    return (
        <HeaderComponents>
            <div className='welcome-container'>
                <div>
                    <p className='heading'>Welcome <strong>Anil Kumar</strong> </p>
                    <p>Cardiololgy</p>
                </div>

            </div>
            <div className="total-container">
                <div className='total-earning '>
                    <div>
                        <p className='earnings-label'> <CreditCardRoundedIcon className='earnings-label' />  Total Earnings</p>
                        <p className='earnings-amount'> <CurrencyRupeeRoundedIcon className='earnings-amount' />2000</p>

                    </div>
                    <div className='display-type'>
                        <DropdownBtn style={{width:"8rem"}} type="Unit" data="PRK Hospital"/>
                        <DropdownBtn  style={{width:"10rem"}} type="Time Duration" data="Last 7 Days"/>
                    </div>

                </div>
                <div className='total-appointment'>
                    <div className='display-type'>{

                        totalappointment.map((totalappointment, index) => {
                            return (
                          <div key={index}>
                                <p className='earnings-label'> {totalappointment.field}</p>
                                <p className='earnings-amount'> {totalappointment.Visiter}</p>
                            </div>
                            )

                        })
                    }

                    </div>
                </div>
            </div>
            <QueueScheduleContainer/>
            <Activity />
            <Historycharts/>

        </HeaderComponents>
    )
}
