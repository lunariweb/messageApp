import React from "react";
import "./Chat.css";


function Chat() {
    return (
        <div className="chat">
            {/* chat header */}
            <div className="chat__header">
                <h4>To: <span className="chat__name">Channel name</span></h4>
                <strong>Details</strong>
            </div>
            {/* chat messages */}

            {/* chat input */}
            <div className="chat__input">
                <form>
                    <input type="text" placeholder="iMessage"/>
                    <button>Send Message</button>
                </form>
            </div>

        </div>
    )
}

export default Chat;
