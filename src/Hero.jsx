import heroImg from './assets/hero.svg'

const Hero = () => {
	return (
		<section className='hero'>
			<div className='hero-center'>
				<div className='hero-title'>
					<h1>Contentful CMS</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
						molestias necessitatibus, obcaecati, non corporis dolore voluptatum
						exercitationem temporibus numquam quasi fuga animi quaerat dolor ab
						recusandae porro. Beatae, ratione illo? Ab vitae quasi quia.
					</p>
				</div>
				<div className='img-container'>
					<img src={heroImg} alt='woman and the browser' className='img' />
				</div>
			</div>
		</section>
	)
}
export default Hero
