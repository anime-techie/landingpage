import React, { Component } from 'react';
import AccordionDemo from '../widgets/featuare/accordiondemo';
import Pageheading from '../widgets/Pageheading';
import Header3 from '../layout/header/header3';
import Layout from '../layout/Layout';
import axios from 'axios';
import dynamic from 'next/dynamic';

import {
	Accordion,
	AccordionItem,
	AccordionItemTitle,
	AccordionItemBody,
} from 'react-accessible-accordion';
class Faq extends Component {
	constructor(props) {
		super(props);
		this.state = {
			uniqueCategory: [],
			faqlist: [],
			selectedCategory: '',
		};
	}
	componentDidMount() {
		window.scrollTo(0, 0);
		axios
			.get('https://api.rebatecube.com/buyerFAQCategories')
			.then((response) => {
				this.setState({ uniqueCategory: response.data.data });
				this.handleCategory(response.data.data[0]);
			})
			.catch((error) => {});
	}

	handleCategory = (category) => {
		this.setState({ selectedCategory: category });
		axios
			.get(
				`https://api.rebatecube.com/buyerFAQsByCategory?category=${category}`,
			)
			.then((response) => {
				this.setState({ faqlist: response.data.data });
			})
			.catch((error) => {});
	};
	render() {
		return (
			<Layout>
				<div className='pb-10'>
					{/* <Header3 /> */}

					{/*hero section start*/}
					<section className='position-relative pb-2'>
						<h1 className='text-center ' style={{ marginTop: 30 }}>
							Frequently Asked Questions
						</h1>
						<p className='text-primary text-center'>For Buyer</p>
					</section>
					{/*hero section end*/}
					{/*body content start*/}
					<div className='container'>
						<div className='row'>
							<div className='col text-center'>
								{this.state.uniqueCategory.length > 0 ? (
									<div className='portfolio-filter row'>
										{/* <button data-filter className="portfolio-set all is-checked mb-3 mb-sm-0" value="all" onClick={(e) => { this.onCategortClick('all') }} >All Work</button> */}
										{this.state.uniqueCategory.map((category, index) => (
											<button
												key={index}
												data-filter
												className={
													this.state.selectedCategory === category
														? 'portfolio-set col-3 ml-0 mb-2 is-checked'
														: 'portfolio-set col-3 ml-0 mb-2'
												}
												value={category}
												onClick={() => this.handleCategory(category)}
											>
												{category}
											</button>
										))}
									</div>
								) : null}
							</div>
						</div>
						{this.state.faqlist.length > 0 ? (
							<>
								{this.state.faqlist.map((faq, index) => (
									<Accordion
										key={index}
										style={{ border: 'none', borderRadius: '0px' }}
									>
										<AccordionItem className='accordion__item mb-2'>
											<AccordionItemTitle className='border mb-0 bg-transparent card-header'>
												<h6 className='mb-0'>
													<a
														className='text-dark'
														data-toggle='collapse'
														data-parent='#accordion'
														href='#collapse1'
														aria-expanded='true'
													>
														{faq.question}
													</a>
												</h6>
											</AccordionItemTitle>
											<AccordionItemBody>
												<div className='text-muted'>{faq.answer}</div>
											</AccordionItemBody>
										</AccordionItem>
									</Accordion>
								))}
							</>
						) : (
							<h1 className='text-center'>NO FAQ FOUND</h1>
						)}
					</div>
				</div>
			</Layout>
		);
	}
}

export default Faq;
