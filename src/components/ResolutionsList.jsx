import React, {useState} from 'react'
import Resolutions from './Resolutions';
import ResolutionsForm from './ResolutionsForm'

function ResolutionsList() {
const [resolutions, setResolutions] = useState([]);

const addResolution = resolution => {
if (!resolution.text || /^\s*$/.test(resolution.text)) {

    return 
}

const newResolutions = [resolution, ...resolutions];

setResolutions(newResolutions);

};

const updateResolution = (resolutionId, newValue) => {
    if(!newValue.text || /^\s*$/.test(newValue.text)) {
        return;
    }

    setResolutions(prev => prev.map(item => (item.id === resolutionId ? newValue : item))
    );
};




const removeResolution = id => {

    const removeArr = [...resolutions].filter(resolution => resolution.id !== id)

    setResolutions(removeArr);
 };

const completeResolution = id => {
    let updatedResolutions = resolutions.map(resolution => {
        if (resolution.id === id) {
            resolution.isComplete = !resolution.isComplete
        }

        return resolution;
    });

    setResolutions(updatedResolutions);
};


    return (
        <div>
            <h1>What are your Resolutions?</h1>
            <ResolutionsForm onSubmit={addResolution}/>
            <Resolutions resolutions={resolutions} completeResolution={completeResolution} removeResolution={removeResolution} updateResolution={updateResolution} />
        </div>
    )
}

export default ResolutionsList
