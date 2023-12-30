import React from "react";

function AddToCardModal({closeModal}) {
  return (
    <div className="addToCardModal">
      <div className="doctorsmodaltext">
      <h6>Free time to appoint on</h6>
      <p>01/16/19</p>
      </div>
      
      <form className="addCardForm" action="#">
      
        <div className="doctorsmodalshours">
        <div className="doctorsmodalhour"><p>8:30 AM</p></div>
        <div className="doctorsmodalhour"><p>9:00 AM</p></div>
        <div className="doctorsmodalhour"><p>8:30 AM</p></div>
        <div className="doctorsmodalhour"><p>5:30 PM</p></div>

        </div>
        <div className="button-areas">
            <button onClick={closeModal} className="cancel-button">Cancel</button>
            <button className="save-button"><p className="chsdt">Choose date</p></button>
        </div>
      </form>
    </div>
  );
}

export default AddToCardModal;
