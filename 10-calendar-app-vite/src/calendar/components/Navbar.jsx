import React from 'react'

export const Navbar = () => {
	return (
		<div className='navbar navbar-dark bg-dark mb-4 mb-4 px-4'>
			<span className='navbar-brand'>
				<i className='fas fa-calendar-alt me-2'></i>
				Gisbel Torres
			</span>

			<button className='btn btn-outline-light'>
				<i className='fas fa-sign-out-alt me-2'></i>
				<span>Logout</span>
			</button>
		</div>
	)
}
