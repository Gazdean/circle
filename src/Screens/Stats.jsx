import ShareModal from "../Components/ShareModal";

export default function Stats({/*greenTotal, setGreenTotal, redTotal, setRedTotal, blueTotal, setBlueTotal*/ totals, setTotals}) {

const shareIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-share-fill" viewBox="0 0 16 16">
<path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5"/>
</svg>

console.log(localStorage)
    return (
        <>
        <h1>Your Daily Game Stats</h1>
        <button className="btn btn-success btn-lg" data-bs-toggle="modal" data-bs-target="#shareModal">Share {shareIcon}</button>
        <ShareModal />
        </>
    )
}