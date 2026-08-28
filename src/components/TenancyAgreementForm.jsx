// File: components/TenancyAgreementForm.jsx
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PaymentStatusAlert from './PaymentStatusAlert';
import { extractAndClearUrlParams, mapPaymentStatus } from '../utils/urlParams';
import { GENERATION_DISABLED, GENERATION_DISABLED_MESSAGE } from '../utils/featureFlags';
import { openDocumentPreview } from '../utils/documentPreview';

const NIGERIAN_STATES = [
  'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue',
  'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu',
  'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi',
  'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo',
  'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara',
  'Federal Capital Territory',
];

const PREMISES_TYPES = [
  { value: 'FLAT', label: 'Flat' },
  { value: 'SELF_CONTAINED', label: 'Self-contained Apartment' },
  { value: 'DUPLEX', label: 'Duplex' },
  { value: 'BUNGALOW', label: 'Bungalow' },
  { value: 'ROOMS', label: 'Room(s)' },
  { value: 'SHOP', label: 'Shop' },
  { value: 'OFFICE', label: 'Office' },
  { value: 'WAREHOUSE', label: 'Warehouse' },
];

const PERMITTED_USES = [
  { value: 'RESIDENTIAL', label: 'Residential' },
  { value: 'COMMERCIAL', label: 'Commercial' },
];

const TENANCY_TYPES = [
  { value: 'YEARLY', label: 'Yearly Tenancy', notice: '6 months (180 days)' },
  { value: 'MONTHLY', label: 'Monthly Tenancy', notice: '1 month (30 days)' },
];

const TERMS = [
  { value: 'SIX_MONTHS', label: '6 Months', months: 6 },
  { value: 'ONE_YEAR', label: '1 Year', months: 12 },
  { value: 'TWO_YEARS', label: '2 Years', months: 24 },
  { value: 'THREE_YEARS', label: '3 Years', months: 36 },
];

// Expiry = commencement + term, minus one day (mirrors the backend computation)
const computeExpiry = (dateStr, months) => {
  const d = new Date(`${dateStr}T00:00:00`);
  if (Number.isNaN(d.getTime())) return null;
  const lastDayOfTarget = new Date(d.getFullYear(), d.getMonth() + months + 1, 0).getDate();
  const expiry = new Date(d.getFullYear(), d.getMonth() + months, Math.min(d.getDate(), lastDayOfTarget));
  expiry.setDate(expiry.getDate() - 1);
  return expiry.toLocaleDateString('en-NG', { day: 'numeric', month: 'long', year: 'numeric' });
};

