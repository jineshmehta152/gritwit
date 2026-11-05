"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Mail, Phone, MapPin, Clock, 
  Facebook, Instagram, Youtube, 
  MessageCircle, Send, Target
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { WHATSAPP_PHONE_NUMBER, DISPLAY_PHONE_NUMBER, getWhatsAppUrl } from "@/lib/whatsapp"

export default function ContactSection() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [inquiryType, setInquiryType] = useState("Adult Chess Coaching")
  const [message, setMessage] = useState("")

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `Hi Chessmatic! Here are my intake details:
• Name: ${fullName || "Not specified"}
• Email: ${email || "Not specified"}
• Phone: ${phone || "Not specified"}
• Inquiry Type: ${inquiryType}
• Message: ${message || "I would like to learn more about your programs."}`
    
    window.open(getWhatsAppUrl(msg), "_blank")
  }

  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* 1. HEADER */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-[#f1f3f4] rounded-full p-1 border border-gray-200 mb-6"
          >
            <span className="bg-white px-4 md:px-8 py-2 rounded-full text-[#1a365d] text-[8px] md:text-[10px] font-[1000] tracking-[0.2em] md:tracking-[0.3em] uppercase shadow-sm whitespace-nowrap">
              Operational Support
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-[1000] text-[#1a365d] tracking-tighter leading-tight italic uppercase">
            Get in <span style={{ color: cyan }}>Touch.</span>
          </h2>
        </div>

        {/* 2. GRID INTERFACE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 mb-8">
          
          {/* LEFT: CONTACT DETAILS */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative rounded-[32px] md:rounded-[45px] bg-[#1a365d] p-8 md:p-14 overflow-hidden shadow-2xl flex flex-col justify-between"
          >
            {/* TECHNICAL DOT GRID */}
            <div className="absolute inset-0 opacity-[0.12] pointer-events-none" 
                 style={{ backgroundImage: `radial-gradient(white 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />
            
            <div className="relative z-10 space-y-10 md:space-y-12">
              <div>
                <h3 className="text-white text-xl md:text-2xl font-[1000] tracking-tight mb-2 italic">Singapore HQ</h3>
                <p className="text-slate-400 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em]">Strategic Laboratory</p>
              </div>

              <div className="space-y-6 md:space-y-8">
                {/* Email */}
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 shrink-0 shadow-lg">
                    <Mail size={16} className="md:w-[18px]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-[8px] md:text-[9px] font-black uppercase tracking-widest mb-1">Email Protocol</p>
                    <a href="mailto:info@chessmatic.com" className="text-white hover:text-sky-400 transition-colors font-bold text-sm break-all md:break-normal">
                      info@chessmatic.com
                    </a>
                  </div>
                </div>

                {/* Phone / WhatsApp */}
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 shrink-0 shadow-lg">
                    <Phone size={16} className="md:w-[18px]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-[8px] md:text-[9px] font-black uppercase tracking-widest mb-1">Direct Line / WhatsApp</p>
                    <a 
                      href={getWhatsAppUrl("Hi Chessmatic! I'd like to get in touch with you.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-sky-400 transition-colors font-bold text-sm flex items-center gap-2"
                    >
                      {DISPLAY_PHONE_NUMBER}
                      <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#25D366] text-white font-black">WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Map */}
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 shrink-0 shadow-lg">
                    <MapPin size={16} className="md:w-[18px]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-[8px] md:text-[9px] font-black uppercase tracking-widest mb-1">Location</p>
                    <p className="text-white font-bold text-sm">Woodlands Premium Studio,<br/> Singapore</p>
                  </div>
                </div>

                {/* Clock */}
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 shrink-0 shadow-lg">
                    <Clock size={16} className="md:w-[18px]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-[8px] md:text-[9px] font-black uppercase tracking-widest mb-1">Operating Hours</p>
                    <p className="text-white font-bold text-xs md:text-sm">Mon - Fri: 10:00 - 20:00<br/>Sat - Sun: 09:00 - 21:00</p>
                  </div>
                </div>
              </div>

              {/* SOCIAL CHANNELS */}
              <div className="pt-8 border-t border-white/5 flex flex-wrap gap-3 md:gap-4">
                <a 
                  href={getWhatsAppUrl("Hi Chessmatic! I'd like to chat with you.")} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:bg-[#20ba59] transition-all shadow-lg hover:scale-110"
                >
                  <MessageCircle size={18} />
                </a>
                {[<Facebook size={18}/>, <Instagram size={18}/>, <Youtube size={18}/>].map((icon, i) => (
                  <div key={i} className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-sky-500 transition-all cursor-pointer shadow-lg">
                    {icon}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-20 -right-20 w-48 md:w-64 h-48 md:h-64 bg-sky-500/10 rounded-full blur-[80px] md:blur-[100px]" />
          </motion.div>

          {/* RIGHT: INQUIRY FORM */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-[#f8fafc] rounded-[32px] md:rounded-[45px] border border-gray-100 p-8 md:p-14 shadow-xl"
          >
            <form onSubmit={handleFormSubmit} className="space-y-5 md:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                <div className="space-y-2">
                  <label className="text-[#1a365d] text-[9px] md:text-[10px] font-black uppercase tracking-widest ml-1">Full Name</label>
                  <input 
                    type="text" 
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="John Doe" 
                    className="w-full bg-white border border-gray-200 rounded-xl md:rounded-2xl px-5 py-3.5 md:py-4 text-sm focus:outline-none focus:border-sky-500 transition-all shadow-sm" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[#1a365d] text-[9px] md:text-[10px] font-black uppercase tracking-widest ml-1">Email Address</label>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="strategist@lab.com" 
                    className="w-full bg-white border border-gray-200 rounded-xl md:rounded-2xl px-5 py-3.5 md:py-4 text-sm focus:outline-none focus:border-sky-500 transition-all shadow-sm" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                <div className="space-y-2">
                  <label className="text-[#1a365d] text-[9px] md:text-[10px] font-black uppercase tracking-widest ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+65" 
                    className="w-full bg-white border border-gray-200 rounded-xl md:rounded-2xl px-5 py-3.5 md:py-4 text-sm focus:outline-none focus:border-sky-500 transition-all shadow-sm" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[#1a365d] text-[9px] md:text-[10px] font-black uppercase tracking-widest ml-1">Inquiry Type</label>
                  <div className="relative">
                    <select 
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="w-full bg-white border border-gray-200 rounded-xl md:rounded-2xl px-5 py-3.5 md:py-4 text-sm focus:outline-none focus:border-sky-500 transition-all shadow-sm appearance-none cursor-pointer"
                    >
                        <option>Adult Chess Coaching</option>
                        <option>Private 1-on-1 Lessons</option>
                        <option>Adult Group Classes</option>
                        <option>Corporate Workshop / Booking</option>
                        <option>Private 1-on-1 Lessons</option>
                        <option>Online Coaching</option>
                        <option>Partnerships / Collaborations</option>
                        <option>Other</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[#1a365d] text-[9px] md:text-[10px] font-black uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  rows={4} 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can we help your performance journey?" 
                  className="w-full bg-white border border-gray-200 rounded-xl md:rounded-2xl px-5 py-3.5 md:py-4 text-sm focus:outline-none focus:border-sky-500 transition-all shadow-sm resize-none"
                ></textarea>
              </div>

              <Button 
                type="submit"
                style={{ backgroundColor: "#25D366" }}
                className="w-full hover:bg-[#20ba59] text-white py-6 md:py-8 rounded-xl md:rounded-2xl font-[1000] uppercase tracking-widest shadow-xl transition-all hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-3 text-xs md:text-sm"
              >
                Send via WhatsApp
                <MessageCircle size={18} className="fill-current" />
              </Button>
            </form>
          </motion.div>
        </div>

        {/* 3. FULL WIDTH MAP INTEGRATION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full h-[300px] md:h-[450px] rounded-[32px] md:rounded-[45px] overflow-hidden border-[6px] md:border-[10px] border-[#f8fafc] shadow-2xl"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15954.269046627063!2d103.78018593532714!3d1.434850785058564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3141bd3933393939%3A0x673982839393939!2sWoodlands%2C%20Singapore!5e0!3m2!1sen!2ssg!4v1716383838383!5m2!1sen!2ssg"
            className="absolute inset-0 w-full h-full border-0 grayscale saturate-0 contrast-[1.1]"
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
          
          {/* MAP LABEL - Adjusted for Mobile */}
          <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-[#1a365d] px-4 py-3 md:px-6 md:py-4 rounded-2xl md:rounded-3xl shadow-2xl border border-white/10">
             <div className="flex items-center gap-2 md:gap-3">
                <div className="p-1.5 md:p-2 bg-sky-500 rounded-lg shadow-lg shadow-sky-500/20"><Target size={14} className="text-white md:w-4 md:h-4"/></div>
                <p className="text-white text-[10px] md:text-xs font-[1000] tracking-[0.1em] md:tracking-[0.2em] uppercase italic leading-none">Find the Lab</p>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}