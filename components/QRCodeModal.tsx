
import React from 'react';
import { X, CheckCircle } from 'lucide-react';
import { UPI_ID } from '../constants';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  totalAmount: number;
}

const QRCodeModal: React.FC<QRCodeModalProps> = ({ isOpen, onClose, totalAmount }) => {
  if (!isOpen) return null;

  const qrData = `upi://pay?pa=${UPI_ID}&pn=Pooja%20Samagri%20Hub&am=${totalAmount.toFixed(2)}&cu=INR&tn=Pooja%20Order`;
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrData)}`;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-sm w-full text-center transform transition-all scale-100 opacity-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <X className="h-6 w-6" />
        </button>
        
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        
        <h2 id="modal-title" className="text-3xl font-heading text-brand-secondary mb-2">Order Sent!</h2>
        
        <p className="text-gray-600 font-body mb-6">
          Your order has been sent via WhatsApp. To complete your purchase, please scan the QR code below with any UPI app.
        </p>
        
        <div className="flex justify-center mb-4">
          <img src={qrImageUrl} alt="UPI Payment QR Code" className="rounded-lg border-4 border-brand-accent"/>
        </div>
        
        <p className="font-bold text-lg">Total Amount: ₹{totalAmount.toFixed(2)}</p>
        <p className="text-sm text-gray-500">UPI ID: {UPI_ID}</p>
        
        <button 
          onClick={onClose} 
          className="mt-6 bg-brand-primary text-white font-bold py-2 px-6 rounded-full hover:bg-brand-secondary transition-colors duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default QRCodeModal;
