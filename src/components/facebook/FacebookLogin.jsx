function FacebookLogin(props) {
  return (
    <>
      <div className="fbook-login-container">
        <form>
          <input type="text" placeholder="Email address or phone number" />
          <input type="password" placeholder="Password" />
          <button type="submit" className="submit">
            Log In
          </button>
          <p className="forgot-password">Forgotten password?</p>
          <hr />
          <button onClick={props.change} className="signup">
            Create new account
          </button>
        </form>
      </div>
    </>
  );
}

export default FacebookLogin;
