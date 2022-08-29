import React from 'react'
import styled from 'styled-components'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DropdownBtn from './DashboardComponents/DropdownBtn';
import VideocamIcon from '@mui/icons-material/Videocam';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import BoyIcon from '@mui/icons-material/Boy';
import MoreVertIcon from '@mui/icons-material/MoreVert';


let Appointmentsection = styled.div`
    position: absolute;
    left: 8rem;
    top: 2rem;
    z-index: 1;
    width:70rem;
    color:#203765;
   
 .btn{
    background:#fff;
    font-size:1.3rem;
    padding: 6px 1.7rem;
    border-radius:10px;
    color:#f53232;
    border: 1px solid #f53232;
    font-weight:bold;
    text-align:center;
}
.display-type-row{
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
}
.hr-line{
    border-bottom: 1px solid grey;

}
input{
    outline:none;
    border-radius:5px;
    padding:1rem 0.6rem;
    font-size:0.7rem;
    border:1px solid rgb(102 146 254);
    width:12rem;
}
tr th{
background:#f0f4fd;
font-size:0.8rem;
color:#79839e;
border-collapse: collapse;
border-spacing:0;
padding:12px 1rem;
text-align:start;
border-bottom: 1px solid #bfd2f3;

}
tr {
    border-radius:10px
    
}
table{
    border-collapse:collapse;
    width:100%;
    box-shadow:2px 2px 3px #ecedf4;
    margin-bottom:2rem;
    background:#fff;

    
}
.text-color{
    color:#279af1;
}
.table-data{
    text-align:start;
    // padding: 1rem 2px;
    padding:12px 1rem;
}
.table-data-section{
    border-bottom: 3px solid #f0f4fd;
}
.seconadary-age{
   font-size: 0.8rem;
   font-weight:300;
   text-align: start;
    
}
.button-style{
    outline:none;
    border:none;
    border-radius:20px;
}
.button-style-unpaid{
    outline:none;
    border:none;
    border-radius:20px;
    background:#ffe0e0;
    color:#de3838;
}
.button-style-paid{
    outline:none;
    color:#1a8f1a;
    border:none;
    border-radius:20px;
    background:#cdffcd;
}
`;

