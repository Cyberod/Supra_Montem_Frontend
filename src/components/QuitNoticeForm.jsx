// File: components/QuitNoticeForm.jsx
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PaymentStatusAlert from './PaymentStatusAlert';
import { extractAndClearUrlParams, mapPaymentStatus } from '../utils/urlParams';
import { GENERATION_DISABLED, GENERATION_DISABLED_MESSAGE } from '../utils/featureFlags';
import { openDocumentPreview } from '../utils/documentPreview';

const TENANCY_TYPES = [
  { value: 'AT_WILL', label: 'Tenant at Will (no fixed lease)', notice: '7 days' },
  { value: 'WEEKLY', label: 'Weekly Tenancy', notice: '7 days' },
  { value: 'MONTHLY', label: 'Monthly Tenancy', notice: '1 month (30 days)' },
  { value: 'QUARTERLY', label: 'Quarterly Tenancy', notice: '3 months (90 days)' },
  { value: 'HALF_YEARLY', label: 'Half-Yearly Tenancy', notice: '3 months (90 days)' },
  { value: 'YEARLY', label: 'Yearly Tenancy', notice: '6 months (180 days)' },
];

const NIGERIAN_STATES = [
  'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue',
  'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu',
  'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi',
  'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo',
  'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara',
  'Federal Capital Territory',
];

