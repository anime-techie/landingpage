import React, { Component } from 'react';
import axios from 'axios';
import { textTruncate } from '../helpers/helpers';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

class Product extends Component {
	constructor(props) {
		super(props);
		this.state = {
			campaigns: [],
			loader: true,
		};
	}
	componentDidMount() {
		window.scrollTo(0, 0);
		axios
			.get('https://api.rebatecube.com/allCampaigns')
			.then((response) => {
				this.setState({ campaigns: response.data.data });
				this.setState({ loader: false });
			})
			.catch((error) => {});
	}
	handleNavigate = () => {
		window.location.href = 'https://shopper.rebatecube.com/signin';
	};
	render() {
		return (
			<div className='container'>
				{this.state.loader ? (
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<Loader
							type='Puff'
							color='#00BFFF'
							height={100}
							width={100}
							// timeout={3000} //3 secs
						/>
					</div>
				) : (
					<div className='shop-content'>
						{this.state.campaigns.length === 0 ? (
							<>
								<h1 className='text-center' style={{ marginTop: 10 }}>
									There are No Rebate Offers Live Now
								</h1>
								<h1 className='text-center' style={{ marginTop: 5 }}>
									Please Check Again after sometime
								</h1>
							</>
						) : (
							<>
								<h3 className='text-center mb-5 mt-5'>
									Discover our latest deals...
								</h3>
								<div className='row mb-5'>
									{this.state.campaigns.map((campaign, i) => (
										<div
											key={i}
											className='col-12 col-sm-6 col-lg-4 cursor-poniter mt-3'
											onClick={this.handleNavigate}>
											<div className='ais-Hits-item h-100 d-flex flex-wrap'>
												<div
													className='col-12 px-0 d-flex justify-content-between'
													style={{ height: 35 }}
												>
													<div>
														{campaign?.productId?.productCategory.substr(0, 18)}
													</div>
													<div
														className=' bg-warning text-white'
														style={{
															height: 30,
															borderRadius: 3,
															width: 'auto',
															padding: 5,
														}}
													>
														{campaign?.dailyUnitsLeft} left today!
													</div>
												</div>
												<div className='product-img col-12 d-flex justify-content-center align-items-center p-4'>
													<img
														className='card-hit-image'
														src={campaign?.productId?.productImages[0]}
														alt=''
														style={{
															opacity:
																campaign?.dailyUnitsLeft === 0 ? 0.5 : '',
														}}
													/>
												</div>
												<h5 className='text-dark col-12 px-0'>
													{/* {campaign?.productId?.productTitle.substr(0,30)}<br/>
                                        {campaign?.productId?.productTitle.substr(30,30)} */}
													{textTruncate(campaign?.productId?.productTitle, 73)}
												</h5>
												<div className='col-12 px-0 d-flex justify-content-between align-items-center'>
													<div className='d-flex flex-wrap align-items-center mr-4'>
														<s className='text-danger fs-18 mr-2 bold-font'>
															₹{campaign?.originalPrice}
														</s>
														<span
															className='text-success'
															style={{ fontSize: '1.5rem' }}
														>
															₹{campaign?.priceAfterRebate}
														</span>
													</div>
													<span
														className='bg-success text-white pl-2 pr-2 pt-1 pb-1 fs-12'
														style={{ borderRadius: 3 }}
													>
														{campaign?.offPercentage | 0}% CASHBACK
													</span>
												</div>
											</div>
										</div>
									))}
								</div>
							</>
						)}
					</div>
				)}
			</div>
		);
	}
}
export default Product;
