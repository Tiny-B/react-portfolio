function ContactLinks() {
	const style = {
		linksContainer: {
			background: 'linear-gradient(to right, #ff1058ff, #ff8f4fff)',
			border: '2px solid white',
			borderRadius: '20px',
			width: '90%',
			height: '50',
			paddingBottom: '20px',
		},
	};
	return (
		<div style={{ width: '40%', display: 'flex', flexDirection: 'column' }}>
			<div style={style.linksContainer}>
				<h3>Useful Links</h3>
				<p>
					LinkedIn:{' '}
					<a href='https://www.linkedin.com/in/eri-belladonna-57514b387/'>
						https://www.linkedin.com/in/eri-belladonna
					</a>
				</p>
				<p>
					Github:{' '}
					<a href='https://github.com/Tiny-B'>https://github.com/Tiny-B</a>
				</p>

				<p>
					Itch: <a href='https://warw0lf.itch.io/'>https://warw0lf.itch.io/</a>
				</p>
			</div>
			<div
				style={{
					...style.linksContainer,
					marginTop: '30px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<h3 style={{ marginBottom: '0' }}>Education</h3>
				<p
					style={{
						borderTop: '2px solid white',
						width: '90%',
						fontWeight: 'Bold',
						paddingTop: '10px',
					}}
				>
					Step8Up Academy - Web Development Bootcamp
				</p>
				<p style={{ margin: '0 20px' }}>
					Newcastle, UK | Sep 2025 - Dec 2025 - Built three full-stack
					applications in a Scrum team, using GitFlow and CI with GitHub
					Actions. - “List Your Day” - a task manager with client-side
					validation. - Deployed all front-ends to Netlify and back-ends to
					Render with zero-downtime during demo week.
				</p>
				<p
					style={{
						borderTop: '2px solid white',
						width: '90%',
						fontWeight: 'Bold',
						paddingTop: '10px',
					}}
				>
					Northcoders - Software Engineering Bootcamp
				</p>
				<p style={{ margin: '0 20px' }}>
					Newcastle, UK | Feb 2023 - May 2023 - Developed “NC News”, a SPA where
					users can read, comment, and upvote articles
					(React/Express/PostgreSQL). - Implemented unit & integration tests
					using Jest and React Testing Library. - Hosted frontend on Netlify;
					backend on Render.
				</p>
				<p
					style={{
						borderTop: '2px solid white',
						width: '90%',
						fontWeight: 'Bold',
						paddingTop: '10px',
					}}
				>
					Manchester College
				</p>
				<p>Maths: Level 2, English: Level 2, Business Studies: Level 2</p>
			</div>
		</div>
	);
}

export default ContactLinks;
