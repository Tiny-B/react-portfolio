import './NavBar.css';

function NavBar() {
	const style = {
		navbar: {
			display: 'flex',
			justifyContent: 'space-between',
			width: '100%',
			height: 'fit-content',
			background: 'linear-gradient(to right, #ff1058ff, #ff8f4fff)',
			marginBottom: '20px',
			borderBottom: '2px solid #ffffffff',
		},
		navTitle: {
			fontSize: '1.5rem',
			marginLeft: '30px',
		},
		linkContainer: {
			listStyle: 'none',
			display: 'flex',
			placeItems: 'center',
			gap: '20px',
			marginRight: '40px',
		},
	};

	return (
		<nav
			className='navbar'
			style={style.navbar}
		>
			<p style={style.navTitle}>Eri Belladonna</p>
			<ul style={style.linkContainer}>
				<li>
					<a
						className='navlink'
						href='#'
					>
						Home
					</a>
				</li>
				<li>
					<a
						className='navlink'
						href='#'
					>
						About
					</a>
				</li>
				<li>
					<a
						className='navlink'
						href='#'
					>
						Projects
					</a>
				</li>
				<li>
					<a
						className='navlink'
						href='#'
					>
						Art
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
