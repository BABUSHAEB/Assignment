import React from 'react'
import styled from 'styled-components'
import NotificationsIcon from '@mui/icons-material/Notifications';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SummarizeIcon from '@mui/icons-material/Summarize';
import UpdateIcon from '@mui/icons-material/Update';
let ActivityContainer = styled.div`
width:22rem;
background:#ffffff;
border:1px solid #d4d7df;
padding:2px 4px;
border-radius: 5px;
position:absolute;
top:2.5rem;
right:1rem;
z-index: 1;


.display-type-row{
    color:#a9afbf;
    display:flex;
    flex-direction:row;
    font-weight:700;
    padding-left:1.2rem;
    font-size:1.2rem;
}
.display-Icons{
    font-size:2rem;
    color:#5f88d2;

}
.icon-activity{
    padding:3px;
    width:2rem;
    height:2rem;
    border-radius:50%;
    background:#f0f4fd;
    color:#bfd2f3;
    margin-right:1.2rem;
}
.container-activity{
    display:flex;
    padding:1.2rem  0.6rem;
    color:#545f7f;
}
.activity-user{
    font-weight:700;
    font-size:1.2rem;

}

`;
export default function Activity() {

    let ActivityData = [
        {
            ActivityStatus: "User Activity",
            LastUpdate: "12:32",
            Description: "Updated Blood Pressure"
        },
        {
            ActivityStatus: "Summary",
            LastUpdate: "yesterday",
            Description: "Post Vedio for general data service"
        },
        {
            ActivityStatus: "User Activity",
            LastUpdate: "12:32",
            Description: "Change profile pictures"
        },
        {
            ActivityStatus: "Application Update",
            LastUpdate: "2 days ago",
            Description: "Some Added feathures which Improve perfomance"
        },
        {
            ActivityStatus: "Summary",
            LastUpdate: "Last 24 hour",
            Description: "Accepted the Invitation"
        } ,{
            ActivityStatus: "User Activity",
            LastUpdate: "12:32",
            Description: "Change profile pictures"
        },     {
            ActivityStatus: "Summary",
            LastUpdate: "yesterday",
            Description: "Post Vedio for general data service"
        },
        {
            ActivityStatus: "User Activity",
            LastUpdate: "12:32",
            Description: "Change profile pictures"
        },
        {
            ActivityStatus: "Application Update",
            LastUpdate: "2 days ago",
            Description: "Some Added feathures which Improve perfomance"
        }
    ]
    return (
        <ActivityContainer>
            <div>
                <img src='/Images/Activitylogo.png' alt='Logo' />
            </div>
            <div className='display-type-row'>
                <NotificationsIcon className='display-Icons' />
                <span>&nbsp; ACTIVITY</span>
            </div>
            {
                ActivityData.map((ActivityData, Index) =>


                    <div key={Index} className='container-activity'>
                        {ActivityData.ActivityStatus === "User Activity" &&
                            <span >
                                <ManageAccountsIcon className='icon-activity' />
                            </span>
                        }
                        {ActivityData.ActivityStatus === "Summary" &&
                            <span >
                                <SummarizeIcon className='icon-activity' />
                            </span>
                        }
                        {ActivityData.ActivityStatus === "Application Update" &&
                            <span >
                                <UpdateIcon className='icon-activity' />
                            </span>
                        }
                        <span>
                            <span>
                                <span className='activity-user'>
                                    {ActivityData.ActivityStatus}
                                </span>
                                <span>
                                    &nbsp;  &#8226; &nbsp;   {ActivityData.LastUpdate}
                                </span>
                            </span><br />
                            <span>{ActivityData.Description}</span>
                        </span>
                    </div>
                )

            }

        </ActivityContainer>
    )
}
