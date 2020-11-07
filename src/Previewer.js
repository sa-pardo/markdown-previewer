import React from 'react'
import marked from 'marked'

export default function Previewer(props) {;
  const parsedInput = marked(props.input);
  return (
    <div id="previewer-container">
      <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
      <div id="preview" dangerouslySetInnerHTML={{__html: parsedInput}}>
      </div>
    </div>
  )
}
