import {useState} from 'react';

export function useChoices(){
    const [choice,setChoices]=useState();

    function changeChoices(e) {
        //console.log(e.target.value);
        setChoices(e.target.value);
    }

    return {choice,changeChoices};
}
