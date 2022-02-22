import React, { Component } from 'react';
import Counter4 from '../counter/counter4';

class Memberaboutus extends Component {
	render() {
		return (
			<>
				<section className='position-relative' style={{ paddingBottom: 0 }}>
					<h1 className='text-center' style={{ marginTop: 30 }}>
						About Us
					</h1>
				</section>

				<div className='page-content text-center'>
					<section className='pt-0'>
						<div className='container'>
							<div className='row'>
								<div className='col-lg-12 col-md-12'>
									<p>
										{' '}
										Rebatecube is a service based website with main office
										located in Mumbai, Maharashtra, India. Rebatecube was
										founded in 2021 by an e-commerce seller who previously built
										amongst the largest stores in the Toys & Games category.{' '}
									</p>
									<p>
										{' '}
										Rebatecube’s mission is to connect sellers and brand owners
										with shoppers looking to get great deals on exciting new
										products.
									</p>
								</div>
							</div>
						</div>
					</section>
				</div>
			</>

			// <div className="row align-items-center justify-content-between">
			//   <div className="col-12 col-lg-6 mb-6 mb-lg-0 order-lg-1">
			//     <div className="row align-items-center">
			//       <div className="col-6">
			//         <img src={`/assets/images/about/10.jpg`} className="img-fluid rounded shadow-lg" alt="..." />
			//       </div>
			//       <div className="col-6">
			//         <img src={`/assets/images/about/12.jpg`} className="img-fluid rounded shadow-lg mt-10" alt="..." />
			//       </div>
			//       <div className="col-10 ml-auto mr-auto mt-n11">
			//         <img src={`/assets/images/about/11.jpg`} className="img-fluid rounded shadow-lg" alt="..." />
			//       </div>
			//     </div>
			//   </div>
			//   <div className="col-12 col-lg-6 col-xl-5">
			//     <div> <span className="badge badge-primary-soft p-2">
			//         <i className="la la-exclamation ic-3x rotation" />
			//       </span>
			//       <h2 className="mt-3 font-w-5">Bootsland Small Team Crafting Beautiful Experience</h2>
			//       <p className="lead">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
			//       <p className="mb-0">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
			//     </div>
			//     <Counter4 />
			//   </div>
			// </div>
		);
	}
}

export default Memberaboutus;
