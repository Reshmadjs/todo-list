import React from 'react'

const Additem = ({inputData,toggleButton,addItem,setInputData}) => {
  return (
    <div>

<h1 className="text-center text-primary shadow-sm p-3 mb-5 bg-white rounded">NotesApp</h1>
<figure>

<img src='./images/todo.svg' className="rounded mx-auto d-block" alt='todoLogo' />
<figcaption className='text-center'>Add Your List Here ✌</figcaption>
</figure>
<div className='row justify-content-center align-items-center form-group text-center'>
<div className='col-lg-3 col-md-3 col-sm-6 col-sm-offset-3 col-xs-6 col-xs-offset-3'>
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
        </div> 
       </div>
    </div>
  )
}

export default Additem