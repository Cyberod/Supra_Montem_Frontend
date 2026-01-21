// File: components/PaymentStatusAlert.jsx

import { useEffect, useState } from 'react';

export default function PaymentStatusAlert({ 
  status, 
  message, 
  documentType,
  transactionRef,
  onClose 
}) {
  const [isVisible, setIsVisible] = useState(true);

  // Auto-dismiss after 10 seconds for success/failure
  useEffect(() => {
    if (status !== 'pending') {
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onClose) onClose();
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [status, onClose]);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  if (!isVisible) return null;

  const statusConfig = {
    success: {
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-800',
      iconColor: 'text-green-400',
      title: 'Payment Successful!',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    pending: {
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      textColor: 'text-yellow-800',
      iconColor: 'text-yellow-400',
      title: 'Payment Pending',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    failed: {
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      textColor: 'text-red-800',
      iconColor: 'text-red-400',
      title: 'Payment Failed',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  };

  const config = statusConfig[status] || statusConfig.pending;

  return (
    <div className={`rounded-lg border ${config.borderColor} ${config.bgColor} p-4 mb-6 shadow-sm`}>
      <div className="flex">
        <div className={`flex-shrink-0 ${config.iconColor}`}>
          {config.icon}
        </div>
        <div className="ml-3 flex-1">
          <h3 className={`text-sm font-semibold ${config.textColor}`}>
            {config.title}
          </h3>
          <div className={`mt-1 text-sm ${config.textColor}`}>
            <p>{message}</p>
            {documentType && (
              <p className="mt-1">
                Document Type: <span className="font-medium capitalize">{documentType.replace('-', ' ')}</span>
              </p>
            )}
            {transactionRef && (
              <p className="mt-1 text-xs opacity-75">
                Reference: {transactionRef}
              </p>
            )}
          </div>
          <div className="mt-3">
            {status === 'success' && (
              <p className="text-xs text-green-600">
                Your document is being generated and will be emailed to you shortly.
              </p>
            )}
            {status === 'pending' && (
              <p className="text-xs text-yellow-600">
                Please wait a few moments for payment confirmation. You can refresh this page to check status.
              </p>
            )}
            {status === 'failed' && (
              <p className="text-xs text-red-600">
                Please try again or contact support if the issue persists.
              </p>
            )}
          </div>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              onClick={handleClose}
              className={`inline-flex rounded-md p-1.5 ${config.textColor} hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-${config.bgColor} focus:ring-${config.borderColor.replace('border-', '')}`}
            >
              <span className="sr-only">Dismiss</span>
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}