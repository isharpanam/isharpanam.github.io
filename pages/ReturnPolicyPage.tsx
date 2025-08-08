import React from 'react';
import { AlertTriangle, Video, Clock, Shield, Phone, MessageCircle } from 'lucide-react';

const ReturnPolicyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 lg:space-y-12">
      {/* Header Section */}
      <div className="text-center opacity-0 animate-fadeInUp" style={{ animationDelay: '100ms' }}>
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-50 to-orange-50 px-4 py-2 rounded-full border border-red-200 mb-6">
          <AlertTriangle className="h-5 w-5 text-red-600" />
          <span className="text-sm font-semibold text-red-700">Important Policy Information</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-brand-secondary mb-4">
          No Return Policy
        </h1>
        
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          At <span className="font-bold text-brand-primary">ईशअर्पणम्</span>, we take utmost care to ensure that every pooja kit and sacred essential is authentic, complete, and blessed before it reaches you.
        </p>
      </div>

      {/* Main Policy Statement */}
      <div className="opacity-0 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 sm:p-8 border border-red-200">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-heading text-red-800 mb-3">
                No Returns Accepted
              </h2>
              <p className="text-red-700 leading-relaxed">
                As our products are spiritual and ritual items, <strong>we do not accept returns</strong> once the order is delivered. This policy ensures the sanctity and purity of our sacred items.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Replacement Policy Section */}
      <div className="opacity-0 animate-fadeInUp" style={{ animationDelay: '300ms' }}>
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-heading text-brand-secondary mb-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <Shield className="h-5 w-5 text-green-600" />
            </div>
            Replacement Policy for Damaged or Missing Items
          </h2>

          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              If you receive a product that is:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <span className="text-red-700 font-medium">Damaged during transit</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-lg border border-orange-200">
                <AlertTriangle className="h-5 w-5 text-orange-600 flex-shrink-0" />
                <span className="text-orange-700 font-medium">Has missing items in the kit</span>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
                <Video className="h-5 w-5" />
                Steps for Replacement Request
              </h3>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-1">Record a Clear Video</h4>
                    <p className="text-blue-700 text-sm">
                      Record an unboxing video showing the package and the issue (damage or missing item).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-1">Video Requirements</h4>
                    <p className="text-blue-700 text-sm mb-2">Make sure the video clearly displays:</p>
                    <ul className="text-blue-700 text-sm space-y-1 ml-4">
                      <li>• The outer packaging and shipping label</li>
                      <li>• The unsealing process</li>
                      <li>• The defect or missing item</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-1">Submit Within 24 Hours</h4>
                    <p className="text-blue-700 text-sm">
                      Send the video to our official WhatsApp support number within <strong>24 hours of delivery</strong>.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-1">Free Replacement</h4>
                    <p className="text-green-700 text-sm">
                      After verification, we will <strong>dispatch a replacement</strong> at no extra cost.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="opacity-0 animate-fadeInUp" style={{ animationDelay: '400ms' }}>
        <div className="bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-2xl p-6 sm:p-8 border border-brand-accent/20">
          <h3 className="text-xl sm:text-2xl font-heading text-brand-secondary mb-6 text-center">
            Contact Us for Support
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">WhatsApp Support</h4>
                <p className="text-gray-600 text-sm">+91 63559 28232</p>
                <p className="text-green-600 text-xs">Available 24/7</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Email Support</h4>
                <p className="text-gray-600 text-sm">isharpanam.poojasaman@gmail.com</p>
                <p className="text-blue-600 text-xs">Response within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Important Note */}
      <div className="opacity-0 animate-fadeInUp" style={{ animationDelay: '500ms' }}>
        <div className="bg-yellow-50 rounded-2xl p-6 sm:p-8 border border-yellow-200">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <Clock className="h-5 w-5 text-yellow-600" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">📌 Important Note</h3>
              <div className="space-y-2 text-yellow-700">
                <p>
                  • <strong>Without a proper unboxing video</strong>, we will not be able to process a replacement.
                </p>
                <p>
                  • This policy ensures transparency and protects against misuse.
                </p>
                <p>
                  • All replacement requests must be submitted within <strong>24 hours of delivery</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="opacity-0 animate-fadeInUp" style={{ animationDelay: '600ms' }}>
        <div className="text-center bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
          <h3 className="text-2xl font-heading text-brand-secondary mb-4">
            Our Commitment to Quality
          </h3>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            We understand the sacred nature of our products and are committed to delivering only the highest quality items. 
            Our careful packaging and quality checks ensure that your spiritual essentials reach you in perfect condition.
          </p>
          
          <div className="mt-6 inline-flex items-center gap-2 bg-brand-primary/10 px-4 py-2 rounded-full">
            <Shield className="h-4 w-4 text-brand-primary" />
            <span className="text-sm font-semibold text-brand-primary">Quality Guaranteed • Blessed with Devotion</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicyPage;