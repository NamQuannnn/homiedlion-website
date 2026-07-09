import { theme } from '@/lib/theme';

export default function Contact() {
  return (
    <section className={`bg-[#FAF8F5] ${theme.layout.section}`}>
      <div className={theme.layout.container}>
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className={theme.typography.sectionSubtitle}>
            CONTACT US
          </span>
          <h2 className={theme.typography.h2}>
            Let's Grow Together
          </h2>
          <p className={theme.typography.bodyText}>
            Whether you're looking for premium cashew products, reliable logistics, or the latest market insights, our team is ready to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          <div className={theme.cards.base}>
            <h4 className="text-2xl font-bold text-[#2C2C2C] mb-8">
              Get in Touch
            </h4>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className={theme.cards.iconWrapper}>
                  🏢
                </div>
                <div>
                  <p className="font-medium text-[#2C2C2C] text-lg">Company</p>
                  <p className={`${theme.typography.bodyText} mt-1`}>Homie D'Lion Group</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className={theme.cards.iconWrapper}>
                  📍
                </div>
                <div>
                  <p className="font-medium text-[#2C2C2C] text-lg">Address</p>
                  <p className={`${theme.typography.bodyText} mt-1`}>Ho Chi Minh City, Vietnam</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className={theme.cards.iconWrapper}>
                  ✉️
                </div>
                <div>
                  <p className="font-medium text-[#2C2C2C] text-lg">Email</p>
                  <p className={`${theme.typography.bodyText} mt-1`}>contact@homiedlion.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className={theme.cards.iconWrapper}>
                  🌐
                </div>
                <div>
                  <p className="font-medium text-[#2C2C2C] text-lg">Website</p>
                  <p className={`${theme.typography.bodyText} mt-1`}>homiedlion.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className={theme.cards.base}>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-[#2C2C2C]">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#7A5A2B] focus:border-[#7A5A2B] outline-none transition-colors bg-[#FAF8F5] focus:bg-white text-[#2C2C2C]" 
                    placeholder="Your name" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="block text-sm font-medium text-[#2C2C2C]">
                    Company
                  </label>
                  <input 
                    type="text" 
                    id="company" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#7A5A2B] focus:border-[#7A5A2B] outline-none transition-colors bg-[#FAF8F5] focus:bg-white text-[#2C2C2C]" 
                    placeholder="Your company" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-[#2C2C2C]">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#7A5A2B] focus:border-[#7A5A2B] outline-none transition-colors bg-[#FAF8F5] focus:bg-white text-[#2C2C2C]" 
                  placeholder="you@company.com" 
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-[#2C2C2C]">
                  Message
                </label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#7A5A2B] focus:border-[#7A5A2B] outline-none transition-colors bg-[#FAF8F5] focus:bg-white resize-none text-[#2C2C2C]" 
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button 
                type="button" 
                className={`${theme.buttons.primary} mt-2 w-full`}
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