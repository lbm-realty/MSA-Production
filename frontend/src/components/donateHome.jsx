import { Heart } from 'lucide-react';

const DonateHome = () => {
  
  return (
    <section className="py-20 border-t bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <Heart className="mx-auto mb-6 text-red-700" size={48} />
          <h2 className="text-4xl font-bold mb-6">Make a Donation</h2>
        </div>
        
        <div style={{"background": "rgb(99, 10, 0, 0.95)"}} className="border rounded-xl p-8 mb-8">
          <p className="text-lg leading-relaxed italic">
            Prophet Muhammad (ﷺ), peace be upon him, said: "When a man dies, his deeds come to an end 
            except for three things: Sadaqah Jariyah (ceaseless charity); a knowledge which is beneficial, 
            or a virtuous descendant who prays for him (for the deceased)." 
            <span className="block mt-4 text-gray-400">(Muslim)</span>
          </p>
        </div>

        <a 
          style={{"background": "rgb(99, 10, 0, 0.95)"}}
          href="/donations"
          className="inline-block border hover:bg-red-700 text-white font-semibold py-4 px-10 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Donate Now
        </a>
      </div>
    </section>
  );
};

export default DonateHome;