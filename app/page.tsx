import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import DashboardPreview from '@/components/DashboardPreview';
import WhyUs from '@/components/WhyUs';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-primary">
      <Navbar />
      <Hero />
      <Features />
      <DashboardPreview />
      <WhyUs />
      
      {/* CTA Section */}
      <section className="py-24 bg-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-accent rounded-[3rem] p-12 md:p-20 text-center shadow-lg">
            <h2 className="text-4xl md:text-6xl font-prompt font-bold text-secondary mb-8 leading-tight">
              Ready to experience the <br />
              future of car care?
            </h2>
            <p className="text-secondary/80 text-xl mb-12 max-w-2xl mx-auto font-medium">
              Join thousands of satisfied drivers who have switched to the most transparent and technologically advanced garage in the country.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-secondary text-primary px-10 py-5 rounded-full text-lg font-bold hover:bg-secondary/90 transition-all shadow-md">
                Book Your First Service
              </button>
              <button className="w-full sm:w-auto bg-primary text-secondary px-10 py-5 rounded-full text-lg font-bold hover:bg-primary/90 transition-all shadow-sm">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}