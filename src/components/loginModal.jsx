function LoginModal() {

    return(
<div
  className="modal fade"
  id="loginModal"
  tabIndex={-1}
  aria-labelledby="loginModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog">
    <div
      className="modal-content bg-dark text-white"
      style={{ borderRadius: "1rem" }}
    >
      <div className="modal-header">
        <h5 className="modal-title" id="loginModalLabel">
          Login
        </h5>
        <button
          type="button"
          className="btn-close text-white"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <div className="modal-body gradient-custom">
        <div className="card-body p-5 text-center">
          <div className="mb-md-5 mt-md-4 pb-5">
            <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
            <p className="text-white-50 mb-5">
              Bitte gib deine E-Mail und Passwort ein!
            </p>
            <form method="POST">
              <div className="form-outline form-white mb-4">
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="form-control form-control-lg"
                  required=""
                />
                <label className="form-label" htmlFor="username">
                  E-Mail
                </label>
              </div>
              <div className="form-outline form-white mb-4">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control form-control-lg"
                  required=""
                />
                <label className="form-label" htmlFor="password">
                  Passwort
                </label>
              </div>
              <button
                className="btn btn-outline-light btn-lg px-5"
                type="submit"
              >
                Login
              </button>
            </form>
            <p className="small mb-5 pb-lg-2">
              <a className="text-white-50" href="#!">
                Passwort vergessen?
              </a>
            </p>
            <div className="d-flex justify-content-center text-center mt-4 pt-1">
              <a href="#!" className="text-white">
                <i className="fab fa-facebook-f fa-lg" />
              </a>
              <a href="#!" className="text-white">
                <i className="fab fa-twitter fa-lg mx-4 px-2" />
              </a>
              <a href="#!" className="text-white">
                <i className="fab fa-google fa-lg" />
              </a>
            </div>
          </div>
          <div>
            <p className="mb-0">
              Noch kein Konto?{" "}
              <a
                href="#"
                className="text-white-50 fw-bold"
                data-bs-toggle="modal"
                data-bs-target="#registerModal"
                data-bs-dismiss="modal"
              >
                Konto erstellen
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



    )
}