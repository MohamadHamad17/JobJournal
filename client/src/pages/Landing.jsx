import Wrapper from "../assets/wrappers/LandingPage";
import main from '../assets/images/main-alternative.svg'
import { Logo } from '../components'
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo></Logo>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job<span> Tracking</span> App
          </h1>
          <p>
            JobJournal is your ultimate job application tracker, designed to
            help you stay organized and focused. With JobJournal, you can easily
            log and manage the jobs you've applied to, track application
            statuses, monitor your stats, and create a personalized profile.
            Stay on top of your job search, track your progress, and take charge
            of your career journey like never before!
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn login-link">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="main image" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing