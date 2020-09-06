import React from 'react';
import styled from 'styled-components';
import {ButtonCheckout} from '../Style/ButtonCheckout';
import {CountItem} from './CountItem';
import { useCount } from '../Hooks/useCount';
import {totalPriceItems,formatCurrency} from '../Functions/secondaryFunction';
import { Toppings } from './Topping';
import {useToppings} from '../Hooks/useToppings';
const Overlay=styled.div`
    position:fixed;
    display:flex;
    justify-content:center;
    align-items:center;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,.5);
    z-index:999;
`;
const Modal=styled.div`
    background-color:white;
    width:650px;
    height:650px;
`;
const Banner=styled.div`
    background-image:url(${({img})=>img});
    background-size:cover;
    background-position:center;
    height:200px;
    margin-bottom:20px;
`;
const Named=styled.div`
    font-size:40px;
    padding:30px;
`;
const Price=styled.div`
    font-size:50px;
    padding:30px;
`;
const Content=styled.section`
 text-align:center;
 padding:20px 20px;
 display:flex;
 flex-direction:column;
 height:calc(100%-20px);
 justify-content:space-between;
`;
const TotalPriceItem=styled.div`
display:flex;
justify-content:space-between;
    `;

export const ModalItem=({openItem,setOpenItem,orders,setOrders})=>{

    const counter=useCount();
    const toppings=useToppings(openItem);
    function closeModal(e){
        if(e.target.id==='overlay'){
            setOpenItem(null);
        }
    }

    const order={
        ...openItem,
        count:counter.count,
        topping: toppings.toppings
    };


const addToOrder=()=>{
    setOrders([...orders,order])
    setOpenItem(null);
}
return (
<Overlay id="overlay" onClick={closeModal}>
    <Modal>
    <Banner img={openItem.img}/>    
<Content>
<Named>{openItem.name}</Named>
<Price>{openItem.price}</Price>    
<CountItem {...counter}/>
{openItem.toppings && <Toppings {...toppings}/>}
<TotalPriceItem>
    <span>Цена:</span>
    <span>{formatCurrency(totalPriceItems(order))}</span>
</TotalPriceItem>

<ButtonCheckout onClick={addToOrder}>Добавить</ButtonCheckout>
</Content>


</Modal>
</Overlay>
)
};