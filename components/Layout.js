import Navbar form './Navbar';
const Layout =(props) => (
	<div>
	<Navbar/>
	{props.children}
	</div>


	);

export default Layout;