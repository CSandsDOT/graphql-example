import React from 'react'
import TaggedItems from './components/TaggedItems'

const taggedItems = [{item: 'Item One', tags: ['First', 'New', 'Only']}, { item: 'Item Two', tags: ['Second', 'New']}]
function App() {
  return (
  <>
  The App says:
    <TaggedItems taggedItems={taggedItems}/>
    </>
  );
}

export default App;
