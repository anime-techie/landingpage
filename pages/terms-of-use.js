import React, { Component } from 'react';
import Layout from '../layout/Layout';
import { Link } from 'react-router-dom';
import Pageheading from '../widgets/Pageheading';
import Header3 from '../layout/header/header3';

class TermCondition extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<Layout>
				<div className='py-10'>
					{/* <Header3 /> */}

					<section className='position-relative' style={{ paddingBottom: 20 }}>
						<h1 className='text-center' style={{ marginTop: 30 }}>
							Terms and Conditions
						</h1>
					</section>
					<div className='page-content'>
						<div className='container'>
							<div className='row'>
								<div className='col-lg-12 col-md-12'>
									<h4 className='text-primary'>Terms of Use Agreement</h4>

									<p className='mb-3'>
										Rebatecube.com is a service by RebateCube Technologies.
										(“Rebate Cube”, “us”, “we” or “our”). We provide a service
										of rebates (“Rebate(s)”) to buyers on https://rebatecube.com
										(the “Site”). Sellers list their items for sale on the Site
										and provide the URL to where the item can be purchased.
										Rebates are claimed through the Site, and we send the
										purchase amount to the buyer as the Rebate.
									</p>
									<p className='mb-3'>
										These Terms of Use shall apply to your use of the Site and
										any and all services available on or through the Site (the
										“Services”). By accessing and/or using the Site, you are
										expressly agreeing to comply with and be bound by the
										following Terms of Use, RebateCube’s Privacy Policy located
										here https://rebatecube.com/terms and any other policies,
										rules or guidelines that may be applicable to Services on
										the Site (“Additional Terms”), as well as all applicable
										laws and regulations. “You,” or “your,” refers to you, a
										user of the Site. “Seller” refers to a user of the site that
										lists an item eligible for a Rebate. “Buyer” refers to user
										of the Site that purchases an item from a Seller and is
										eligible to submit a claim for a Rebate through the Site.
									</p>
									<p className='mb-3'>
										We may revise and update these Terms of Use at any time;
										please periodically review them, because your continued
										usage of the Site indicates your agreement with any such
										changes. Any changes we make will be effective immediately
										upon notice, which we may provide by any means including,
										without limitation, posting a revised version of these Terms
										of Use on the Site. You can determine when these Terms of
										Use were last revised by referring to the “Last Updated”
										legend at the bottom of these Terms of Use.
									</p>
									<p className='mb-3'>
										These Terms of Use will remain in full force and effect as
										long as you are a user of the Site and in the event of
										termination of your account, or any service or feature, you
										will still be bound by your obligations under these Terms of
										Use, including any indemnifications, warranties and
										limitations of liability.
									</p>
									<p className='mb-3'>
										By using or attempting to use the Site, you certify that you
										are a resident of the India and are at least 18 years of
										age. You also certify that you are not a person barred from
										receiving services under the laws of the India or other
										applicable jurisdiction. If you do not meet these
										requirements or, if for any reason, you do not agree with
										all of the terms and conditions contained in these Terms of
										Use, please discontinue using the Site immediately.
									</p>

									<h4 className='text-primary mt-5'>Rebates</h4>
									<p className='mb-3'>
										In order to qualify for a Rebate, you must: (i) be signed up
										for a RebateCube account. You can set up your account here:
										https://rebatecube.com/signup and (ii) complete a purchase
										using the URL provided from the Site (“Qualified Purchase”).
										If you complete your purchase through another URL not
										associated through the Site, you may not be eligible to
										receive the Rebate. Once your information is received, your
										Rebate will be reviewed and approved by the Seller in their
										sole discretion. RebateCube is not responsible for any
										unapproved Rebates.
										<br /> In addition, if you return the item subject to the
										Rebate, you forfeit your right to the Rebate and the amount
										will be deducted from your account.
									</p>
									<h4 className='text-primary mt-5'>
										{' '}
										Buyer Rebate Payment Requirements
									</h4>

									<p className='mb-3'>
										As a condition of payment of applicable Rebates, you must
										establish and maintain an account with the information
										necessary to process your payment: your first and last name,
										a valid email address at which you are able to receive
										email, a valid postal address at which you are able to
										receive mail, and a password to protect your account. You
										further agree to provide additional information we may
										reasonably request to verify your identity as a condition
										for receiving payment.
									</p>
									<p className='mb-3'>
										As a condition of payment of applicable Rebates, you agree
										not to resell any products you purchased in connection with
										the Site. If you resell any products we reserve the right to
										cancel the Rebates and your account. You further agree not
										to have more than one account per household. You agree not
										to claim more than one Rebate per unique product in
										connection with the Site. You further agree not to apply any
										additional promotional coupons or discounts when you claim
										Rebates in connection with the Site.
									</p>
									<p className='mb-3'>
										RebateCube and its designees shall have the right to remove
										any Buyer Content, as determined in their sole discretion.
									</p>
									<p className='mb-3'>
										We pay Rebates to Buyer in INR via, wallet credit which will
										be sent to the wallet provided in your account. You can also
										chose to be paid to your Verified bank account or via an
										Electronic Gift Card. Other payment options may be made
										available in the future. Rebates are paid to you as the
										payout date comes, weekly or monthly. We reserve the right
										to modify the payment schedule at any time. It is your
										responsibility to keep your address in your account up to
										date. We are not responsible for payments delivered to the
										wrong address.
									</p>
									<p>
										While RebateCube cannot identify every reason why a claim
										for a Rebate may be rejected by the Seller the following is
										a non-exhaustive list of the reasons why a claim for Rebate
										will be denied:
									</p>
									<div className='d-flex align-items-center mb-3'>
										<div className='badge-primary-soft rounded p-1'>
											<svg
												width={20}
												height={20}
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth={2}
												strokeLinecap='round'
												strokeLinejoin='round'
												className='feather feather-check'
											>
												<polyline points='20 6 9 17 4 12' />
											</svg>
										</div>
										<p className='mb-0 ml-3'>
											The rebate Order ID submitted was not legitimate
										</p>
									</div>
									<div className='d-flex align-items-center mb-3'>
										<div className='badge-primary-soft rounded p-1'>
											<svg
												width={20}
												height={20}
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth={2}
												strokeLinecap='round'
												strokeLinejoin='round'
												className='feather feather-check'
											>
												<polyline points='20 6 9 17 4 12' />
											</svg>
										</div>
										<p className='mb-0 ml-3'>
											The order was cancelled or refunded.
										</p>
									</div>
									<div className='d-flex align-items-center mb-3'>
										<div className='badge-primary-soft rounded p-1'>
											<svg
												width={20}
												height={20}
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth={2}
												strokeLinecap='round'
												strokeLinejoin='round'
												className='feather feather-check'
											>
												<polyline points='20 6 9 17 4 12' />
											</svg>
										</div>
										<p className='mb-0 ml-3'>The product was returned.</p>
									</div>
									<div className='d-flex align-items-center mb-3'>
										<div className='badge-primary-soft rounded p-1'>
											<svg
												width={20}
												height={20}
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth={2}
												strokeLinecap='round'
												strokeLinejoin='round'
												className='feather feather-check'
											>
												<polyline points='20 6 9 17 4 12' />
											</svg>
										</div>
										<p className='mb-0 ml-3'>
											Extra discount coupons or codes were used along with the
											RebateCube&apos;s offer.
										</p>
									</div>
									<div className='d-flex align-items-center mb-3'>
										<div className='badge-primary-soft rounded p-1'>
											<svg
												width={20}
												height={20}
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth={2}
												strokeLinecap='round'
												strokeLinejoin='round'
												className='feather feather-check'
											>
												<polyline points='20 6 9 17 4 12' />
											</svg>
										</div>
										<p className='mb-0 ml-3'>
											The item bought was not the one advertised on the site.
										</p>
									</div>
									<div className='d-flex align-items-center mb-3'>
										<div className='badge-primary-soft rounded p-1'>
											<svg
												width={20}
												height={20}
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth={2}
												strokeLinecap='round'
												strokeLinejoin='round'
												className='feather feather-check'
											>
												<polyline points='20 6 9 17 4 12' />
											</svg>
										</div>
										<p className='mb-0 ml-3'>
											The item has been bought multiple times from a same
											account on the marketplace, in connection with the site
											(this depends on the seller policies).
										</p>
									</div>
									<div className='d-flex align-items-center mb-3'>
										<div className='badge-primary-soft rounded p-1'>
											<svg
												width={20}
												height={20}
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth={2}
												strokeLinecap='round'
												strokeLinejoin='round'
												className='feather feather-check'
											>
												<polyline points='20 6 9 17 4 12' />
											</svg>
										</div>
										<p className='mb-0 ml-3'>
											The item bought was listed for resale on an online
											marketplace which is prohibited.
										</p>
									</div>
									<div className='d-flex align-items-center mb-3'>
										<div className='badge-primary-soft rounded p-1'>
											<svg
												width={20}
												height={20}
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth={2}
												strokeLinecap='round'
												strokeLinejoin='round'
												className='feather feather-check'
											>
												<polyline points='20 6 9 17 4 12' />
											</svg>
										</div>
										<p className='mb-0 ml-3'>
											There was an attempt to commit fraud or there is clear
											system abuse.
										</p>
									</div>
									<div className='d-flex align-items-center mb-3'>
										<div className='badge-primary-soft rounded p-1'>
											<svg
												width={20}
												height={20}
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth={2}
												strokeLinecap='round'
												strokeLinejoin='round'
												className='feather feather-check'
											>
												<polyline points='20 6 9 17 4 12' />
											</svg>
										</div>
										<p className='mb-0 ml-3'>
											Buyer is using more than one account per household or
											person.
										</p>
									</div>
									<div className='d-flex align-items-center mb-3'>
										<div className='badge-primary-soft rounded p-1'>
											<svg
												width={20}
												height={20}
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth={2}
												strokeLinecap='round'
												strokeLinejoin='round'
												className='feather feather-check'
											>
												<polyline points='20 6 9 17 4 12' />
											</svg>
										</div>
										<p className='mb-0 ml-3'>
											Usage or bots, automation software, multiple browsers,
											proxy IPs, etc.
										</p>
									</div>
									<div className='d-flex align-items-center mb-3'>
										<div className='badge-primary-soft rounded p-1'>
											<svg
												width={20}
												height={20}
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth={2}
												strokeLinecap='round'
												strokeLinejoin='round'
												className='feather feather-check'
											>
												<polyline points='20 6 9 17 4 12' />
											</svg>
										</div>
										<p className='mb-0 ml-3'>
											Any other activity we may deem suspicious
										</p>
									</div>

									<p className='mb-3'>
										Any other reasons may be added at the sole discretion of
										RebateCube. It is your responsibility to check your account
										regularly to ensure that your Rebates are accurately
										reflected and that your account balance is accurate. If you
										believe that a Rebate has not been correctly added to your
										account, you must contact RebateCube Customer Service at
										support@rebatecube.com within sixty (60) days of the
										transaction or else you will be deemed to have waived your
										claim to the subject Rebate. Should you disagree with any
										adjustments made to your account or payments made to you,
										your sole remedy is to cancel your account and cease using
										our Services. You will be solely responsible for any and all
										tax liability arising out of any payments you may receive
										from us.
									</p>

									<h4 className='text-primary mt-5'>Communications</h4>
									<p className='mb-3'>
										By signing up to for an account, you agree to receive
										communications that are account related to periodic
										shopping-related emails that highlight Rebates and special
										deals that are available to you. We may communicate with you
										by electronic communications. Your consent to receive
										electronic communications includes any notices or other
										information that we may be required by law to provide you in
										writing or otherwise. You agree to keep us apprised of your
										current email address should the same change subsequent to
										the date you create an account. You may opt out of receiving
										certain communications in accordance with our Privacy
										Policy.
									</p>

									<h4 className='text-primary mt-5'>
										Seller Store Policies; Rebate Approval; Seller Products
									</h4>
									<p className='mb-3'>
										A product purchased from any Seller through the Site is
										governed by and subject to the applicable Seller’s store
										policies, including applicable exchange and shipping
										policies. We encourage you to read and understand these
										policies before making a purchase. You agree that we are not
										agents of any Seller and that the Sellers operate
										independently and are not under our control with respect to
										the Rebates or otherwise. Accordingly, your participation in
										offers or promotions of, or correspondence with, any Seller
										is solely between you and that Seller. We do not assume any
										liability, obligation or responsibility for any part of such
										correspondence, offer or Rebate, including, without
										limitation, the withdrawal or modification of any such offer
										or Rebate.
									</p>
									<p className='mb-3'>
										All matters concerning the products and services posted from
										a Seller, including but not limited to purchase terms,
										payment terms, warranties, guarantees, maintenance and
										delivery, are solely between you and Seller. RebateCube
										makes no warranties or representations whatsoever with
										regard to any goods or services provided by Sellers. You
										will not consider RebateCube, nor will RebateCube be
										construed as, a party to such transactions, whether or not
										RebateCube may have received some form of revenue or other
										remuneration in connection with the transaction. You agree
										that RebateCube will not be liable for any costs or damages
										arising out of such transactions, either directly or
										indirectly. We are not responsible for examining or
										evaluating, and we do not warrant the offerings of, any of
										these businesses or individuals. RebateCube does not assume
										any responsibility or liability for the actions, product or
										content of all these and any other third parties. If you
										want to request a refund, you must request the refund
										directly from the Seller. To the extent that a purchase or a
										Rebate is cancelled or does not meet your expectations for
										any reason, you must contact the Seller and your sole and
										exclusive remedy with respect to the purchase is with the
										Seller and not with RebateCube. All communications or
										disputes regarding Rebates or refunds are between the Seller
										and you. RebateCube will not be responsible or liable in any
										way for Rebates, refunds, errors in issuing Rebates or
										refunds or lack of Rebates or refunds. In addition,
										RebateCube is not responsible for the truth or accuracy of
										any Seller Content (defined below) or the ability of any
										Seller complete a transaction. Notwithstanding the
										foregoing, you may report the misconduct of any Seller
										and/or third parties in connection with the Site or any
										Services to us, and we, in our sole discretion, may
										investigate the claim and take action.
									</p>

									<h4 className='text-primary mt-5'>
										How to Become a Seller; Seller Accounts; Seller Content
									</h4>
									<p className='mb-3'>
										To become a Seller and list your products and Rebates on the
										site, you must first sign up for a Seller account:
										https://rebatecube.com/signup There will be no refunds to
										sellers, as the money from Rebate is sent to a Buyer.
									</p>
									<p className='mb-3'>
										By submitting products for sale on the Site, Sellers will be
										allowed to submit information, product descriptions,
										content, graphics, artwork or other copyrighted works and
										materials related to the products listed for sale
										(collectively, “Seller Content”). By sending or transmitting
										Seller Content to RebateCube, or by posting such Seller
										Content to any area of the Site, seller hereby grants
										RebateCube and its designees a perpetual, worldwide,
										non-exclusive, unlimited, transferable, fully sublicensable
										(through multiple tiers), assignable, royalty-free, fully
										paid up, irrevocable right and license to use, reproduce,
										distribute (through multiple tiers), modify, adapt, combine
										with other works, create derivative works of, publicly
										perform, display, store, digitally perform, publish (on the
										site, on any other website(s), in print, radio, television
										or elsewhere), in any manner and context (including but not
										limited to usage in commercial, advertising or promotional
										materials), now known or in the future discovered, in
										RebateCube’s sole discretion, in any way, in any and all
										media now known or hereinafter discovered, without
										limitation and without any compensation or acknowledgment to
										seller or any third party. To the extent permitted by law,
										seller specifically waive any “moral rights” in and to the
										seller content. The foregoing grant includes without
										limitation, any copyrights and other intellectual property
										in and to the seller content. None of the seller content
										will be subject to any obligation, whether of
										confidentiality, attribution or otherwise, on our part and
										we will not be liable for any use or disclosure of any
										seller content. If you have any seller content that you
										would like to keep confidential and/or do not want others to
										use, do not post it to the site. RebateCube is not
										responsible for a party’s misuse or misappropriation of any
										seller content seller posts to the site.
									</p>
									<p className='mb-3'>
										Seller is solely responsible for Seller’s own Seller Content
										and the consequences of posting or publishing them. In
										connection with Seller Content, Seller affirms, represents
										and/or warrants that Seller owns, or have the necessary
										licenses, rights, consents, and permissions to the Seller
										Content and to grant the rights and licenses to RebateCube
										under all patent, trademark, trade secret, copyright or
										other proprietary or intellectual property rights in and to
										any and all Seller Content in the manner contemplated by the
										Site and these Terms of Use. Seller further understands that
										the internet has no geographical boundaries, and Seller
										therefore agrees to comply with all local rules regarding
										online conduct and acceptable Seller Content. Seller also
										agree to comply with all applicable laws regarding the
										transmission of technical data exported from the INDIA or
										the country in which you reside.
									</p>
									<p className='mb-3'>
										RebateCube reserves the right to delete from the Site any
										Seller Content and will cooperate fully with any law
										enforcement officials and/or agencies in any investigation,
										up to and including complete and immediate termination of
										your registration and/or accounts with RebateCube.
										RebateCube and its designees shall have the right to remove
										any Seller Content, as determined in their sole discretion.
										Seller agrees that Seller must evaluate, and bear all risks
										associated with, the use of any Seller Content, including
										any reliance on the accuracy, completeness, or usefulness of
										such Seller Content. In this regard, you acknowledge that
										you may not rely on any Seller Content created by RebateCube
										or submitted to RebateCube.
									</p>
									<p className='mb-3'>
										You shall not make any conditions for the buyers to be
										eligible to claim Rebates, e.g. ask them visit your site,
										leave a review, provide feedback.
									</p>
									<p className='mb-3'>
										You shall not pressure buyers negatively in order to approve
										their rebates or offer any kind of reward in exchange of
										reviews. You shall avoid providing any URLs to leave
										reviews.
									</p>
									<p className='mb-3'>
										You shall not provide obscure or confusing URLs, your URL
										must lead to the product detail page. You shall not
										manipulate the price of the product. The price listed on the
										Site must match the price on your marketplace.
									</p>
									<p className='mb-3'>
										RebateCube and its designees shall have the right to remove
										any Seller Content, as determined in their sole discretion.
									</p>
									<p className='mb-3'>
										RebateCube and its designees shall have no responsibility
										for the effectiveness of the Sellers rebate campaign.
									</p>
									<p className='mb-3'>
										RebateCube and its designees shall have no responsibility
										for the behaviour of the buyers.
									</p>
									<p className='mb-3'>
										RebateCube and its designees shall not refund any money to
										the seller that were sent as rebates to the buyers.
									</p>
									<p className='mb-3'>
										The Seller agrees not to file any disputes against
										RebateCube for the money that were paid to the Buyers in
										form of rebates.
									</p>
									<p className='mb-3'>
										RebateCube shall have no obligation to keep any money it
										receives from a Seller or any third party to pay a Rebate
										claim in a segregated account or to provide any interest on
										said money to Seller.
									</p>

									<h4 className='text-primary mt-5'>
										Termination or Suspension
									</h4>
									<p className='mb-3'>
										These Terms and Conditions are effective when you first
										visit the Site and will remain in effect until you or we
										terminate your account. We may terminate these Terms and
										Conditions and your use of or access to the Site at any
										time, for any reason or no reason. Any violation of these
										Terms and Conditions may result in cancellation of your
										Account and/or forfeiture of pending or prior Rebates. We
										may, in our sole discretion, at any time and without prior
										notice, discontinue, cancel, suspend, change or limit access
										to all or any part of the Site. You agree that RebateCube
										will not be liable to you or to any third party for any
										modification, suspension, or termination of these Terms and
										Conditions or your access to the Site. If you are
										dissatisfied with any aspect of the Site or the Services at
										any time, your sole and exclusive remedy is to cease using
										the Site and the Services and terminate your account. Upon
										any termination of your account, your right to use and
										access the Services and to receive Rebates, will terminate.
										If as a buyer your account is suspended for a violation of
										our Terms of Service (“TOS”), all your pending rebate
										payouts will be declined and reimbursed to the seller.
									</p>

									<h4 className='text-primary mt-5'>Disclaimers</h4>
									<p className='mb-3'>
										The site and any product or service obtained through the
										site is provided “as is” and “as available” without
										warranties of any kind, either express or implied. To the
										fullest extent permissible pursuant to applicable law,
										RebateCube disclaims all warranties, express or implied,
										with respect to the site and any product or service obtained
										through the site, including, without limitation, implied
										warranties of title, non-infringement, accuracy,
										merchantability, and fitness for a particular purpose, and
										any warranties that may arise from course of dealing, course
										of performance or usage of trade.
									</p>
									<p className='mb-3'>
										In most instances, the ability of RebateCube to provide
										services is dependent upon a telecommunications network or
										the internet, which may not be fully secured, as well as
										goods and services provided by sellers and various other
										vendors and third parties. RebateCube does not warrant that
										your use of the site will be uninterrupted, error-free or
										secure, that defects will be corrected, that the site or the
										server(s) on which the site is hosted is free of viruses or
										other harmful components, the site will meet your
										requirements, the information that may be obtained from the
										use of the site will be accurate or reliable, or the quality
										of any products, services, information, or other material
										obtained by you through the site will meet your
										expectations. You acknowledge that you are responsible for
										obtaining and maintaining all telephone, computer hardware
										and other equipment needed to access and use the site, and
										all charges related thereto. You assume all responsibility
										and risk for your use of the site and your reliance thereon.
										RebateCube does not warrant, endorse, guarantee, or assume
										responsibility for any product or service advertised or
										offered by a seller or any other third party through the
										site or any hyperlinked site, or featured in any banner or
										other advertising, and RebateCube will not be a party to or
										in any way monitor any transaction between you and a seller
										or any other third-party providers of products or services.
									</p>
									<p className='mb-3'>
										Your use of the site and any services provided through the
										site are entirely at your own risk. RebateCube is not
										responsible for any unfavorable consequences in the
										marketplace account. You will be solely responsible for any
										damage to your computer system or loss of data that results
										from the download of any such material. No advice or
										information, whether oral or written, obtained by you from
										RebateCube and/or its affiliated parties or on or through
										the site shall create any warranty not expressly stated in
										these terms of use.
									</p>

									<h4 className='text-primary mt-5'>Limitation of Liability</h4>
									<p className='mb-3'>
										To the greatest extent permitted by law, you expressly
										acknowledge and agree that neither RebateCube nor any of its
										affiliates, shareholders, licensors, suppliers, or
										advertisers, nor its or their directors, officers,
										employees, consultants, agents or other representatives, are
										or will be responsible or liable to you or to any third
										party for any indirect, direct, incidental, consequential,
										special, exemplary, punitive or other damages (including,
										without limitation, damages for loss of business, loss of
										data or lost profits), under any contract, negligence,
										strict liability or other theory arising out of or relating
										in any way to the site and/or products contained on the
										site, any linked site or any product or service purchased
										through the site. Without limiting the foregoing, to the
										greatest extent permitted by law, you expressly acknowledge
										and agree that RebateCube shall have no liability or
										responsibility whatsoever for:-
									</p>
									<p className='mb-3'>
										(I) The use or the inability to use the site, products,
										services or any linked site
									</p>
									<p className='mb-3'>
										(II) Personal injury or property damage, of any nature
										whatsoever, whether arising in contract or in tort whether
										or not arising from the negligence of RebateCube
									</p>
									<p className='mb-3'>
										(III) Unauthorized access to or alteration of your
										transmissions or data and/or any and all personal
										information and/or financial information stored therein
									</p>
									<p className='mb-3'>
										(IV) Statements or conduct of any third party on the site or
										any linked site
									</p>
									<p className='mb-3'>
										(V) Any interruption or cessation of transmission to or from
										our site
									</p>
									<p className='mb-3'>
										(VI) Any bugs, viruses, worms, trojan horses, defects, date
										bombs, time bombs or other items of a destructive nature
										which may be transmitted to or through our site by any third
										party
									</p>
									<p className='mb-3'>
										{' '}
										(VII) The quality, safety or legality of products advertised
										on the site; and/or{' '}
									</p>
									<p className='mb-3'>
										(VIII) Any other matter relating to the site, or RebateCube
										services. The maximum total aggregate liability of
										RebateCube, its affiliates, shareholders, licensors,
										suppliers, advertisers and sponsors, and its or their
										directors, officers, employees, consultants, agents and
										other representatives, and your sole and exclusive remedy,
										for all damages, losses suffered by you and causes of
										action, whether in contract, tort (including, without
										limitation, negligence) or otherwise, shall be the greater
										of the total amount of monies received by RebateCube from
										you or 1000 INR.
									</p>
									<p className='mb-3'>
										Certain state laws do not allow limitations on implied
										warranties or the exclusion or limitation of certain
										damages. If these laws apply to you, some or all of the
										above disclaimers, exclusions, or limitations may not apply
										to you, and you might have additional rights.
									</p>
									<p className='mb-3'>
										Under no circumstance will RebateCube have any liability
										whatsoever for any monies it has in its possession for
										payment of rebate claims that is stolen by any third party.
										The risk of loss of all monies in RebateCube’s possession
										for payment of rebate claims is soley with the seller(s) or
										third party(ies) who provided the subject monies that have
										been stolen.
									</p>

									<h4 className='text-primary mt-5'>Indemnification</h4>
									<p className='mb-3'>
										You agree to indemnify, defend and hold RebateCube and its
										affiliates, licensors, suppliers, advertisers and sponsors,
										and their respective directors, officers, employees,
										consultants, agents and other representatives, harmless from
										and against any and all claims, damages, losses, costs
										(including reasonable attorneys’ fees) and other expenses
										that arise directly or indirectly out of or from (a) your
										breach of these Terms of Use; (b) any allegation that any
										Seller Content or other materials you submit to us or
										transmit to the Site infringe or otherwise violate the
										copyright, trademark, trade secret, license or other
										intellectual property or other rights of any third party;
										(c) your activities in connection with the Site; and/or (d)
										termination of your access to the Site.
									</p>

									<h4 className='text-primary mt-5'>Ownership</h4>
									<p className='mb-3'>
										All right, title, and interest in the Site and the Services
										belong solely to RebateCube or its licensors. Additionally,
										RebateCube shall maintain all right, title, and interest in
										“RebateCube” and any other marks, service marks, trademarks,
										or logos of RebateCube (collectively, the “Marks”) that are
										registered in the INDIA and other countries. The Marks owned
										by RebateCube, whether registered or unregistered, may not
										be used in connection with any product or service that is
										not offered by RebateCube, in any manner that is likely to
										cause confusion with customers, or in any manner that
										disparages RebateCube. Nothing contained on the Site should
										be construed as granting, by implication, estoppel or
										otherwise, any license or right to use any Mark without the
										express written permission of RebateCube, RebateCube’s
										licensors or suppliers, or the third-party owner of any such
										Mark. Misuse of any Marks is prohibited, and RebateCube will
										aggressively enforce its intellectual property rights in
										such Marks, including via civil and criminal proceedings.
										You shall not mention or use RebateCube in any ad text,
										extensions or banner ads without the express written consent
										of RebateCube.
									</p>

									<h4 className='text-primary mt-5'>
										Governing Law; Dispute Resolution
									</h4>
									<p className='mb-3'>
										The validity, construction, and interpretation of this
										Agreement, and the rights and duties of the parties hereto,
										will be governed by and construed in accordance with the
										laws of the Indian constitution, without regard to conflicts
										of law provisions contained there. You agree that any
										dispute, claim or controversy arising out of or in
										connection with RebateCube’s business, the Services or this
										Agreement or relating in any way to the Site shall be
										determined by binding arbitration.
									</p>

									<h4 className='text-primary mt-5'>Miscellaneous</h4>
									<p className='mb-3'>
										You may not assign your rights and obligations under this
										Agreement, in whole or in part, without our prior written
										consent, and any such assignment without such consent will
										be null and void. Headings under this Agreement intended
										only for convenience and shall not affect the interpretation
										of this Agreement. Any waiver or failure to enforce any
										provision of this Agreement on one occasion will not be
										deemed a waiver of any other provision or of such provision
										on any other occasion. If any provision of this Agreement is
										held to be invalid, such invalidity shall not affect the
										remaining provisions. This Agreement represents the entire
										agreement of the parties with respect to the subject matter
										hereof, and supersedes all prior or contemporaneous
										agreements or representations, written or oral (including
										without limitation, earlier versions of this Agreement that
										may have been accepted by you).
									</p>

									<h4 className='text-primary mt-5'>
										Cancellation & Refund Policy
									</h4>
									<p className='mb-3'>
										Thanks for subscribing to our services at
										https://rebatecube.com. As a RebateCube user you are
										eligible to earn cashback or a cash reward whenever you make
										any transaction through the website. The earned cashback can
										be transferred to respective bank accounts, RebateCube
										wallet, Please note that the cashbacks are transferred to
										user’s account only after the verification by the particular
										brand/affiliated partner. The transactions have to be
										genuine and successful, failing to which the concede person
										would not be eligible for the cashback. Once all the above
										requirements are met, RebateCube would receive an amount of
										Rebate from sellers and commission from the respective
										retailer/affiliated partner which would then be transferred
										to the user in the form of cashback.
									</p>

									<h4 className='text-primary mt-5'>Pricing</h4>
									<p className='mb-3'>
										We at RebateCube have a very straight forward pricing.
										<br />
										<b>For Buyers</b>
										<br />
										There is no fees / Subscription fees charged to buyers on
										our portal.
										<br />
										<b>For Sellers</b>
										<br />
										Sellers are charged flat Rs 99 per redemption for the
										following services – Create URL Campaigns, Super URL
										Campaigns, Track & Approve Orders, View insights for
										Campaigns Chat with Buyers to Resolve Disputes.
										<br />
										Sellers are charged flat Rs 124 per redemption for the
										following services Create URL Campaigns, Super URL
										Campaigns, Create SFB Campaigns Track & Approve Orders, View
										insights for Campaigns Chat with Buyers to Resolve Disputes.
										<br />
									</p>
									<p>RebateCube Technologies</p>
									<p>Last update: 20 November, 2021</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}

export default TermCondition;
