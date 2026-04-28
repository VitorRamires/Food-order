export function CheckoutForm() {
  return (
    <>
      <div className="checkout">
        <form action>
          <div className="form-name">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>

          <div className="form-email">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
          </div>

          <div className="form-street">
            <label htmlFor="street">Street</label>
            <input type="text" id="street" />
          </div>

          <div className="form-postalCode">
            <label htmlFor="postalCode">Postal Code</label>
            <input type="text" id="postalCode" />
          </div>

          <div className="form-city">
            <label htmlFor="city">City</label>
            <input type="text" id="city" />
          </div>
        </form>
      </div>
    </>
  );
}
