import { Link } from 'react-router-dom'

export default function NavBar() {
  return <nav>
    <Link to="/">Home</Link>
    <Link to="/players/add">Add Player</Link>
  </nav>
}