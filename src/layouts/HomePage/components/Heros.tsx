import { useOktaAuth } from "@okta/okta-react";
import { Link } from "react-router-dom";

export const Heros = () => {
  const { authState } = useOktaAuth();

  return (
    <div>
      <div className="d-none d-lg-block">
        <div className="row g-0 mt-5">
          <div className="col-sm-6 col-md-6">
            <div className="col-image-left"></div>
          </div>
          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <h1>What's on your reading list?</h1>
              <p className="lead">
                The library team would love to know Wha is on your reading list.
                Whether it is to learn a new skill or grow within one, we will
                be able to provide the top content for you!
              </p>
              {authState?.isAuthenticated ? (
                <Link
                  type="button"
                  className="dev-btn main-color btn-lg text-white"
                  to="search"
                >
                  Explore top books
                </Link>
              ) : (
                <Link
                  className="dev-btn main-color btn-lg text-white"
                  to="/login"
                >
                  Sign in
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div
            className="col-4 col-md-4 container d-flex 
                        justify-content-center align-items-center"
          >
            <div className="ml-2">
              <h1>Explore the ever-evolving world of our collection!</h1>
              <p className="lead">
                Try to check in daily as our collection is always changing! We
                work nonstop to provide the most accurate book selection
                possible for our BookBeam Read students! We are diligent about
                our book selection and our books are always going to be our top
                priority.
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className="col-image-right"></div>
          </div>
        </div>
      </div>

      {/* Mobile Heros */}
      <div className="d-lg-none">
        <div className="container">
          <div className="m-2">
            <div className="col-image-left"></div>
            <div className="mt-2">
              <h1>What's on your reading list?</h1>
              <p className="lead">
                The library team would love to know Wha is on your reading list.
                Whether it is to learn a new skill or grow within one, we will
                be able to provide the top content for you!
              </p>
              {authState?.isAuthenticated ? (
                <Link
                  type="button"
                  className="dev-btn main-color btn-lg text-white"
                  to="search"
                >
                  {" "}
                  Explore top books
                </Link>
              ) : (
                <Link
                  className="dev-btn main-color btn-lg text-white"
                  to="/login"
                >
                  Sign up
                </Link>
              )}
            </div>
          </div>
          <div className="m-2">
            <div className="col-image-right"></div>
            <div className="mt-2">
              <h1>Explore the ever-evolving world of our collection!</h1>
              <p className="lead">
                Try to check in daily as our collection is always changing! We
                work nonstop to provide the most accurate book selection
                possible for our BookBeam Read students! We are diligent about
                our book selection and our books are always going to be our top
                priority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
