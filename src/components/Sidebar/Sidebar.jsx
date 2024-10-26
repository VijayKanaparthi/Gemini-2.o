import "./Sidebar.css"
import { assets } from "../../assets/assets"
import { useContext } from "react"
import { Context } from "../../context/Context"

const Sidebar = () => {
  const { prevPrompt, newChat } = useContext(Context)
  return (
    <div className="sidebar-background">
      <div className="top">
        <img src={assets.menu_icon} alt="" className="menu-icon" />
        <div className="chat" onClick={() => newChat()}>
          <img src={assets.plus_icon} alt="" className="plus-icon" />
          <p>New Chat</p>
        </div>
        <p className="recent-text">Recent</p>
        {prevPrompt.map((each) => {
          return (
            <div key={each} className="recent-questions">
              <img
                src={assets.message_icon}
                alt=""
                className="recent-question-image"
              />
              <p>{each}</p>
            </div>
          )
        })}
      </div>
      <div className="bottom">
        <div className="help">
          <img src={assets.question_icon} alt="" />
          <p>Help</p>
        </div>
        <div className="activity">
          <img src={assets.history_icon} alt="" />
          <p>Activity</p>
        </div>
        <div className="settings">
          <img src={assets.setting_icon} alt="" />
          <p>Settings</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
