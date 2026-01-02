
import { Merriweather, Pirata_One } from 'next/font/google'
const merriweather = Merriweather({ weight:'300', subsets: ['latin'] })
const pirata_one = Pirata_One({weight:'400', subsets: ['latin']})

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-amber-950 text-amber-50 p-6">
        <h1 className={`${pirata_one.className} text-5xl text-center`}>Renewal Barbershop</h1>
      </header>
      {/* Hero Section */}
      <section className="text-center py-10 px-4">
        <h2 className="italic text-4xl font-bold text-neutral-50 mb-12">
          -𝐁𝐞 𝐓𝐫𝐚𝐧𝐬𝐟𝐨𝐫𝐦𝐞𝐝 𝐁𝐲 𝐓𝐡𝐞 𝐑𝐞𝐧𝐞𝐰𝐢𝐧𝐠 𝐎𝐟 𝐘𝐨𝐮𝐫 𝐌𝐢𝐧𝐝-
        </h2>
        <button className="bg-amber-950 text-amber-50 px-8 py-5 text-lg hover:bg-amber-800">
          Book Appointment
        </button>
      </section>
       {/* Image Section */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <img 
            src="/renewal_image.png" 
            alt="Renewal Barbershop interior"
            className="w-full max-h-87.5 object-contain rounded-lg"
          />
        </div>
      </section>
      {/* Services & Pricing */}
      <section className="py-2 px-4 bg-slate-900">
        <h2 className="text-4xl font-bold text-center text-neutral-50 mb-12">
          Services & Pricing
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Haircut */}
          <div className="border-2 border-amber-900 p-6 hover:bg-slate-800 transition">
            <h3 className="text-2xl font-bold text-neutral-50">Haircut</h3>
            <p className="text-3xl text-neutral-50 mt-2">$35</p>
          </div>
          
          {/* Haircut + Shave */}
          <div className="border-2 border-amber-900 p-6 hover:bg-slate-800 transition">
            <h3 className="text-2xl font-bold text-neutral-50">Haircut + Shave</h3>
            <p className="text-3xl text-neutral-50 mt-2">$40</p>
          </div>
          
          {/* Shave */}
          <div className="border-2 border-amber-900 p-6 hover:bg-slate-800 transition">
            <h3 className="text-2xl font-bold text-neutral-50">Shave</h3>
            <p className="text-3xl text-neutral-50 mt-2">$25</p>
          </div>
          
          {/* Kids */}
          <div className="border-2 border-amber-900 p-6 hover:bg-slate-800 transition">
            <h3 className="text-2xl font-bold text-neutral-50">Kids</h3>
            <p className="text-3xl text-neutral-50 mt-2">$30</p>
          </div>
        </div>
      </section>
    
