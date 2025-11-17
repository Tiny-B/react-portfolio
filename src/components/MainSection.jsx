import ShortCV from './ShortCV';
import ContactLinks from './ContactLinks';

function MainSection() {
	return (
		<>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-evenly',
					alignItems: 'center',
					gap: '20px',
					width: '100%',
				}}
			>
				<ShortCV />
				<ContactLinks />
			</div>
		</>
	);
}

export default MainSection;
