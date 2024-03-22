import { useEffect, useState } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterIcon,
  TwitterShareButton,
  EmailIcon,
  EmailShareButton,
} from "react-share";

export default function ShareModal() {
  const [todaysScores, setTodaysScores] = useState({})
  const [messageBody, setMessageBody] = useState({})
  const [faceWhatsMessage, setfaceWhatsMessage] = useState({})

  const shareUrl = "https://65fd52496148ecfa619c690f--squicklesgame.netlify.app/";

  useEffect(()=>{
    setTodaysScores(JSON.parse(localStorage.getItem("todaysScore")))

  },[])

  useEffect(()=>{
    if (todaysScores) {
      setMessageBody(`I've played the daily Squircles game\n\n🟩 ${todaysScores.green}\n🟥 ${todaysScores.red}\n🟦 ${todaysScores.blue}\nTotal: ${todaysScores.total}\n\nCheck it out!!!\n\n`)
      setfaceWhatsMessage(`I've played the daily Squircles game\n\nGreen ${todaysScores.green}\nRed ${todaysScores.red}\nBlue ${todaysScores.blue}\nTotal: ${todaysScores.total}\n\nCheck it out!!!\n\n`)
    } else {
      setMessageBody(`Check out this awesome game\n\nSquircles\n\nA short term memory game\n\n`)
      setfaceWhatsMessage(`Check out this awesome game\n\nSquircles\n\nA short term memory game\n\n`)
    }
  },[todaysScores])

  return (
    <div
      className="modal fade"
      id="shareModal"
      tabIndex="-1"
      aria-labelledby="shareModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="shareModalLabel">
              Share Your Daily Scores
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body p-4">
            <FacebookShareButton
              url={shareUrl}
              hashtag={faceWhatsMessage}
              className="p-2"
            >
              <FacebookIcon size={40} round={true} />
            </FacebookShareButton>
            <WhatsappShareButton
              url={shareUrl}
              title={faceWhatsMessage}
              className="p-2"
            >
              <WhatsappIcon size={40} round={true} />
            </WhatsappShareButton>
            <TwitterShareButton
              title={messageBody}
              url={shareUrl}
              hashtags={["WhatAGame", "Trending", "No1Game", "MemoryGame"]}
              className="p-2"
            >
              <TwitterIcon size={40} round={true} />
            </TwitterShareButton>
            <EmailShareButton
              url={shareUrl}
              body={messageBody}
              className="p-2"
            >
              <EmailIcon size={40} round={true} />
            </EmailShareButton>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary btn-md"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