{/*Glossed and Co.*/}
      <section className="py-8 px-4 bg-slate-900">
        <h2 className={`${merriweather.className} text-5xl text-center font-bold text-neutral-50 mb-12`}>
          Glossed & Co.
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Regular Manicure */}
          <div className="border-2 border-amber-900 p-6 hover:bg-rose-300 transition">
            <h3 className="text-2xl font-bold text-neutral-50">Regular Manicure</h3>
            <p className="text-3xl text-neutral-50 mt-2">$20</p>
          </div>
          
          {/* Gel Manicure */}
          <div className="border-2 border-amber-900 p-6 hover:bg-rose-300 transition">
            <h3 className="text-2xl font-bold text-neutral-50">Gel Manicure</h3>
            <p className="text-3xl text-neutral-50 mt-2">$25</p>
          </div>
          
          {/* Gel X Tips */}
          <div className="border-2 border-amber-900 p-6 hover:bg-rose-300 transition">
            <h3 className="text-2xl font-bold text-neutral-50">Gel X Tips</h3>
            <p className="text-3xl text-neutral-50 mt-2">$60</p>
          </div>
        </div>
      </section>
      {/* Add more sections as we build */}
      {/* Location */}
      <section className="py-16 px-4 bg-slate-900">
        <h2 className="text-4xl font-bold text-center text-neutral-50 mb-12">
          Visit Us
        </h2>
        <div className="max-w-4xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.0862394477394!2d-74.00589!3d40.64925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25ae0c96b82e3%3A0x0!2s677%2040th%20St%2C%20Brooklyn%2C%20NY%2011232!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg"
          ></iframe>
          <div className="text-center mt-6">
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=677+40th+St+Brooklyn+NY+11232"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-950 text-amber-50 px-8 py-3 inline-block hover:bg-amber-800 transition rounded"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-4 px-4 bg-slate-900">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-neutral-100 mb-6">
            CUSTOMERS SAY...
          </h2>
          <p className="text-neutral-100 max-w-2xl mx-auto">
            We Love Our Customer Reviews! We are so thankful for the amazing and sincere feedback we have received from our customers!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Review 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-amber-700">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-amber-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-3">
                A
              </div>
              <div>
                <p className="font-bold text-slate-900">Alec Niedenthal</p>
                <p className="text-sm text-slate-500">December, 2025</p>
              </div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png" alt="Google" className="w-8 h-8 ml-auto" />
            </div>
            <div className="flex mb-3">
              <span className="text-yellow-400 text-xl">★★★★★</span>
            </div>
            <p className="text-slate-700">
            The best there is. I've lived in Brooklyn for more than a decade, paid out the nose for more barbers than I'd like to admit, but nobody's cut my hair this well, listening this closely to what I want, and being incredibly friendly the whole time to boot. I live in Park Slope now and still will only get my hair cut at Renewal
            </p>
          </div>
   
          {/* Review 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-amber-700">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-amber-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-3">
                J
              </div>
              <div>
                <p className="font-bold text-slate-900">Joseph Batz</p>
                <p className="text-sm text-slate-500">October, 2025</p>
              </div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png" alt="Google" className="w-8 h-8 ml-auto" />
            </div>
            <div className="flex mb-3">
              <span className="text-yellow-400 text-xl">★★★★★</span>
            </div>
            <p className="text-slate-700">
              This has to be the best place in New York City to get any haircut!! The service is amazing and the hospitality from the employees and the owner are amazing and fantastic I 100 percent definitely recommend this place to anyone!!
            </p>
          </div>
          {/* Review 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-amber-700">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-amber-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-3">
                R
              </div>
              <div>
                <p className="font-bold text-slate-900">Ruber Simbana</p>
                <p className="text-sm text-slate-500">2023</p>
              </div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png" alt="Google" className="w-8 h-8 ml-auto" />
            </div>
            <div className="flex mb-3">
              <span className="text-yellow-400 text-xl">★★★★★</span>
            </div>
            <p className="text-slate-700">
            Renewal Barbershop in Brooklyn offers an excellent grooming experience. The skilled barbers provide meticulous haircuts, attentive to your preferences and offering expert advice. The barbershop is clean and hygienic, ensuring your comfort and confidence. The friendly atmosphere adds to the overall enjoyment of your visit. For top-notch grooming services with a touch of excellence, choose Renewal Barbershop in Brooklyn.
            </p>
          </div>

        </div>
        
      </section>
      {/* Contact Us */}
      <section className="py-16 px-4 bg-slate-900">
        <h2 className="text-4xl font-bold text-center text-neutral-50 mb-12">
          Contact Us
        </h2>
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-amber-700 mb-2">Phone</h3>
            <a 
              href="tel:3322344668" 
              className="text-neutral-50 text-xl hover:text-amber-700 transition"
            >
              (332) 234-4668
            </a>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-amber-700 mb-2">Email</h3>
            <a 
              href="mailto:ejbarber02@gmail.com" 
              className="text-neutral-50 text-xl hover:text-amber-700 transition"
            >
              ejbarber02@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};