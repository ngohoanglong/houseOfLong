import { useEffect } from "react"
import React from "react"
import AceEditor from "react-ace"
const languages = ["javascript"]
const themes = ["monokai"]
languages.forEach(lang => {
  require(`ace-builds/src-noconflict/mode-${lang}`)
  require(`ace-builds/src-noconflict/snippets/${lang}`)
})
themes.forEach(theme => require(`ace-builds/src-noconflict/theme-${theme}`))
const CodeEditor = ({ value, onChange }) => {
  if (!window) return null
  return (
    <AceEditor
      width={"100%"}
      height={"100%"}
      mode="javascript"
      theme="monokai"
      onChange={onChange}
      name="UNIQUE_ID_OF_DIV"
      value={value}
    />
  )
}
export default CodeEditor
