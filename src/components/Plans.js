//import axios from "axios";
import React from "react";
import { useHistory, withRouter } from "react-router-dom";

import "./Plans.css";

function Plans() {
  const history = useHistory();
  return (
    <div className="plans" id="plans">
      <form>
        <div>
          <h4>Basic plan</h4>
          <span> $11.00</span>
        </div>
        <input
          type="hidden"
          name="priceId"
          value="price_1JnKsTL4nMQz8E5tjrxoLILG"
        />
        <button type="submit">subscribe</button>
      </form>
      <form>
        <div>
          <h4>Standard plan</h4>
          <span> $20.00</span>
        </div>

        <input
          type="hidden"
          name="priceId"
          value="price_1JnKsDL4nMQz8E5tcvhAFSrc"
        />
        <button type="submit">subscribe</button>
      </form>
      <form>
        <div>
          <h4>Premium plan</h4>
          <span> $30.00</span>
        </div>

        <input
          type="hidden"
          name="priceId"
          value="price_1JnKrjL4nMQz8E5tpCjZ1Mu4"
        />
        <button type="submit">subscribe</button>
      </form>
    </div>
  );
}

export default withRouter(Plans);
