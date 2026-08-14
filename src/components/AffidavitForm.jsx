// File: components/AffidavitForm.jsx
import { useState, useEffect } from 'react';
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

const GENDERS = [
  { value: 'MALE', label: 'Male' },
  { value: 'FEMALE', label: 'Female' },
];

const AFFIDAVIT_TYPES = [
  { value: 'LOSS_OF_DOCUMENT', label: 'Loss of Document' },
  { value: 'CHANGE_OF_NAME', label: 'Change of Name' },
  { value: 'NAME_DISCREPANCY', label: 'Name Discrepancy (one and the same person)' },
  { value: 'GENERAL', label: 'General Affidavit of Facts' },
];

const CHANGE_REASONS = [
  { value: 'MARRIAGE', label: 'Marriage' },
  { value: 'PERSONAL_CHOICE', label: 'Personal choice' },
  { value: 'RELIGIOUS', label: 'Religious conviction' },
  { value: 'CORRECTION', label: 'Correction of records' },
];

const DISCREPANCY_CAUSES = [
  { value: 'MISSPELLING', label: 'Misspelling of my name' },
  { value: 'NAME_ORDER', label: 'Different order of my names' },
  { value: 'ABBREVIATION', label: 'Abbreviation of my name' },
  { value: 'OTHER', label: 'Other (explain)' },
];

