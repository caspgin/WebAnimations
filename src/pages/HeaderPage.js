import { Link } from "react-router-dom"

export function HeaderSection() {

	return (
		<div className="nav">
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/contact">Contact</Link>
		</div>

	)

}
