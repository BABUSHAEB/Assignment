import React from 'react'
import styled from 'styled-components'
import HelpIcon from '@mui/icons-material/Help';
import VideocamIcon from '@mui/icons-material/Videocam';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import BoyIcon from '@mui/icons-material/Boy';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ErrorIcon from '@mui/icons-material/Error';
import BlockIcon from '@mui/icons-material/Block';

let ScheduleContainer = styled.div`
width:23rem;
background:#ffffff;
border:1px solid #d4d7df;
padding:2px 4px;
border-radius: 5px;
color:#203765;


.display-type-row{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    padding:2px 4px;
}
.border-bottom{

    border-bottom:1px solid #d4d7df;
    color:grey;
}
// 
.switch-heading{
    margin: 1rem auto 0.5rem;
    background:#f8f8f9;
    width:20rem;
    padding:6px 6px;
    border: 1px solid grey;
    border-radius:5px;
    color:#203765;
    font-weight:bold;
    display:flex;
}
.color-grey{
    color:grey;
    font-weight:500;
}
.color-grey-icon{
    font-size:1rem;
    color:grey;
    padding: 1px 5px 1px;

}
.display-type{
    dispaly:flex;
    flex-direction:row;
    font-size:0.7rem;
    font-weight:bold;
}
.day-wisedata{
    margin: 1rem auto 0.5rem;
    background:#f8f8f9;
    width:20rem;
    padding:6px 0.5rem;
    border: none;
    border-radius:5px;
    display:flex;
    justify-content:space-between;
}
.display-box{
    border-radius:5px;
    color:#203765;
    display:flex;
    font-size:0.9rem;

}
.color-green{
    color:#008d17;
    
}
.color-red{
    color:#fc726d;
    background:#fff3f3;

}
.heading-title{
    margin-left: 2rem;
}
.view-all{
    color:pink;
    padding:0.8rem 2rem;
    display:flex;
    border-top: 0.5px solid #d4d7df;
}
`;

export default function Schedule() {
    // let scheduleData = [
    //     {

    let Today = [
        {
            loginTime: "9:00 AM",
            LogOutTime: "9:40 AM",
            TotalTime: "40 minutes",
            ConsultType: "Anytime"
        },
        {
            loginTime: "9:00 AM",
            LogOutTime: "4:00 PM",
            TotalTime: "7 hours",
            ConsultType: "Video"
        },
        {
            loginTime: "9:00 AM",
            LogOutTime: "9:40 AM",
            TotalTime: "40 minutes",
            ConsultType: "In-person"
        },
        {
            loginTime: "6:30 PM",
            LogOutTime: "9:00 PM",
            TotalTime: "2 hours 30 minutes",
            ConsultType: "Block"
        }

    ];

    let Tomorrow = [
        {
            loginTime: "9:00 AM",
            LogOutTime: "9:40 AM",
            TotalTime: "40 minutes",
            ConsultType: "Anytime"
        },
        {
            loginTime: "9:00 AM",
            LogOutTime: "4:00 PM",
            TotalTime: "7 hours",
            ConsultType: "Video"
        },
        {
            loginTime: "9:00 AM",
            LogOutTime: "9:40 AM",
            TotalTime: "40 minutes",
            ConsultType: "In-person"
        },
        {
            loginTime: "6:30 PM",
            LogOutTime: "9:00 PM",
            TotalTime: "2 hours 30 minutes",
            ConsultType: "Block"
        }

    ];
    return (
        <ScheduleContainer>
            <div className='display-type-row border-bottom'>
                <h3>SCHEDULE</h3>
                <h3>
                    <HelpIcon />
                </h3>
            </div>
            <div className='switch-heading'>
                <span className='color-grey'>Receive</span>
                <FlashOnIcon />
                <span className=''>
                    Anytime Consult
                </span>
                <span className='color-grey-icon'>
                    <ErrorIcon className='color-grey-icon' />
                </span>


            </div>
            <div>

                <h3 className='heading-title'>TODAY &#8226; MONDAY</h3>
                {
                    Today.map((Today, Index) =>

                        <div key={Index} >
                            {Today.ConsultType !== "Block" &&
                                <div className='day-wisedata'>
                                    <span className='display-type color-green'>
                                        {Today.loginTime}&nbsp;- &nbsp;{Today.LogOutTime}
                                        <span>
                                            &nbsp; &#8226; {Today.TotalTime}
                                        </span>

                                    </span>
                                    {
                                        Today.ConsultType === "In-person" &&
                                        <span className='display-type display-box '>

                                            <BoyIcon />
                                            <span >
                                                &nbsp;  In-person
                                            </span>
                                        </span>
                                    }
                                    {
                                        Today.ConsultType === "Anytime" &&
                                        <span className='display-type display-box'>

                                            <FlashOnIcon />
                                            <span >
                                                {Today.ConsultType}
                                            </span>
                                        </span>
                                    }
                                    {
                                        Today.ConsultType === "Video" &&
                                        <span className='display-type display-box '>

                                            <VideocamIcon />
                                            <span >
                                                &nbsp;  Vedio
                                            </span>
                                        </span>
                                    }
                                </div>
                            }
                            {Today.ConsultType === "Block" &&
                                <div className='day-wisedata'>
                                    <span className='display-type color-red'>
                                        {Today.loginTime}&nbsp;-&nbsp;{Today.LogOutTime}
                                        <span>
                                            &nbsp; &#8226; {Today.TotalTime}
                                        </span>

                                    </span>
                                    <span className='display-type display-box color-red'>

                                        <BlockIcon />
                                        <span >
                                            {Today.ConsultType}
                                        </span>
                                    </span>
                                </div>
                            }
                        </div>


                    )
                }
                
            </div>
            <div>

<h3 className='heading-title'>TOMORROW &#8226; TUESDAY</h3>
{
    Tomorrow.map((Tomorrow, Index) =>

        <div key={Index} >
            {Tomorrow.ConsultType !== "Block" &&
                <div className='day-wisedata'>
                    <span className='display-type color-green'>
                        {Tomorrow.loginTime}&nbsp;- &nbsp;{Tomorrow.LogOutTime}
                        <span>
                            &nbsp; &#8226; {Tomorrow.TotalTime}
                        </span>

                    </span>
                    {
                        Tomorrow.ConsultType === "In-person" &&
                        <span className='display-type display-box '>

                            <BoyIcon />
                            <span >
                                &nbsp;  In-person
                            </span>
                        </span>
                    }
                    {
                        Tomorrow.ConsultType === "Anytime" &&
                        <span className='display-type display-box'>

                            <FlashOnIcon />
                            <span >
                                {Tomorrow.ConsultType}
                            </span>
                        </span>
                    }
                    {
                        Tomorrow.ConsultType === "Video" &&
                        <span className='display-type display-box '>

                            <VideocamIcon />
                            <span >
                                &nbsp;  Vedio
                            </span>
                        </span>
                    }
                </div>
            }
            {Tomorrow.ConsultType === "Block" &&
                <div className='day-wisedata'>
                    <span className='display-type color-red'>
                        {Tomorrow.loginTime}&nbsp;-&nbsp;{Tomorrow.LogOutTime}
                        <span>
                            &nbsp; &#8226; {Tomorrow.TotalTime}
                        </span>

                    </span>
                    <span className='display-type display-box color-red'>

                        <BlockIcon />
                        <span >
                            {Tomorrow.ConsultType}
                        </span>
                    </span>
                </div>
            }
        </div>


    )
}

</div>
            
            <div className='view-all'>

                <span>View all Appointments</span> <ArrowRightAltIcon />
            </div>

        </ScheduleContainer>
    )
}
