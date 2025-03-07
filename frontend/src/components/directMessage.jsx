import '../css/directMessage.css';

function DirectMessage() {
  return (
      <div class="form-container">
        <div class="red-line"></div>
        <div class="main-form">
          <h2>Send Us a Message!</h2>
          <form action="https://api.web3forms.com/submit" method="POST">
            <input
              type="hidden"
              name="access_key"
              value="d5783baa-71d4-4cf1-a3d1-b9ec1724380c"
            />
            <div class="form-group">
              <label for="name">Name*</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div class="form-group">
              <label for="email">Email*</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div class="form-group">
              <label for="message">Message*</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" class="submit-btn">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
  );
}

export default DirectMessage;