export default function Appointments() {
    let TableData = [{
        orderId: 2422562, pname: "Risha Mahin", age: 26, gender: "F", conslType: "Vedio", consultSub: "First Consultation", team: "", doctor: "Anil Kumar", slotDate: "Jul 3,2021", slotTime: "8:53 AM", Status: "Cancelled", Invoice: "Refunded"
    }, {
        orderId: 2429657, pname: "Riju K", age: 32, gender: "M", conslType: "Vedio", consultSub: "Follow-up", team: "Medical Camp", doctor: "Greg Ferguson", slotDate: "Jul 3,2021", slotTime: "8:53 AM", Status: "No show", Invoice: "Unpaid"
    }, {
        orderId: 2422455, pname: "Prajeesh ", age: 47, gender: "M", conslType: "Anytime Consult", consultSub: "", team: "", doctor: "Pankah Dhir", slotDate: "Jul 3,2021", slotTime: "8:53 AM", Status: "Completed", Invoice: "Paid"

    }, {
        orderId: 2422455, pname: "Darshan SIngh", age: 36, gender: "M", conslType: "In-person", consultSub: "Second Opinion", team: "", doctor: "Ram Dayanand", slotDate: "Jul 3,2021", slotTime: "8:53 AM", Status: "Completed", Invoice: "Unpaid"
    }, {
        orderId: 2429657, pname: "Riju K", age: 32, gender: "M", conslType: "Vedio", consultSub: "Follow-up", team: "Medical Camp", doctor: "Greg Ferguson", slotDate: "Jul 3,2021", slotTime: "8:53 AM", Status: "No show", Invoice: "Unpaid"
    },
    {
        orderId: 2422562, pname: "Risha Mahin", age: 26, gender: "F", conslType: "Vedio", consultSub: "First Consultation", team: "", doctor: "Anil Kumar", slotDate: "Jul 3,2021", slotTime: "8:53 AM", Status: "Cancelled", Invoice: "Refunded"
    }, {
        orderId: 2429657, pname: "Riju K", age: 32, gender: "M", conslType: "Vedio", consultSub: "Follow-up", team: "Medical Camp", doctor: "Greg Ferguson", slotDate: "Jul 3,2021", slotTime: "8:53 AM", Status: "No show", Invoice: "Unpaid"
    }, {
        orderId: 2422455, pname: "Prajeesh ", age: 47, gender: "M", conslType: "Anytime Consult", consultSub: "", team: "", doctor: "Pankah Dhir", slotDate: "Jul 3,2021", slotTime: "8:53 AM", Status: "Completed", Invoice: "Paid"

    }, {
        orderId: 2422455, pname: "Darshan SIngh", age: 36, gender: "M", conslType: "In-person", consultSub: "Second Opinion", team: "", doctor: "Ram Dayanand", slotDate: "Jul 3,2021", slotTime: "8:53 AM", Status: "Completed", Invoice: "Unpaid"
    }, {
        orderId: 2429657, pname: "Riju K", age: 32, gender: "M", conslType: "Vedio", consultSub: "Follow-up", team: "Medical Camp", doctor: "Greg Ferguson", slotDate: "Jul 3,2021", slotTime: "8:53 AM", Status: "No show", Invoice: "Unpaid"
    }];
    return (
        <Appointmentsection>
            <div className='display-type-row hr-line'>
                <div >
                    <h2>Appointments</h2>

                    <p>List of booked appointments</p>
                </div>
                <div>
                    <button className='btn'>Add <AddCircleRoundedIcon /></button>
                </div>

            </div>
            <div className='display-type-row'>
                <div>
                    <input type="text" placeholder="Search by name, number" />
                </div>

                <DropdownBtn style={{ width: "8rem", fontWeight: "bold" }} type="Date" data="This Week" />
                <DropdownBtn style={{ width: "12rem" }} type="Consultation Type" data="All" />
                <DropdownBtn style={{ width: "8rem" }} type="Status" data="All" />
                <DropdownBtn style={{ width: "8rem" }} type="Invoice" data="All" />
            </div>
            <div>
                <table>
                    <tbody>


                        <tr className='hr-line t-heading'>
                            <th>ORDER ID</th>
                            <th>PATIENT</th>
                            <th>CONSULTATION</th>
                            <th>TEAM</th>
                            <th>DOCTOR</th>
                            <th>SLOT</th>
                            <th>STATUS</th>
                            <th>INVOICE</th>
                            <th>ACTION</th>
                        </tr>
                        {TableData.map((TableData, Index) =>

                            <tr key={Index} className=' table-data-section'>
                                <td className='table-data'>{TableData.orderId}</td>
                                <td className='table-data display-type'><span className='primay-name text-color'>{TableData.pname} </span> <br /><span className='seconadary-age'> {TableData.age},{TableData.gender}</span> </td>
                                {TableData.conslType === "Vedio" &&
                                    <td className='table-data display-type'>  <span className='primay-name'> <VideocamIcon style={{ height: "1.2rem" }} /> {TableData.conslType}  </span> <br /><span className='seconadary-age'> {TableData.consultSub}</span> </td>
                                }
                                {TableData.conslType === "Anytime Consult" &&
                                    <td className='table-data display-type'>  <span className='primay-name'> <FlashOnIcon style={{ height: "1.2rem" }} />  {TableData.conslType}  </span> <br /><span className='seconadary-age'> {TableData.consultSub}</span> </td>
                                }
                                {TableData.conslType === "In-person" &&
                                    <td className='table-data display-type'>  <span className='primay-name'> <BoyIcon style={{ height: "1.2rem" }} /> {TableData.conslType}  </span> <br /><span className='seconadary-age'> {TableData.consultSub}</span> </td>
                                }
                                <td className='table-data'>{TableData.team}</td>
                                <td className='table-data'>{TableData.doctor}</td>
                                <td className='table-data display-type'>  <span className='primay-name'>{TableData.slotDate} </span><br /> <span className='seconadary-age'>{TableData.slotTime}</span> </td>
                                <td className='table-data '><button className='seconadary-age button-style'>{TableData.Status}</button></td>
                                {TableData.Invoice === "Refunded" &&
                                    <td className='table-data'><button className='seconadary-age button-style'>{TableData.Invoice}</button></td>
                                }
                                {TableData.Invoice === "Unpaid" &&
                                    <td className='table-data'><button className='seconadary-age button-style-unpaid'>{TableData.Invoice}</button></td>
                                }
                                {TableData.Invoice === "Paid" &&
                                    <td className='table-data'><button className='seconadary-age button-style-paid'>{TableData.Invoice}</button></td>
                                }
                                <td className='table-data'><MoreVertIcon /></td>
                            </tr>
                        )}
                        
                    </tbody>

                </table>
            </div>
        </Appointmentsection>
    )
}
