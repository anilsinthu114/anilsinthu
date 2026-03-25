import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaSpinner } from 'react-icons/fa';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        throw new Error('Please fill in all fields');
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      await new Promise(resolve => setTimeout(resolve, 800));

      const mailtoLink = `mailto:anilsinthu114@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoLink;
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      alert(error.message || 'Failed to prepare message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const InputWrapper = ({ label, id, children }) => (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-slate-300 ml-1 tracking-wide">{label}</label>
      <div className="relative group/input">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-indigo-500/20 rounded-xl blur-[2px] opacity-0 group-focus-within/input:opacity-100 transition-opacity duration-300" />
        {children}
      </div>
    </div>
  );

  const inputClasses = "w-full bg-slate-900/50 backdrop-blur-sm border border-white/10 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-emerald-500/50 transition-all duration-300 placeholder:text-slate-500 font-light relative z-10 shadow-[inset_0_2px_10px_rgba(0,0,0,0.3)]";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <InputWrapper label="Name" id="name">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="John Doe"
          />
        </InputWrapper>

        <InputWrapper label="Email" id="email">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="john@example.com"
          />
        </InputWrapper>
      </div>

      <InputWrapper label="Subject" id="subject">
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className={inputClasses}
          placeholder="System Architecture Consultation"
        />
      </InputWrapper>

      <InputWrapper label="Message" id="message">
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className={`${inputClasses} resize-none`}
          placeholder="Let's build something scalable..."
        />
      </InputWrapper>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-gradient-to-r from-emerald-500 to-indigo-500 hover:from-emerald-400 hover:to-indigo-400 text-white font-medium py-4 rounded-xl shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_8px_30px_rgba(16,185,129,0.5)] flex items-center justify-center space-x-3 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed border border-white/10 relative overflow-hidden group"
      >
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[200%] group-hover:animate-[shimmer_2s_infinite]" />
        
        {isSubmitting ? (
          <FaSpinner className="animate-spin text-lg relative z-10" />
        ) : (
          <div className="flex items-center space-x-2 relative z-10">
            <span className="text-base tracking-wide">Initialize Communication</span>
            <FaPaperPlane className="text-sm opacity-80" />
          </div>
        )}
      </motion.button>
    </form>
  );
}
