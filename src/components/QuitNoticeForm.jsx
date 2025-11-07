import { useState } from 'react';

export default function QuitNoticeForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Step 1: Landlord
    landlordName: '', landlordAddress: '', landlordPhone: '', landlordEmail: '',
    // Step 2: Tenant
    tenantName: '', rentalAddress: '', occupants: '',
    // Step 3: Lease
    leaseStartDate: '', leaseEndDate: '', rentAmount: '', leaseClauses: '',
    // Step 4: Notice
    noticeReason: '', noticePeriod: '', amountsDue: '',
    // Step 5: Property
    propertyAddress: '', issuanceDate: ''
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const steps = [
    'Landlord Details',
    'Tenant Details',
    'Lease Information',
    'Notice Details',
    'Property & Submit'
  ];

const handleChange = (e) => {
  let value = e.target.value;
  if (e.target.type === 'email') value = value.trim();
  if (e.target.name === 'rentAmount') {
    // allow typing but strip commas
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
      if (!formData.noticePeriod.trim()) newErrors.noticePeriod = 'Notice period is required';
    } else if (step === 4) {
      if (!formData.propertyAddress.trim()) newErrors.propertyAddress = 'Property address is required';
      if (!formData.issuanceDate) newErrors.issuanceDate = 'Issuance date is required';
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
    // Build a safe payload with correct types/formats
    const payload = {
      landlordName: formData.landlordName.trim(),
      landlordAddress: formData.landlordAddress.trim(),
      landlordPhone: formData.landlordPhone.trim(),
      landlordEmail: formData.landlordEmail.trim(),

      tenantName: formData.tenantName.trim(),
      rentalAddress: formData.rentalAddress.trim(),
      occupants: formData.occupants?.trim() || null,

      // Date inputs already produce YYYY-MM-DD strings — leave as-is or null
      leaseStartDate: formData.leaseStartDate || null,
      leaseEndDate: formData.leaseEndDate || null,

      // Ensure rent is a number and remove any commas
      rentAmount: formData.rentAmount === '' || formData.rentAmount == null
        ? null
        : Number(String(formData.rentAmount).replace(/,/g, '')),

      leaseClauses: formData.leaseClauses?.trim() || null,

      noticeReason: formData.noticeReason.trim(),
      noticePeriod: formData.noticePeriod.trim(),
      amountsDue: formData.amountsDue?.trim() || null,

      propertyAddress: formData.propertyAddress.trim(),
      issuanceDate: formData.issuanceDate || null
    };

    const resp = await fetch(`${API_BASE}/documents/quit-notice`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload)
    });

    const body = await resp.json().catch(() => ({}));

    if (resp.ok) {
      // success
      alert('Quit notice submitted successfully! Your document will be emailed.');
      // reset form...
    } else {
      // Show backend error message if present
      const errMsg =
        body.detail?.[0]?.msg ||
        body.message ||
        JSON.stringify(body) ||
        'Submission failed';
      alert(`Submission failed: ${errMsg}`);
    }
  } catch (err) {
    console.error('Submit error', err);
    alert('Network or unexpected error submitting form.');
  } finally {
    setSubmitting(false);
  }
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
              <label className="block font-inter text-sm text-midnight mb-2 font-semibold xl:text-[14px] xl:mb-1">Monthly Rent Amount</label>
              <input type="number" name="rentAmount" value={formData.rentAmount} onChange={handleChange} placeholder="e.g., 1000" required className="w-full h-12 px-3 py-3 pr-10 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none bg-white text-grey-3 xl:h-[56px] xl:px-4 xl:pr-12 xl:text-[14px]" />
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
              <label className="block font-inter text-sm text-midnight mb-2 font-semibold xl:text-[14px] xl:mb-1">Notice Period</label>
              <input type="text" name="noticePeriod" value={formData.noticePeriod} onChange={handleChange} placeholder="e.g., 30 days" required className="w-full h-12 px-3 py-3 pr-10 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none bg-white text-grey-3 xl:h-[56px] xl:px-4 xl:pr-12 xl:text-[14px]" />
              {errors.noticePeriod && <p className="text-red-500 text-sm mt-1">{errors.noticePeriod}</p>}
            </div>
            <div>
              <label className="block font-inter text-sm text-midnight mb-2 font-semibold xl:text-[14px] xl:mb-1">Amounts Due (if any)</label>
              <input type="text" name="amountsDue" value={formData.amountsDue} onChange={handleChange} placeholder="e.g., $500 overdue rent" className="w-full h-12 px-3 py-3 pr-10 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none bg-white text-grey-3 xl:h-[56px] xl:px-4 xl:pr-12 xl:text-[14px]" />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="flex flex-col gap-6 xl:grid xl:grid-cols-1 xl:gap-6">
            <div>
              <label className="block font-inter text-sm text-midnight mb-2 font-semibold xl:text-[14px] xl:mb-1">Property Address</label>
              <input type="text" name="propertyAddress" value={formData.propertyAddress} onChange={handleChange} placeholder="Full property address" required className="w-full h-12 px-3 py-3 pr-10 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none bg-white text-grey-3 xl:h-[56px] xl:px-4 xl:pr-12 xl:text-[14px]" />
              {errors.propertyAddress && <p className="text-red-500 text-sm mt-1">{errors.propertyAddress}</p>}
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
