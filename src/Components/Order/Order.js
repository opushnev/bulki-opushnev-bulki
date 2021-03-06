import React from 'react';
import styled from 'styled-components';
import {ButtonCheckout} from '../Style/ButtonCheckout';
import {OrderListItem} from '../Order/OrderListItem';

const OrderStyled=styled.section`
    position:fixed;
    display:flex;
    flex-direction:column;
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
export const Order=({orders})=>{
    return (
        <>
        <OrderStyled>
          <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>    
            <OrderContent>
{orders.length ?
<OrderList>
{orders.map(order=> <OrderListItem order={order}/>)}
</OrderList>:
<EmptyList>Список заказов пуст</EmptyList>
}
            </OrderContent>
<Total>
<span>Итого</span>
<span>5</span>
<TotalPrice>800 Р</TotalPrice>
        
</Total>        
<ButtonCheckout>Оформить заказ</ButtonCheckout>
        </OrderStyled>
        </>
    )
}