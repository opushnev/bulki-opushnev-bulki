import React from 'react';
import styled from 'styled-components';
import {ButtonCheckout} from '../Style/ButtonCheckout';
import {OrderListItem} from '../Order/OrderListItem';
import { totalPriceItems, formatCurrency} from '../Functions/secondaryFunction';

const OrderStyled=styled.section`
    position:fixed;
    display:flex;
    flex-direction:column;
    align-items:space-around;
    top:80px;
    left:0;
    background:#fff;
    min-width:380px;
    height: calc(100%-80px);
    box-shadow: 3px 4px 5px rgba(255,255,255,0.5);
    padding:20px;
`;
const OrderTitle=styled.h2`
text-align:center;
background-color:transparent;
margin-bottom:30px;
`;

const OrderContent=styled.div`
    flex-grow:1;
`;

const OrderList=styled.ul`

`;
const OrderTotal=styled.div`
    
`;
const Total=styled.div`
display:flex;
margin-bottom:30px;
& span:first-child {
    flex-grow:1;
}
`;
const TotalPrice=styled.span`
    text-align:right;
    mid-width:65px;
    margin-left:15px;
`;

const EmptyList=styled.p`
    text-align:center;
`;
export const Order=({orders,setOrders,setOpenItem})=>{
    const deleteItem=index=>{
        const newOrders=[...orders];
        newOrders.splice(index,1);
        setOrders(newOrders);
    }

    const total=orders.reduce((result,order)=>totalPriceItems(order)+result,0);
const  totalCount=orders.reduce((result,order)=>order.count+result,0);
    return (
        <>
        <OrderStyled>
          <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>    
<OrderContent>
{orders.length ?
<OrderList>
{orders.map((order,index)=> <OrderListItem 
key={index}
order={order}
deleteItem={deleteItem}
index={index}
setOpenItem={setOpenItem}
/>)}
</OrderList>:
<EmptyList>Список заказов пуст</EmptyList>
}
</OrderContent>
<OrderTotal>
<Total>
<span>Итого</span>
<span>{totalCount}</span>
<TotalPrice>{formatCurrency(total)}</TotalPrice>
</Total>    
<ButtonCheckout>Оформить заказ</ButtonCheckout>
</OrderTotal>
        </OrderStyled>
        </>
    )
}