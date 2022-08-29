import React from 'react'
import styled from 'styled-components'

import Queue from './Queue'
import Schedule from './Schedule';
let QueueScheduleContainerbox = styled.div`
width:50.5rem;
display:flex;
flex-direction:row;
justify-content:space-between;
position: absolute;
    left: 8rem;;
    top: 22rem;
    z-index: 1;
    padding-bottom:2rem;

`;

export default function QueueScheduleContainer() {
  return (
    <QueueScheduleContainerbox>
        <Queue/>
        <Schedule/>
  
    </QueueScheduleContainerbox>
  )
}
