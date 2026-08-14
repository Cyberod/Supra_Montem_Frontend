// File: components/SevenDayNoticeForm.jsx
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PaymentStatusAlert from './PaymentStatusAlert';
import { extractAndClearUrlParams, mapPaymentStatus } from '../utils/urlParams';
import { GENERATION_DISABLED, GENERATION_DISABLED_MESSAGE } from '../utils/featureFlags';

const NIGERIAN_STATES = [
  'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue',
  'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu',
  'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi',
  'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo',
  'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara',
  'Federal Capital Territory',
];

export default function SevenDayNoticeForm() {
  const location = useLocation();

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Step 1: Landlord
    landlordName: '',
    landlordAddress: '',
    landlordPhone: '',
    landlordEmail: '',
    // Step 2: Tenant
    tenantName: '',
    tenantAddress: '',
    tenantPhone: '',
    // Step 3: Property
    propertyDescription: '',
    propertyAddress: '',
    propertyState: '',
    // Step 4: Notice
    noticeToQuitExpiryDate: '',
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
    'Landlord Details',
    'Tenant Details',
    'Property Details',
    'Notice Dates & Submit'
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
        setTimeout(() => resetForm(), 100);
      }
    }
  }, []);

  const getDefaultMessage = (status) => {
    const messages = {
      'success': 'Payment successful! Your document is being generated and will be emailed to you shortly.',
      'pending': 'Payment pending. Please wait for confirmation.',
      'failed': 'Payment failed. Please try again or contact support if the issue persists.'
    };
    return messages[status] || 'Payment status unknown.';
  };

  const resetForm = () => {
    setFormData({
      landlordName: '',
      landlordAddress: '',
      landlordPhone: '',
      landlordEmail: '',
      tenantName: '',
      tenantAddress: '',
      tenantPhone: '',
      propertyDescription: '',
      propertyAddress: '',
      propertyState: '',
      noticeToQuitExpiryDate: '',
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
      if (!formData.landlordName.trim()) newErrors.landlordName = 'Landlord name is required';
      if (!formData.landlordAddress.trim()) newErrors.landlordAddress = 'Address is required';
      if (!formData.landlordPhone.trim()) newErrors.landlordPhone = 'Phone is required';
      if (!formData.landlordEmail.trim()) newErrors.landlordEmail = 'Email is required';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.landlordEmail)) newErrors.landlordEmail = 'Invalid email';
    } else if (step === 1) {
      if (!formData.tenantName.trim()) newErrors.tenantName = 'Tenant name is required';
      if (!formData.tenantAddress.trim()) newErrors.tenantAddress = 'Tenant address is required';
    } else if (step === 2) {
      if (!formData.propertyDescription.trim()) newErrors.propertyDescription = 'Property description is required';
      if (!formData.propertyAddress.trim()) newErrors.propertyAddress = 'Property address is required';
      if (!formData.propertyState) newErrors.propertyState = 'State is required';
    } else if (step === 3) {
      if (!formData.noticeToQuitExpiryDate) newErrors.noticeToQuitExpiryDate = 'The prior Notice to Quit expiry date is required';
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
    if (GENERATION_DISABLED) return alert(GENERATION_DISABLED_MESSAGE);
    const allErrors = {};
    for (let i = 0; i < steps.length; i++) {
      Object.assign(allErrors, validateStep(i));
    }
    if (Object.keys(allErrors).length) return setErrors(allErrors);

    setSubmitting(true);
    try {
      const payload = {
        landlordName: formData.landlordName.trim(),
        landlordAddress: formData.landlordAddress.trim(),
        landlordPhone: formData.landlordPhone.trim(),
        landlordEmail: formData.landlordEmail.trim(),

        tenantName: formData.tenantName.trim(),
        tenantAddress: formData.tenantAddress.trim(),
        tenantPhone: formData.tenantPhone?.trim() || null,

        propertyDescription: formData.propertyDescription.trim(),
        propertyAddress: formData.propertyAddress.trim(),
        propertyState: formData.propertyState,

        noticeToQuitExpiryDate: formData.noticeToQuitExpiryDate || null,
        issuanceDate: formData.issuanceDate || null
      };

      const resp = await fetch(`${API_BASE}/api/v1/documents/seven-day-notice/initiate-payment`, {
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

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="flex flex-col gap-6 xl:grid xl:grid-cols-2 xl:gap-6">
            <div>
              <label className="block font-inter text-sm text-midnight mb-2 font-semibold xl:text-[14px] xl:mb-1">Landlord Full Name</label>
              <input type="text" name="landlordName" value={formData.landlordName} onChange={handleChange} placeholder="Enter full name" required className="w-full h-12 px-3 py-3 pr-10 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none bg-white text-grey-3 xl:h-[56px] xl:px-4 xl:pr-12 xl:text-[14px]" />
              {errors.landlordName && <p className="text-red-500 text-sm mt-1">{errors.landlordName}</p>}
            </div>
            <div>
              <label className="block font-inter text-sm text-midnight mb-2 font-semibold xl:text-[14px] xl:mb-1">Address</label>
              <input type="text" name="landlordAddress" value={formData.landlordAddress} onChange={handleChange} placeholder="Enter address" required className="w-full h-12 px-3 py-3 pr-10 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none bg-white text-grey-3 xl:h-[56px] xl:px-4 xl:pr-12 xl:text-[14px]" />
              {errors.landlordAddress && <p className="text-red-500 text-sm mt-1">{errors.landlordAddress}</p>}
            </div>
            <div>
              <label className="block font-inter text-sm text-midnight mb-2 font-semibold xl:text-[14px] xl:mb-1">Phone Number</label>
              <input type="tel" name="landlordPhone" value={formData.landlordPhone} onChange={handleChange} placeholder="Enter phone" required className="w-full h-12 px-3 py-3 pr-10 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none bg-white text-grey-3 xl:h-[56px] xl:px-4 xl:pr-12 xl:text-[14px]" />
              {errors.landlordPhone && <p className="text-red-500 text-sm mt-1">{errors.landlordPhone}</p>}
            </div>
            <div>
              <label className="block font-inter text-sm text-midnight mb-2 font-semibold xl:text-[14px] xl:mb-1">Email Address</label>
              <input type="email" name="landlordEmail" value={formData.landlordEmail} onChange={handleChange} placeholder="Enter email" required className="w-full h-12 px-3 py-3 pr-10 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none bg-white text-grey-3 xl:h-[56px] xl:px-4 xl:pr-12 xl:text-[14px]" />
              {errors.landlordEmail && <p className="text-red-500 text-sm mt-1">{errors.landlordEmail}</p>}
            </div>
          </div>
        );
      case 1:
        return (
          <div className="flex flex-col gap-6 xl:grid xl:grid-cols-1 xl:gap-6">
            <div>
              <label className="block font-inter text-sm text-midnight mb-2 font-semibold xl:text-[14px] xl:mb-1">Tenant Full Name</label>
              <input type="text" name="tenantName" value={formData.tenantName} onChange={handleChange} placeholder="Enter tenant name" required className="w-full h-12 px-3 py-3 pr-10 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none bg-white text-grey-3 xl:h-[56px] xl:px-4 xl:pr-12 xl:text-[14px]" />
              {errors.tenantName && <p className="text-red-500 text-sm mt-1">{errors.tenantName}</p>}
            </div>
            <div>
              <label className="block font-inter text-sm text-midnight mb-2 font-semibold xl:text-[14px] xl:mb-1">Tenant Address</label>
              <input type="text" name="tenantAddress" value={formData.tenantAddress} onChange={handleChange} placeholder="Enter tenant address (used for the 'For Service On' block)" required className="w-full h-12 px-3 py-3 pr-10 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none bg-white text-grey-3 xl:h-[56px] xl:px-4 xl:pr-12 xl:text-[14px]" />
              {errors.tenantAddress && <p className="text-red-500 text-sm mt-1">{errors.tenantAddress}</p>}
            </div>
            <div>
              <label className="block font-inter text-sm text-midnight mb-2 font-semibold xl:text-[14px] xl:mb-1">Tenant Phone Number (optional)</label>
              <input type="tel" name="tenantPhone" value={formData.tenantPhone} onChange={handleChange} placeholder="For the 'For Service On' block" className="w-full h-12 px-3 py-3 pr-10 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none bg-white text-grey-3 xl:h-[56px] xl:px-4 xl:pr-12 xl:text-[14px]" />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col gap-6 xl:grid xl:grid-cols-1 xl:gap-6">
            <div>
              <label className="block font-inter text-sm text-midnight mb-2 font-semibold xl:text-[14px] xl:mb-1">Property Description</label>
              <input type="text" name="propertyDescription" value={formData.propertyDescription} onChange={handleChange} placeholder="e.g., One (1) Bedroom Apartment, Shop No. 4" required className="w-full h-12 px-3 py-3 pr-10 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none bg-white text-grey-3 xl:h-[56px] xl:px-4 xl:pr-12 xl:text-[14px]" />
              {errors.propertyDescription && <p className="text-red-500 text-sm mt-1">{errors.propertyDescription}</p>}
            </div>
            <div>
              <label className="block font-inter text-sm text-midnight mb-2 font-semibold xl:text-[14px] xl:mb-1">Property Address</label>
              <input type="text" name="propertyAddress" value={formData.propertyAddress} onChange={handleChange} placeholder="Full property address" required className="w-full h-12 px-3 py-3 pr-10 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none bg-white text-grey-3 xl:h-[56px] xl:px-4 xl:pr-12 xl:text-[14px]" />
              {errors.propertyAddress && <p className="text-red-500 text-sm mt-1">{errors.propertyAddress}</p>}
            </div>
            <div>
              <label className="block font-inter text-sm text-midnight mb-2 font-semibold xl:text-[14px] xl:mb-1">State Where Property Is Located</label>
              <select name="propertyState" value={formData.propertyState} onChange={handleChange} required className="w-full h-12 px-3 py-3 pr-10 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none bg-white text-grey-3 xl:h-[56px] xl:px-4 xl:pr-12 xl:text-[14px]">
                <option value="">Select state</option>
                {NIGERIAN_STATES.map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
              {errors.propertyState && <p className="text-red-500 text-sm mt-1">{errors.propertyState}</p>}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col gap-6 xl:grid xl:grid-cols-2 xl:gap-6">
            <div>
              <label className="block font-inter text-sm text-midnight mb-2 font-semibold xl:text-[14px] xl:mb-1">Notice to Quit Expiry Date</label>
              <input type="date" name="noticeToQuitExpiryDate" value={formData.noticeToQuitExpiryDate} onChange={handleChange} required className="w-full h-12 px-3 py-3 pr-10 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none bg-white text-grey-3 xl:h-[56px] xl:px-4 xl:pr-12 xl:text-[14px]" />
              <p className="text-midnight text-sm mt-1">The date the prior Notice to Quit expired, referenced in this notice.</p>
              {errors.noticeToQuitExpiryDate && <p className="text-red-500 text-sm mt-1">{errors.noticeToQuitExpiryDate}</p>}
            </div>
            <div>
              <label className="block font-inter text-sm text-midnight mb-2 font-semibold xl:text-[14px] xl:mb-1">Issuance Date</label>
              <input type="date" name="issuanceDate" value={formData.issuanceDate} onChange={handleChange} required className="w-full h-12 px-3 py-3 pr-10 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none bg-white text-grey-3 xl:h-[56px] xl:px-4 xl:pr-12 xl:text-[14px]" />
              {errors.issuanceDate && <p className="text-red-500 text-sm mt-1">{errors.issuanceDate}</p>}
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
            documentType="seven-day-notice"
            transactionRef={transactionRef}
            onClose={handleClosePaymentAlert}
          />
        )}

        <div className="mb-8 xl:mb-[16px] font-bold">
          <h2 className="font-inter text-2xl text-medium text-midnight mb-3 xl:text-[28px] xl:leading-[39.12px] xl:tracking-[0.5px]">Fill out the form below to receive your document!</h2>
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
              <button type="submit" disabled={submitting || GENERATION_DISABLED} className="inline-flex pl-[14px] py-2 pb-2 pr-2 md:px-[14px] md:py-3 xl:px-4 xl:py-3 bg-midnight text-barley-white cursor-pointer rounded-full hover:opacity-90 transition text-h-1 items-center text-base gap-3 lg:text-[18px] h-12 lg:h-14 xl:ml-0 disabled:opacity-50 disabled:cursor-not-allowed">
                {submitting ? 'Submitting...' : GENERATION_DISABLED ? 'Coming Soon' : 'Generate Document'}
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
