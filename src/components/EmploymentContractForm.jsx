// File: components/EmploymentContractForm.jsx
import { useState, useEffect } from 'react';
import PaymentStatusAlert from './PaymentStatusAlert';
import { extractAndClearUrlParams, mapPaymentStatus } from '../utils/urlParams';
import { GENERATION_DISABLED, GENERATION_DISABLED_MESSAGE } from '../utils/featureFlags';
import { openDocumentPreview } from '../utils/documentPreview';

const EMPLOYMENT_TYPES = [
  { value: 'PERMANENT', label: 'Permanent (indefinite term)' },
  { value: 'FIXED_TERM', label: 'Fixed Term' },
];

const PROBATION_OPTIONS = [
  { value: 'NONE', label: 'No probationary period' },
  { value: 'ONE_MONTH', label: '1 month' },
  { value: 'THREE_MONTHS', label: '3 months' },
  { value: 'SIX_MONTHS', label: '6 months' },
];

const PAY_DAY_OPTIONS = [
  { value: 'LAST_WORKING_DAY', label: 'The last working day of each month' },
  { value: 'TWENTY_FIFTH', label: 'The 25th day of each month' },
  { value: 'SPECIFIC_DAY', label: 'A specific day of the month' },
];

const NOTICE_OPTIONS = [
  { value: 'ONE_WEEK', label: '1 week' },
  { value: 'TWO_WEEKS', label: '2 weeks' },
  { value: 'ONE_MONTH', label: '1 month' },
  { value: 'THREE_MONTHS', label: '3 months' },
];

const NON_SOLICITATION_OPTIONS = [
  { value: '', label: 'None' },
  { value: '6', label: '6 months after termination' },
  { value: '12', label: '12 months after termination' },
];

const NATIONAL_MINIMUM_WAGE = 70000;

