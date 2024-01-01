import { useEffect, useState } from 'react';
import { Message } from '../components/Message.tsx';

export function Messages({ setState, subs}){
    const [listItems, setListItems] = useState();
    
    useEffect(() => {
        if(subs != null){
            setListItems(
                subs.map((sub, index) => {
                    return (<Message key={index} sub={sub}/>);
                })
            );
        }
    }, [subs]);

    return (
    <div id="messagesWrapper">
      <h2>Messages</h2>
      <div id="messages">{listItems}</div>
    </div>);
};