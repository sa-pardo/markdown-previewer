import React, { useState } from 'react'
import Editor from './Editor'
import Previewer from './Previewer'

function App() {
  const [input, setInput] = useState(initialState)

  const changeHandler = (e) => {
    const input = e.target.value;
    setInput(input);
  }

  return (
    <div className="App">
      <Editor input={input} onChange={changeHandler}/>
      <Previewer input={input}/>
    </div>
  );
}

export default App;

const initialState = ` 
# H1
## H2
[link](http://sa-pardo.github.io/blog)

\`in line code\`
\`\`\`javascript
const welcome = () => console.log("Hello World!");
\`\`\`
* item 1
* item 2
* item 3

> Block quote

![React Logo w/ Text](https://avatars3.githubusercontent.com/u/43013769?s=460&u=89331c4406d643fd9960e54a5d39ee7d7ed23909&v=4)

**Bolded text**
`;