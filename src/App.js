import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import {GlobalStyle} from './Components/Style/GlobalStyle';
import {Navbar} from './Components/NavBar/Navbar';
import {Menu} from './Components/Menu/Menu';
import {ModalItem} from './Components/Modal/ModalItem';
import {Order} from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import {useOrders} from './Components/Hooks/useOrders';
import { useCount } from './Components/Hooks/useCount';
import {useAuth} from './Components/Hooks/useAuth';
const firebaseConfig = {
  apiKey: "AIzaSyAvGZ-3p5bzp-xAH3zBm5qnjzcC2Ij9TVg",
  authDomain: "top-burger-6e591.firebaseapp.com",
  databaseURL: "https://top-burger-6e591.firebaseio.com",
  projectId: "top-burger-6e591",
  storageBucket: "top-burger-6e591.appspot.com",
  messagingSenderId: "292537761589",
  appId: "1:292537761589:web:a74c754b06666e601ed67c"
};
firebase.initializeApp(firebaseConfig);
function App() {
const auth=useAuth(firebase.auth);
  const openItem=useOpenItem();
  const orders=useOrders();
  const count=useCount();

  return (
    <>
    <GlobalStyle/> 
   
<Navbar {...auth}></Navbar>
<Order {...orders} {...openItem}/>
<Menu {...openItem}/>
 {openItem.openItem && <ModalItem {...openItem} {...orders} {...count}/>}
</>
  );
};

export default App;
