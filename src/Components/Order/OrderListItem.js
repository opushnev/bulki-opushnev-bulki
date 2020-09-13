import React,{useRef} from 'react';
import styled from 'styled-components';
import trash from '../../image/trash.svg';
import {totalPriceItems,formatCurrency} from '../Functions/secondaryFunction';

const OrderItemStyled=styled.li`
    display:flex;
    margin:5px;
    padding:5px;
    justify-content:space-between;
`;

const TrashButton=styled.button`
    width:23px;
    height:23px;
    border-color:transparent;
    background-color:transparent;
    background-image: url(${trash});
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat;
    cursor:pointer;
`;

const ItemName=styled.span`
    flex-grow:1;
`;
const ItemPrice=styled.span`
margin-left:10px;
min-width:65px;
text-align:right;
`;
const StyleTop=styled.span`
display:flex;
flex-wrap:wrap;
font-size:11px;
font-family:Arial;
max-width:150px;
`;
const ItemNameD=styled.div`
display:flex;
flex-direction:column;
padding:0px;
`;
const OrderAll=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`;
export const OrderListItem=({order,index,deleteItem,setOpenItem})=>{
const topping=order.topping.filter(item=>item.checked).map(item=>item.name).join('/');
const refDeleteButton=useRef(null);
return (
    <OrderAll>
<OrderItemStyled onClick={(e)=>e.target!==refDeleteButton.current && setOpenItem({...order,index})}>
    <ItemNameD>
<ItemName>{order.name} {order.choice}</ItemName>
<StyleTop>{topping}</StyleTop>
</ItemNameD>
<span>{order.count}</span>
    <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
    <TrashButton ref={refDeleteButton} onClick={()=>deleteItem(index)}/>
</OrderItemStyled>
</OrderAll>
)
};