import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
	ssr: false,
});
// import ModalVideo from 'react-modal-video';

class Herosection2 extends Component {
	constructor() {
		super();
		this.state = {
			isOpen: false,
		};
	}
	openModal = () => {
		this.setState({ isOpen: true });
	};
	render() {
		return (
			<>
				<ModalVideo
					channel='youtube'
					isOpen={this.state.isOpen}
					autoplay={true}
					videoId='2hlgs9reJAQ'
					onClose={() => this.setState({ isOpen: false })}
				/>

				<section
					className='custom-pb-0 bg-primary position-relative parallaxie'
					data-bg-img={`/assets/images/bg/03.png`}
				>
					<div className='container'>
						<div className='row align-items-center mt-8'>
							<div className='col-12 col-lg-5 col-xl-5 mb-8 mb-lg-0'>
								{/* Image */}
								<img
									src={`/assets/images/4.png`}
									className='img-fluid'
									alt='...'
								/>
							</div>
							<div className='col-12 col-lg-7 col-xl-6'>
								{/* Heading */}
								<h1 className='display-4 text-white'>
									Up to <span className='font-weight-bold'>100%</span> Exclusive
									CashBack Rebates from Trusted Retailers
								</h1>
								{/* Text */}
								<p className='lead text-light'>
									No more clipping coupons. Just claim, buy, and wait for your
									cashback to arrive.
								</p>
								{/* Buttons */}{' '}
								<a
									href='https://shopper.rebatecube.com'
									className='btn btn-outline-light mr-1'
								>
									Shop Now
								</a>
								<a
									onClick={this.openModal}
									className='btn text-white popup-vimeo pl-0'
								>
									{' '}
									<i className='la la-play-circle mr-1 ic-3x align-middle' />{' '}
									How it works
								</a>
							</div>
						</div>
						{/* / .row */}
					</div>
					{/* / .container */}
					{/* <div className="shape-1 bottom" style={{ height: '250px', overflow: 'hidden' }}>
              <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#fff' }} />
              </svg>
            </div> */}
				</section>
			</>
		);
	}
}

export default Herosection2;
