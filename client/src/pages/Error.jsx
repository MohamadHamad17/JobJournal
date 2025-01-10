import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage"; // Ensure the wrapper is styled properly
import img from "../assets/images/not-found.svg"; // Ensure the image path is correct

const Error = () => {
  const error = useRouteError();

  return (
    <Wrapper>
      <div>
        {error?.status === 404 ? (
          <>
            <img src={img} alt="not found" />
            <h3>Ohh! Page Not Found</h3>
            <p>we can't seem to find the page you are looking for</p>
            <Link to="/">Back Home</Link>
          </>
        ) : (
          <>
            <h3>Something Went Wrong</h3>
            <p>Please try again later.</p>
            <Link to="/">Back Home</Link>
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default Error;