export default function TenancyAgreementForm() {
  const location = useLocation();

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Step 0: Landlord
    landlordName: '',
    landlordAddress: '',
    landlordPhone: '',
    landlordEmail: '',
    // Step 1: Tenant
    tenantName: '',
    tenantAddress: '',
    tenantPhone: '',
    tenantEmail: '',
    // Step 2: Premises
    premisesAddress: '',
    premisesState: '',
    premisesType: '',
    permittedUse: '',
    // Step 3: Terms
    tenancyType: '',
    term: '',
    commencementDate: '',
    annualRent: '',
    cautionDeposit: '',
    serviceCharge: '',
    // Step 4: Special conditions
    specialConditions: ''
  });

  const [errors, setErrors] = useState({});
  const [previewing, setPreviewing] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [paymentMessage, setPaymentMessage] = useState('');
  const [transactionRef, setTransactionRef] = useState('');
  const [documentId, setDocumentId] = useState('');
  const [hasProcessedPayment, setHasProcessedPayment] = useState(false);

  const steps = [
    'Landlord Details',
    'Tenant Details',
    'Premises Details',
    'Tenancy Terms',
    'Special Conditions & Submit'
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
      'success': 'Payment successful! Your tenancy agreement is being generated and will be emailed to you shortly.',
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
      tenantEmail: '',
      premisesAddress: '',
      premisesState: '',
      premisesType: '',
      permittedUse: '',
      tenancyType: '',
      term: '',
      commencementDate: '',
      annualRent: '',
      cautionDeposit: '',
      serviceCharge: '',
      specialConditions: ''
    });
    setCurrentStep(0);
    setErrors({});
  };

  const handleChange = (e) => {
    let value = e.target.value;
    if (e.target.type === 'email') value = value.trim();
    if (['annualRent', 'cautionDeposit', 'serviceCharge'].includes(e.target.name)) {
      value = value.replace(/,/g, '');
    }
    setFormData({ ...formData, [e.target.name]: value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateStep = (step) => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (step === 0) {
      if (!formData.landlordName.trim()) newErrors.landlordName = 'Landlord name is required';
      if (!formData.landlordAddress.trim()) newErrors.landlordAddress = 'Address is required';
      if (!formData.landlordPhone.trim()) newErrors.landlordPhone = 'Phone is required';
      if (!formData.landlordEmail.trim()) newErrors.landlordEmail = 'Email is required';
      else if (!emailRegex.test(formData.landlordEmail)) newErrors.landlordEmail = 'Invalid email';
    } else if (step === 1) {
      if (!formData.tenantName.trim()) newErrors.tenantName = 'Tenant name is required';
      if (!formData.tenantAddress.trim()) newErrors.tenantAddress = 'Tenant address is required';
      if (!formData.tenantPhone.trim()) newErrors.tenantPhone = 'Phone is required';
      if (formData.tenantEmail.trim() && !emailRegex.test(formData.tenantEmail)) newErrors.tenantEmail = 'Invalid email';
    } else if (step === 2) {
      if (!formData.premisesAddress.trim()) newErrors.premisesAddress = 'Premises address is required';
      if (!formData.premisesState) newErrors.premisesState = 'State is required';
      if (!formData.premisesType) newErrors.premisesType = 'Premises type is required';
      if (!formData.permittedUse) newErrors.permittedUse = 'Permitted use is required';
    } else if (step === 3) {
      if (!formData.tenancyType) newErrors.tenancyType = 'Tenancy type is required';
      if (!formData.term) newErrors.term = 'Term is required';
      if (formData.term === 'SIX_MONTHS' && formData.tenancyType === 'YEARLY') {
        newErrors.term = 'A six-month term cannot be a yearly tenancy — select Monthly Tenancy instead';
      }
      if (!formData.commencementDate) newErrors.commencementDate = 'Commencement date is required';
      if (!formData.annualRent.trim()) newErrors.annualRent = 'Annual rent is required';
      else if (!(Number(formData.annualRent) > 0)) newErrors.annualRent = 'Annual rent must be a positive amount';
      if (formData.cautionDeposit.trim() && !(Number(formData.cautionDeposit) >= 0)) newErrors.cautionDeposit = 'Caution deposit must be a valid amount';
      if (formData.serviceCharge.trim() && !(Number(formData.serviceCharge) >= 0)) newErrors.serviceCharge = 'Service charge must be a valid amount';
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
    tenantAddress: formData.tenantAddress.trim(),
    tenantPhone: formData.tenantPhone.trim(),
    tenantEmail: formData.tenantEmail.trim() || null,

    premisesAddress: formData.premisesAddress.trim(),
    premisesState: formData.premisesState,
    premisesType: formData.premisesType,
    permittedUse: formData.permittedUse,

    tenancyType: formData.tenancyType,
    term: formData.term,
    commencementDate: formData.commencementDate,
    annualRent: Number(formData.annualRent),
    cautionDeposit: formData.cautionDeposit.trim() ? Number(formData.cautionDeposit) : null,
    serviceCharge: formData.serviceCharge.trim() ? Number(formData.serviceCharge) : null,

    specialConditions: formData.specialConditions.trim() || null
  });

  const handlePreview = async () => {
    const allErrors = validateAllSteps();
    if (Object.keys(allErrors).length) return setErrors(allErrors);

    setPreviewing(true);
    try {
      await openDocumentPreview(API_BASE, 'tenancy-agreement', buildPayload());
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
      const resp = await fetch(`${API_BASE}/api/v1/documents/tenancy-agreement/initiate-payment`, {
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

  const inputClass = "w-full h-12 px-3 py-3 pr-10 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none bg-white text-grey-3 xl:h-[56px] xl:px-4 xl:pr-12 xl:text-[14px]";
  const labelClass = "block font-inter text-sm text-midnight mb-2 font-semibold xl:text-[14px] xl:mb-1";

  const selectedTerm = TERMS.find((t) => t.value === formData.term);
  const expiryPreview = formData.commencementDate && selectedTerm
    ? computeExpiry(formData.commencementDate, selectedTerm.months)
    : null;

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="flex flex-col gap-6 xl:grid xl:grid-cols-2 xl:gap-6">
            <div>
              <label className={labelClass}>Landlord Full Name</label>
              <input type="text" name="landlordName" value={formData.landlordName} onChange={handleChange} placeholder="Enter full name" required className={inputClass} />
              {errors.landlordName && <p className="text-red-500 text-sm mt-1">{errors.landlordName}</p>}
            </div>
            <div>
              <label className={labelClass}>Address</label>
              <input type="text" name="landlordAddress" value={formData.landlordAddress} onChange={handleChange} placeholder="Enter address" required className={inputClass} />
              {errors.landlordAddress && <p className="text-red-500 text-sm mt-1">{errors.landlordAddress}</p>}
            </div>
            <div>
              <label className={labelClass}>Phone Number</label>
              <input type="tel" name="landlordPhone" value={formData.landlordPhone} onChange={handleChange} placeholder="Enter phone" required className={inputClass} />
              {errors.landlordPhone && <p className="text-red-500 text-sm mt-1">{errors.landlordPhone}</p>}
            </div>
            <div>
              <label className={labelClass}>Email Address</label>
              <input type="email" name="landlordEmail" value={formData.landlordEmail} onChange={handleChange} placeholder="Enter email" required className={inputClass} />
              <p className="text-grey-3 text-xs mt-1">The completed agreement will be emailed to this address.</p>
              {errors.landlordEmail && <p className="text-red-500 text-sm mt-1">{errors.landlordEmail}</p>}
            </div>
          </div>
        );
      case 1:
        return (
          <div className="flex flex-col gap-6 xl:grid xl:grid-cols-2 xl:gap-6">
            <div>
              <label className={labelClass}>Tenant Full Name</label>
              <input type="text" name="tenantName" value={formData.tenantName} onChange={handleChange} placeholder="Enter tenant name" required className={inputClass} />
              {errors.tenantName && <p className="text-red-500 text-sm mt-1">{errors.tenantName}</p>}
            </div>
            <div>
              <label className={labelClass}>Tenant Current Address</label>
              <input type="text" name="tenantAddress" value={formData.tenantAddress} onChange={handleChange} placeholder="Enter tenant's current address" required className={inputClass} />
              {errors.tenantAddress && <p className="text-red-500 text-sm mt-1">{errors.tenantAddress}</p>}
            </div>
            <div>
              <label className={labelClass}>Tenant Phone Number</label>
              <input type="tel" name="tenantPhone" value={formData.tenantPhone} onChange={handleChange} placeholder="Enter phone" required className={inputClass} />
              {errors.tenantPhone && <p className="text-red-500 text-sm mt-1">{errors.tenantPhone}</p>}
            </div>
            <div>
              <label className={labelClass}>Tenant Email (optional)</label>
              <input type="email" name="tenantEmail" value={formData.tenantEmail} onChange={handleChange} placeholder="Enter email" className={inputClass} />
              {errors.tenantEmail && <p className="text-red-500 text-sm mt-1">{errors.tenantEmail}</p>}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col gap-6 xl:grid xl:grid-cols-2 xl:gap-6">
            <div>
              <label className={labelClass}>Premises Address</label>
              <input type="text" name="premisesAddress" value={formData.premisesAddress} onChange={handleChange} placeholder="Full address of the premises being let" required className={inputClass} />
              {errors.premisesAddress && <p className="text-red-500 text-sm mt-1">{errors.premisesAddress}</p>}
            </div>
            <div>
              <label className={labelClass}>State Where Premises Is Located</label>
              <select name="premisesState" value={formData.premisesState} onChange={handleChange} required className={inputClass}>
                <option value="">Select state</option>
                {NIGERIAN_STATES.map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
              {errors.premisesState && <p className="text-red-500 text-sm mt-1">{errors.premisesState}</p>}
            </div>
            <div>
              <label className={labelClass}>Premises Type</label>
              <select name="premisesType" value={formData.premisesType} onChange={handleChange} required className={inputClass}>
                <option value="">Select premises type</option>
                {PREMISES_TYPES.map((type) => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
              {errors.premisesType && <p className="text-red-500 text-sm mt-1">{errors.premisesType}</p>}
            </div>
            <div>
              <label className={labelClass}>Permitted Use</label>
              <select name="permittedUse" value={formData.permittedUse} onChange={handleChange} required className={inputClass}>
                <option value="">Select permitted use</option>
                {PERMITTED_USES.map((use) => (
                  <option key={use.value} value={use.value}>{use.label}</option>
                ))}
              </select>
              {errors.permittedUse && <p className="text-red-500 text-sm mt-1">{errors.permittedUse}</p>}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col gap-6 xl:grid xl:grid-cols-2 xl:gap-6">
            <div>
              <label className={labelClass}>Tenancy Type</label>
              <select name="tenancyType" value={formData.tenancyType} onChange={handleChange} required className={inputClass}>
                <option value="">Select tenancy type</option>
                {TENANCY_TYPES.map((type) => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
              {formData.tenancyType && (
                <p className="text-midnight text-sm mt-1">
                  Statutory notice period: <span className="font-semibold">{TENANCY_TYPES.find((t) => t.value === formData.tenancyType)?.notice}</span> (stated in the agreement automatically)
                </p>
              )}
              {errors.tenancyType && <p className="text-red-500 text-sm mt-1">{errors.tenancyType}</p>}
            </div>
            <div>
              <label className={labelClass}>Term of Tenancy</label>
              <select name="term" value={formData.term} onChange={handleChange} required className={inputClass}>
                <option value="">Select term</option>
                {TERMS.map((term) => (
                  <option key={term.value} value={term.value}>{term.label}</option>
                ))}
              </select>
              <p className="text-grey-3 text-xs mt-1">Terms longer than 3 years require a consultation with the firm.</p>
              {errors.term && <p className="text-red-500 text-sm mt-1">{errors.term}</p>}
            </div>
            <div>
              <label className={labelClass}>Commencement Date</label>
              <input type="date" name="commencementDate" value={formData.commencementDate} onChange={handleChange} required className={inputClass} />
              {expiryPreview && (
                <p className="text-midnight text-sm mt-1">
                  Tenancy will expire on <span className="font-semibold">{expiryPreview}</span>
                </p>
              )}
              {errors.commencementDate && <p className="text-red-500 text-sm mt-1">{errors.commencementDate}</p>}
            </div>
            <div>
              <label className={labelClass}>Annual Rent (₦)</label>
              <input type="number" name="annualRent" value={formData.annualRent} onChange={handleChange} placeholder="e.g., 800000" required className={inputClass} />
              {errors.annualRent && <p className="text-red-500 text-sm mt-1">{errors.annualRent}</p>}
            </div>
            <div>
              <label className={labelClass}>Caution Deposit (₦, optional)</label>
              <input type="number" name="cautionDeposit" value={formData.cautionDeposit} onChange={handleChange} placeholder="e.g., 100000" className={inputClass} />
              <p className="text-grey-3 text-xs mt-1">Refundable at the end of the tenancy, less damages and outstanding bills.</p>
              {errors.cautionDeposit && <p className="text-red-500 text-sm mt-1">{errors.cautionDeposit}</p>}
            </div>
            <div>
              <label className={labelClass}>Service Charge (₦ per year, optional)</label>
              <input type="number" name="serviceCharge" value={formData.serviceCharge} onChange={handleChange} placeholder="e.g., 50000" className={inputClass} />
              {errors.serviceCharge && <p className="text-red-500 text-sm mt-1">{errors.serviceCharge}</p>}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="flex flex-col gap-6 xl:grid xl:grid-cols-1 xl:gap-6">
            <div>
              <label className={labelClass}>Special Conditions (optional)</label>
              <textarea name="specialConditions" value={formData.specialConditions} onChange={handleChange} placeholder="Any additional conditions agreed between landlord and tenant, e.g. No pets on the premises" className="w-full h-32 px-3 py-3 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none resize-none bg-white xl:h-[158px] xl:px-4 xl:pr-12 xl:text-[14px]" />
              <p className="text-grey-3 text-xs mt-1">Each condition on its own line. These are inserted into the agreement word-for-word.</p>
            </div>
            <div className="bg-aqua-haze border border-grey rounded-lg p-4 font-inter text-sm text-midnight">
              <p className="font-semibold mb-1">Before you submit</p>
              <p>
                The agreement will state the statutory notice period for your tenancy type and cite the
                tenancy law of the state you selected. After signing, the agreement should be stamped at
                the Federal Inland Revenue Service or your State Internal Revenue Service within 30 days
                — a note on the document explains this.
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
            documentType="tenancy-agreement"
            transactionRef={transactionRef}
            onClose={handleClosePaymentAlert}
          />
        )}

        <div className="mb-8 xl:mb-[16px] font-bold">
          <h2 className="font-inter text-2xl text-medium text-midnight mb-3 xl:text-[28px] xl:leading-[39.12px] xl:tracking-[0.5px]">Fill out the form below to receive your tenancy agreement!</h2>
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
