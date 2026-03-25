import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-200 relative overflow-hidden">
      
      {/* 
        Strong, Attractive Background Setup 
        We use deep, massive radial gradients fixed to the viewport corners to create a profound "space/glow" effect
      */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Top left purple/blue glow */}
        <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-indigo-900/20 blur-[120px] mix-blend-screen" />
        
        {/* Bottom right emerald glow */}
        <div className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-emerald-900/10 blur-[120px] mix-blend-screen" />
        

      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          {children}
        </main>
        <Footer />
      </div>
      
    </div>
  );
}
