import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

import Chart from 'react-apexcharts';
let GraphContainer= styled.div`
width:46.5rem;
padding:2rem;
background:#ffff;
border-radius:20px;
border: 0.5px solid #d4d7df;
position: absolute;
    left: 8rem;
    top: 70rem;
    margin-bottom:20rem;


`;
export default function Historycharts() {
    const [product, setProduct] = useState(
        [
            {
                name: "In-pernon Visit",
                data: [234, 45, 67, 987, 345, 456, 87, 321, 45, 569, 76, 890]
            },
            {
                name: "Online Visit",
                data: [562, 145, 267, 97, 45, 156, 87, 321, 845, 969, 706, 20]
            },
            {
                name: "Anytime Visit",
                data: [1012, 345, 117, 697, 845, 56, 287, 1321, 1845, 469, 306, 120]
            }
        ]
    );

    const [option, setOption] = useState(
        {
            title: { text: "CONSULTATION HISTORY" },
            xaxis: {
                title: { text: "Visited" },
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yaxis: {
                title: { text: "No of Patient Consulted" }
            }

        }
    );
    return (
        <GraphContainer>
            <div >
                <Chart type='line'
                    series={product}
                    options={option}
                >
                </Chart>

            </div>


        </GraphContainer>
    )
}
