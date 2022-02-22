import React, { Component } from 'react';

class ContactForm1 extends Component {
    render() {
        return (
            
            <div className="row justify-content-center text-center">


                <div className="col-12 col-lg-10">
                    <form id="contact-form" className="row" method="post" action="php/contact.php">
                        <div className="messages" />
                        <div className="form-group col-md-12 d-flex justify-content-center" >
                        <div className="radio" style={{marginRight:30}}>
                                <input type="radio" id="radio2" name="check2"  checked/>
                                <label htmlFor="check2" style={{marginLeft:10}}>I am Seller</label>
                            </div>
                            <div className="radio">
                                <input type="radio" id="radio2" name="check2" />
                                <label htmlFor="check2" style={{marginLeft:10}}>I am Buyer</label>
                            </div>
                        </div>
                        <div className="form-group col-md-12">
                            <input id="form_name" type="text" name="name" className="form-control" placeholder="Name" required="required" data-error="Name is required." />
                            <div className="help-block with-errors" />
                        </div>
                        {/* <div className="form-group col-md-6">
                            <input id="form_name1" type="text" name="name" className="form-control" placeholder="Last Name" required="required" data-error="Name is required." />
                            <div className="help-block with-errors" />
                        </div> */}
                        <div className="form-group col-md-12">
                            <input id="form_email" type="email" name="email" className="form-control" placeholder="Email" required="required" data-error="Valid email is required." />
                            <div className="help-block with-errors" />
                        </div>
                        <div className="form-group col-md-12">
                            <textarea id="form_message" name="message" className="form-control" placeholder="Message" rows={4} required="required" data-error="Please,leave us a message." defaultValue={""} />
                            <div className="help-block with-errors" />
                        </div>
                        <div className="col-md-12 text-center mt-4">
                            <button className="btn btn-primary"><span>Send Message</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}

export default ContactForm1;