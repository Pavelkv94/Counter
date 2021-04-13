import React from 'react';
import './HeadTitle.css';

export function HeadTitle(props: any) {
    return (<>
<div className="headTitle"><h2>COUNTER</h2></div>
        <svg>
          <filter id="fire">
            <feTurbulence id="turbulance" baseFrequency="0.1 0.1" numOctaves="2" seed="0">
              <animate attributeName="baseFrequency" dur='8s' values="0.1 0.1;0.12 0.12" repeatCount="indefinite"></animate>
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" scale="8"></feDisplacementMap>
          </filter>
        </svg>
    </>)
}