import React, { Component } from 'react';
import AccordionDemo from '../widgets/featuare/accordiondemo';
import Header3 from '../layout/header/header2';
import Footer from '../layout/footer/footer';
import Layout from '../layout/Layout';
import axios from 'axios';
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
			.get('https://api.rebatecube.com/sellerFAQCategories')
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
				`https://api.rebatecube.com//sellerFAQsByCategory?category=${category}`,
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
					<section className='position-relative pb-2'>
						<h1 className='text-center ' style={{ marginTop: 30 }}>
							Frequently Asked Questions
						</h1>
						<p className='text-primary text-center'>For Seller</p>
					</section>
					<div className='container'>
						<div className='row'>
							<div className='col text-center'>
								{this.state.uniqueCategory.length > 0 ? (
									<div className='portfolio-filter'>
										{this.state.uniqueCategory.map((category, index) => (
											<button
												key={index}
												data-filter
												className={
													this.state.selectedCategory === category
														? 'portfolio-set mb-2 mb-sm-0 ml-0 is-checked'
														: 'portfolio-set mb-2 mb-sm-0 ml-0'
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
