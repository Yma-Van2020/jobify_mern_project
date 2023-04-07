import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage'

const Error = () => {
  return (
    <Wrapper>
      <div className="flexbox">
        <img src={img} al="not found" />
        <h3>Ohh! Page Not Found</h3>
        <p>We can't seem to find the page you are looking for</p>
        <Link to="/">back home</Link>
      </div>
    </Wrapper>
  )
}

export default Error