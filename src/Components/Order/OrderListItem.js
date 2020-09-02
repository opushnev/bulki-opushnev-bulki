import React from 'react';
import styled from 'styled-components';
import trash from '../../image/trash.svg';

const OrderItemStyled=styled.li`
    display:flex;
    margin:15px;
    padding:15px;
`;

const TrashButton=styled.button`
    width:24px;
    height:24px;
    border-color:transparent;
    background-color:transparent;
    background-image: url(${trash});
    background-position:center;
    background-size:cover;
    backgrounf-repeat:no-repeat;
    cursor:pointer;
`;

const ItemName=styled.span`
    flex-grow:1;
`;
const ItemPrice=styled.span`
margin-left:20px;
mid-width:65px;
text-align:right;
`;

export const OrderListItem=({order})=>(
<OrderItemStyled>
    <ItemName>{order.name}</ItemName>
    <span>3</span>
    <ItemPrice>{order.price} Руб</ItemPrice>
    <TrashButton/>
</OrderItemStyled>

);