import React from 'react';
import styled from 'styled-components';

const ToppingCheckbox=styled.input`
    cursor:pointer;
    margin-right:20px;
`;
const ToppingLabel=styled.label`
    display:block;
`;
const ToppingWrap=styled.div`
    max-width:500px;
    margin:0 auto;
    column-count:2;
    column-gap:15px;
`;




export function Toppings({toppings,checkToppings}){
    //console.log(toppings)
    return (
        <>
        <h3>Добавки</h3>
        <ToppingWrap>
            {toppings.map((item,i)=>(
                 <ToppingLabel key={i}>
                <ToppingCheckbox 
                type="checkbox"
                checked={item.checked}
                onChange={()=>checkToppings(i)}
                />
                {item.name}
            </ToppingLabel>
            ))}
           
            
        </ToppingWrap>
        </>
    )
}