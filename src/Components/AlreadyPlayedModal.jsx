export default function HowToModal({disableDailyPlay}) {
    return (
      <div className="modal fade" id="alreadyPlayedModal" tabIndex="-1" aria-labelledby="alreadyPlayedModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="alreadyPlayedModalLabel">Alright Stop! Collaborate And Listen</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>You've already played todays game!!</p>
              <p>Why not have a few practice games</p>
              <p>Or check out your stats</p>
              <p>And Share with your friends</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary btn-md" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    )
}
