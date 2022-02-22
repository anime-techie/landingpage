import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), { ssr: false });

// import ModalVideo from 'react-modal-video';

class Herosection6 extends Component {
	constructor() {
		super();
		this.state = {
			isOpen: false,
		};
		this.openModal = this.openModal.bind(this);
	}

	openModal() {
		this.setState({ isOpen: true });
	}
	render() {
		return (
			<div className='row align-items-center'>
				<ModalVideo
					channel='youtube'
					isOpen={this.state.isOpen}
					autoplay={true}
					videoId='b9dg56wQnYs'
					onClose={() => this.setState({ isOpen: false })}
				/>

				<div className='col-12 col-lg-5 col-xl-6 order-lg-2 mb-8 mb-lg-0'>
					{/* Image */}
					<img src={`/assets/images/2.png`} className='img-fluid' alt='...' />
				</div>
				<div className='col-12 col-lg-7 col-xl-6 order-lg-1'>
					{/* Heading */}
					{/* <h6 className="border rounded-pill px-3 py-2 text-muted d-inline-block"> <span className="badge badge-pill badge-primary mr-3">New</span> Say Hello to all Bootsland</h6> */}
					<h1 className='display-4 mt-3'>Built by sellers for sellers.</h1>
					{/* Text */}
					<p className='lead text-muted'>
						The fastest growing launch platform for e-commerce sellers.
					</p>
					{/* Buttons */}{' '}
					<a
						href='https://seller.rebatecube.com/signup'
						className='btn btn-primary shadow mr-1'
					>
						Sign Up
					</a>
					<a onClick={this.openModal} className='btn popup-vimeo link-title'>
						{' '}
						<i className='la la-play-circle mr-1 ic-3x align-middle' /> Play
						Video
					</a>
				</div>
			</div>
		);
	}
}

export default Herosection6;
