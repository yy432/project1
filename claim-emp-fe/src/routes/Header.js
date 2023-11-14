import {Link, Outlet} from 'react-router-dom'




function Header(){


  return (
    <>
    <h1>HR Connect</h1>
    <nav>
      <Link to="/view">View Employee Record</Link> | 
      <Link to="/employee">Upload Employee Detail</Link>
    </nav>
    <Outlet />
    </>
  )
}


export default Header;