export default function EmploymentContractForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Step 0: Employer
    employerName: '',
    employerRcNumber: '',
    employerAddress: '',
    employerPhone: '',
    employerEmail: '',
    employerSignatoryName: '',
    employerSignatoryTitle: '',
    // Step 1: Employee
    employeeName: '',
    employeeAddress: '',
    employeePhone: '',
    employeeEmail: '',
    // Step 2: Role & Term
    jobTitle: '',
    dutiesSummary: '',
    workLocation: '',
    reportingLine: '',
    employmentType: 'PERMANENT',
    fixedTermEndDate: '',
    commencementDate: '',
    probationPeriod: 'NONE',
    // Step 3: Pay & Leave
    grossMonthlySalary: '',
    payDay: 'LAST_WORKING_DAY',
    specificPayDay: '',
    otherBenefits: '',
    annualLeaveDays: '21',
    workingHours: '',
    noticePeriod: 'ONE_MONTH',
    nonSolicitationMonths: ''
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
    'Employer Details',
    'Employee Details',
    'Role & Term',
    'Pay & Leave',
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
      'success': 'Payment successful! Your employment contract is being generated and will be emailed to you shortly.',
      'pending': 'Payment pending. Please wait for confirmation.',
      'failed': 'Payment failed. Please try again or contact support if the issue persists.'
    };
    return messages[status] || 'Payment status unknown.';
  };

  const resetForm = () => {
    setFormData({
      employerName: '',
      employerRcNumber: '',
      employerAddress: '',
      employerPhone: '',
      employerEmail: '',
      employerSignatoryName: '',
      employerSignatoryTitle: '',
      employeeName: '',
      employeeAddress: '',
      employeePhone: '',
      employeeEmail: '',
      jobTitle: '',
      dutiesSummary: '',
      workLocation: '',
      reportingLine: '',
      employmentType: 'PERMANENT',
      fixedTermEndDate: '',
      commencementDate: '',
      probationPeriod: 'NONE',
      grossMonthlySalary: '',
      payDay: 'LAST_WORKING_DAY',
      specificPayDay: '',
      otherBenefits: '',
      annualLeaveDays: '21',
      workingHours: '',
      noticePeriod: 'ONE_MONTH',
      nonSolicitationMonths: ''
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
      if (!formData.employerName.trim()) newErrors.employerName = 'Employer name is required';
      if (!formData.employerAddress.trim()) newErrors.employerAddress = 'Employer address is required';
      if (!formData.employerPhone.trim()) newErrors.employerPhone = 'Employer phone is required';
      if (!formData.employerEmail.trim()) newErrors.employerEmail = 'Employer email is required';
      else if (!emailRegex.test(formData.employerEmail)) newErrors.employerEmail = 'Invalid email';
      if (!formData.employerSignatoryName.trim()) newErrors.employerSignatoryName = 'Signatory name is required';
      if (!formData.employerSignatoryTitle.trim()) newErrors.employerSignatoryTitle = 'Signatory title is required';
    } else if (step === 1) {
      if (!formData.employeeName.trim()) newErrors.employeeName = 'Employee name is required';
      if (!formData.employeeAddress.trim()) newErrors.employeeAddress = 'Employee address is required';
      if (!formData.employeePhone.trim()) newErrors.employeePhone = 'Employee phone is required';
      if (formData.employeeEmail.trim() && !emailRegex.test(formData.employeeEmail)) {
        newErrors.employeeEmail = 'Invalid email';
      }
    } else if (step === 2) {
      if (!formData.jobTitle.trim()) newErrors.jobTitle = 'Job title is required';
      if (!formData.workLocation.trim()) newErrors.workLocation = 'Work location is required';
      if (!formData.commencementDate) newErrors.commencementDate = 'Commencement date is required';
      if (formData.employmentType === 'FIXED_TERM') {
        if (!formData.fixedTermEndDate) {
          newErrors.fixedTermEndDate = 'End date is required for a fixed-term contract';
        } else if (formData.commencementDate && formData.fixedTermEndDate <= formData.commencementDate) {
          newErrors.fixedTermEndDate = 'End date must be after the commencement date';
        }
      }
    } else if (step === 3) {
      const salary = Number(formData.grossMonthlySalary);
      if (!formData.grossMonthlySalary) {
        newErrors.grossMonthlySalary = 'Gross monthly salary is required';
      } else if (salary < NATIONAL_MINIMUM_WAGE) {
        newErrors.grossMonthlySalary = `Salary cannot be below the ₦${NATIONAL_MINIMUM_WAGE.toLocaleString()} National Minimum Wage`;
      }
      if (formData.payDay === 'SPECIFIC_DAY') {
        const day = Number(formData.specificPayDay);
        if (!formData.specificPayDay) {
          newErrors.specificPayDay = 'Pay day is required';
        } else if (day < 1 || day > 28) {
          newErrors.specificPayDay = 'Pay day must be between 1 and 28';
        }
      }
      const leaveDays = Number(formData.annualLeaveDays);
      if (!formData.annualLeaveDays) {
        newErrors.annualLeaveDays = 'Annual leave days is required';
      } else if (leaveDays < 6) {
        newErrors.annualLeaveDays = 'Annual leave cannot be below 6 working days (Labour Act minimum)';
      }
      if (!formData.noticePeriod) newErrors.noticePeriod = 'Notice period is required';
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
      employerName: formData.employerName.trim(),
      employerRcNumber: optional(formData.employerRcNumber),
      employerAddress: formData.employerAddress.trim(),
      employerPhone: formData.employerPhone.trim(),
      employerEmail: formData.employerEmail.trim(),
      employerSignatoryName: formData.employerSignatoryName.trim(),
      employerSignatoryTitle: formData.employerSignatoryTitle.trim(),

      employeeName: formData.employeeName.trim(),
      employeeAddress: formData.employeeAddress.trim(),
      employeePhone: formData.employeePhone.trim(),
      employeeEmail: optional(formData.employeeEmail),

      jobTitle: formData.jobTitle.trim(),
      dutiesSummary: optional(formData.dutiesSummary),
      workLocation: formData.workLocation.trim(),
      reportingLine: optional(formData.reportingLine),
      employmentType: formData.employmentType,
      fixedTermEndDate: formData.employmentType === 'FIXED_TERM' ? formData.fixedTermEndDate : null,
      commencementDate: formData.commencementDate,
      probationPeriod: formData.probationPeriod,

      grossMonthlySalary: optionalNumber(formData.grossMonthlySalary),
      payDay: formData.payDay,
      specificPayDay: formData.payDay === 'SPECIFIC_DAY' ? optionalNumber(formData.specificPayDay) : null,
      otherBenefits: optional(formData.otherBenefits),
      annualLeaveDays: optionalNumber(formData.annualLeaveDays),
      workingHours: optional(formData.workingHours),
      noticePeriod: formData.noticePeriod,
      nonSolicitationMonths: formData.nonSolicitationMonths ? Number(formData.nonSolicitationMonths) : null
    };
  };

  const handlePreview = async () => {
    const allErrors = validateAllSteps();
    if (Object.keys(allErrors).length) return setErrors(allErrors);

    setPreviewing(true);
    try {
      await openDocumentPreview(API_BASE, 'employment-contract', buildPayload());
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
      const resp = await fetch(`${API_BASE}/api/v1/documents/employment-contract/initiate-payment`, {
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

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="flex flex-col gap-6 xl:grid xl:grid-cols-2 xl:gap-6">
            <div>
              <label className={labelClass}>Employer Name</label>
              <input type="text" name="employerName" value={formData.employerName} onChange={handleChange} placeholder="Enter employer's registered name" required className={inputClass} />
              {errors.employerName && <p className="text-red-500 text-sm mt-1">{errors.employerName}</p>}
            </div>
            <div>
              <label className={labelClass}>RC Number (optional)</label>
              <input type="text" name="employerRcNumber" value={formData.employerRcNumber} onChange={handleChange} placeholder="e.g., RC1234567" className={inputClass} />
            </div>
            <div className="xl:col-span-2">
              <label className={labelClass}>Employer Address</label>
              <input type="text" name="employerAddress" value={formData.employerAddress} onChange={handleChange} placeholder="Enter employer's address" required className={inputClass} />
              {errors.employerAddress && <p className="text-red-500 text-sm mt-1">{errors.employerAddress}</p>}
            </div>
            <div>
              <label className={labelClass}>Employer Phone</label>
              <input type="tel" name="employerPhone" value={formData.employerPhone} onChange={handleChange} placeholder="Enter phone" required className={inputClass} />
              {errors.employerPhone && <p className="text-red-500 text-sm mt-1">{errors.employerPhone}</p>}
            </div>
            <div>
              <label className={labelClass}>Employer Email</label>
              <input type="email" name="employerEmail" value={formData.employerEmail} onChange={handleChange} placeholder="Enter email" required className={inputClass} />
              <p className="text-grey-3 text-xs mt-1">The contract will be emailed to this address.</p>
              {errors.employerEmail && <p className="text-red-500 text-sm mt-1">{errors.employerEmail}</p>}
            </div>
            <div>
              <label className={labelClass}>Signatory's Name</label>
              <input type="text" name="employerSignatoryName" value={formData.employerSignatoryName} onChange={handleChange} placeholder="Person signing on the employer's behalf" required className={inputClass} />
              {errors.employerSignatoryName && <p className="text-red-500 text-sm mt-1">{errors.employerSignatoryName}</p>}
            </div>
            <div>
              <label className={labelClass}>Signatory's Title</label>
              <input type="text" name="employerSignatoryTitle" value={formData.employerSignatoryTitle} onChange={handleChange} placeholder="e.g., Managing Director" required className={inputClass} />
              {errors.employerSignatoryTitle && <p className="text-red-500 text-sm mt-1">{errors.employerSignatoryTitle}</p>}
            </div>
          </div>
        );
      case 1:
        return (
          <div className="flex flex-col gap-6 xl:grid xl:grid-cols-2 xl:gap-6">
            <div>
              <label className={labelClass}>Employee's Full Name</label>
              <input type="text" name="employeeName" value={formData.employeeName} onChange={handleChange} placeholder="Enter employee's full name" required className={inputClass} />
              {errors.employeeName && <p className="text-red-500 text-sm mt-1">{errors.employeeName}</p>}
            </div>
            <div>
              <label className={labelClass}>Employee's Address</label>
              <input type="text" name="employeeAddress" value={formData.employeeAddress} onChange={handleChange} placeholder="Enter employee's address" required className={inputClass} />
              {errors.employeeAddress && <p className="text-red-500 text-sm mt-1">{errors.employeeAddress}</p>}
            </div>
            <div>
              <label className={labelClass}>Employee's Phone</label>
              <input type="tel" name="employeePhone" value={formData.employeePhone} onChange={handleChange} placeholder="Enter phone" required className={inputClass} />
              {errors.employeePhone && <p className="text-red-500 text-sm mt-1">{errors.employeePhone}</p>}
            </div>
            <div>
              <label className={labelClass}>Employee's Email (optional)</label>
              <input type="email" name="employeeEmail" value={formData.employeeEmail} onChange={handleChange} placeholder="Enter email" className={inputClass} />
              {errors.employeeEmail && <p className="text-red-500 text-sm mt-1">{errors.employeeEmail}</p>}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col gap-6 xl:grid xl:grid-cols-2 xl:gap-6">
            <div>
              <label className={labelClass}>Job Title</label>
              <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} placeholder="e.g., Accountant" required className={inputClass} />
              {errors.jobTitle && <p className="text-red-500 text-sm mt-1">{errors.jobTitle}</p>}
            </div>
            <div>
              <label className={labelClass}>Work Location</label>
              <input type="text" name="workLocation" value={formData.workLocation} onChange={handleChange} placeholder="Principal place of work" required className={inputClass} />
              {errors.workLocation && <p className="text-red-500 text-sm mt-1">{errors.workLocation}</p>}
            </div>
            <div className="xl:col-span-2">
              <label className={labelClass}>Duties Summary (optional)</label>
              <textarea name="dutiesSummary" value={formData.dutiesSummary} onChange={handleChange} placeholder="Leave blank for a standard duties clause tied to the job title" className={textareaClass} />
            </div>
            <div>
              <label className={labelClass}>Reporting Line (optional)</label>
              <input type="text" name="reportingLine" value={formData.reportingLine} onChange={handleChange} placeholder="e.g., the Finance Director" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Employment Type</label>
              <select name="employmentType" value={formData.employmentType} onChange={handleChange} required className={inputClass}>
                {EMPLOYMENT_TYPES.map((t) => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass}>Commencement Date</label>
              <input type="date" name="commencementDate" value={formData.commencementDate} onChange={handleChange} required className={inputClass} />
              {errors.commencementDate && <p className="text-red-500 text-sm mt-1">{errors.commencementDate}</p>}
            </div>
            {formData.employmentType === 'FIXED_TERM' && (
              <div>
                <label className={labelClass}>Fixed Term End Date</label>
                <input type="date" name="fixedTermEndDate" value={formData.fixedTermEndDate} onChange={handleChange} required className={inputClass} />
                {errors.fixedTermEndDate && <p className="text-red-500 text-sm mt-1">{errors.fixedTermEndDate}</p>}
              </div>
            )}
            <div>
              <label className={labelClass}>Probationary Period</label>
              <select name="probationPeriod" value={formData.probationPeriod} onChange={handleChange} required className={inputClass}>
                {PROBATION_OPTIONS.map((p) => (
                  <option key={p.value} value={p.value}>{p.label}</option>
                ))}
              </select>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col gap-6 xl:grid xl:grid-cols-2 xl:gap-6">
            <div>
              <label className={labelClass}>Gross Monthly Salary (₦)</label>
              <input type="number" min={NATIONAL_MINIMUM_WAGE} step="0.01" name="grossMonthlySalary" value={formData.grossMonthlySalary} onChange={handleChange} placeholder="e.g., 250000" required className={inputClass} />
              <p className="text-grey-3 text-xs mt-1">Cannot be below the ₦{NATIONAL_MINIMUM_WAGE.toLocaleString()} National Minimum Wage.</p>
              {errors.grossMonthlySalary && <p className="text-red-500 text-sm mt-1">{errors.grossMonthlySalary}</p>}
            </div>
            <div>
              <label className={labelClass}>Pay Day</label>
              <select name="payDay" value={formData.payDay} onChange={handleChange} required className={inputClass}>
                {PAY_DAY_OPTIONS.map((p) => (
                  <option key={p.value} value={p.value}>{p.label}</option>
                ))}
              </select>
            </div>
            {formData.payDay === 'SPECIFIC_DAY' && (
              <div>
                <label className={labelClass}>Day of Month</label>
                <input type="number" min="1" max="28" name="specificPayDay" value={formData.specificPayDay} onChange={handleChange} placeholder="1–28" required className={inputClass} />
                {errors.specificPayDay && <p className="text-red-500 text-sm mt-1">{errors.specificPayDay}</p>}
              </div>
            )}
            <div className="xl:col-span-2">
              <label className={labelClass}>Other Benefits (optional)</label>
              <textarea name="otherBenefits" value={formData.otherBenefits} onChange={handleChange} placeholder="e.g., HMO cover, annual performance bonus" className={textareaClass} />
            </div>
            <div>
              <label className={labelClass}>Annual Leave (working days)</label>
              <input type="number" min="6" name="annualLeaveDays" value={formData.annualLeaveDays} onChange={handleChange} required className={inputClass} />
              <p className="text-grey-3 text-xs mt-1">Labour Act minimum is 6 working days.</p>
              {errors.annualLeaveDays && <p className="text-red-500 text-sm mt-1">{errors.annualLeaveDays}</p>}
            </div>
            <div>
              <label className={labelClass}>Working Hours (optional)</label>
              <input type="text" name="workingHours" value={formData.workingHours} onChange={handleChange} placeholder="Default: Monday to Friday, 8:00am to 5:00pm" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Notice Period (either party)</label>
              <select name="noticePeriod" value={formData.noticePeriod} onChange={handleChange} required className={inputClass}>
                {NOTICE_OPTIONS.map((n) => (
                  <option key={n.value} value={n.value}>{n.label}</option>
                ))}
              </select>
              {errors.noticePeriod && <p className="text-red-500 text-sm mt-1">{errors.noticePeriod}</p>}
            </div>
            <div>
              <label className={labelClass}>Non-Solicitation Restriction (optional)</label>
              <select name="nonSolicitationMonths" value={formData.nonSolicitationMonths} onChange={handleChange} className={inputClass}>
                {NON_SOLICITATION_OPTIONS.map((n) => (
                  <option key={n.value} value={n.value}>{n.label}</option>
                ))}
              </select>
              <p className="text-grey-3 text-xs mt-1">
                Restricts the employee from poaching clients or staff after leaving. We do not draft
                general non-compete clauses — Nigerian courts routinely strike them down as an
                unreasonable restraint of trade.
              </p>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="flex flex-col gap-6">
            <div className="bg-white border border-grey rounded-lg p-4 font-inter text-sm text-midnight">
              <p className="font-semibold mb-1">Your employment contract</p>
              <p>
                {formData.jobTitle || '...'} — {formData.employeeName || 'the employee'}, employed by{' '}
                {formData.employerName || '...'} on a{' '}
                {formData.employmentType === 'FIXED_TERM' ? 'fixed-term' : 'permanent'} basis. The
                contract is drafted for you from your answers, on firm letterhead.
              </p>
            </div>
            <div className="bg-aqua-haze border border-grey rounded-lg p-4 font-inter text-sm text-midnight">
              <p className="font-semibold mb-1">Before you submit</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  This is a standard template for an ordinary hire — it does not address executive
                  remuneration, redundancy, or expatriate/immigration matters.
                </li>
                <li>
                  Statutory minimum standards under the Labour Act, the National Minimum Wage
                  (Amendment) Act 2024, and the Pension Reform Act 2014 apply regardless of anything
                  in this contract to the contrary.
                </li>
                <li>
                  There is no general non-compete clause in this template, by design — only
                  confidentiality (always) and, if selected, a time-limited non-solicitation
                  restriction.
                </li>
                <li>
                  The firm reserves the right to decline to prepare a contract it considers unfounded
                  or improper.
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
            documentType="employment-contract"
            transactionRef={transactionRef}
            onClose={handleClosePaymentAlert}
          />
        )}

        <div className="mb-8 xl:mb-[16px] font-bold">
          <h2 className="font-inter text-2xl text-medium text-midnight mb-3 xl:text-[28px] xl:leading-[39.12px] xl:tracking-[0.5px]">Fill out the form below to receive your employment contract!</h2>
        </div>

        <div className="mb-12">
          <div className="flex justify-between items-center mb-2">
            <p className="font-inter text-sm font-bold text-midnight">STEP {currentStep + 1} of {steps.length}</p>
          </div>
          <div className="relative w-full h-2 bg-grey rounded-full">
            <div className="h-full bg-midnight rounded-full transition-all duration-300" style={{ width: `${currentStep === steps.length - 1 ? 100 : currentStep * 25}%` }}></div>
            <p className="text-right font-inter font-bold text-sm text-midnight">{currentStep === steps.length - 1 ? 100 : currentStep * 25}%</p>
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
