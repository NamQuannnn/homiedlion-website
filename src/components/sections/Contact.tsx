export default function Contact() {
    return (
      <section className="bg-[#FAF8F5] py-20 lg:py-32 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Phần Tiêu đề Section */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h3 className="text-sm font-bold tracking-widest text-red-800 uppercase">
              CONTACT US
            </h3>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Let's Grow Together
            </h2>
            <p className="text-lg text-gray-600 font-light">
              Whether you're looking for premium cashew products, reliable logistics, or the latest market insights, our team is ready to help.
            </p>
          </div>
  
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Cột Trái: Thông tin liên hệ */}
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100 flex flex-col justify-center">
              <h4 className="text-2xl font-bold text-gray-900 mb-8">
                Get in Touch
              </h4>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-2xl">
                    🏢
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-lg">Company</p>
                    <p className="text-gray-600 font-light mt-1">Homie D'Lion Group</p>
                  </div>
                </div>
  
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-2xl">
                    📍
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-lg">Address</p>
                    <p className="text-gray-600 font-light mt-1">Ho Chi Minh City, Vietnam</p>
                  </div>
                </div>
  
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-2xl">
                    ✉️
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-lg">Email</p>
                    <p className="text-gray-600 font-light mt-1">contact@homiedlion.com</p>
                  </div>
                </div>
  
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-2xl">
                    🌐
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-lg">Website</p>
                    <p className="text-gray-600 font-light mt-1">homiedlion.com</p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Cột Phải: Form liên hệ */}
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-800 focus:border-red-800 outline-none transition-colors bg-gray-50 focus:bg-white" 
                      placeholder="Your name" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                      Company
                    </label>
                    <input 
                      type="text" 
                      id="company" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-800 focus:border-red-800 outline-none transition-colors bg-gray-50 focus:bg-white" 
                      placeholder="Your company" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-800 focus:border-red-800 outline-none transition-colors bg-gray-50 focus:bg-white" 
                    placeholder="you@company.com" 
                  />
                </div>
  
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-800 focus:border-red-800 outline-none transition-colors bg-gray-50 focus:bg-white resize-none" 
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
  
                <button 
                  type="button" 
                  className="w-full px-8 py-4 bg-red-800 text-white font-medium rounded-lg hover:bg-red-900 transition-colors shadow-sm text-lg mt-2"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
  
          </div>
        </div>
      </section>
    );
  }