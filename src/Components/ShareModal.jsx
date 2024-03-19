import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  TwitterIcon,
  TwitterShareButton,
  EmailIcon,
  EmailShareButton,
} from "react-share";

export default function ShareModal() {
  const shareUrl = "https://65f45726744af405e82e9a42--circletest1.netlify.app";

  return (
    <div
      className="modal fade"
      id="shareModal"
      tabIndex="-1"
      aria-labelledby="shareModalLabel"
      aria-hidden="true"
      data-bs-backdrop="static"
      
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
              hashtag={"#whatAGame!"}
              className="p-2"
            >
              <FacebookIcon size={40} round={true} />
            </FacebookShareButton>
            <WhatsappShareButton
              url={shareUrl}
              title={"these are the stats"}
              className="p-2"
            >
              <WhatsappIcon size={40} round={true} />
            </WhatsappShareButton>
            <FacebookMessengerShareButton
              url={shareUrl}
              hashtag={"#whatAGame!"}
              className="p-2"
            >
              <FacebookMessengerIcon size={40} round={true} />
            </FacebookMessengerShareButton>
            <TwitterShareButton
              url={shareUrl}
              hashtag={"#whatAGame!"}
              className="p-2"
            >
              <TwitterIcon size={40} round={true} />
            </TwitterShareButton>
            <EmailShareButton
              url={shareUrl}
              hashtag={"#whatAGame!"}
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
