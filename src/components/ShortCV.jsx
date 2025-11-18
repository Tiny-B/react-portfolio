function ShortCV() {
	const style = {
		cvContainer: {
			display: 'flex',
			flexDirection: 'column',
			placeItems: 'center',
			paddingBottom: '60px',
			width: '50%',
			height: '80%',
			backgroundColor: '#1b1b1bff',
			borderRadius: '20px',
			background: 'linear-gradient(to right, #ff1058ff, #ff8f4fff)',
			border: 'solid 2px white',
		},
		skillsListContainer: {
			width: '55%',
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'center',
			gap: '10px',
			border: '2px solid white',
			padding: '20px',
			backgroundColor: '#181013',
			borderRadius: '20px',
		},
		skillList: {
			width: '150px',
			border: 'solid 2px white',
			listStyle: 'none',
			backgroundColor: '#ff1058ff',
		},
	};

	const skills = {
		languages: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'SQL', 'C#', 'Python'],
		frontEnd: ['React', 'Vite', 'Bootstrap', 'Tailwind CSS', 'Mapbox GL'],
		backEnd: [
			'Node.js',
			'Express',
			'Axios',
			'REST APIs',
			'JWT',
			'Firebase Auth/Firestore',
			'Sequelize',
		],
		databases: ['PostgreSQL', 'SQLite'],
		testing: ['Jest', 'React Testing Library'],
		tools: [
			'VS Code',
			'Git/GitHub',
			'GitHub Actions',
			'Docker (basic)',
			'Netlify',
			'Render',
			'Ollama',
		],
		gameEngines: ['Unity (2021 LTS) - listed for completeness'],
		methodologies: ['Agile (Scrum)', 'TDD', 'CI/CD', 'SDLC'],
		softSkills: [
			'Problem solving',
			'Communication',
			'Attention to detail',
			'Conflict management',
			'Teamwork',
			'Deadline management',
		],
	};

	const colorSkillBG = list => {
		let skillArray = [];
		for (let i = 0; i < list.length; i++) {
			let item = list[i];
			let index = list.findIndex(element => element === item);
			if (index % 2) {
				skillArray.push(
					<p
						style={{
							margin: '0',
							backgroundColor: '#ff1058ff',
							padding: '10px 0',
							borderBottom: '2px solid white',
						}}
					>
						{item}
					</p>
				);
			} else {
				skillArray.push(
					<p
						style={{
							margin: '0',
							backgroundColor: '#ff8f4fff',
							padding: '10px 0',
							borderBottom: '2px solid white',
						}}
					>
						{item}
					</p>
				);
			}
		}

		return skillArray;
	};

	return (
		<div style={style.cvContainer}>
			<h2>Quick Overview</h2>
			<div style={{ ...style.skillsListContainer }}>
				<div style={style.skillList}>
					<h3>Languages</h3>
					{colorSkillBG(skills.languages)}
				</div>
				<div style={style.skillList}>
					<h3>Front-End</h3>
					{colorSkillBG(skills.frontEnd)}
				</div>
				<div style={style.skillList}>
					<h3>Back-End</h3>
					{colorSkillBG(skills.backEnd)}
				</div>
				<div style={style.skillList}>
					<h3>Database</h3>
					{colorSkillBG(skills.databases)}
				</div>
				<div style={style.skillList}>
					<h3>Testing</h3>
					{colorSkillBG(skills.testing)}
				</div>
			</div>
		</div>
	);
}

export default ShortCV;
