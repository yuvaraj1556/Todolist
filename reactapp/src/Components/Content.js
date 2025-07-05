import React from 'react'
import { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {

    const [items,setItems] = useState(
        [
            {
                id: 1,
                checked: true,
                text: "Practice coding"
            },
            {
                id: 2,
                checked: false,
                text: "Learn React"
            },
            {
                id: 3,
                checked: true,
                text: "Go to gym"
            }
    ]);

   const handleCheck = (id) => {
        const updatedItems = items.map((item) =>
            item.id === id ? {...item, checked: !item.checked } : item
        );
        setItems(updatedItems);
        localStorage.setItem("todolist",JSON.stringify(updatedItems));
    };

    const handleDelete = (id) => {
        const filteredItems = items.filter((item) => item.id !== id);
        setItems(filteredItems);
        localStorage.setItem("todolist",JSON.stringify(filteredItems));
    }

    const addItems = () => {
        const id = document.getElementById('id').value;
        const text = document.getElementById('text').value;
        const newItem = {
            id: id,
            checked: false,
            text: text
        }
        const allItems = [...items,newItem];
        setItems(allItems);
        localStorage.setItem("todolist",JSON.stringify(newItem));
    }

    return (
        <main>
            {items.length > 0 ? 
                <ul>
            {items.map((item) => (
                <li className="item" key={item.id}>
                    <input 
                        type="checkbox"
                        onChange={() => handleCheck(item.id)}
                        checked={item.checked}/>
                    {
                        item.checked ? <label><strike>{item.text}</strike></label> :
                        <label>{item.text}</label>
                    }
                    <FaTrashAlt
                        role="button"
                        tabIndex="0"
                        onClick={() => handleDelete(item.id)}
                    />
                </li>
            ))}
           </ul> : <p style={{color: 'red'}}>To do list is empty</p>
        }

            <input type="number" id="id" placeholder='Enter id' className="styled-input"/>
            <input type='text' id="text" placeholder="Enter the activity" className="styled-input"/>
            <button onClick={addItems}>Add item</button>

        </main>
    );
}

export default Content;