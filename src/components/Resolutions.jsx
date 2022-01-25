import React, {useState} from 'react'
import ResolutionsForm from './ResolutionsForm';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineEdit } from 'react-icons/ai';

function Resolutions({resolutions, completeResolution, removeResolution, updateResolution}) {
    const[edit, setEdit] = useState({
        id:null,
        value: "",
    });

    const submitUpdate = value => {
updateResolution(edit.id, value)
setEdit({
    id:null,
    value:''
  })

}

if (edit.id ) {
    return <ResolutionsForm edit={edit} onSubmit={submitUpdate} />;
}


    return resolutions.map((resolution, index) => (
        <div className={resolution.isComplete ? 'resolution-row complete' : 'resolution-row'} 
        key={index}
        >

            <div key={resolution.id} onClick={()=> completeResolution(resolution.id)}>
                {resolution.text}
            </div>
            <div className='icons'>
                <AiOutlineClose onClick={() => removeResolution(resolution.id)}
                className='remove-icon'/>
                <AiOutlineEdit onClick={() => setEdit({id:resolution.id, value:resolution.text})}
                className='edit-icon' />


            </div>

        </div>

    ));
}

export default Resolutions
