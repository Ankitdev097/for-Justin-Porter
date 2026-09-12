import { motion } from 'motion/react';
import React, { useState } from 'react';
import { 
  PhoneMissed, 
  Clock, 
  Users, 
  PhoneCall, 
  CalendarCheck, 
  CheckCircle2,
  Download,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  Building,
  UserCheck,
  X
} from 'lucide-react';
import { EmailModal } from './components/EmailModal';

function FadeIn({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Do clients actually trust talking to an AI?",
      a: "Yes. The AI sounds completely natural—indistinguishable from a real person. It handles conversational pauses, interruptions, and questions seamlessly, ensuring your leads feel heard and valued from the first second."
    },
    {
      q: "How does it know my schedule to book appointments?",
      a: "The custom n8n workflow I built for you syncs directly with your calendar in real-time. It only offers slots when you're genuinely available, preventing double-bookings automatically."
    },
    {
      q: "What if a lead asks a complex real estate question?",
      a: "The AI is designed to qualify the lead, answer common questions, and book the appointment. If a question is too complex, it gracefully takes a message and assures them you will follow up personally."
    },
    {
      q: "Why are you doing the setup for free?",
      a: "I want to prove the value upfront. By giving you the complete workflow and a free 9-minute setup call, you get to see exactly how powerful this is for LPT Realty without any initial risk."
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 font-sans text-zinc-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-semibold text-white tracking-tight flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Prepared for Justin Porter
          </div>
          <button 
            onClick={() => setIsEmailModalOpen(true)}
            className="text-sm font-medium text-white bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-lg transition-colors"
          >
            Schedule Setup
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-8 border border-indigo-500/20">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              Custom Blueprint for LPT Realty
            </div>
            <h1 className="text-4xl md:text-6xl font-medium text-white mb-6 tracking-tight leading-tight">
              Stop losing motivated buyers to <br className="hidden md:block" />
              <span className="text-zinc-500">voicemail and missed calls.</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Justin, while you're busy showing the home on Hunziker Dr, who is answering the phone? I've built a custom AI inbound system specifically for your real estate business in Ames to ensure you never miss a lead again.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => setIsEmailModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-950 hover:bg-zinc-100 font-medium rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                Claim Your Free Setup <ArrowRight className="w-4 h-4" />
              </button>
              <a 
                href="#workflow"
                className="w-full sm:w-auto px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-medium rounded-xl transition-colors border border-zinc-800 flex items-center justify-center"
              >
                View The Workflow
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 bg-zinc-900/30 border-y border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-medium text-white mb-4">The Real Estate Reality</h2>
              <p className="text-zinc-400 max-w-xl mx-auto">Every missed call is a potential buyer moving on to the next agent on Zillow.</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 h-full">
                <div className="w-12 h-12 bg-rose-500/10 rounded-xl flex items-center justify-center mb-6 border border-rose-500/20">
                  <PhoneMissed className="w-6 h-6 text-rose-400" />
                </div>
                <h3 className="text-lg font-medium text-white mb-3">The Showing Trap</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Letting new leads go to voicemail while you're with clients or hosting an open house. Buyers rarely leave messages.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 h-full">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6 border border-orange-500/20">
                  <Clock className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-medium text-white mb-3">After-Hours Bleed</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Missing calls after hours or on weekends when buyers are actively browsing listings and highly motivated to talk.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 h-full">
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 border border-amber-500/20">
                  <Users className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-lg font-medium text-white mb-3">Lost Opportunities</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Losing motivated buyers and sellers to the next agent who answers the phone immediately. Speed to lead is everything.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section id="workflow" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-medium text-white mb-6 tracking-tight">
                  I built a custom solution specifically for you.
                </h2>
                <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                  Based on your active listings and typical client interactions, I designed an AI workflow using Retell AI and n8n that acts as your perfect assistant.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="mt-1 w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                      <PhoneCall className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Instant, 24/7 Answering</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">Answers every call instantly, day or night, sounding exactly like a highly-trained real professional.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="mt-1 w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center shrink-0 border border-indigo-500/20">
                      <UserCheck className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Natural Lead Qualification</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">Qualifies buyers and sellers naturally, gathering intent, budget, and timeline seamlessly.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="mt-1 w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                      <CalendarCheck className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Direct Calendar Booking</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">Books showings and listing appointments straight into your calendar when you are available.</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.2}>
              <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 relative shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-3xl pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-zinc-800 rounded-lg border border-zinc-700">
                      <ShieldCheck className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Your Custom Package</h3>
                      <p className="text-xs text-zinc-500">Ready for deployment</p>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {[
                      "Complete AI Assistant build with Retell AI",
                      "n8n Workflow 1: Appointment Scheduling",
                      "n8n Workflow 2: Automated Call Summaries",
                      "Step-by-step Installation Guide",
                      "Quality Assurance Checklist",
                      "Visual Setup Diagram"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a 
                    href="https://drive.google.com/drive/folders/1eTBaFmT5UWUJq4Pgnt6yhEtCowOPek-8?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-colors"
                  >
                    <Download className="w-4 h-4" /> Download Your Workflow
                  </a>
                  <p className="text-center text-xs text-zinc-500 mt-4">
                    Stored securely on Google Drive
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Comparison / ROI */}
      <section className="py-24 bg-zinc-900/30 border-y border-zinc-900">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-medium text-white mb-4">The Cost of Doing Business</h2>
              <p className="text-zinc-400 max-w-xl mx-auto">Compare the traditional route with the system I've built for you.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Human Receptionist */}
              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 opacity-80">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800">
                    <Building className="w-5 h-5 text-zinc-500" />
                  </div>
                  <h3 className="text-lg font-medium text-zinc-300">Human Receptionist</h3>
                </div>
                
                <div className="text-3xl font-medium text-white mb-6">
                  $35,000<span className="text-lg text-zinc-500 font-normal">/yr</span>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-sm text-zinc-400">
                    <X className="w-4 h-4 text-rose-500/70" /> Available 9 AM - 5 PM only
                  </li>
                  <li className="flex items-center gap-3 text-sm text-zinc-400">
                    <X className="w-4 h-4 text-rose-500/70" /> Misses calls while on another line
                  </li>
                  <li className="flex items-center gap-3 text-sm text-zinc-400">
                    <X className="w-4 h-4 text-rose-500/70" /> Requires training and management
                  </li>
                  <li className="flex items-center gap-3 text-sm text-zinc-400">
                    <X className="w-4 h-4 text-rose-500/70" /> Sick days and holidays off
                  </li>
                </ul>
              </div>

              {/* AI Setup */}
              <div className="bg-zinc-900 border border-indigo-500/30 rounded-2xl p-8 relative shadow-[0_0_40px_-15px_rgba(99,102,241,0.2)]">
                <div className="absolute top-0 right-8 -translate-y-1/2 px-3 py-1 bg-indigo-500 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                  My Offer
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                    <PhoneCall className="w-5 h-5 text-indigo-400" />
                  </div>
                  <h3 className="text-lg font-medium text-white">Custom AI Receptionist</h3>
                </div>
                
                <div className="text-3xl font-medium text-white mb-1">
                  Free Setup
                </div>
                <div className="text-sm text-indigo-400 mb-6 font-medium">For a limited time</div>

                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 24/7/365 Availability
                  </li>
                  <li className="flex items-center gap-3 text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Handles unlimited concurrent calls
                  </li>
                  <li className="flex items-center gap-3 text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Books directly into your calendar
                  </li>
                  <li className="flex items-center gap-3 text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Never calls in sick
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-medium text-white mb-4">Common Questions</h2>
              <p className="text-zinc-400">Everything you need to know about the system.</p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-zinc-800 rounded-xl overflow-hidden bg-zinc-900/30">
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-zinc-800/50 transition-colors"
                  >
                    <span className="font-medium text-white pr-8">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-zinc-500 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 pt-2 text-zinc-400 text-sm leading-relaxed border-t border-zinc-800/50 mt-2">
                      {faq.a}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 border-t border-zinc-900 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <FadeIn>
            <h2 className="text-4xl font-medium text-white mb-6 tracking-tight">Let's get this running.</h2>
            <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
              Justin, reply to my previous message or use the button below to schedule a quick 9-minute call. I'll personally help you install and customize this workflow for LPT Realty at absolutely no cost.
            </p>
            <button 
              onClick={() => setIsEmailModalOpen(true)}
              className="px-8 py-4 bg-white text-zinc-950 hover:bg-zinc-100 font-medium rounded-xl transition-colors inline-flex items-center justify-center gap-2"
            >
              Schedule Free 9-Min Setup <ArrowRight className="w-4 h-4" />
            </button>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-zinc-600 text-sm border-t border-zinc-900">
        <p>Prepared exclusively for Justin Porter, Realtor LPT Realty.</p>
      </footer>

      {/* Email Modal */}
      <EmailModal 
        isOpen={isEmailModalOpen} 
        onClose={() => setIsEmailModalOpen(false)} 
        email="ankit@agentbydesign.in"
      />
    </div>
  );
}

