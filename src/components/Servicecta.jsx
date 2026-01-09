

const Servicecta = () => {
  return (
 <>

    {/* CTA Section */}
       <section className="py-20 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
         <div className="max-w-3xl mx-auto px-6">
           <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
             Ready to Transform Your Digital Presence?
           </h2>
           <p className="text-gray-100 mb-10 text-lg">
             Partner with Bheema Infotech to build dynamic, scalable, and future-ready
             digital solutions for your business.
           </p>
           <Link
             to="/contact"
             className="inline-block bg-yellow-400 text-gray-900 px-12 py-4 rounded-xl font-bold hover:bg-yellow-300 transition"
           >
             Contact Us Today
           </Link>
         </div>
       </section>
 </>
  );
};

export default Servicecta;