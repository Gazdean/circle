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

export default function ShareModal({totals}) {
  const shareUrl = "https://65f45726744af405e82e9a42--circletest1.netlify.app";
  const messageBody = `I've played Squircles daily game\n\n🟩 ${totals.green}\n🟥 ${totals.red}\n🟦 ${totals.blue}\nTotal: ${totals.total}\n\nCheck it out!!!\n\n` 
  const faceWhatsMessage = `I've played Squircles daily game\n\nGreen ${totals.green}\nRed ${totals.red}\nBlue ${totals.blue}\nTotal: ${totals.total}\n\nCheck it out!!!\n\n` 

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
              Share
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
