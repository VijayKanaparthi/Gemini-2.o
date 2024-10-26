import { useContext } from "react"
import { assets } from "../../assets/assets"
import "./Main.css"
import { Context } from "../../context/Context"
import Loader from "react-spinner-loader"

const Main = () => {
  const {
    input,
    setInput,
    recentPrompt,
    onSent,
    showResult,
    loading,
    resultData,
  } = useContext(Context)
  return (
    <div className="main-container">
      <div className="nav-bar">
        <p>Gemini 2.o</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-message-container">
        {showResult ? (
          <div className="showing-massage-container">
            <div className="user-input-message-container">
              <img src={assets.user_icon} alt="" />
              <p className="query">{recentPrompt}</p>
            </div>
            <div className="gemini-response">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        ) : (
          <div className="messages-section">
            <p className="message-text">
              <span>Hello, Vijay</span>
            </p>
            <p>How Can I Help You Today ?</p>
            <div className="cards">
              <div
                className="card"
                onClick={() => setInput("What is react js")}
              >
                <p>What is react js</p>
                <img src={assets.code_icon} alt="" />
              </div>
              <div
                className="card"
                onClick={() =>
                  setInput(
                    "Hi, You are my Assistent. Give Me a To-Do List for Tomoroow ?"
                  )
                }
              >
                <p>
                  Hi, You are my Assistent. Give Me a To-Do List for Tomoroow ?
                </p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div
                className="card"
                onClick={() =>
                  setInput("Tell Me Tour Plan for Our College Trip.")
                }
              >
                <p>Tell Me Tour Plan for Our College Trip.</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div
                className="card"
                onClick={() =>
                  setInput("What is the Biggest river in the world ?")
                }
              >
                <p>What is the Biggest river in the world ?</p>
                <img src={assets.message_icon} alt="" />
              </div>
            </div>
          </div>
        )}

        <div className="send-message-container">
          <input
            type="text"
            placeholder="Enter Your Query"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <div className="input-images-container">
            <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
            <img src={assets.send_icon} alt="" onClick={() => onSent()} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
