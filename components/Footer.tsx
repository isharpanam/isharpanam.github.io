import React from 'react';
import { Facebook, Instagram, Twitter, Heart, Leaf, Star, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-secondary/90 from-brand-secondary via-brand-secondary to-brand-primary text-white mt-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>


      <div className="relative">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 pt-12 pb-8">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

            {/* Brand Section */}
            <div className="col-span-2 lg:col-span-2">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative">
                    <img
                      src="/images/logo.png"
                      alt="Isharpanam Logo"
                      className="h-10 w-10 animate-pulse hover:scale-110 transition-all duration-300 object-contain"
                    />
                    <div className="absolute inset-0 bg-orange-500/20 rounded-full animate-ping opacity-75"></div>
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-heading text-brand-accent">Isharpanam</h3>
                    <p className="text-sm text-white/80">Divine Rituals Made Easy</p>
                  </div>
                </div>

                <p className="text-white/90 leading-relaxed mb-6 max-w-md">
                  Your trusted source for authentic pooja kits and ritual essentials. We provide complete, traditional samagri sets for all your sacred ceremonies, blessed with devotion and prepared with care.
                </p>

                {/* Trust Indicators */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Star className="h-4 w-4 text-green-400 fill-current" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">100% Authentic</div>
                      <div className="text-white/70 text-xs">Verified Quality</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                      <Heart className="h-4 w-4 text-red-400 fill-current" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Blessed Items</div>
                      <div className="text-white/70 text-xs">Spiritually Pure</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-heading text-brand-accent mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-brand-accent rounded-full"></div>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { name: 'Pooja Kits', href: '/' },
                  { name: 'Vrat Kits', href: '#/vrats' },
                  { name: 'Shopping Cart', href: '#/cart' },
                  { name: 'Return Policy', href: '#/return-policy' },
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-brand-accent transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-heading text-brand-accent mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-brand-accent rounded-full"></div>
                Get in Touch
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="h-4 w-4 text-brand-accent" />
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">Visit Us</div>
                    <div className="text-white/70 text-xs leading-relaxed">
                      Ahmedabad, Gujarat<br />
                      India
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="h-4 w-4 text-brand-accent" />
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">WhatsApp</div>
                    <div className="text-white/70 text-xs">+91 63559 28232</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="h-4 w-4 text-brand-accent" />
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">Email Us</div>
                    <div className="text-white/70 text-xs">isharpanam.poojasaman@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <span className="text-white/70 text-sm mr-2">Follow us:</span>
              {[
                {
                  icon: Facebook,
                  href: "https://www.facebook.com/share/1Hrtht8hdx",
                  label: "Facebook",
                  color: "hover:bg-blue-600"
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/isharpanam",
                  label: "Instagram",
                  color: "hover:bg-pink-600"
                },
                {
                  icon: Twitter,
                  href: "https://x.com/isharpanam",
                  label: "Twitter",
                  color: "hover:bg-blue-400"
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl 
                    flex items-center justify-center 
                    transition-all duration-300 transform hover:scale-110 
                    ${social.color} group border border-white/20
                  `}
                >
                  <social.icon className="h-5 w-5 text-white group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>

            {/* Copyright & Company Info */}
            <div className="text-center md:text-right">
              <p className="text-white/90 font-body text-sm mb-1">
                &copy; {currentYear} Isharpanam. All Rights Reserved.
              </p>
              <p className="text-white/60 text-xs">
                Made with <Heart className="inline h-3 w-3 text-red-400 fill-current mx-1" /> for spiritual devotees
              </p>
            </div>
          </div>

        </div>

        {/* Decorative Bottom Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-accent via-yellow-300 to-brand-accent"></div>
      </div>

    </footer>
  );
};

export default Footer;