import SubLayout from '../common/SubLayout'

function Members() {
  const subtitle = {
    title: 'Get Trello for free',
    p: "By signing up, you confirm that you've read and accepted our Terms of Service and Privacy Policy.",
  }

  return (
    <SubLayout name="members" sub={subtitle}>
      <div className="sub-top"></div>
      <form>
        <fieldset className="required-box">
          <legend>Membership registration required</legend>
          <div className="input-list">
            <div className="input-item">
              <label htmlFor="userID">ID</label>
              <input
                type="text"
                id="userID"
                placeholder="Please enter your ID"
              />
            </div>

            <div className="input-item">
              <label htmlFor="password">password</label>
              <input
                type="password"
                id="password"
                placeholder="6+ characters"
              />
            </div>

            <div className="input-item">
              <label htmlFor="password2">Confirm Password</label>
              <input
                type="password"
                id="password2"
                placeholder="Please confirm your password"
              />
            </div>

            <div className="input-item">
              <label htmlFor="userEmail">email</label>
              <input
                type="mail"
                id="userEmail"
                placeholder="Please enter your email"
              />
            </div>
          </div>
        </fieldset>

        <fieldset className="option-box">
          <legend>
            Membership <br />
            options
          </legend>
          <div className="input-list">
            <div className="input-item">
              <label htmlFor="funnel">funnel</label>
              <select name="funnel" id="funnel">
                <option value="">choice</option>
                <option value="">blog</option>
                <option value="">insta</option>
                <option value="">facebook</option>
                <option value="">youtube</option>
              </select>
            </div>

            <div className="input-item ">
              <span className="label">reception</span>

              <div className="checkbox-group">
                <div className="checkbox">
                  <input type="checkbox" id="agree-email" name="reception" />
                  <label htmlFor="agree-email">I agree to receive emails</label>
                </div>

                <div className="checkbox">
                  <input type="checkbox" id="agree-sms" name="reception" />
                  <label htmlFor="agree-sms">I agree to receive SMS/MMS</label>
                </div>
              </div>
            </div>
          </div>
        </fieldset>

        <button type="submit">Create account</button>
      </form>
    </SubLayout>
  )
}

export default Members
