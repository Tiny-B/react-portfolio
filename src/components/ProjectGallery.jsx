import { div } from 'motion/react-client';
import TiltedCard from './card_components/TiltedCard';

function ProjectGallery() {
	const style = {
		gallery: {
			display: 'flex',
			justifyContent: 'center',
			flexWrap: 'wrap',
			width: '80%',
			height: 'fit-content',
			marginTop: '40px',
		},
		projectContainer: {
			border: '2px solid white',
			borderRadius: '20px',
			background: 'linear-gradient(to right, #ff1058ff, #ff8f4fff)',
		},
	};
	return (
		<>
			<h2 style={{ fontSize: '3rem' }}>Project Gallery</h2>
			<div style={style.gallery}>
				<div style={style.projectContainer}>
					<TiltedCard
						imageSrc='https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58'
						altText='Kendrick Lamar - GNX Album Cover'
						captionText='Kendrick Lamar - GNX'
						containerHeight='300px'
						containerWidth='300px'
						imageHeight='300px'
						imageWidth='300px'
						rotateAmplitude={12}
						scaleOnHover={1.2}
						showMobileWarning={false}
						showTooltip={false}
						displayOverlayContent={true}
						overlayContent={
							<p className='tilted-card-demo-text'>Kendrick Lamar - GNX</p>
						}
					/>
				</div>
			</div>
		</>
	);
}

export default ProjectGallery;
