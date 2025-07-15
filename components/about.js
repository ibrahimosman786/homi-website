
import React from 'react';
import { BarChart3, Users, Building, TrendingUp } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: BarChart3,
      title: "Data-Backed Insights",
      description: "Advanced analytics and market intelligence drive every investment recommendation"
    },
    {
      icon: TrendingUp,
      title: "Investor ROI Tools",
      description: "Proprietary calculators and forecasting models to maximize your returns"
    },
    {
      icon: Building,
      title: "Exclusive Developer Access",
      description: "Direct partnerships with Dubai's top developers for exclusive opportunities"
    }
  ];

  const founders = [
    {
      initials: "HA",
      name: "Hassan Ahmad",
      title: "Founder & Director of Finance & Strategy",
      bio: "Leads the vision, financial modeling, capital strategy, and investment partnerships. With a background in Finance, Real Estate Marketing, and Venture Strategy, Hassan brings a fintech-driven approach to global property investments.",
      university: "University of Waterloo",
      color: "from-orange-500 to-orange-600",
      textColor: "text-orange-400",
      imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/48e81f0c7_Headshot.jpg"
    },
    {
      initials: "IO",
      name: "Ibrahim Osman",
      title: "Co-Founder & Head of Technology & Optimization",
      bio: "Oversees all technology and platform development. Ibrahim is responsible for AI integration, automation workflows, and building scalable, investor-focused digital products. His expertise ensures HOMI delivers seamless, tech-first real estate solutions.",
      university: "University of Alberta",
      color: "from-blue-500 to-blue-600",
      textColor: "text-blue-400",
      imageUrl: "/ibrahim.jpg"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 lg:px-12 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-orange-500">HOMI</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We are a fintech-powered real estate platform based in Canada, helping global investors 
            secure off-plan and high-performing properties in Dubai through cutting-edge technology 
            and unparalleled market expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-750 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Meet the Founders Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Minds Behind HOMI</h2>
            <p className="text-lg text-orange-500 font-semibold">Built by finance, powered by tech.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {founders.map((founder, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-8 text-center transition-all duration-300 transform hover:scale-105 hover:bg-gray-750">
                  <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden border-2 border-gray-700">
                      <img 
                        src={founder.imageUrl} 
                        alt={`Headshot of ${founder.name}`} 
                        className={`w-full h-full object-cover ${founder.name === 'Hassan Ahmad' ? 'object-top scale-110' : 'object-top scale-110'}`}
                      />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{founder.name}</h3>
                  <p className={`font-medium mb-4 ${founder.textColor}`}>{founder.title}</p>
                  <p className="text-gray-300 text-sm mb-6">
                    {founder.bio}
                  </p>
                  <div className="inline-block bg-gray-700 rounded-full px-4 py-1 text-xs font-semibold text-white">
                      {founder.university}
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
