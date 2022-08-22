//import axios from 'axios'
import React, { useState } from 'react'
//import axios from 'axios'

//const [taggedItems, setTaggedItems] = useState()

function saveNewItem(e){
    const newItem = document.getElementById("newItem").value
    const newTags = document.getElementById("tags").value.split(" ")
    const newTaggedItem = { item: newItem, tags: newTags }
/*     axios({
        method: 'post',
        url: 'http://localhost:5000/graphql',
        data: {query: { 
            addTaggedItem: {item: ${newItem}, tags: ${newTags}},
            TaggedItem: { item, tags }
        }
    }) */
    return newTaggedItem
}

export default function TaggedItemForm(){
    
    return(
        <>
        <label htmlFor="newItem">New Item</label>
        <input type="text" name="newItem" id="newItem"/>
        <label htmlFor="tags">Tags</label>
        <input type="text" name="tags" id="tags"/>
        <button>Clear</button>
        <button onCLick={saveNewItem}>Save New</button>
        </>
    )
}
