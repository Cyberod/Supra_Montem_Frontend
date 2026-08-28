// File: components/DemandLetterForm.jsx
import { useState, useEffect } from 'react';
import PaymentStatusAlert from './PaymentStatusAlert';
import { extractAndClearUrlParams, mapPaymentStatus } from '../utils/urlParams';
import { GENERATION_DISABLED, GENERATION_DISABLED_MESSAGE } from '../utils/featureFlags';
import { openDocumentPreview } from '../utils/documentPreview';

const DEMAND_TYPES = [
  { value: 'DEBT_PAYMENT', label: 'Debt / Payment Demand' },
  { value: 'BREACH_OF_CONTRACT', label: 'Breach of Contract Demand' },
  { value: 'RETURN_OF_PROPERTY', label: 'Return of Property Demand' },
  { value: 'GENERAL', label: 'General Demand' },
];

const REMEDIES = [
  { value: 'SPECIFIC_PERFORMANCE', label: 'Perform the obligation' },
  { value: 'DAMAGES', label: 'Pay damages' },
];

const DEADLINE_OPTIONS = [7, 14, 21, 30];

export default function DemandLetterForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Step 0: Client
    clientName: '',
    clientAddress: '',
    clientPhone: '',
    clientEmail: '',
    // Step 1: Recipient
    recipientName: '',
    recipientAddress: '',
    isGovernmentEntity: false,
    // Step 2: Demand type + conditional fields
    demandType: '',
    deadlineDays: '7',
    additionalNotes: '',
    debtDescription: '',
    amountOwed: '',
    dateDue: '',
    amountPartPaid: '',
    contractualInterestRate: '',
    contractDescription: '',
    obligationBreached: '',
    remedySought: '',
    damagesAmount: '',
    propertyDescription: '',
    howRecipientObtainedProperty: '',
    returnBasis: '',
    generalSubject: '',
    generalFacts: '',
    generalDemand: ''
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
    'Your Details',
    'Recipient Details',
    'Demand Details',
    'Review & Submit'
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
      'success': 'Payment successful! Your demand letter is being generated and will be emailed to you shortly.',
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
      recipientName: '',
      recipientAddress: '',
      isGovernmentEntity: false,
      demandType: '',
      deadlineDays: '7',
      additionalNotes: '',
      debtDescription: '',
      amountOwed: '',
      dateDue: '',
      amountPartPaid: '',
      contractualInterestRate: '',
      contractDescription: '',
      obligationBreached: '',
      remedySought: '',
      damagesAmount: '',
      propertyDescription: '',
      howRecipientObtainedProperty: '',
      returnBasis: '',
      generalSubject: '',
      generalFacts: '',
      generalDemand: ''
    });
    setCurrentStep(0);
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, type } = e.target;
    let value = type === 'checkbox' ? e.target.checked : e.target.value;
    if (type === 'email') value = value.trim();
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const validateStep = (step) => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (step === 0) {
      if (!formData.clientName.trim()) newErrors.clientName = 'Full name is required';
      if (!formData.clientAddress.trim()) newErrors.clientAddress = 'Address is required';
      if (!formData.clientPhone.trim()) newErrors.clientPhone = 'Phone is required';
      if (!formData.clientEmail.trim()) newErrors.clientEmail = 'Email is required';
      else if (!emailRegex.test(formData.clientEmail)) newErrors.clientEmail = 'Invalid email';
    } else if (step === 1) {
      if (!formData.recipientName.trim()) newErrors.recipientName = 'Recipient name is required';
      if (!formData.recipientAddress.trim()) newErrors.recipientAddress = 'Recipient address is required';
      if (formData.isGovernmentEntity) {
        newErrors.isGovernmentEntity = 'Demands against government bodies or public officers need a consultation with the firm — a mandatory pre-action notice regime applies. Please contact us directly instead of using this form.';
      }
    } else if (step === 2) {
      if (!formData.demandType) {
        newErrors.demandType = 'Demand type is required';
      } else if (formData.demandType === 'DEBT_PAYMENT') {
        if (!formData.debtDescription.trim()) newErrors.debtDescription = 'Describe what was supplied or lent';
        if (!formData.amountOwed) newErrors.amountOwed = 'Amount owed is required';
        if (!formData.dateDue) newErrors.dateDue = 'Date the amount became due is required';
      } else if (formData.demandType === 'BREACH_OF_CONTRACT') {
        if (!formData.contractDescription.trim()) newErrors.contractDescription = 'Describe the contract';
        if (!formData.obligationBreached.trim()) newErrors.obligationBreached = 'Describe the obligation breached';
        if (!formData.remedySought) newErrors.remedySought = 'Remedy sought is required';
        if (formData.remedySought === 'DAMAGES' && !formData.damagesAmount) {
          newErrors.damagesAmount = 'Amount of damages is required';
        }
      } else if (formData.demandType === 'RETURN_OF_PROPERTY') {
        if (!formData.propertyDescription.trim()) newErrors.propertyDescription = 'Describe the property';
        if (!formData.howRecipientObtainedProperty.trim()) newErrors.howRecipientObtainedProperty = 'Explain how the recipient came to have it';
        if (!formData.returnBasis.trim()) newErrors.returnBasis = 'Explain why your client is entitled to its return';
      } else if (formData.demandType === 'GENERAL') {
        if (!formData.generalSubject.trim()) newErrors.generalSubject = 'Subject is required';
        if (!formData.generalFacts.trim()) newErrors.generalFacts = 'At least one fact is required';
        if (!formData.generalDemand.trim()) newErrors.generalDemand = 'What you want the recipient to do is required';
      }
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

  const buildPayload = () => {
    const optional = (v) => (v.trim() ? v.trim() : null);
    const optionalNumber = (v) => (v !== '' && v !== null && v !== undefined ? Number(v) : null);
    return {
      clientName: formData.clientName.trim(),
      clientAddress: formData.clientAddress.trim(),
      clientPhone: formData.clientPhone.trim(),
      clientEmail: formData.clientEmail.trim(),

      recipientName: formData.recipientName.trim(),
      recipientAddress: formData.recipientAddress.trim(),
      isGovernmentEntity: formData.isGovernmentEntity,

      demandType: formData.demandType,
      deadlineDays: Number(formData.deadlineDays),
      additionalNotes: optional(formData.additionalNotes),

      debtDescription: optional(formData.debtDescription),
      amountOwed: optionalNumber(formData.amountOwed),
      dateDue: formData.dateDue || null,
      amountPartPaid: optionalNumber(formData.amountPartPaid),
      contractualInterestRate: optional(formData.contractualInterestRate),

      contractDescription: optional(formData.contractDescription),
      obligationBreached: optional(formData.obligationBreached),
      remedySought: formData.remedySought || null,
      damagesAmount: optionalNumber(formData.damagesAmount),

      propertyDescription: optional(formData.propertyDescription),
      howRecipientObtainedProperty: optional(formData.howRecipientObtainedProperty),
      returnBasis: optional(formData.returnBasis),

      generalSubject: optional(formData.generalSubject),
      generalFacts: formData.generalFacts.trim() || null,
      generalDemand: optional(formData.generalDemand)
    };
  };

  const handlePreview = async () => {
    const allErrors = validateAllSteps();
    if (Object.keys(allErrors).length) return setErrors(allErrors);

    setPreviewing(true);
    try {
      await openDocumentPreview(API_BASE, 'demand-letter', buildPayload());
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
      const resp = await fetch(`${API_BASE}/api/v1/documents/demand-letter/initiate-payment`, {
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
  const textareaClass = "w-full h-32 px-3 py-3 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none resize-none bg-white xl:h-[158px] xl:px-4 xl:pr-12 xl:text-[14px]";

  const typeLabel = DEMAND_TYPES.find((t) => t.value === formData.demandType)?.label;

  const renderTypeFields = () => {
    switch (formData.demandType) {
      case 'DEBT_PAYMENT':
        return (
          <>
            <div className="xl:col-span-2">
              <label className={labelClass}>What Was Supplied or Lent?</label>
              <input type="text" name="debtDescription" value={formData.debtDescription} onChange={handleChange} placeholder="e.g., 50 bags of cement supplied on credit" required className={inputClass} />
              {errors.debtDescription && <p className="text-red-500 text-sm mt-1">{errors.debtDescription}</p>}
            </div>
            <div>
              <label className={labelClass}>Amount Owed (₦)</label>
              <input type="number" min="0" step="0.01" name="amountOwed" value={formData.amountOwed} onChange={handleChange} placeholder="e.g., 500000" required className={inputClass} />
              {errors.amountOwed && <p className="text-red-500 text-sm mt-1">{errors.amountOwed}</p>}
            </div>
            <div>
              <label className={labelClass}>Date the Amount Fell Due</label>
              <input type="date" name="dateDue" value={formData.dateDue} onChange={handleChange} required className={inputClass} />
              {errors.dateDue && <p className="text-red-500 text-sm mt-1">{errors.dateDue}</p>}
            </div>
            <div>
              <label className={labelClass}>Amount Already Paid (optional)</label>
              <input type="number" min="0" step="0.01" name="amountPartPaid" value={formData.amountPartPaid} onChange={handleChange} placeholder="Leave blank if nothing has been paid" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Contractual Interest Rate (optional)</label>
              <input type="text" name="contractualInterestRate" value={formData.contractualInterestRate} onChange={handleChange} placeholder="e.g., 5% per annum" className={inputClass} />
              <p className="text-grey-3 text-xs mt-1">Only include this if the underlying agreement fixed an interest rate. Leave blank otherwise — we will not invent one.</p>
            </div>
          </>
        );
      case 'BREACH_OF_CONTRACT':
        return (
          <>
            <div className="xl:col-span-2">
              <label className={labelClass}>Describe the Contract</label>
              <input type="text" name="contractDescription" value={formData.contractDescription} onChange={handleChange} placeholder="e.g., a written agreement dated 1 December 2025 for the supply of office furniture" required className={inputClass} />
              {errors.contractDescription && <p className="text-red-500 text-sm mt-1">{errors.contractDescription}</p>}
            </div>
            <div className="xl:col-span-2">
              <label className={labelClass}>Obligation Breached</label>
              <input type="text" name="obligationBreached" value={formData.obligationBreached} onChange={handleChange} placeholder="e.g., deliver the furniture within 14 days of payment" required className={inputClass} />
              {errors.obligationBreached && <p className="text-red-500 text-sm mt-1">{errors.obligationBreached}</p>}
            </div>
            <div>
              <label className={labelClass}>Remedy Sought</label>
              <select name="remedySought" value={formData.remedySought} onChange={handleChange} required className={inputClass}>
                <option value="">Select remedy</option>
                {REMEDIES.map((r) => (
                  <option key={r.value} value={r.value}>{r.label}</option>
                ))}
              </select>
              {errors.remedySought && <p className="text-red-500 text-sm mt-1">{errors.remedySought}</p>}
            </div>
            {formData.remedySought === 'DAMAGES' && (
              <div>
                <label className={labelClass}>Amount of Damages (₦)</label>
                <input type="number" min="0" step="0.01" name="damagesAmount" value={formData.damagesAmount} onChange={handleChange} required className={inputClass} />
                {errors.damagesAmount && <p className="text-red-500 text-sm mt-1">{errors.damagesAmount}</p>}
              </div>
            )}
          </>
        );
      case 'RETURN_OF_PROPERTY':
        return (
          <>
            <div className="xl:col-span-2">
              <label className={labelClass}>Describe the Property</label>
              <input type="text" name="propertyDescription" value={formData.propertyDescription} onChange={handleChange} placeholder="e.g., a Toyota Hilux with registration number ABC-123-XY" required className={inputClass} />
              {errors.propertyDescription && <p className="text-red-500 text-sm mt-1">{errors.propertyDescription}</p>}
            </div>
            <div className="xl:col-span-2">
              <label className={labelClass}>How Did the Recipient Come to Have It?</label>
              <input type="text" name="howRecipientObtainedProperty" value={formData.howRecipientObtainedProperty} onChange={handleChange} placeholder="e.g., it was lent to them for a two-week period ending 1 June 2026" required className={inputClass} />
              {errors.howRecipientObtainedProperty && <p className="text-red-500 text-sm mt-1">{errors.howRecipientObtainedProperty}</p>}
            </div>
            <div className="xl:col-span-2">
              <label className={labelClass}>Why Is Your Client Entitled to Its Return?</label>
              <input type="text" name="returnBasis" value={formData.returnBasis} onChange={handleChange} placeholder="e.g., the loan period has expired and our client requires the vehicle" required className={inputClass} />
              {errors.returnBasis && <p className="text-red-500 text-sm mt-1">{errors.returnBasis}</p>}
            </div>
          </>
        );
      case 'GENERAL':
        return (
          <>
            <div>
              <label className={labelClass}>Subject</label>
              <input type="text" name="generalSubject" value={formData.generalSubject} onChange={handleChange} placeholder="e.g., Removal of unauthorised structure" required className={inputClass} />
              {errors.generalSubject && <p className="text-red-500 text-sm mt-1">{errors.generalSubject}</p>}
            </div>
            <div>
              <label className={labelClass}>What Should the Recipient Do?</label>
              <input type="text" name="generalDemand" value={formData.generalDemand} onChange={handleChange} placeholder="e.g., remove the encroaching fence" required className={inputClass} />
              <p className="text-grey-3 text-xs mt-1">Just the action itself — the deadline is added automatically below.</p>
              {errors.generalDemand && <p className="text-red-500 text-sm mt-1">{errors.generalDemand}</p>}
            </div>
            <div className="xl:col-span-2">
              <label className={labelClass}>The Facts</label>
              <textarea name="generalFacts" value={formData.generalFacts} onChange={handleChange} placeholder={"One fact per line, e.g.:\nYou erected a fence encroaching on our client's land\nThe encroachment has not been remedied despite verbal requests"} required className={textareaClass} />
              <p className="text-grey-3 text-xs mt-1">
                State only facts, one per line — no arguments or legal conclusions. Each line becomes a
                paragraph in the letter's statement of facts.
              </p>
              {errors.generalFacts && <p className="text-red-500 text-sm mt-1">{errors.generalFacts}</p>}
            </div>
          </>
        );
      default:
        return null;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="flex flex-col gap-6 xl:grid xl:grid-cols-2 xl:gap-6">
            <div>
              <label className={labelClass}>Full Name</label>
              <input type="text" name="clientName" value={formData.clientName} onChange={handleChange} placeholder="Enter your full name" required className={inputClass} />
              <p className="text-grey-3 text-xs mt-1">You are the client on whose instructions the firm will write.</p>
              {errors.clientName && <p className="text-red-500 text-sm mt-1">{errors.clientName}</p>}
            </div>
            <div>
              <label className={labelClass}>Address</label>
              <input type="text" name="clientAddress" value={formData.clientAddress} onChange={handleChange} placeholder="Enter your address" required className={inputClass} />
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
          </div>
        );
      case 1:
        return (
          <div className="flex flex-col gap-6 xl:grid xl:grid-cols-2 xl:gap-6">
            <div>
              <label className={labelClass}>Recipient's Name</label>
              <input type="text" name="recipientName" value={formData.recipientName} onChange={handleChange} placeholder="Person or company the letter is addressed to" required className={inputClass} />
              {errors.recipientName && <p className="text-red-500 text-sm mt-1">{errors.recipientName}</p>}
            </div>
            <div>
              <label className={labelClass}>Recipient's Address</label>
              <input type="text" name="recipientAddress" value={formData.recipientAddress} onChange={handleChange} placeholder="Enter recipient's address" required className={inputClass} />
              {errors.recipientAddress && <p className="text-red-500 text-sm mt-1">{errors.recipientAddress}</p>}
            </div>
            <div className="xl:col-span-2 flex items-start gap-3 bg-white border border-grey rounded-lg p-4">
              <input type="checkbox" id="isGovernmentEntity" name="isGovernmentEntity" checked={formData.isGovernmentEntity} onChange={handleChange} className="mt-1 h-4 w-4" />
              <label htmlFor="isGovernmentEntity" className="font-inter text-sm text-midnight">
                The recipient is a government body, agency or public officer.
              </label>
            </div>
            {errors.isGovernmentEntity && <p className="text-red-500 text-sm -mt-3">{errors.isGovernmentEntity}</p>}
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col gap-6 xl:grid xl:grid-cols-2 xl:gap-6">
            <div className="xl:col-span-2">
              <label className={labelClass}>Type of Demand</label>
              <select name="demandType" value={formData.demandType} onChange={handleChange} required className={inputClass}>
                <option value="">Select demand type</option>
                {DEMAND_TYPES.map((type) => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
              {errors.demandType && <p className="text-red-500 text-sm mt-1">{errors.demandType}</p>}
            </div>
            {renderTypeFields()}
            <div>
              <label className={labelClass}>Days to Comply</label>
              <select name="deadlineDays" value={formData.deadlineDays} onChange={handleChange} required className={inputClass}>
                {DEADLINE_OPTIONS.map((d) => (
                  <option key={d} value={d}>{d} days</option>
                ))}
              </select>
              <p className="text-grey-3 text-xs mt-1">How long the recipient has to comply before litigation is threatened.</p>
            </div>
            <div className="xl:col-span-2">
              <label className={labelClass}>Additional Notes (optional)</label>
              <textarea name="additionalNotes" value={formData.additionalNotes} onChange={handleChange} placeholder="Any further context to include in the letter" className={textareaClass} />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col gap-6">
            <div className="bg-white border border-grey rounded-lg p-4 font-inter text-sm text-midnight">
              <p className="font-semibold mb-1">Your demand letter</p>
              <p>
                {typeLabel ? `${typeLabel} — ` : ''}addressed to {formData.recipientName || '...'}, giving
                {' '}{formData.deadlineDays || '...'} days to comply. The letter is drafted for you from
                your answers, on firm letterhead.
              </p>
            </div>
            <div className="bg-aqua-haze border border-grey rounded-lg p-4 font-inter text-sm text-midnight">
              <p className="font-semibold mb-1">Before you submit</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  This letter is prepared on your stated facts, which the firm has not independently
                  verified.
                </li>
                <li>
                  Keep proof of delivery (courier receipt, signed acknowledgment, or email confirmation)
                  once it is sent.
                </li>
                <li>
                  If the matter is more than a few years old, claims can become{' '}
                  <span className="font-semibold">statute-barred</span> under the applicable Limitation
                  Law — please confirm timing with us before relying on this letter.
                </li>
                <li>
                  The firm reserves the right to decline to send a letter it considers unfounded or
                  improper.
                </li>
              </ul>
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
            documentType="demand-letter"
            transactionRef={transactionRef}
            onClose={handleClosePaymentAlert}
          />
        )}

        <div className="mb-8 xl:mb-[16px] font-bold">
          <h2 className="font-inter text-2xl text-medium text-midnight mb-3 xl:text-[28px] xl:leading-[39.12px] xl:tracking-[0.5px]">Fill out the form below to receive your demand letter!</h2>
        </div>

        <div className="mb-12">
          <div className="flex justify-between items-center mb-2">
            <p className="font-inter text-sm font-bold text-midnight">STEP {currentStep + 1} of {steps.length}</p>
          </div>
          <div className="relative w-full h-2 bg-grey rounded-full">
            <div className="h-full bg-midnight rounded-full transition-all duration-300" style={{ width: `${currentStep === steps.length - 1 ? 100 : currentStep * 30}%` }}></div>
            <p className="text-right font-inter font-bold text-sm text-midnight">{currentStep === steps.length - 1 ? 100 : currentStep * 30}%</p>
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
