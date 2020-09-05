import React from 'react';
import styled from 'styled-components';

const CountWrapper=styled.div`
    display:flex;
`;
const CountInput=styled.input`
    width:50px;
`;

const ButtonCount=styled.button`
background-color:transparent;
`;

export function CountItem(counter) {
    const {count,setCount,onChange}=counter;
    return (
    <CountWrapper>
<span>Количество</span>
<ButtonCount disabled={count<=1} onClick={()=>setCount(count-1)}>-</ButtonCount>
<CountInput type='number' min='1' max='100' value={count<1 ?1:count} onChange={onChange}/>
<ButtonCount onClick={()=>setCount(count+1)}>+</ButtonCount>
    </CountWrapper>
    )
};