export default function QuitNoticeForm() {
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
    rentalAddress: '',
    tenantPhone: '',
    occupants: '',
    // Step 3: Lease
    leaseStartDate: '',
    leaseEndDate: '',
    rentAmount: '',
    leaseClauses: '',
    // Step 4: Notice
    noticeReason: '',
    tenancyType: '',
    amountsDue: '',
    // Step 5: Property
    propertyDescription: '',
    propertyAddress: '',
    propertyState: '',
    issuanceDate: ''
  });
  
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [previewing, setPreviewing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [paymentMessage, setPaymentMessage] = useState('');
  const [transactionRef, setTransactionRef] = useState('');
  const [documentId, setDocumentId] = useState('');
  const [hasProcessedPayment, setHasProcessedPayment] = useState(false);

  const steps = [
    'Landlord Details',
    'Tenant Details',
    'Lease Information',
    'Notice Details',
    'Property & Submit'
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
      'success': 'Payment successful! Your quit notice document is being generated and will be emailed to you shortly.',
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
      rentalAddress: '',
      tenantPhone: '',
      occupants: '',
      leaseStartDate: '',
      leaseEndDate: '',
      rentAmount: '',
      leaseClauses: '',
      noticeReason: '',
      tenancyType: '',
      amountsDue: '',
      propertyDescription: '',
      propertyAddress: '',
      propertyState: '',
      issuanceDate: ''
    });
    setCurrentStep(0);
    setErrors({});
  };

  const handleChange = (e) => {
    let value = e.target.value;
    if (e.target.type === 'email') value = value.trim();
    if (e.target.name === 'rentAmount') {
      value = value.replace(/,/g, '');
    }
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
      if (!formData.rentalAddress.trim()) newErrors.rentalAddress = 'Rental address is required';
    } else if (step === 2) {
      if (!formData.leaseStartDate) newErrors.leaseStartDate = 'Lease start date is required';
      if (!formData.rentAmount.trim()) newErrors.rentAmount = 'Rent amount is required';
    } else if (step === 3) {
      if (!formData.noticeReason.trim()) newErrors.noticeReason = 'Reason is required';
      if (!formData.tenancyType) newErrors.tenancyType = 'Tenancy type is required';
    } else if (step === 4) {
      if (!formData.propertyDescription.trim()) newErrors.propertyDescription = 'Property description is required';
      if (!formData.propertyAddress.trim()) newErrors.propertyAddress = 'Property address is required';
      if (!formData.propertyState) newErrors.propertyState = 'State is required';
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

  const validateAllSteps = () => {
    const allErrors = {};
    for (let i = 0; i < steps.length; i++) {
      Object.assign(allErrors, validateStep(i));
    }
    return allErrors;
  };

  const buildPayload = () => ({
    landlordName: formData.landlordName.trim(),
    landlordAddress: formData.landlordAddress.trim(),
    landlordPhone: formData.landlordPhone.trim(),
    landlordEmail: formData.landlordEmail.trim(),

    tenantName: formData.tenantName.trim(),
    rentalAddress: formData.rentalAddress.trim(),
    tenantPhone: formData.tenantPhone?.trim() || null,
    occupants: formData.occupants?.trim() || null,

    leaseStartDate: formData.leaseStartDate || null,
    leaseEndDate: formData.leaseEndDate || null,

    rentAmount: formData.rentAmount === '' || formData.rentAmount == null
      ? null
      : Number(String(formData.rentAmount).replace(/,/g, '')),

    leaseClauses: formData.leaseClauses?.trim() || null,

    noticeReason: formData.noticeReason.trim(),
    tenancyType: formData.tenancyType,
    amountsDue: formData.amountsDue?.trim() || null,

    propertyDescription: formData.propertyDescription.trim(),
    propertyAddress: formData.propertyAddress.trim(),
    propertyState: formData.propertyState,
    issuanceDate: formData.issuanceDate || null
  });

  const handlePreview = async () => {
    const allErrors = validateAllSteps();
    if (Object.keys(allErrors).length) return setErrors(allErrors);

    setPreviewing(true);
    try {
      await openDocumentPreview(API_BASE, 'quit-notice', buildPayload());
    } catch (err) {
      console.error('Preview error', err);
      alert(err.message);
    } finally {
      setPreviewing(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (GENERATION_DISABLED) return alert(GENERATION_DISABLED_MESSAGE);
    const allErrors = validateAllSteps();
    if (Object.keys(allErrors).length) return setErrors(allErrors);

    setSubmitting(true);
    try {
      const resp = await fetch(`${API_BASE}/api/v1/documents/quit-notice/initiate-payment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(buildPayload())
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
              <label className="block font-inter text-sm text-midnight mb-2 font-semibold xl:text-[14px] xl:mb-1">Rental Address</label>
              <input type="text" name="rentalAddress" value={formData.rentalAddress} onChange={handleChange} placeholder="Enter rental address" required className="w-full h-12 px-3 py-3 pr-10 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none bg-white text-grey-3 xl:h-[56px] xl:px-4 xl:pr-12 xl:text-[14px]" />
              {errors.rentalAddress && <p className="text-red-500 text-sm mt-1">{errors.rentalAddress}</p>}
            </div>
            <div>
              <label className="block font-inter text-sm text-midnight mb-2 font-semibold xl:text-[14px] xl:mb-1">Tenant Phone Number (optional)</label>
              <input type="tel" name="tenantPhone" value={formData.tenantPhone} onChange={handleChange} placeholder="For the 'For Service On' block" className="w-full h-12 px-3 py-3 pr-10 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none bg-white text-grey-3 xl:h-[56px] xl:px-4 xl:pr-12 xl:text-[14px]" />
            </div>
            <div>
              <label className="block font-inter text-sm text-midnight mb-2 font-semibold xl:text-[14px] xl:mb-1">Occupants (optional)</label>
              <input type="text" name="occupants" value={formData.occupants} onChange={handleChange} placeholder="List any additional occupants" className="w-full h-12 px-3 py-3 pr-10 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none bg-white text-grey-3 xl:h-[56px] xl:px-4 xl:pr-12 xl:text-[14px]" />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col gap-6 xl:grid xl:grid-cols-2 xl:gap-6">
            <div>
              <label className="block font-inter text-sm text-midnight mb-2 font-semibold xl:text-[14px] xl:mb-1">Lease Start Date</label>
              <input type="date" name="leaseStartDate" value={formData.leaseStartDate} onChange={handleChange} required className="w-full h-12 px-3 py-3 pr-10 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none bg-white text-grey-3 xl:h-[56px] xl:px-4 xl:pr-12 xl:text-[14px]" />
              {errors.leaseStartDate && <p className="text-red-500 text-sm mt-1">{errors.leaseStartDate}</p>}
            </div>
            <div>
              <label className="block font-inter text-sm text-midnight mb-2 font-semibold xl:text-[14px] xl:mb-1">Lease End Date</label>
              <input type="date" name="leaseEndDate" value={formData.leaseEndDate} onChange={handleChange} className="w-full h-12 px-3 py-3 pr-10 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none bg-white text-grey-3 xl:h-[56px] xl:px-4 xl:pr-12 xl:text-[14px]" />
            </div>
            <div>
              <label className="block font-inter text-sm text-midnight mb-2 font-semibold xl:text-[14px] xl:mb-1">Monthly Rent Amount (₦)</label>
              <input type="number" name="rentAmount" value={formData.rentAmount} onChange={handleChange} placeholder="e.g., 500000" required className="w-full h-12 px-3 py-3 pr-10 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none bg-white text-grey-3 xl:h-[56px] xl:px-4 xl:pr-12 xl:text-[14px]" />
              {errors.rentAmount && <p className="text-red-500 text-sm mt-1">{errors.rentAmount}</p>}
            </div>
            <div>
              <label className="block font-inter text-sm text-midnight mb-2 font-semibold xl:text-[14px] xl:mb-1">Relevant Lease Clauses</label>
              <textarea name="leaseClauses" value={formData.leaseClauses} onChange={handleChange} placeholder="Describe any relevant clauses" className="w-full h-32 px-3 py-3 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none resize-none bg-white xl:h-[158px] xl:px-4 xl:pr-12 xl:text-[14px]" />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col gap-6 xl:grid xl:grid-cols-1 xl:gap-6">
            <div>
              <label className="block font-inter text-sm text-midnight mb-2 font-semibold xl:text-[14px] xl:mb-1">Reason for Notice</label>
              <textarea name="noticeReason" value={formData.noticeReason} onChange={handleChange} placeholder="e.g., Non-payment of rent" required className="w-full h-32 px-3 py-3 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none resize-none bg-white xl:h-[158px] xl:px-4 xl:pr-12 xl:text-[14px]" />
              {errors.noticeReason && <p className="text-red-500 text-sm mt-1">{errors.noticeReason}</p>}
            </div>
            <div>
              <label className="block font-inter text-sm text-midnight mb-2 font-semibold xl:text-[14px] xl:mb-1">Tenancy Type</label>
              <select name="tenancyType" value={formData.tenancyType} onChange={handleChange} required className="w-full h-12 px-3 py-3 pr-10 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none bg-white text-grey-3 xl:h-[56px] xl:px-4 xl:pr-12 xl:text-[14px]">
                <option value="">Select tenancy type</option>
                {TENANCY_TYPES.map((type) => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
              {formData.tenancyType && (
                <p className="text-midnight text-sm mt-1">
                  Statutory notice period: <span className="font-semibold">{TENANCY_TYPES.find((t) => t.value === formData.tenancyType)?.notice}</span> (applied automatically)
                </p>
              )}
              {errors.tenancyType && <p className="text-red-500 text-sm mt-1">{errors.tenancyType}</p>}
            </div>
            <div>
              <label className="block font-inter text-sm text-midnight mb-2 font-semibold xl:text-[14px] xl:mb-1">Amounts Due (if any)</label>
              <input type="text" name="amountsDue" value={formData.amountsDue} onChange={handleChange} placeholder="e.g., ₦150,000 overdue rent" className="w-full h-12 px-3 py-3 pr-10 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none bg-white text-grey-3 xl:h-[56px] xl:px-4 xl:pr-12 xl:text-[14px]" />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="flex flex-col gap-6 xl:grid xl:grid-cols-1 xl:gap-6">
            <div>
              <label className="block font-inter text-sm text-midnight mb-2 font-semibold xl:text-[14px] xl:mb-1">Property Description</label>
              <input type="text" name="propertyDescription" value={formData.propertyDescription} onChange={handleChange} placeholder="e.g., Two (2) Bedroom Flat, Self-Contained Apartment, Shop No. 4" required className="w-full h-12 px-3 py-3 pr-10 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none bg-white text-grey-3 xl:h-[56px] xl:px-4 xl:pr-12 xl:text-[14px]" />
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
            documentType="quit-notice"
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
            <div className="h-full bg-midnight rounded-full transition-all duration-300" style={{ width: `${currentStep === steps.length - 1 ? 100 : currentStep * 20}%` }}></div>
            <p className="text-right font-inter font-bold text-sm text-midnight">{currentStep === steps.length - 1 ? 100 : currentStep * 20}%</p>
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
              <div className="flex flex-wrap gap-3">
                <button type="button" onClick={handlePreview} disabled={previewing} className="inline-flex px-4 py-3 border-2 border-midnight text-midnight cursor-pointer rounded-full hover:opacity-90 transition text-h-1 items-center text-base lg:text-[18px] h-12 lg:h-14 disabled:opacity-50 disabled:cursor-not-allowed">
                  {previewing ? 'Preparing Preview...' : 'Preview Document'}
                </button>
                <button type="submit" disabled={submitting || GENERATION_DISABLED} className="inline-flex pl-[14px] py-2 pb-2 pr-2 md:px-[14px] md:py-3 xl:px-4 xl:py-3 bg-midnight text-barley-white cursor-pointer rounded-full hover:opacity-90 transition text-h-1 items-center text-base gap-3 lg:text-[18px] h-12 lg:h-14 xl:ml-0 disabled:opacity-50 disabled:cursor-not-allowed">
                  {submitting ? 'Submitting...' : GENERATION_DISABLED ? 'Coming Soon' : 'Generate Document'}
                  <div className="bg-secondary rounded-full w-8 h-8 flex items-center justify-center transition-transform">
                    <img src="/arrow.svg" alt="arrow icon" className="bg-secondary w-[10px] h-[10px] stroke-[1.5px]" />
                  </div>
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}