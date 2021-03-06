import React from 'react'
import styled from 'styled-components'

function Info() {
  return (
    <InfoIn>
      <h1>Please read</h1>
      <ul>
        <li>Minimum 10,000 ANJ is required to become a juror.</li>
        <li>The pre-activation period ends February 10th.</li>
        <li>1 ANT = 100 ANJ during pre-activation period only.</li>
        <li>ANT will be converted to ANJ.</li>
        <li>
          ANJ will be automatically activated and locked until February 10th.
        </li>
      </ul>
    </InfoIn>
  )
}

const InfoIn = styled.section`
  padding: 30px 0;
  h1 {
    line-height: 1.3;
    font-size: 18px;
    font-weight: 600;
    margin: 0;
    color: rgb(255, 124, 124);
  }
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
    font-style: normal;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.3;
    color: #8a96a0;
    &:before {
      content: '− ';
    }
  }
`

export default Info
