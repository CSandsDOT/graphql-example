import React, { useState } from 'react'


function TaggedItem(){

    //const [taggedItem, setTaggedItem] = useState({item: "First Item", tags: ["Tag One", "Tag Two"]})
    const [item, setItem] = useState("First Item")
    const [tags, setTags] = useState( ["Tag One", "Tag Two"] )


    const addTag = (e) => {
        setTags([...tags, e.target.value])
    }
    const updateItem = (e) => {
        setItem(e.target.value)
    }
    const handleClick = () => {
        const newTag = document.getElementById('newTag').value
        setTags([...tags, newTag])
    }

    return (

        <div>
            <input type="text" value={item} onChange={updateItem}/>
            <ul>
                {tags.map (tag => (
                    <li>{tag}</li>
                ))}
            </ul>
            <label htmlfor="newTag">Add New Tag</label>
            <input type="text" name="newTag" id="newTag" onBlur={addTag}/>
            <button onClick={handleClick}>Add Tag</button>
        </div>
    )
}
export default TaggedItem