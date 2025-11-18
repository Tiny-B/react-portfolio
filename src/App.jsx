import './App.css';
import MainSection from './components/MainSection';
import LiquidEther from './components/bg_components/LiquidEther';
import ProjectGallery from './components/ProjectGallery';

function App() {
	return (
		<>
			<MainSection />
			<ProjectGallery />
			<div
				style={{
					width: '100%',
					height: '1500px',
					position: 'absolute',
					zIndex: '-1',
				}}
			>
				<LiquidEther
					colors={['#5227FF', '#FF9FFC', '#B19EEF']}
					mouseForce={20}
					cursorSize={50}
					isViscous={true}
					viscous={30}
					iterationsViscous={32}
					iterationsPoisson={32}
					resolution={0.5}
					isBounce={false}
					autoDemo={true}
					autoSpeed={0.5}
					autoIntensity={2.2}
					takeoverDuration={0.25}
					autoResumeDelay={3000}
					autoRampDuration={0.6}
				/>
			</div>
		</>
	);
}

export default App;