export default function AffidavitForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Step 0: Deponent
    deponentName: '',
    deponentGender: '',
    deponentNationality: 'Nigerian',
    deponentAddress: '',
    deponentOccupation: '',
    deponentPhone: '',
    deponentEmail: '',
    // Step 1: Court
    courtState: '',
    courtCity: '',
    judicialDivision: '',
    // Step 2: Affidavit type + conditional fields
    affidavitType: '',
    lostDocumentDescription: '',
    lostDocumentIssuer: '',
    lostDocumentNumber: '',
    lossPeriod: '',
    lossCircumstances: '',
    lossPurpose: '',
    formerName: '',
    newName: '',
    changeReason: '',
    dateNewNameAdopted: '',
    institutionsToNotify: '',
    nameVariantOne: '',
    documentOne: '',
    nameVariantTwo: '',
    documentTwo: '',
    discrepancyCause: '',
    discrepancyCauseOther: '',
    institutionRequiring: '',
    generalSubject: '',
    generalFacts: '',
    generalPurpose: ''
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [paymentMessage, setPaymentMessage] = useState('');
  const [transactionRef, setTransactionRef] = useState('');
  const [documentId, setDocumentId] = useState('');
  const [hasProcessedPayment, setHasProcessedPayment] = useState(false);

  const steps = [
    'Deponent Details',
    'Court Details',
    'Affidavit Details',
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
      'success': 'Payment successful! Your affidavit draft is being generated and will be emailed to you shortly.',
      'pending': 'Payment pending. Please wait for confirmation.',
      'failed': 'Payment failed. Please try again or contact support if the issue persists.'
    };
    return messages[status] || 'Payment status unknown.';
  };

  const resetForm = () => {
    setFormData({
      deponentName: '',
      deponentGender: '',
      deponentNationality: 'Nigerian',
      deponentAddress: '',
      deponentOccupation: '',
      deponentPhone: '',
      deponentEmail: '',
      courtState: '',
      courtCity: '',
      judicialDivision: '',
      affidavitType: '',
      lostDocumentDescription: '',
      lostDocumentIssuer: '',
      lostDocumentNumber: '',
      lossPeriod: '',
      lossCircumstances: '',
      lossPurpose: '',
      formerName: '',
      newName: '',
      changeReason: '',
      dateNewNameAdopted: '',
      institutionsToNotify: '',
      nameVariantOne: '',
      documentOne: '',
      nameVariantTwo: '',
      documentTwo: '',
      discrepancyCause: '',
      discrepancyCauseOther: '',
      institutionRequiring: '',
      generalSubject: '',
      generalFacts: '',
      generalPurpose: ''
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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (step === 0) {
      if (!formData.deponentName.trim()) newErrors.deponentName = 'Full name is required';
      if (!formData.deponentGender) newErrors.deponentGender = 'Gender is required';
      if (!formData.deponentNationality.trim()) newErrors.deponentNationality = 'Nationality is required';
      if (!formData.deponentAddress.trim()) newErrors.deponentAddress = 'Address is required';
      if (!formData.deponentOccupation.trim()) newErrors.deponentOccupation = 'Occupation is required';
      if (!formData.deponentPhone.trim()) newErrors.deponentPhone = 'Phone is required';
      if (!formData.deponentEmail.trim()) newErrors.deponentEmail = 'Email is required';
      else if (!emailRegex.test(formData.deponentEmail)) newErrors.deponentEmail = 'Invalid email';
    } else if (step === 1) {
      if (!formData.courtState) newErrors.courtState = 'State is required';
      if (!formData.courtCity.trim()) newErrors.courtCity = 'City or town of the High Court registry is required';
    } else if (step === 2) {
      if (!formData.affidavitType) {
        newErrors.affidavitType = 'Affidavit type is required';
      } else if (formData.affidavitType === 'LOSS_OF_DOCUMENT') {
        if (!formData.lostDocumentDescription.trim()) newErrors.lostDocumentDescription = 'Describe the lost document';
        if (!formData.lostDocumentIssuer.trim()) newErrors.lostDocumentIssuer = 'Issuing authority is required';
        if (!formData.lossPeriod.trim()) newErrors.lossPeriod = 'When it was lost is required';
        if (!formData.lossCircumstances.trim()) newErrors.lossCircumstances = 'How it was lost is required';
        if (!formData.lossPurpose.trim()) newErrors.lossPurpose = 'Purpose of the affidavit is required';
      } else if (formData.affidavitType === 'CHANGE_OF_NAME') {
        if (!formData.formerName.trim()) newErrors.formerName = 'Former name is required';
        if (!formData.newName.trim()) newErrors.newName = 'New name is required';
        if (!formData.changeReason) newErrors.changeReason = 'Reason is required';
        if (!formData.dateNewNameAdopted) newErrors.dateNewNameAdopted = 'Date is required';
      } else if (formData.affidavitType === 'NAME_DISCREPANCY') {
        if (!formData.nameVariantOne.trim()) newErrors.nameVariantOne = 'First name variant is required';
        if (!formData.documentOne.trim()) newErrors.documentOne = 'Document is required';
        if (!formData.nameVariantTwo.trim()) newErrors.nameVariantTwo = 'Second name variant is required';
        if (!formData.documentTwo.trim()) newErrors.documentTwo = 'Document is required';
        if (!formData.discrepancyCause) newErrors.discrepancyCause = 'Cause of the discrepancy is required';
        if (formData.discrepancyCause === 'OTHER' && !formData.discrepancyCauseOther.trim()) {
          newErrors.discrepancyCauseOther = 'Please explain the cause of the discrepancy';
        }
        if (!formData.institutionRequiring.trim()) newErrors.institutionRequiring = 'Institution requiring the affidavit is required';
      } else if (formData.affidavitType === 'GENERAL') {
        if (!formData.generalSubject.trim()) newErrors.generalSubject = 'Affidavit subject is required';
        if (!formData.generalFacts.trim()) newErrors.generalFacts = 'At least one fact is required';
        if (!formData.generalPurpose.trim()) newErrors.generalPurpose = 'Purpose of the affidavit is required';
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
      const optional = (v) => (v.trim() ? v.trim() : null);
      const payload = {
        deponentName: formData.deponentName.trim(),
        deponentGender: formData.deponentGender,
        deponentNationality: formData.deponentNationality.trim(),
        deponentAddress: formData.deponentAddress.trim(),
        deponentOccupation: formData.deponentOccupation.trim(),
        deponentPhone: formData.deponentPhone.trim(),
        deponentEmail: formData.deponentEmail.trim(),

        courtState: formData.courtState,
        courtCity: formData.courtCity.trim(),
        judicialDivision: optional(formData.judicialDivision),

        affidavitType: formData.affidavitType,

        lostDocumentDescription: optional(formData.lostDocumentDescription),
        lostDocumentIssuer: optional(formData.lostDocumentIssuer),
        lostDocumentNumber: optional(formData.lostDocumentNumber),
        lossPeriod: optional(formData.lossPeriod),
        lossCircumstances: optional(formData.lossCircumstances),
        lossPurpose: optional(formData.lossPurpose),

        formerName: optional(formData.formerName),
        newName: optional(formData.newName),
        changeReason: formData.changeReason || null,
        dateNewNameAdopted: formData.dateNewNameAdopted || null,
        institutionsToNotify: optional(formData.institutionsToNotify),

        nameVariantOne: optional(formData.nameVariantOne),
        documentOne: optional(formData.documentOne),
        nameVariantTwo: optional(formData.nameVariantTwo),
        documentTwo: optional(formData.documentTwo),
        discrepancyCause: formData.discrepancyCause || null,
        discrepancyCauseOther: optional(formData.discrepancyCauseOther),
        institutionRequiring: optional(formData.institutionRequiring),

        generalSubject: optional(formData.generalSubject),
        generalFacts: formData.generalFacts.trim() || null,
        generalPurpose: optional(formData.generalPurpose)
      };

      const resp = await fetch(`${API_BASE}/api/v1/documents/affidavit/initiate-payment`, {
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
  const textareaClass = "w-full h-32 px-3 py-3 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none resize-none bg-white xl:h-[158px] xl:px-4 xl:pr-12 xl:text-[14px]";

  const typeLabel = AFFIDAVIT_TYPES.find((t) => t.value === formData.affidavitType)?.label;

  const renderTypeFields = () => {
    switch (formData.affidavitType) {
      case 'LOSS_OF_DOCUMENT':
        return (
          <>
            <div>
              <label className={labelClass}>What Document Was Lost?</label>
              <input type="text" name="lostDocumentDescription" value={formData.lostDocumentDescription} onChange={handleChange} placeholder="e.g., National Identity Card" required className={inputClass} />
              {errors.lostDocumentDescription && <p className="text-red-500 text-sm mt-1">{errors.lostDocumentDescription}</p>}
            </div>
            <div>
              <label className={labelClass}>Issuing Authority</label>
              <input type="text" name="lostDocumentIssuer" value={formData.lostDocumentIssuer} onChange={handleChange} placeholder="e.g., the National Identity Management Commission" required className={inputClass} />
              {errors.lostDocumentIssuer && <p className="text-red-500 text-sm mt-1">{errors.lostDocumentIssuer}</p>}
            </div>
            <div>
              <label className={labelClass}>Document Number (optional)</label>
              <input type="text" name="lostDocumentNumber" value={formData.lostDocumentNumber} onChange={handleChange} placeholder="e.g., 1234 5678 9012" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>When Was It Lost?</label>
              <input type="text" name="lossPeriod" value={formData.lossPeriod} onChange={handleChange} placeholder="e.g., March 2026" required className={inputClass} />
              {errors.lossPeriod && <p className="text-red-500 text-sm mt-1">{errors.lossPeriod}</p>}
            </div>
            <div>
              <label className={labelClass}>How Was It Lost?</label>
              <input type="text" name="lossCircumstances" value={formData.lossCircumstances} onChange={handleChange} placeholder="e.g., in transit between Enugu and Onitsha" required className={inputClass} />
              {errors.lossCircumstances && <p className="text-red-500 text-sm mt-1">{errors.lossCircumstances}</p>}
            </div>
            <div>
              <label className={labelClass}>Purpose of the Affidavit</label>
              <input type="text" name="lossPurpose" value={formData.lossPurpose} onChange={handleChange} placeholder="e.g., to support my application for a replacement card" required className={inputClass} />
              {errors.lossPurpose && <p className="text-red-500 text-sm mt-1">{errors.lossPurpose}</p>}
            </div>
          </>
        );
      case 'CHANGE_OF_NAME':
        return (
          <>
            <div>
              <label className={labelClass}>Former Name</label>
              <input type="text" name="formerName" value={formData.formerName} onChange={handleChange} placeholder="Name you were formerly known by" required className={inputClass} />
              {errors.formerName && <p className="text-red-500 text-sm mt-1">{errors.formerName}</p>}
            </div>
            <div>
              <label className={labelClass}>New Name</label>
              <input type="text" name="newName" value={formData.newName} onChange={handleChange} placeholder="Name you now wish to be known by" required className={inputClass} />
              {errors.newName && <p className="text-red-500 text-sm mt-1">{errors.newName}</p>}
            </div>
            <div>
              <label className={labelClass}>Reason for the Change</label>
              <select name="changeReason" value={formData.changeReason} onChange={handleChange} required className={inputClass}>
                <option value="">Select reason</option>
                {CHANGE_REASONS.map((r) => (
                  <option key={r.value} value={r.value}>{r.label}</option>
                ))}
              </select>
              {errors.changeReason && <p className="text-red-500 text-sm mt-1">{errors.changeReason}</p>}
            </div>
            <div>
              <label className={labelClass}>Date the New Name Was Adopted</label>
              <input type="date" name="dateNewNameAdopted" value={formData.dateNewNameAdopted} onChange={handleChange} required className={inputClass} />
              {errors.dateNewNameAdopted && <p className="text-red-500 text-sm mt-1">{errors.dateNewNameAdopted}</p>}
            </div>
            <div className="xl:col-span-2">
              <label className={labelClass}>Institutions to Notify (optional)</label>
              <input type="text" name="institutionsToNotify" value={formData.institutionsToNotify} onChange={handleChange} placeholder="e.g., First Bank of Nigeria Plc and the National Identity Management Commission" className={inputClass} />
              <p className="text-grey-3 text-xs mt-1">Named in the affidavit alongside the general public. Leave blank to address the general public only.</p>
            </div>
          </>
        );
      case 'NAME_DISCREPANCY':
        return (
          <>
            <div>
              <label className={labelClass}>First Name Variant</label>
              <input type="text" name="nameVariantOne" value={formData.nameVariantOne} onChange={handleChange} placeholder="Your name as it appears on the first document" required className={inputClass} />
              {errors.nameVariantOne && <p className="text-red-500 text-sm mt-1">{errors.nameVariantOne}</p>}
            </div>
            <div>
              <label className={labelClass}>Document It Appears On</label>
              <input type="text" name="documentOne" value={formData.documentOne} onChange={handleChange} placeholder="e.g., international passport" required className={inputClass} />
              {errors.documentOne && <p className="text-red-500 text-sm mt-1">{errors.documentOne}</p>}
            </div>
            <div>
              <label className={labelClass}>Second Name Variant</label>
              <input type="text" name="nameVariantTwo" value={formData.nameVariantTwo} onChange={handleChange} placeholder="Your name as it appears on the second document" required className={inputClass} />
              {errors.nameVariantTwo && <p className="text-red-500 text-sm mt-1">{errors.nameVariantTwo}</p>}
            </div>
            <div>
              <label className={labelClass}>Document It Appears On</label>
              <input type="text" name="documentTwo" value={formData.documentTwo} onChange={handleChange} placeholder="e.g., first degree certificate" required className={inputClass} />
              {errors.documentTwo && <p className="text-red-500 text-sm mt-1">{errors.documentTwo}</p>}
            </div>
            <div>
              <label className={labelClass}>Cause of the Discrepancy</label>
              <select name="discrepancyCause" value={formData.discrepancyCause} onChange={handleChange} required className={inputClass}>
                <option value="">Select cause</option>
                {DISCREPANCY_CAUSES.map((c) => (
                  <option key={c.value} value={c.value}>{c.label}</option>
                ))}
              </select>
              {errors.discrepancyCause && <p className="text-red-500 text-sm mt-1">{errors.discrepancyCause}</p>}
            </div>
            {formData.discrepancyCause === 'OTHER' && (
              <div>
                <label className={labelClass}>Explain the Cause</label>
                <input type="text" name="discrepancyCauseOther" value={formData.discrepancyCauseOther} onChange={handleChange} placeholder="Briefly explain how the discrepancy arose" required className={inputClass} />
                {errors.discrepancyCauseOther && <p className="text-red-500 text-sm mt-1">{errors.discrepancyCauseOther}</p>}
              </div>
            )}
            <div>
              <label className={labelClass}>Institution Requiring the Affidavit</label>
              <input type="text" name="institutionRequiring" value={formData.institutionRequiring} onChange={handleChange} placeholder="e.g., the National Youth Service Corps" required className={inputClass} />
              {errors.institutionRequiring && <p className="text-red-500 text-sm mt-1">{errors.institutionRequiring}</p>}
            </div>
          </>
        );
      case 'GENERAL':
        return (
          <>
            <div>
              <label className={labelClass}>Subject of the Affidavit</label>
              <input type="text" name="generalSubject" value={formData.generalSubject} onChange={handleChange} placeholder="e.g., Sponsorship" required className={inputClass} />
              <p className="text-grey-3 text-xs mt-1">Becomes the title, e.g. "Affidavit of Sponsorship".</p>
              {errors.generalSubject && <p className="text-red-500 text-sm mt-1">{errors.generalSubject}</p>}
            </div>
            <div>
              <label className={labelClass}>Purpose of the Affidavit</label>
              <input type="text" name="generalPurpose" value={formData.generalPurpose} onChange={handleChange} placeholder="e.g., for submission to the University of Nigeria, Nsukka" required className={inputClass} />
              {errors.generalPurpose && <p className="text-red-500 text-sm mt-1">{errors.generalPurpose}</p>}
            </div>
            <div className="xl:col-span-2">
              <label className={labelClass}>The Facts</label>
              <textarea name="generalFacts" value={formData.generalFacts} onChange={handleChange} placeholder={"One fact per line, e.g.:\nI am the mother of Chinedu Nwosu\nI undertake to sponsor his university education"} required className={textareaClass} />
              <p className="text-grey-3 text-xs mt-1">
                State only facts within your personal knowledge — one fact per line. Do not include
                arguments, opinions or requests (Evidence Act 2011, s. 115). Each line becomes a
                numbered "That..." paragraph in the affidavit.
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
              <label className={labelClass}>Full Name (the deponent)</label>
              <input type="text" name="deponentName" value={formData.deponentName} onChange={handleChange} placeholder="Enter your full name" required className={inputClass} />
              <p className="text-grey-3 text-xs mt-1">The deponent is the person who will swear the affidavit — you.</p>
              {errors.deponentName && <p className="text-red-500 text-sm mt-1">{errors.deponentName}</p>}
            </div>
            <div>
              <label className={labelClass}>Gender</label>
              <select name="deponentGender" value={formData.deponentGender} onChange={handleChange} required className={inputClass}>
                <option value="">Select gender</option>
                {GENDERS.map((g) => (
                  <option key={g.value} value={g.value}>{g.label}</option>
                ))}
              </select>
              {errors.deponentGender && <p className="text-red-500 text-sm mt-1">{errors.deponentGender}</p>}
            </div>
            <div>
              <label className={labelClass}>Nationality</label>
              <input type="text" name="deponentNationality" value={formData.deponentNationality} onChange={handleChange} placeholder="e.g., Nigerian" required className={inputClass} />
              {errors.deponentNationality && <p className="text-red-500 text-sm mt-1">{errors.deponentNationality}</p>}
            </div>
            <div>
              <label className={labelClass}>Occupation</label>
              <input type="text" name="deponentOccupation" value={formData.deponentOccupation} onChange={handleChange} placeholder="e.g., Trader" required className={inputClass} />
              {errors.deponentOccupation && <p className="text-red-500 text-sm mt-1">{errors.deponentOccupation}</p>}
            </div>
            <div>
              <label className={labelClass}>Residential Address</label>
              <input type="text" name="deponentAddress" value={formData.deponentAddress} onChange={handleChange} placeholder="Enter your address" required className={inputClass} />
              {errors.deponentAddress && <p className="text-red-500 text-sm mt-1">{errors.deponentAddress}</p>}
            </div>
            <div>
              <label className={labelClass}>Phone Number</label>
              <input type="tel" name="deponentPhone" value={formData.deponentPhone} onChange={handleChange} placeholder="Enter phone" required className={inputClass} />
              {errors.deponentPhone && <p className="text-red-500 text-sm mt-1">{errors.deponentPhone}</p>}
            </div>
            <div>
              <label className={labelClass}>Email Address</label>
              <input type="email" name="deponentEmail" value={formData.deponentEmail} onChange={handleChange} placeholder="Enter email" required className={inputClass} />
              <p className="text-grey-3 text-xs mt-1">The affidavit draft will be emailed to this address.</p>
              {errors.deponentEmail && <p className="text-red-500 text-sm mt-1">{errors.deponentEmail}</p>}
            </div>
          </div>
        );
      case 1:
        return (
          <div className="flex flex-col gap-6 xl:grid xl:grid-cols-2 xl:gap-6">
            <div>
              <label className={labelClass}>State Where You Will Swear the Affidavit</label>
              <select name="courtState" value={formData.courtState} onChange={handleChange} required className={inputClass}>
                <option value="">Select state</option>
                {NIGERIAN_STATES.map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
              <p className="text-grey-3 text-xs mt-1">Determines the court heading, e.g. "In the High Court of Lagos State".</p>
              {errors.courtState && <p className="text-red-500 text-sm mt-1">{errors.courtState}</p>}
            </div>
            <div>
              <label className={labelClass}>City / Town of the High Court Registry</label>
              <input type="text" name="courtCity" value={formData.courtCity} onChange={handleChange} placeholder="e.g., Ikeja" required className={inputClass} />
              {errors.courtCity && <p className="text-red-500 text-sm mt-1">{errors.courtCity}</p>}
            </div>
            <div>
              <label className={labelClass}>Judicial Division (optional)</label>
              <input type="text" name="judicialDivision" value={formData.judicialDivision} onChange={handleChange} placeholder="e.g., Ikeja" className={inputClass} />
              <p className="text-grey-3 text-xs mt-1">If you are unsure, leave this blank.</p>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col gap-6 xl:grid xl:grid-cols-2 xl:gap-6">
            <div className="xl:col-span-2">
              <label className={labelClass}>Type of Affidavit</label>
              <select name="affidavitType" value={formData.affidavitType} onChange={handleChange} required className={inputClass}>
                <option value="">Select affidavit type</option>
                {AFFIDAVIT_TYPES.map((type) => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
              {errors.affidavitType && <p className="text-red-500 text-sm mt-1">{errors.affidavitType}</p>}
            </div>
            {renderTypeFields()}
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col gap-6">
            <div className="bg-white border border-grey rounded-lg p-4 font-inter text-sm text-midnight">
              <p className="font-semibold mb-1">Your affidavit</p>
              <p>
                {typeLabel ? `${typeLabel} — ` : ''}to be sworn at the High Court Registry,{' '}
                {formData.courtCity || '...'}, {formData.courtState || '...'}. The numbered legal
                paragraphs are drafted for you from your answers.
              </p>
            </div>
            <div className="bg-aqua-haze border border-grey rounded-lg p-4 font-inter text-sm text-midnight">
              <p className="font-semibold mb-1">Before you submit — how swearing works</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  You will receive a <span className="font-semibold">draft</span>. It has no legal
                  effect until you swear it before a <span className="font-semibold">Commissioner for
                  Oaths</span> at the High Court registry (a small swearing fee is payable there).
                </li>
                <li>
                  Print the draft but <span className="font-semibold">do not sign it in advance</span> —
                  you must sign only in the presence of the Commissioner for Oaths.
                </li>
                <li>Swearing a false affidavit is perjury, a criminal offence.</li>
                {formData.affidavitType === 'CHANGE_OF_NAME' && (
                  <li>
                    For a change of name, banks and government bodies commonly also require
                    publication in a national newspaper — keep the newspaper page with your
                    sworn affidavit.
                  </li>
                )}
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
            documentType="affidavit"
            transactionRef={transactionRef}
            onClose={handleClosePaymentAlert}
          />
        )}

        <div className="mb-8 xl:mb-[16px] font-bold">
          <h2 className="font-inter text-2xl text-medium text-midnight mb-3 xl:text-[28px] xl:leading-[39.12px] xl:tracking-[0.5px]">Fill out the form below to receive your affidavit draft!</h2>
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
