'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const Hero3D = dynamic(() => import('@/components/Hero3D'), { 
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center text-primary">Loading 3D...</div>
});

const features = [
  { icon: '🔒', title: 'Private by Design', desc: 'Your conversations never leave your server. No data collection.' },
  { icon: '🤖', title: 'Any LLM', desc: 'Connect to MiniMax, OpenAI, Anthropic, Ollama, or roll your own.' },
  { icon: '📱', title: 'Multi-Platform', desc: 'Telegram, WhatsApp, Discord, Signal, or web. Reach anywhere.' },
  { icon: '🛠️', title: 'Extensible', desc: 'Skills, plugins, custom commands. Build exactly what you need.' },
  { icon: '💻', title: 'Self-Hosted', desc: 'Run on VPS, Pi, or local machine. You own the hardware.' },
  { icon: '🌐', title: 'Open Source', desc: 'Free forever. Transparent code. Community driven.' },
];

const links = [
  { icon: '🐙', label: 'GitHub', href: 'https://github.com/openclaw/openclaw' },
  { icon: '💬', label: 'Discord', href: 'https://discord.com/invite/clawd' },
  { icon: '📚', label: 'Docs', href: 'https://docs.openclaw.ai' },
];

export default function Hero() {
  return (
    <main className="min-h-screen bg-darker">
      {/* Background */}
      <div className="fixed inset-0 bg-grid pointer-events-none z-0" />
      <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden">
        <div className="hero-glow left-1/2 -translate-x-1/2 top-[-100px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-5 bg-darker/60 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-extrabold tracking-tight text-white">
            Open<span className="text-primary">Claw</span>
          </a>
          <div className="hidden md:flex items-center gap-10">
            <a href="#hero" className="text-slate-400 hover:text-primary transition">Home</a>
            <a href="#features" className="text-slate-400 hover:text-primary transition">Features</a>
            <a href="#contact" className="text-slate-400 hover:text-primary transition">Contact</a>
            <a href="https://docs.openclaw.ai" className="px-5 py-2.5 bg-gradient-to-r from-primary to-primary-light text-white rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-primary/30 transition">
              Docs
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col relative z-10 pt-28 pb-16">
        <div className="flex-1 flex flex-col items-center justify-center px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Open Source • Self-Hosted • Free
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight text-white">
              Your Personal<br />
              <span className="gradient-text">AI Assistant</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto mb-8">
              Private, powerful, and running on your terms. Connect to any LLM and reach it anywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="https://docs.openclaw.ai" className="px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-primary/40 transition transform hover:-translate-y-1">
                Get Started
              </a>
              <a href="https://github.com/openclaw/openclaw" className="px-8 py-4 glass text-white rounded-xl font-semibold hover:bg-white/10 transition">
                View on GitHub
              </a>
            </div>
          </motion.div>

          {/* 3D Model */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-2xl"
            style={{ height: '450px' }}
          >
            <Hero3D />
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center gap-12 md:gap-20 pt-8"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">100%</div>
              <div className="text-slate-500 text-sm mt-1">Private</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">Free</div>
              <div className="text-slate-500 text-sm mt-1">Open Source</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">5+</div>
              <div className="text-slate-500 text-sm mt-1">Integrations</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="min-h-screen relative z-10 px-6 py-24 bg-gradient-to-b from-transparent to-primary/5">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Why Choose OpenClaw?</h2>
            <p className="text-slate-400 text-lg max-w-md mx-auto">Everything you need to build your perfect AI assistant</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition">
                  {f.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{f.title}</h3>
                <p className="text-slate-400">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center relative z-10 px-6 py-24">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Get In Touch</h2>
              <p className="text-slate-400 text-lg mb-10">Have questions? Want to contribute? We'd love to hear from you.</p>
              <div className="space-y-4">
                {links.map((link, i) => (
                  <a 
                    key={i}
                    href={link.href} 
                    target="_blank" 
                    className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-white/10 transition"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center">
                      {link.icon}
                    </div>
                    <span className="font-medium text-white">{link.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8 md:p-10"
            >
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Name</label>
                  <input type="text" className="w-full px-5 py-4 bg-black/30 border border-white/10 rounded-xl text-white focus:border-primary focus:outline-none transition" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Email</label>
                  <input type="email" className="w-full px-5 py-4 bg-black/30 border border-white/10 rounded-xl text-white focus:border-primary focus:outline-none transition" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Message</label>
                  <textarea rows={4} className="w-full px-5 py-4 bg-black/30 border border-white/10 rounded-xl text-white focus:border-primary focus:outline-none transition resize-none" placeholder="How can we help?" />
                </div>
                <button type="submit" className="w-full py-4 bg-gradient-to-r from-primary to-primary-light text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-primary/40 transition transform hover:-translate-y-1">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="py-10 px-6 border-t border-white/5 text-center text-slate-500 relative z-10">
        <p>Built with ❤️ by the <a href="https://github.com/openclaw/openclaw" className="text-primary hover:underline">OpenClaw Community</a></p>
      </footer>
    </main>
  );
}
