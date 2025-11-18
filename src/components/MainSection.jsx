import ShortCV from './ShortCV';
import ContactLinks from './ContactLinks';
import GlitchText from './text_components/GlitchText';

function MainSection() {
	return (
		<>
			<GlitchText
				speed={1}
				enableShadows={true}
				enableOnHover={false}
				className='custom-class'
			>
				Eri Belladonna
			</GlitchText>
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
