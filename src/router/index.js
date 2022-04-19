import { Outlet, Link } from 'react-router-dom'

const Router = () => {
  return(
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/child">Child page</Link></li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}

export default Router;
