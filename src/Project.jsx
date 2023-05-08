import { useFetchProjects } from './fetchProjects'

const Project = () => {
	const { loading, project } = useFetchProjects()

	if (loading) {
		return (
			<section className='projects'>
				<h2>Loading...</h2>
			</section>
		)
	}


	// console.log(loading, projects)

  
	return (
		<section className='projects'>
			<div className='title'>
				<h2>projects</h2>
				<div className='title-underline'></div>
			</div>
			<div className='projects-center'>
				{project.map((project) => {
					const { id, img, url, title } = project
					return (
						<a
							href={url}
							key={id}
							target='_blank'
							rel='noreferrer'
							className='project'
						>
							<img src={img} alt={title} className='img' />
							<h5>{title}</h5>
						</a>
					)
				})}
			</div>
		</section>
	)
}
export default Project
