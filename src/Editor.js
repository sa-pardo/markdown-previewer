import React from 'react'

export default function Editor(props) {
  return (
    <div id="editor-container">
      <textarea id="editor" defaultValue={props.input} onChange={props.onChange}>
      </textarea>
    </div>
  )
}
