import React, { useState, useEffect } from 'react';
import Additem from './Additem';
import './style.css';

// COMMENT get local storage data back
const getLocalData = () => {
  const lists = localStorage.getItem("myNotes");
  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
}

const Notes = () => {
  
  

const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalData);
  const [isEditItem, setIsEditItem] = useState("");
  const [toggleButton, setToggleButton] = useState(false);
  const addItem = () => {
    if (!inputData) {
      alert("please enter a note");
    }
    else if (inputData && toggleButton) {
      setItems(items.map((curElem) => {
        if (curElem.id === isEditItem) {
          return { ...curElem, name: inputData }
        }
        return curElem;

      }))
      setInputData("");
      setToggleButton(false);

    }
    else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputData
      }
      setItems([...items, myNewInputData]);
      setInputData("");
    }
  }
  const editItem = (index) => {
    const item_edited_notes = items.find((curElem) => {
      return curElem.id === index;
    })
    setInputData(item_edited_notes.name);
    setIsEditItem(index);
    setToggleButton(true);
  }
  const deleteItem = (index) => {
    const deletedItem = items.filter((curElem) => {
      return curElem.id != index;
    })
    setItems(deletedItem);
  }
  // COMMENT adding local storage
  useEffect(() => {
    localStorage.setItem("myNotes", JSON.stringify(items));
  }, [items])

  const removeAll = () => {
    setItems([]);
  }
  return (
    <div >
             <>
             <Additem inputData={inputData} toggleButton={toggleButton} addItem={addItem} setInputData={setInputData}/>
             </>
                     {/* COMMENT adding items */}
      {/* <h1 className="text-center text-primary shadow-sm p-3 mb-5 bg-white rounded">NotesApp</h1> */}
      {/* form in center */}


      {/* <figure>

        <img src='./images/todo.svg' className="rounded mx-auto d-block" alt='todoLogo' />
        <figcaption className='text-center'>Add Your List Here ✌</figcaption>
      </figure>
      <div className='row justify-content-center align-items-center form-group text-center'>  */}
         {/* COMMENT small length inputbox */}
         {/* <div className='col-lg-3 col-md-3 col-sm-6 col-sm-offset-3 col-xs-6 col-xs-offset-3'>
          <div className='input-group fontpassword" style="margin:auto;'>


            <input type="input" className='form-control square-elem' placeholder='Enter notes here..' autoFocus
              value={inputData} onChange={(event) => setInputData(event.target.value)} />

            <span className="input-group-append">
              <button className="btn btn-outline-secondary border-left-0 border" type="button">
                {
                  toggleButton ? <i className="fa fa-edit" onClick={addItem}></i>
                    :
                    <i className="fa fa-plus" onClick={addItem}></i>
                }

              </button>
            </span>
          </div>
        </div>  */}

         {/* COMMENT displaying list of notes  */}
        <div className='showItems'>
          {
            items.map((curElem) => {
              return (

                <div className=" eachItem key={curElem.id} p-3 mb-2 col-lg-3 col-md-3 col-sm-3 col-xs-12 bg-primary text-white key={curElem.id}">
                  <h3>{curElem.name}</h3>
                  <i className="fa fa-edit" onClick={() => editItem(curElem.id)}></i>
                  <i className="fa fa-trash" aria-hidden="true" onClick={() => deleteItem(curElem.id)}></i>
                </div>
              )
            })
          }

        </div>

       {/* COMMENT remove all button  */}
        <button type="button" className="btn btn-primary btn-sm btn-block active" onClick={removeAll}>Remove All</button>



      {/* </div>  */}

    </div>
    
  )
}

export default Notes;