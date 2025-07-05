import React, { useState } from 'react';
import { Consultation } from '@/entities/Consultation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Textarea from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, MessageCircle, CheckCircle } from 'lucide-react';

export default function ConsultationSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    investment_budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await Consultation.create(formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', investment_budget: '', message: '' });
    } catch (error) {
      console.error('Error submitting consultation:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section id="consultation" className="py-20 px-6 lg:px-12 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-900 rounded-3xl p-12">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
            <p className="text-xl text-gray-300 mb-8">
              Your consultation request has been submitted successfully. Our team will contact you within 24 hours.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full"
            >
              Submit Another Request
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="consultation" className="py-20 px-6 lg:px-12 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to <span className="text-orange-500">Invest Smart</span> in Dubai?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Book a free consultation with our Dubai real estate experts and discover your perfect investment opportunity.
          </p>
        </div>

        <div className="bg-gray-900 rounded-3xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  required
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  required
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white">Phone Number</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget" className="text-white">Investment Budget</Label>
                <Select value={formData.investment_budget} onValueChange={(value) => handleChange('investment_budget', value)}>
                  <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                    <SelectItem value="1m-2m">$1M - $2M</SelectItem>
                    <SelectItem value="2m-5m">$2M - $5M</SelectItem>
                    <SelectItem value="5m+">$5M+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-white">Message</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                rows={4}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                placeholder="Tell us about your investment goals and preferences..."
              />
            </div>

            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Calendar className="w-5 h-5" />
                  Book Free Consultation
                </>
              )}
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-400 mb-4">Or reach out directly:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline"
                className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
              <Button 
                variant="outline"
                className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
              >
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
