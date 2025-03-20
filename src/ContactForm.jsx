
export default function ContactForm(...props ){
  return(
  <>
   <div class="container container-contactus" id="contact"   >
  <div className="row ">
    <div className="col-lg-6">
      <div className="contat-form-heading">
        <h2  className="text-center" > Get in contact</h2>
      </div>
    </div>
    <div class="col-lg-6   ">
      <form class="form-inline" action="https://formsubmit.co/info@sanguineagency.com" method="POST">
        <div class="form-group  mx-sm-3 mb-2">
          <input data-scroll data-scroll-speed="1" name="name" type="text" class="form-control feedback-input " placeholder="Name" required />
        </div>
        <div class="form-group    mx-sm-3 mb-2">
          <input data-scroll data-scroll-speed="1.5" name="email" type="email" class="form-control feedback-input " placeholder="Email" required />
        </div>
        <div class="form-group  mx-sm-3 mb-2">
          <textarea data-scroll data-scroll-speed="2" name="text" class="form-control feedback-input " placeholder="Comment" required></textarea>
        </div>
        <button data-scroll data-scroll-speed="2" type="submit" class="btn  mx-sm-3 btn-primary mb-2 " style={{width:'92%'}}>SUBMIT</button>
      </form>
    </div>
  </div>
</div>



 
  </>
)
 

}