import React from "react";
import { FormattedMessage } from "react-intl";

function AddToCardModal({closeModal}) {
  return (
    <div className="addToCardModal">
      <h3 className="addToCardHeader">
        <FormattedMessage
        id="addCreditCard"
        defaultMessage="Add credit card"
        />
      </h3>
      <form className="addCardForm" action="#">
        <div className="label-input">
          <label className="addToCard-label">
          <FormattedMessage
            id="cardNumber"
            defaultMessage="Card Number"
          />
          </label>
          <input
            className="addToCard-input"
            type="number"
            placeholder="Card Number..."
            name="cardNumber"
            required
          />
        </div>
        <div className="label-input">
          <label className="addToCard-label">
          <FormattedMessage
            id="Name"
            defaultMessage="Name"
          />
          </label>
          <input
            className="addToCard-input"
            type="text"
            placeholder="Add your name..."
            name="name"
            required
          />
        </div>
        <div className="country-cvc-expiry">
          <div className="label-input">
            <label className="addToCard-label">
            <FormattedMessage
            id="Country"
            defaultMessage="Country"
            />
            </label>
            <select className="addToCard-input" name="" id="">
              <option disabled selected value="">
                
            <FormattedMessage
              id="countrySelect"
              defaultMessage="Select country..."
            />
              </option>
              <option value="">USA</option>
              <option value="">AZE</option>
              <option value="">ENG</option>
            </select>
          </div>
          <div className="label-input">
            <label className="addToCard-label">
            <FormattedMessage
              id="Expiry"
              defaultMessage="Expiry"
            />
            </label>
            <input
              className="addToCard-input"
              type="text"
              placeholder="12/25"
              name="expiry"
              required
            />
          </div>
          <div className="label-input">
            <label className="addToCard-label">CVC</label>
            <input
              className="addToCard-input"
              type="text"
              placeholder="778"
              name="CVC"
              required
            />
          </div>
        </div>
        <div className="button-areas">
            <button onClick={closeModal} className="cancel-button">
            <FormattedMessage
              id="Cancel"
              defaultMessage="Cancel"
            />
            </button>
            <button className="save-button">
            <FormattedMessage
              id="Save"
              defaultMessage="Save"
            />
            </button>
        </div>
      </form>
    </div>
  );
}

export default AddToCardModal;
