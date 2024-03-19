import Link from "./Link";


const Navbar = () => {
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' }
      ];
      
  return (
    <div>
      <nav>
        {
            routes.map(route => <Link route = {route} />)
        }
      </nav>
    </div>
  )
}

export default Navbar
