import React from 'react'
import marked from 'marked'

marked.setOptions({
  breaks: true
})

export default function Previewer(props) {;
  const parsedInput = marked(props.input);
  return (
    <div id="previewer-container">
      <div id="header">Preview</div>
      <div id="preview" dangerouslySetInnerHTML={{__html: parsedInput}}>
      </div>
    </div>
  )
}
