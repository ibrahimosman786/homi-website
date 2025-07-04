import React from 'react';
import { Shield, TrendingUp, CreditCard, Users, Building2, Globe } from 'lucide-react';

export default function WhyDubai() {
  const benefits = [
    {
      icon: CreditCard,
      title: "Tax-Free Income",
      description: "0% personal income tax on rental income and capital gains"
    },
    {
      icon: TrendingUp,
      title: "10–12% ROI",
      description: "Consistently high returns in prime Dubai locations"
    },
    {
      icon: Shield,
      title: "10-Year Golden Visa",
      description: "Long-term residency with property investment of AED 2M+"
    },
    {
      icon: Users,
      title: "High Rental Demand",
      description: "Growing expat population ensures steady rental income"
    },
    {
      icon: Building2,
      title: "World-Class Infrastructure",
      description: "Expo 2020 legacy and continuous urban development"
    },
    {
      icon: Globe,
      title: "Global Business Hub",
      description: "Strategic location connecting East and West markets"
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-12 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Invest in <span className="text-orange-500">Dubai</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dubai offers unparalleled advantages for international real estate investors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-black rounded-2xl p-8 text-center hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 border border-gray-800">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-black rounded-2xl p-8 border border-gray-800">
            <h3 className="text-3xl font-bold text-orange-500 mb-2">200+</h3>
            <p className="text-gray-400">Nationalities</p>
          </div>
          <div className="bg-black rounded-2xl p-8 border border-gray-800">
            <h3 className="text-3xl font-bold text-orange-500 mb-2">3.5M+</h3>
            <p className="text-gray-400">Population</p>
          </div>
          <div className="bg-black rounded-2xl p-8 border border-gray-800">
            <h3 className="text-3xl font-bold text-orange-500 mb-2">85%</h3>
            <p className="text-gray-400">Expatriates</p>
          </div>
          <div className="bg-black rounded-2xl p-8 border border-gray-800">
            <h3 className="text-3xl font-bold text-orange-500 mb-2">$1T+</h3>
            <p className="text-gray-400">Infrastructure Investment</p>
          </div>
        </div>
      </div>
    </section>
  );
}
