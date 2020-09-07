import React from 'react';
import styled from 'styled-components';
import trash from '../../image/trash.svg';
import {totalPriceItems,formatCurrency} from '../Functions/secondaryFunction';

const OrderItemStyled=styled.li`
    display:flex;
    margin:15px;
    padding:15px;
    justify-content:space-between;
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
const StyleTop=styled.span`
font-size:11px;
font-family:Arial;
`;
const ItemNameD=styled.div`
display:flex;
flex-direction:column;
`;
const OrderAll=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`;
export const OrderListItem=({order})=>{
const topping=order.topping.filter(item=>item.checked).map(item=>item.name).join('/');

return (
    <OrderAll>
<OrderItemStyled>
    <ItemNameD>
<ItemName>{order.name}</ItemName>
<StyleTop>{topping}</StyleTop>
</ItemNameD>
<span>{order.count}</span>
    <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
    <TrashButton/>
</OrderItemStyled>
</OrderAll>
)
};