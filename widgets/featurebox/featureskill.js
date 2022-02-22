import React, { Component } from 'react';

class Featureskill extends Component {
	render() {
		return (
			<div className='row align-items-center mb-10'>
				<div className='col-lg-4 col-12 text-lg-right'>
					<div className='d-flex align-items-center mb-8'>
						<div className='order-lg-1 ml-lg-3'>
							<div className='f-icon-shape-sm text-white bg-primary rounded-circle shadow-primary mr-3 mr-lg-0'>
								{' '}
								<i className='la la-wechat ic-2x' />
							</div>
						</div>
						<div>
							<p className='mb-0'>
								Bring external traffic to their Amazon / Flipkart listings
							</p>
						</div>
					</div>
					<div className='d-flex align-items-center mb-8'>
						<div className='order-lg-1 ml-lg-3'>
							<div className='f-icon-shape-sm text-white bg-primary rounded-circle shadow-primary mr-3 mr-lg-0'>
								{' '}
								<i className='la la-desktop ic-2x' />
							</div>
						</div>
						<div>
							<p className='mb-0'>
								Expose your products to thousands of Indian shoppers
							</p>
						</div>
					</div>
					<div className='d-flex align-items-center'>
						<div className='order-lg-1 ml-lg-3'>
							<div className='f-icon-shape-sm text-white bg-primary rounded-circle shadow-primary mr-3 mr-lg-0'>
								{' '}
								<i className='ti-check-box ic-2x' />
							</div>
						</div>
						<div>
							<p className='mb-0'>
								Create easy rebate promotions{' '}
							</p>
						</div>
					</div>
				</div>
				<div className='col-lg-4 col-12 my-5 my-lg-0'>
					<img src={`/assets/images/1.png`} alt='Image' className='img-fluid' />
				</div>
				<div className='col-lg-4 col-12'>
					<div className='d-flex align-items-center mb-8'>
						<div>
							<div className='f-icon-shape-sm text-white bg-primary rounded-circle shadow-primary mr-3'>
								{' '}
								<i className='la la-eye ic-2x' />
							</div>
						</div>
						<div>
							<p className='mb-0'>Create and distribute coupon codes</p>
						</div>
					</div>
					<div className='d-flex align-items-center mb-8'>
						<div>
							<div className='f-icon-shape-sm text-white bg-primary rounded-circle shadow-primary mr-3'>
								{' '}
								<i className='la la-film ic-2x' />
							</div>
						</div>
						<div>
							<p className='mb-0'>Verify the validity of Amazon orders </p>
						</div>
					</div>
					<div className='d-flex align-items-center'>
						<div>
							<div className='f-icon-shape-sm text-white bg-primary rounded-circle shadow-primary mr-3'>
								{' '}
								<i className='la la-headphones ic-2x' />
							</div>
						</div>
						<div>
							<p className='mb-0'>Track the analytics of sales</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Featureskill;
