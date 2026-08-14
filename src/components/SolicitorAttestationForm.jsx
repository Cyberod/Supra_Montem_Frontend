// File: components/SolicitorAttestationForm.jsx
import { useState, useEffect } from 'react';
import PaymentStatusAlert from './PaymentStatusAlert';
import { extractAndClearUrlParams, mapPaymentStatus } from '../utils/urlParams';

const PRONOUNS = [
  { value: 'HE_HIM', label: 'He / Him' },
  { value: 'SHE_HER', label: 'She / Her' },
  { value: 'THEY_THEM', label: 'They / Them' },
];

export default function SolicitorAttestationForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Step 0: Client
    clientName: '',
    clientAddress: '',
    clientPhone: '',
    clientEmail: '',
    clientPronoun: '',
    // Step 1: Recipient institution
    recipientTitle: '',
    institutionName: '',
    institutionAddress: '',
    // Step 2: Purpose & submit
    purposeDescription: '',
    issuanceDate: ''
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [paymentMessage, setPaymentMessage] = useState('');
  const [transactionRef, setTransactionRef] = useState('');
  const [documentId, setDocumentId] = useState('');
  const [hasProcessedPayment, setHasProcessedPayment] = useState(false);

  const steps = [
    'Client Details',
    'Recipient Institution',
    'Purpose & Submit'
  ];

  // Check for payment status on component mount
  useEffect(() => {
    if (hasProcessedPayment) return;

    const extracted = extractAndClearUrlParams([
      'payment_status',
      'message',
      'transaction_ref',
      'document_id'
    ]);

    if (extracted.payment_status) {
      const frontendStatus = mapPaymentStatus(extracted.payment_status);

      setPaymentStatus(frontendStatus);
      setPaymentMessage(extracted.message || getDefaultMessage(frontendStatus));
      setTransactionRef(extracted.transaction_ref || '');
      setDocumentId(extracted.document_id || '');
      setHasProcessedPayment(true);

      if (frontendStatus === 'success') {
        setTimeout(() => resetForm(), 100);
      }
    }
  }, []);

  const getDefaultMessage = (status) => {
    const messages = {
      'success': 'Payment successful! Your letter is being generated and will be emailed to you shortly.',
      'pending': 'Payment pending. Please wait for confirmation.',
      'failed': 'Payment failed. Please try again or contact support if the issue persists.'
    };
    return messages[status] || 'Payment status unknown.';
  };

  const resetForm = () => {
    setFormData({
      clientName: '',
      clientAddress: '',
      clientPhone: '',
      clientEmail: '',
      clientPronoun: '',
      recipientTitle: '',
      institutionName: '',
      institutionAddress: '',
      purposeDescription: '',
      issuanceDate: ''
    });
    setCurrentStep(0);
    setErrors({});
  };

  const handleChange = (e) => {
    let value = e.target.value;
    if (e.target.type === 'email') value = value.trim();
    setFormData({ ...formData, [e.target.name]: value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateStep = (step) => {
    const newErrors = {};
    if (step === 0) {
      if (!formData.clientName.trim()) newErrors.clientName = 'Client name is required';
      if (!formData.clientAddress.trim()) newErrors.clientAddress = 'Address is required';
      if (!formData.clientPhone.trim()) newErrors.clientPhone = 'Phone is required';
      if (!formData.clientEmail.trim()) newErrors.clientEmail = 'Email is required';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (formData.clientEmail && !emailRegex.test(formData.clientEmail)) newErrors.clientEmail = 'Invalid email';
      if (!formData.clientPronoun) newErrors.clientPronoun = 'Please select how the client should be referred to in the letter';
    } else if (step === 1) {
      if (!formData.recipientTitle.trim()) newErrors.recipientTitle = 'Recipient title is required';
      if (!formData.institutionName.trim()) newErrors.institutionName = 'Institution name is required';
      if (!formData.institutionAddress.trim()) newErrors.institutionAddress = 'Institution address is required';
    } else if (step === 2) {
      if (!formData.issuanceDate) newErrors.issuanceDate = 'Issuance date is required';
    }
    return newErrors;
  };

  const nextStep = (e) => {
    e.preventDefault();
    const stepErrors = validateStep(currentStep);
    if (Object.keys(stepErrors).length) return setErrors(stepErrors);
    setCurrentStep(currentStep + 1);
  };

  const prevStep = (e) => {
    e.preventDefault();
    setCurrentStep(currentStep - 1);
  };

  const API_BASE = import.meta.env.VITE_API_URL ?? '';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allErrors = {};
    for (let i = 0; i < steps.length; i++) {
      Object.assign(allErrors, validateStep(i));
    }
    if (Object.keys(allErrors).length) return setErrors(allErrors);

    setSubmitting(true);
    try {
      const payload = {
        clientName: formData.clientName.trim(),
        clientAddress: formData.clientAddress.trim(),
        clientPhone: formData.clientPhone.trim(),
        clientEmail: formData.clientEmail.trim(),
        clientPronoun: formData.clientPronoun,

        recipientTitle: formData.recipientTitle.trim(),
        institutionName: formData.institutionName.trim(),
        institutionAddress: formData.institutionAddress.trim(),

        purposeDescription: formData.purposeDescription.trim() || undefined,
        issuanceDate: formData.issuanceDate || null
      };

      const resp = await fetch(`${API_BASE}/api/v1/documents/letter-of-attestation/initiate-payment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload)
      });

      const body = await resp.json().catch(() => ({}));

      if (resp.ok && body.payment_url) {
        window.location.href = body.payment_url;
        return;
      }
      const errMsg = body.detail?.[0]?.msg || body.message || 'Payment initialization failed';
      alert(errMsg);
    } catch (err) {
      console.error('Submit error', err);
      alert('Network or unexpected error submitting form.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleClosePaymentAlert = () => {
    setPaymentStatus(null);
    setPaymentMessage('');
    setTransactionRef('');
    setDocumentId('');
    setHasProcessedPayment(false);
  };

  const inputClass = "w-full h-12 px-3 py-3 pr-10 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none bg-white text-grey-3 xl:h-[56px] xl:px-4 xl:pr-12 xl:text-[14px]";
  const labelClass = "block font-inter text-sm text-midnight mb-2 font-semibold xl:text-[14px] xl:mb-1";

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="flex flex-col gap-6 xl:grid xl:grid-cols-2 xl:gap-6">
            <div>
              <label className={labelClass}>Client Full Name</label>
              <input type="text" name="clientName" value={formData.clientName} onChange={handleChange} placeholder="Enter client's full name" required className={inputClass} />
              <p className="text-grey-3 text-xs mt-1">The person the letter attests to — this is who the firm is confirming the identity/address of.</p>
              {errors.clientName && <p className="text-red-500 text-sm mt-1">{errors.clientName}</p>}
            </div>
            <div>
              <label className={labelClass}>Client Address</label>
              <input type="text" name="clientAddress" value={formData.clientAddress} onChange={handleChange} placeholder="Enter client's address" required className={inputClass} />
              {errors.clientAddress && <p className="text-red-500 text-sm mt-1">{errors.clientAddress}</p>}
            </div>
            <div>
              <label className={labelClass}>Phone Number</label>
              <input type="tel" name="clientPhone" value={formData.clientPhone} onChange={handleChange} placeholder="Enter phone" required className={inputClass} />
              {errors.clientPhone && <p className="text-red-500 text-sm mt-1">{errors.clientPhone}</p>}
            </div>
            <div>
              <label className={labelClass}>Email Address</label>
              <input type="email" name="clientEmail" value={formData.clientEmail} onChange={handleChange} placeholder="Enter email" required className={inputClass} />
              <p className="text-grey-3 text-xs mt-1">The letter will be emailed to this address.</p>
              {errors.clientEmail && <p className="text-red-500 text-sm mt-1">{errors.clientEmail}</p>}
            </div>
            <div className="xl:col-span-2">
              <label className={labelClass}>Pronoun</label>
              <select name="clientPronoun" value={formData.clientPronoun} onChange={handleChange} required className={inputClass}>
                <option value="">Select how the client should be referred to</option>
                {PRONOUNS.map((p) => (
                  <option key={p.value} value={p.value}>{p.label}</option>
                ))}
              </select>
              <p className="text-grey-3 text-xs mt-1">The letter refers to the client in the third person — we ask rather than guess.</p>
              {errors.clientPronoun && <p className="text-red-500 text-sm mt-1">{errors.clientPronoun}</p>}
            </div>
          </div>
        );
      case 1:
        return (
          <div className="flex flex-col gap-6 xl:grid xl:grid-cols-2 xl:gap-6">
            <div>
              <label className={labelClass}>Recipient Title</label>
              <input type="text" name="recipientTitle" value={formData.recipientTitle} onChange={handleChange} placeholder="e.g., The Manager" required className={inputClass} />
              {errors.recipientTitle && <p className="text-red-500 text-sm mt-1">{errors.recipientTitle}</p>}
            </div>
            <div>
              <label className={labelClass}>Institution Name</label>
              <input type="text" name="institutionName" value={formData.institutionName} onChange={handleChange} placeholder="e.g., Moniepoint Microfinance Bank" required className={inputClass} />
              {errors.institutionName && <p className="text-red-500 text-sm mt-1">{errors.institutionName}</p>}
            </div>
            <div className="xl:col-span-2">
              <label className={labelClass}>Institution Address</label>
              <input type="text" name="institutionAddress" value={formData.institutionAddress} onChange={handleChange} placeholder="Enter institution's address" required className={inputClass} />
              {errors.institutionAddress && <p className="text-red-500 text-sm mt-1">{errors.institutionAddress}</p>}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col gap-6 xl:grid xl:grid-cols-2 xl:gap-6">
            <div className="xl:col-span-2">
              <label className={labelClass}>Purpose (optional)</label>
              <input type="text" name="purposeDescription" value={formData.purposeDescription} onChange={handleChange} placeholder="e.g., bank account opening, visa application, employment verification" className={inputClass} />
              <p className="text-grey-3 text-xs mt-1">What the client's application is for. Leave blank for a generic "application".</p>
            </div>
            <div>
              <label className={labelClass}>Date</label>
              <input type="date" name="issuanceDate" value={formData.issuanceDate} onChange={handleChange} required className={inputClass} />
              {errors.issuanceDate && <p className="text-red-500 text-sm mt-1">{errors.issuanceDate}</p>}
            </div>
            <div className="xl:col-span-2 bg-white border border-grey rounded-lg p-4 font-inter text-sm text-midnight">
              <p className="font-semibold mb-1">Your letter</p>
              <p>
                Addressed to {formData.recipientTitle || '...'} at {formData.institutionName || '...'}, attesting
                to the identity and address of {formData.clientName || 'the client'}.
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-full container py-10 bg-aqua-haze xl:py-[64px]">
      <div>
        {/* Payment Status Alert */}
        {paymentStatus && (
          <PaymentStatusAlert
            status={paymentStatus}
            message={paymentMessage}
            documentType="letter-of-attestation"
            transactionRef={transactionRef}
            onClose={handleClosePaymentAlert}
          />
        )}

        <div className="mb-8 xl:mb-[16px] font-bold">
          <h2 className="font-inter text-2xl text-medium text-midnight mb-3 xl:text-[28px] xl:leading-[39.12px] xl:tracking-[0.5px]">Fill out the form below to receive your letter!</h2>
        </div>

        <div className="mb-12">
          <div className="flex justify-between items-center mb-2">
            <p className="font-inter text-sm font-bold text-midnight">STEP {currentStep + 1} of {steps.length}</p>
          </div>
          <div className="relative w-full h-2 bg-grey rounded-full">
            <div className="h-full bg-midnight rounded-full transition-all duration-300" style={{ width: `${currentStep === steps.length - 1 ? 100 : currentStep * (100 / (steps.length - 1))}%` }}></div>
          </div>
        </div>

        {/* current step */}
        <div className="mb-12">
          <div className='flex flex-row justify-between'>
            <p className='font-inter bg-white px-2 text-sm md:text-[18px] lg:text-[20px] flex-shrink-0'>{steps[currentStep]}</p>
            <div className="w-[335px] lg:w-full py-4 step"><hr /></div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {renderStep()}
          <div className="flex justify-between mt-8">
            {currentStep > 0 && (
              <button type="button" onClick={prevStep} className="inline-flex pl-[14px] py-2 pb-2 pr-2 md:px-[14px] md:py-3 xl:px-4 xl:py-3 bg-grey text-white cursor-pointer rounded-full hover:opacity-90 transition text-h-1 items-center text-base gap-3 lg:text-[18px] h-12 lg:h-14 xl:ml-0">
                Previous
              </button>
            )}
            {currentStep < steps.length - 1 ? (
              <button type="button" onClick={nextStep} className="inline-flex pl-[14px] py-2 pb-2 pr-2 md:px-[14px] md:py-3 xl:px-4 xl:py-3 bg-midnight text-barley-white cursor-pointer rounded-full hover:opacity-90 transition text-h-1 items-center text-base gap-3 lg:text-[18px] h-12 lg:h-14 xl:ml-0">
                Next
                <div className="bg-secondary rounded-full w-8 h-8 flex items-center justify-center transition-transform">
                  <img src="/arrow.svg" alt="arrow icon" className="bg-secondary w-[10px] h-[10px] stroke-[1.5px]" />
                </div>
              </button>
            ) : (
              <button type="submit" disabled={submitting} className="inline-flex pl-[14px] py-2 pb-2 pr-2 md:px-[14px] md:py-3 xl:px-4 xl:py-3 bg-midnight text-barley-white cursor-pointer rounded-full hover:opacity-90 transition text-h-1 items-center text-base gap-3 lg:text-[18px] h-12 lg:h-14 xl:ml-0 disabled:opacity-50 disabled:cursor-not-allowed">
                {submitting ? 'Submitting...' : 'Generate Document'}
                <div className="bg-secondary rounded-full w-8 h-8 flex items-center justify-center transition-transform">
                  <img src="/arrow.svg" alt="arrow icon" className="bg-secondary w-[10px] h-[10px] stroke-[1.5px]" />
                </div>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
