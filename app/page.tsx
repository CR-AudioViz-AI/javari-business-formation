'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, FileText, Users, Shield, CheckCircle, ArrowRight,
  Briefcase, Scale, Heart, Rocket, Clock, DollarSign, Star
} from 'lucide-react';

const entityTypes = [
  { 
    id: 'llc', 
    name: 'Limited Liability Company', 
    short: 'LLC',
    icon: Building2, 
    color: 'from-blue-500 to-indigo-600',
    price: 49,
    popular: true,
    features: ['Personal asset protection', 'Pass-through taxation', 'Flexible management', 'Less paperwork']
  },
  { 
    id: 'corp', 
    name: 'Corporation', 
    short: 'C-Corp / S-Corp',
    icon: Briefcase, 
    color: 'from-emerald-500 to-teal-600',
    price: 99,
    popular: false,
    features: ['Raise investment capital', 'Stock options for employees', 'Established credibility', 'Perpetual existence']
  },
  { 
    id: 'nonprofit', 
    name: 'Nonprofit Organization', 
    short: '501(c)(3)',
    icon: Heart, 
    color: 'from-rose-500 to-pink-600',
    price: 149,
    popular: false,
    features: ['Tax-exempt status', 'Accept donations', 'Grant eligibility', 'Public trust']
  },
  { 
    id: 'dba', 
    name: 'Doing Business As', 
    short: 'DBA',
    icon: FileText, 
    color: 'from-amber-500 to-orange-600',
    price: 29,
    popular: false,
    features: ['Operate under different name', 'Quick and simple', 'Low cost', 'No separate entity']
  },
];

const packages = [
  { name: 'Basic', price: 0, stateFeesExtra: true, features: ['Business formation filing', 'Name availability check', 'Standard processing'] },
  { name: 'Standard', price: 149, stateFeesExtra: true, features: ['Everything in Basic', 'EIN (Tax ID) filing', 'Operating Agreement', 'Expedited processing', 'Banking resolution'] },
  { name: 'Premium', price: 299, stateFeesExtra: true, features: ['Everything in Standard', 'Registered Agent (1 year)', 'Compliance alerts', 'Annual report filing', 'Priority support'] },
];

const stats = [
  { value: '500K+', label: 'Businesses Formed' },
  { value: '50', label: 'States Covered' },
  { value: '$49', label: 'Starting Price' },
  { value: '4.8/5', label: 'Customer Rating' },
];

export default function BusinessFormationPage() {
  const [selectedEntity, setSelectedEntity] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-emerald-950/20 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-bold text-white text-lg">Javari Business</span>
                <span className="text-emerald-400 text-xs block -mt-1">by CR AudioViz AI</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#entities" className="text-gray-300 hover:text-white transition">Entity Types</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition">Pricing</a>
              <a href="#why-us" className="text-gray-300 hover:text-white transition">Why Us</a>
              <a href="#start" className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium rounded-lg hover:opacity-90 transition">
                Start Your Business
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-sm text-emerald-300 mb-8"
          >
            <Rocket className="w-4 h-4" />
            <span>Form your business in as little as 10 minutes</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Start Your Business<br/>
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              The Right Way
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
          >
            Form your LLC, Corporation, or Nonprofit with expert guidance. 
            We handle the paperwork so you can focus on building your dream.
          </motion.p>

          {/* Quick Start Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-emerald-500"
              >
                <option value="">Select State</option>
                <option value="FL">Florida</option>
                <option value="DE">Delaware</option>
                <option value="WY">Wyoming</option>
                <option value="TX">Texas</option>
                <option value="CA">California</option>
                <option value="NY">New York</option>
              </select>
              <select
                value={selectedEntity || ''}
                onChange={(e) => setSelectedEntity(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-emerald-500"
              >
                <option value="">Entity Type</option>
                <option value="llc">LLC</option>
                <option value="corp">Corporation</option>
                <option value="nonprofit">Nonprofit</option>
                <option value="dba">DBA</option>
              </select>
            </div>
            <button className="w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-lg hover:opacity-90 transition flex items-center justify-center gap-2">
              Start Formation
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-sm text-gray-400 mt-3">Starting at $49 + state filing fees</p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {stats.map((stat, i) => (
              <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Entity Types */}
      <section id="entities" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose Your Entity Type</h2>
            <p className="text-xl text-gray-400">Select the right structure for your business</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {entityTypes.map((entity, i) => (
              <motion.div
                key={entity.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-6 bg-white/5 border rounded-2xl transition-all hover:scale-105 cursor-pointer ${
                  selectedEntity === entity.id ? 'border-emerald-500 bg-emerald-500/10' : 'border-white/10'
                }`}
                onClick={() => setSelectedEntity(entity.id)}
              >
                {entity.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-500 rounded-full text-xs text-white font-medium">
                    Most Popular
                  </div>
                )}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${entity.color} mb-4`}>
                  <entity.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{entity.short}</h3>
                <p className="text-sm text-gray-400 mb-3">{entity.name}</p>
                <div className="text-2xl font-bold text-white mb-4">
                  ${entity.price}<span className="text-sm font-normal text-gray-400"> + state fees</span>
                </div>
                <ul className="space-y-2">
                  {entity.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section id="pricing" className="py-20 bg-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-400">Choose the package that fits your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 rounded-2xl ${i === 1 ? 'bg-gradient-to-b from-emerald-900/50 to-teal-900/50 border-2 border-emerald-500' : 'bg-slate-900/50 border border-white/10'}`}
              >
                {i === 1 && (
                  <div className="text-center mb-4">
                    <span className="px-3 py-1 bg-emerald-500 rounded-full text-xs text-white">Recommended</span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-white mb-1">
                  {pkg.price === 0 ? 'Free' : `$${pkg.price}`}
                </div>
                <p className="text-sm text-gray-400 mb-6">+ state filing fees</p>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-medium transition ${
                  i === 1 
                    ? 'bg-emerald-600 text-white hover:bg-emerald-700' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Javari Business?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: 'Fast & Easy', desc: 'Form your business in as little as 10 minutes with our simple online process' },
              { icon: DollarSign, title: 'Affordable', desc: 'Transparent pricing with no hidden fees. Pay only for what you need' },
              { icon: Shield, title: 'Expert Support', desc: 'Get help from our team of business formation specialists anytime' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center"
              >
                <item.icon className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="start" className="py-20 bg-gradient-to-r from-emerald-900/50 to-teal-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8">Join over 500,000 entrepreneurs who started their business with us</p>
          <a href="/start" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:opacity-90 transition">
            Start Your Business Now
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Building2 className="w-6 h-6 text-emerald-400" />
              <span className="text-white font-semibold">Javari Business</span>
              <span className="text-gray-500">by CR AudioViz AI</span>
            </div>
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} CR AudioViz AI, LLC. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
