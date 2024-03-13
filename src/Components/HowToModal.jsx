export default function HowToModal() {
  return (
    <div className="modal fade" id="howToModal" tabIndex="-1" aria-labelledby="howToModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="howToModalLabel">How To Play</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>This game tests your short term memory and your spatial memory</p>
            <p>Play the daily game to keep track of your score and stats</p>
            <p>Or choose practice mode</p>
            <p>You are shown 3 squircles, green, red, and blue</p>
            <p>You have 5 seconds to remember the size of the squircles</p>
            <p>Use the sliders to reproduce each squircle</p>
            <p>Press submit to see your score</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary btn-md" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}