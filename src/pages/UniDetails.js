import "./UniDetails.css";
function UniDetails({ itemData }) {

    return (
        <div className="uni-item-container">
            <h2>{itemData.name}</h2>
            <h4>{itemData.domains}</h4>
            <p>Visit Us :</p>
            <p>{itemData.web_pages}</p>
        </div>
    );
}
export default UniDetails;
