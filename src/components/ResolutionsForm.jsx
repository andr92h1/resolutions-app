import React, {useState, useEffect, useRef} from 'react'

function ResolutionsForm(props) {

    const [input, setInput] = useState(props.edit ? props.edit.value :'');

    const inputRef = useRef(null)

    useEffect(() => {
      inputRef.current.focus()
    })


    const handleChange = e =>{
      setInput(e.target.value);
    };


    const handleSubmit = e => {
      e.preventDefault();

     props.onSubmit({
     id:Math.floor(Math.random() * 100),
     text: input
      });

      setInput('');

    };

    return (
      <form className='resolutions-form' onSubmit={handleSubmit}>
       {props.edit ? (
       <>
      <input 
           type='text' 
           placeholder='Update resolution' 
           value={input} 
           name='text'
           className='resolutions-input edit'
           onChange={handleChange}
           ref={inputRef}
        />
      <button className='resolutions-button edit'>Update Resolution</button>
      </>
      ) : (
        <>
        <input 
           type="text" 
           placeholder='Add a resolution' 
           value={input} 
           name='text'
           className='resolutions-input'
           onChange={handleChange}
           ref={inputRef}
        />
      <button className='resolutions-button'>Add Resolution</button>
      </>
      )}
      </form>
    );
}

export default ResolutionsForm;