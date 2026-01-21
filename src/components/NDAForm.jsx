// File: components/NDAForm.jsx
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PaymentStatusAlert from './PaymentStatusAlert';
import { extractAndClearUrlParams, mapPaymentStatus } from '../utils/urlParams';

export default function NDAForm() {
  const location = useLocation();
  
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Step 0: Disclosing Party
    disclosingPartyName: '',
    disclosingPartyAddress: '',
    disclosingPartyPhone: '',
    disclosingPartyEmail: '',
    // Step 1: Receiving Party
    receivingPartyName: '',
    receivingPartyAddress: '',
    // Step 2: Agreement Purpose
    purpose: '',
    confidentialInformation: '',
    exclusions: '',
    // Step 3: Legal Terms
    term: '',
    governingLaw: '',
    jurisdiction: '',
    // Step 4: Effective Date
    effectiveDate: ''
  });
  
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [paymentMessage, setPaymentMessage] = useState('');
  const [transactionRef, setTransactionRef] = useState('');
  const [documentId, setDocumentId] = useState('');
  const [hasProcessedPayment, setHasProcessedPayment] = useState(false);

  const steps = [
    'Disclosing Party Details',
    'Receiving Party Details',
    'Agreement Purpose',
    'Legal Terms',
    'Effective Date & Submit'
  ];

  // Check for payment status on component mount
  useEffect(() => {
    // Prevent processing the same payment multiple times
    if (hasProcessedPayment) return;

    const paramsToExtract = [
      'payment_status',
      'message',
      'transaction_ref',
      'document_id'
    ];

    const extracted = extractAndClearUrlParams(paramsToExtract);

    if (extracted.payment_status) {
      const frontendStatus = mapPaymentStatus(extracted.payment_status);
      
      setPaymentStatus(frontendStatus);
      setPaymentMessage(extracted.message || getDefaultMessage(frontendStatus));
      setTransactionRef(extracted.transaction_ref || '');
      setDocumentId(extracted.document_id || '');
      setHasProcessedPayment(true);

      // If payment was successful, reset the form
      if (frontendStatus === 'success') {
        setTimeout(() => resetForm(), 100); // Small delay for better UX
      }
    }
  }, []);

  const getDefaultMessage = (status) => {
    const messages = {
      'success': 'Payment successful! Your NDA document is being generated and will be emailed to you shortly.',
      'pending': 'Payment pending. Please wait for confirmation.',
      'failed': 'Payment failed. Please try again or contact support if the issue persists.'
    };
    return messages[status] || 'Payment status unknown.';
  };

  const resetForm = () => {
    setFormData({
      disclosingPartyName: '',
      disclosingPartyAddress: '',
      disclosingPartyPhone: '',
      disclosingPartyEmail: '',
      receivingPartyName: '',
      receivingPartyAddress: '',
      purpose: '',
      confidentialInformation: '',
      exclusions: '',
      term: '',
      governingLaw: '',
      jurisdiction: '',
      effectiveDate: ''
    });
    setCurrentStep(0);
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const validateStep = (step) => {
    const newErrors = {};
    if (step === 0) {
      if (!formData.disclosingPartyName.trim()) newErrors.disclosingPartyName = 'Disclosing party name is required';
      if (!formData.disclosingPartyAddress.trim()) newErrors.disclosingPartyAddress = 'Address is required';
      if (!formData.disclosingPartyPhone.trim()) newErrors.disclosingPartyPhone = 'Phone is required';
      if (!formData.disclosingPartyEmail.trim()) newErrors.disclosingPartyEmail = 'Email is required';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.disclosingPartyEmail)) newErrors.disclosingPartyEmail = 'Invalid email';
    } else if (step === 1) {
      if (!formData.receivingPartyName.trim()) newErrors.receivingPartyName = 'Receiving party name is required';
      if (!formData.receivingPartyAddress.trim()) newErrors.receivingPartyAddress = 'Address is required';
    } else if (step === 2) {
      if (!formData.purpose.trim()) newErrors.purpose = 'Purpose is required';
      if (!formData.confidentialInformation.trim()) newErrors.confidentialInformation = 'Confidential information description is required';
    } else if (step === 3) {
      if (!formData.term.trim()) newErrors.term = 'Term is required';
      if (!formData.governingLaw.trim()) newErrors.governingLaw = 'Governing law is required';
      if (!formData.jurisdiction.trim()) newErrors.jurisdiction = 'Jurisdiction is required';
    } else if (step === 4) {
      if (!formData.effectiveDate) newErrors.effectiveDate = 'Effective date is required';
    }
    return newErrors;
  };

  const nextStep = () => {
    const stepErrors = validateStep(currentStep);
    if (Object.keys(stepErrors).length) return setErrors(stepErrors);
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => setCurrentStep(currentStep - 1);

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
        disclosingPartyName: formData.disclosingPartyName.trim(),
        disclosingPartyAddress: formData.disclosingPartyAddress.trim(),
        disclosingPartyPhone: formData.disclosingPartyPhone.trim(),
        disclosingPartyEmail: formData.disclosingPartyEmail.trim(),
        receivingPartyName: formData.receivingPartyName.trim(),
        receivingPartyAddress: formData.receivingPartyAddress.trim(),
        purpose: formData.purpose.trim(),
        confidentialInformation: formData.confidentialInformation.trim(),
        exclusions: formData.exclusions?.trim() || null,
        term: formData.term.trim(),
        governingLaw: formData.governingLaw.trim(),
        jurisdiction: formData.jurisdiction.trim(),
        effectiveDate: formData.effectiveDate || null
      };

      const resp = await fetch(`${API_BASE}/api/v1/documents/nda/initiate-payment`, {
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
    setHasProcessedPayment(false); // Reset to allow processing new payments
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="flex flex-col gap-6 xl:grid xl:grid-cols-2 xl:gap-6">
            <div>
              <label className="block font-inter text-sm text-midnight mb-2 font-semibold xl:text-[14px] xl:mb-1">Disclosing Party Name</label>
              <input type="text" name="disclosingPartyName" value={formData.disclosingPartyName} onChange={handleChange} placeholder="e.g., Supra Montem Attorneys" required className="w-full h-12 px-3 py-3 pr-10 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none bg-white text-grey-3 xl:h-[56px] xl:px-4 xl:pr-12 xl:text-[14px]" />
              {errors.disclosingPartyName && <p className="text-red-500 text-sm mt-1">{errors.disclosingPartyName}</p>}
            </div>
            <div>
              <label className="block font-inter text-sm text-midnight mb-2 font-semibold xl:text-[14px] xl:mb-1">Address</label>
              <input type="text" name="disclosingPartyAddress" value={formData.disclosingPartyAddress} onChange={handleChange} placeholder="Enter address" required className="w-full h-12 px-3 py-3 pr-10 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none bg-white text-grey-3 xl:h-[56px] xl:px-4 xl:pr-12 xl:text-[14px]" />
              {errors.disclosingPartyAddress && <p className="text-red-500 text-sm mt-1">{errors.disclosingPartyAddress}</p>}
            </div>
            <div>
              <label className="block font-inter text-sm text-midnight mb-2 font-semibold xl:text-[14px] xl:mb-1">Phone Number</label>
              <input type="tel" name="disclosingPartyPhone" value={formData.disclosingPartyPhone} onChange={handleChange} placeholder="Enter phone" required className="w-full h-12 px-3 py-3 pr-10 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none bg-white text-grey-3 xl:h-[56px] xl:px-4 xl:pr-12 xl:text-[14px]" />
              {errors.disclosingPartyPhone && <p className="text-red-500 text-sm mt-1">{errors.disclosingPartyPhone}</p>}
            </div>
            <div>
              <label className="block font-inter text-sm text-midnight mb-2 font-semibold xl:text-[14px] xl:mb-1">Email Address</label>
              <input type="email" name="disclosingPartyEmail" value={formData.disclosingPartyEmail} onChange={handleChange} placeholder="Enter email" required className="w-full h-12 px-3 py-3 pr-10 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none bg-white text-grey-3 xl:h-[56px] xl:px-4 xl:pr-12 xl:text-[14px]" />
              {errors.disclosingPartyEmail && <p className="text-red-500 text-sm mt-1">{errors.disclosingPartyEmail}</p>}
            </div>
          </div>
        );
      case 1:
        return (
          <div className="flex flex-col gap-6 xl:grid xl:grid-cols-1 xl:gap-6">
            <div>
              <label className="block font-inter text-sm text-midnight mb-2 font-semibold xl:text-[14px] xl:mb-1">Receiving Party Name</label>
              <input type="text" name="receivingPartyName" value={formData.receivingPartyName} onChange={handleChange} placeholder="Enter receiving party name" required className="w-full h-12 px-3 py-3 pr-10 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none bg-white text-grey-3 xl:h-[56px] xl:px-4 xl:pr-12 xl:text-[14px]" />
              {errors.receivingPartyName && <p className="text-red-500 text-sm mt-1">{errors.receivingPartyName}</p>}
            </div>
            <div>
              <label className="block font-inter text-sm text-midnight mb-2 font-semibold xl:text-[14px] xl:mb-1">Receiving Party Address</label>
              <input type="text" name="receivingPartyAddress" value={formData.receivingPartyAddress} onChange={handleChange} placeholder="Enter address" required className="w-full h-12 px-3 py-3 pr-10 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none bg-white text-grey-3 xl:h-[56px] xl:px-4 xl:pr-12 xl:text-[14px]" />
              {errors.receivingPartyAddress && <p className="text-red-500 text-sm mt-1">{errors.receivingPartyAddress}</p>}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col gap-6 xl:grid xl:grid-cols-1 xl:gap-6">
            <div>
              <label className="block font-inter text-sm text-midnight mb-2 font-semibold xl:text-[14px] xl:mb-1">Purpose of Disclosure</label>
              <textarea name="purpose" value={formData.purpose} onChange={handleChange} placeholder="Describe the purpose of disclosing confidential information" required className="w-full h-32 px-3 py-3 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none resize-none bg-white xl:h-[158px] xl:px-4 xl:pr-12 xl:text-[14px]" />
              {errors.purpose && <p className="text-red-500 text-sm mt-1">{errors.purpose}</p>}
            </div>
            <div>
              <label className="block font-inter text-sm text-midnight mb-2 font-semibold xl:text-[14px] xl:mb-1">Confidential Information</label>
              <textarea name="confidentialInformation" value={formData.confidentialInformation} onChange={handleChange} placeholder="Describe the confidential information being disclosed" required className="w-full h-32 px-3 py-3 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none resize-none bg-white xl:h-[158px] xl:px-4 xl:pr-12 xl:text-[14px]" />
              {errors.confidentialInformation && <p className="text-red-500 text-sm mt-1">{errors.confidentialInformation}</p>}
            </div>
            <div>
              <label className="block font-inter text-sm text-midnight mb-2 font-semibold xl:text-[14px] xl:mb-1">Exclusions (optional)</label>
              <textarea name="exclusions" value={formData.exclusions} onChange={handleChange} placeholder="Any exclusions from confidential information" className="w-full h-32 px-3 py-3 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none resize-none bg-white xl:h-[158px] xl:px-4 xl:pr-12 xl:text-[14px]" />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col gap-6 xl:grid xl:grid-cols-1 xl:gap-6">
            <div>
              <label className="block font-inter text-sm text-midnight mb-2 font-semibold xl:text-[14px] xl:mb-1">Term of Agreement</label>
              <input type="text" name="term" value={formData.term} onChange={handleChange} placeholder="e.g., 2 years" required className="w-full h-12 px-3 py-3 pr-10 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none bg-white text-grey-3 xl:h-[56px] xl:px-4 xl:pr-12 xl:text-[14px]" />
              {errors.term && <p className="text-red-500 text-sm mt-1">{errors.term}</p>}
            </div>
            <div>
              <label className="block font-inter text-sm text-midnight mb-2 font-semibold xl:text-[14px] xl:mb-1">Governing Law</label>
              <input type="text" name="governingLaw" value={formData.governingLaw} onChange={handleChange} placeholder="e.g., Nigeria" required className="w-full h-12 px-3 py-3 pr-10 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none bg-white text-grey-3 xl:h-[56px] xl:px-4 xl:pr-12 xl:text-[14px]" />
              {errors.governingLaw && <p className="text-red-500 text-sm mt-1">{errors.governingLaw}</p>}
            </div>
            <div>
              <label className="block font-inter text-sm text-midnight mb-2 font-semibold xl:text-[14px] xl:mb-1">Jurisdiction</label>
              <input type="text" name="jurisdiction" value={formData.jurisdiction} onChange={handleChange} placeholder="e.g., Lagos Courts" required className="w-full h-12 px-3 py-3 pr-10 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none bg-white text-grey-3 xl:h-[56px] xl:px-4 xl:pr-12 xl:text-[14px]" />
              {errors.jurisdiction && <p className="text-red-500 text-sm mt-1">{errors.jurisdiction}</p>}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="flex flex-col gap-6 xl:grid xl:grid-cols-1 xl:gap-6">
            <div>
              <label className="block font-inter text-sm text-midnight mb-2 font-semibold xl:text-[14px] xl:mb-1">Effective Date</label>
              <input type="date" name="effectiveDate" value={formData.effectiveDate} onChange={handleChange} required className="w-full h-12 px-3 py-3 pr-10 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none bg-white text-grey-3 xl:h-[56px] xl:px-4 xl:pr-12 xl:text-[14px]" />
              {errors.effectiveDate && <p className="text-red-500 text-sm mt-1">{errors.effectiveDate}</p>}
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
            documentType="nda"
            transactionRef={transactionRef}
            onClose={handleClosePaymentAlert}
          />
        )}

        <div className="mb-8 xl:mb-[16px] font-bold">
          <h2 className="font-inter text-2xl text-medium text-midnight mb-3 xl:text-[28px] xl:leading-[39.12px] xl:tracking-[0.5px]">Fill out the form below to receive your NDA document!</h2>
        </div>

        <div className="mb-12">
          <div className="flex justify-between items-center mb-2">
            <p className="font-inter text-sm font-bold text-midnight">STEP {currentStep + 1} of {steps.length}</p>
          </div>
          <div className="relative w-full h-2 bg-grey rounded-full">
            <div className="h-full bg-midnight rounded-full transition-all duration-300" style={{ width: `${currentStep === steps.length - 1 ? 100 : currentStep * 20}%` }}></div>
            <p className="text-right font-inter font-bold text-sm text-midnight">{currentStep === steps.length - 1 ? 100 : currentStep * 20}%</p>
          </div>
        </div>

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