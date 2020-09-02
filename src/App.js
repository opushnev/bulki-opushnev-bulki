import React from 'react';
import {GlobalStyle} from './Components/Style/GlobalStyle';
import {Navbar} from './Components/NavBar/Navbar';
import {Menu} from './Components/Menu/Menu';
import {ModalItem} from './Components/Modal/ModalItem';
import {Order} from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import {useOrders} from './Components/Hooks/useOrders';

function App() {

  const openItem=useOpenItem();
  const orders=useOrders();

  return (
    <>
    <GlobalStyle/> 
   
<Navbar></Navbar>
<Order {...orders}/>
<Menu {...openItem}/>
 {openItem.openItem && <ModalItem {...openItem} {...orders}/>}
</>
  );
};

export default App;
