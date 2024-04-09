import { updateCart } from "@archetype-themes/utils/theme-request"

export class CartNote extends HTMLElement {
  connectedCallback() {
    this.addEventListener("change", this.handleChange.bind(this))
  }

  async handleChange({ target }) {
    if (target.getAttribute("name") !== "note") return

    await updateCart({ note: target.value })
  }
}

customElements.define("cart-note", CartNote)
