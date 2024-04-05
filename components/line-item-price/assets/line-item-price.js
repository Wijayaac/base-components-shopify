import { subscribe } from "@archetype-themes/scripts/utils/pubsub";
import { PUB_SUB_EVENTS as LINE_ITEM_QUANTITY_PUB_SUB_EVENTS } from "components/line-item-quantity";

export class LineItemPrice extends HTMLElement {
  connectedCallback() {
    this.cartChangeUnsubscriber = subscribe(
      LINE_ITEM_QUANTITY_PUB_SUB_EVENTS.lineItemChange,
      this.handleLineItemChange.bind(this)
    );
  }

  disconnectedCallback() {
    this.cartChangeUnsubscriber?.();
  }

  handleLineItemChange({ data }) {
    const { html, index } = data;

    if (index !== this.index) return;

    const price = html.querySelector(
      `line-item-price[index="${this.index}"]`
    ).innerText;

    this.price = price;
  }

  get index() {
    return this.getAttribute("index");
  }

  set price(count) {
    this.innerText = count;
  }
}

customElements.define("line-item-price", LineItemPrice);
