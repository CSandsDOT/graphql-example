import React from 'react'

function showTags(tags){
    console.log(typeof(tags))
    const tagList = tags.map((tag, index) => {
        return (<li key={index}>{tag}</li> )
    })
    return "<ul>" + tagList + "</ul>"
}

function TaggedItems ({taggedItems}) {   
    const items = taggedItems.map((item, index) => {
        console.log(`Tags for item ${item.item}: ${item.tags}`)
        const tagList = showTags(item.tags)
        return ( <div key={index}>
            {item.item}
            {tagList}
        </div>)
    })
    return items
}
export default TaggedItems