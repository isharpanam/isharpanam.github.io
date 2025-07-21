import React, { useEffect, useState } from 'react';
import { X, CheckCircle, Download, Share2, Copy, Smartphone, CreditCard } from 'lucide-react';
import { UPI_ID } from '../constants';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  totalAmount: number;
}

const QRCodeModal: React.FC<QRCodeModalProps> = ({ isOpen, onClose, totalAmount }) => {
  const [copied, setCopied] = useState(false);
  const [shareSupported, setShareSupported] = useState(false);

  useEffect(() => {
    // Check if Web Share API is supported
    setShareSupported(!!navigator.share);
  }, []);

  useEffect(() => {
    // Prevent body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    // Handle ESC key press
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const qrData = `upi://pay?pa=${UPI_ID}&pn=Isharpanam&am=${totalAmount.toFixed(2)}&cu=INR&tn=Pooja%20Order`;
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(qrData)}&format=PNG&ecc=M`;

  const handleCopyUPI = async () => {
    try {
      await navigator.clipboard.writeText(UPI_ID);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy UPI ID:', err);
    }
  };

  const handleDownloadQR = () => {
    const link = document.createElement('a');
    link.href = qrImageUrl;
    link.download = `isharpanam-payment-qr-${totalAmount}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShareQR = async () => {
    if (shareSupported) {
      try {
        await navigator.share({
          title: 'Isharpanam Payment QR',
          text: `Payment QR for ₹${totalAmount.toFixed(2)} - Isharpanam`,
          url: qrImageUrl,
        });
      } catch (err) {
        console.error('Error sharing QR:', err);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      {/* Modal Container */}
      <div 
        className="bg-white rounded-2xl lg:rounded-3xl shadow-2xl w-full max-w-md lg:max-w-lg transform transition-all scale-100 opacity-100 max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative p-6 lg:p-8 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-t-2xl lg:rounded-t-3xl">
          {/* Close Button */}
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white hover:bg-white/20 rounded-xl transition-all duration-300 touch-manipulation"
            aria-label="Close modal"
          >
            <X className="h-5 w-5 lg:h-6 lg:w-6" />
          </button>
          
          {/* Success Icon */}
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <CheckCircle className="h-16 w-16 lg:h-20 lg:w-20 text-white" />
              <div className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-75"></div>
            </div>
          </div>
          
          {/* Title */}
          <h2 id="modal-title" className="text-2xl lg:text-3xl font-heading text-center mb-2">
            Order Sent Successfully!
          </h2>
          <p className="text-center text-white/90 text-sm lg:text-base">
            Complete your payment using the QR code below
          </p>
        </div>

        {/* Content */}
        <div className="p-6 lg:p-8 space-y-6">
          {/* Order Info */}
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
              ₹{totalAmount.toFixed(2)}
            </div>
            <div className="text-sm text-gray-600">
              Total Amount to Pay
            </div>
          </div>

          {/* QR Code Section */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 text-center">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center justify-center gap-2">
                <Smartphone className="h-5 w-5 text-blue-600" />
                Scan to Pay
              </h3>
              <p className="text-sm text-gray-600">
                Use any UPI app to scan this QR code
              </p>
            </div>
            
            {/* QR Code Image */}
            <div className="flex justify-center mb-4">
              <div className="relative bg-white p-4 rounded-2xl shadow-lg border-4 border-green-200">
                <img 
                  src={qrImageUrl} 
                  alt="UPI Payment QR Code" 
                  className="w-48 h-48 lg:w-56 lg:h-56 rounded-lg"
                  loading="lazy"
                />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>

            {/* QR Actions */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleDownloadQR}
                className="flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 text-sm font-medium"
              >
                <Download className="h-4 w-4" />
                Download QR
              </button>
              
              {shareSupported && (
                <button
                  onClick={handleShareQR}
                  className="flex items-center justify-center gap-2 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors duration-300 text-sm font-medium"
                >
                  <Share2 className="h-4 w-4" />
                  Share QR
                </button>
              )}
            </div>
          </div>

          {/* UPI ID Section */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h4 className="text-sm font-semibold text-blue-800 mb-2 flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              UPI ID for Manual Payment
            </h4>
            <div className="flex items-center justify-between bg-white border border-blue-200 rounded-lg p-3">
              <span className="text-sm font-mono text-gray-800 flex-1 truncate">{UPI_ID}</span>
              <button
                onClick={handleCopyUPI}
                className={`ml-2 p-2 rounded-lg transition-all duration-300 ${
                  copied 
                    ? 'bg-green-500 text-white' 
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
                aria-label="Copy UPI ID"
              >
                {copied ? (
                  <CheckCircle className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </div>
            {copied && (
              <p className="text-xs text-green-600 mt-1 animate-fadeInUp">
                ✓ UPI ID copied to clipboard!
              </p>
            )}
          </div>

          {/* Payment Instructions */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <h4 className="text-sm font-semibold text-yellow-800 mb-3">
              📱 How to Pay:
            </h4>
            <ol className="text-xs text-yellow-700 space-y-2">
              <li className="flex items-start gap-2">
                <span className="bg-yellow-300 text-yellow-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                <span>Open any UPI app (GPay, PhonePe, Paytm, etc.)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-yellow-300 text-yellow-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                <span>Scan the QR code or enter UPI ID manually</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-yellow-300 text-yellow-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                <span>Verify amount (₹{totalAmount.toFixed(2)}) and complete payment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-yellow-300 text-yellow-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</span>
                <span>Share payment screenshot with us on WhatsApp</span>
              </li>
            </ol>
          </div>

          {/* Support Info */}
          <div className="text-center pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 mb-3">
              Need help? Contact us on WhatsApp after payment
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={onClose} 
                className="flex-1 bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-xl hover:bg-gray-200 transition-colors duration-300"
              >
                Continue Shopping
              </button>
              <button
                onClick={onClose}
                className="flex-1 bg-brand-primary from-brand-primary to-brand-secondary text-white font-semibold py-3 px-6 rounded-xl hover:from-brand-secondary hover:to-brand-primary transition-all duration-300 shadow-lg"
              >
                Done
              </button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-200">
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <div className="text-xs text-green-600 font-semibold">🔒 Secure Payment</div>
              <div className="text-xs text-green-500">Bank Grade Security</div>
            </div>
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <div className="text-xs text-blue-600 font-semibold">⚡ Instant Process</div>
              <div className="text-xs text-blue-500">Quick Confirmation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCodeModal;