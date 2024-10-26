import { createContext, useState } from "react"
import run from "../config/gemini"

export const Context = createContext()

const ContextProivider = (props) => {
  const [input, setInput] = useState("")
  const [prevPrompt, setPrevPrompt] = useState([])
  const [recentPrompt, setRecentPrompt] = useState("")
  const [loading, setLoading] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [resultData, SetResultData] = useState("")

  const onSent = async () => {
    SetResultData("")
    setLoading(true)
    setShowResult(true)
    setRecentPrompt(input)
    setPrevPrompt((prev) => [...prev, input])
    const response = await run(input)
    let newResponse = response.split("**").join("</br>")
    SetResultData(newResponse)
    setLoading(false)
    setInput("")
  }

  const newChat = () => {
    setLoading(false), setShowResult(false), setPrevPrompt([])
  }

  const contextValue = {
    setInput,
    input,
    recentPrompt,
    prevPrompt,
    setPrevPrompt,
    onSent,
    loading,
    showResult,
    resultData,
    setRecentPrompt,
    newChat,
  }

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  )
}
export default ContextProivider
