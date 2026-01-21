// File: utils/urlParams.js

/**
 * Extracts and clears URL query parameters
 * @param {Array} paramNames - Array of parameter names to extract
 * @returns {Object} Object containing the extracted parameters
 */
export function extractAndClearUrlParams(paramNames = []) {
  const params = new URLSearchParams(window.location.search);
  const extracted = {};

  // Extract specified parameters
  paramNames.forEach(param => {
    const value = params.get(param);
    if (value !== null) {
      extracted[param] = value;
    }
  });

  // Clear parameters from URL without reloading page (only if params were found)
  if (Object.keys(extracted).length > 0) {
    const cleanUrl = window.location.pathname;
    window.history.replaceState({}, document.title, cleanUrl);
  }

  return extracted;
}

/**
 * Maps backend payment status to frontend status for the alert component
 * @param {string} backendStatus - Payment status from backend (COMPLETED, PENDING, FAILED)
 * @returns {string} Frontend status (success, pending, failed)
 */
export function mapPaymentStatus(backendStatus) {
  if (!backendStatus) return null;
  
  const status = backendStatus.toLowerCase();
  const statusMap = {
    'completed': 'success',
    'pending': 'pending',
    'failed': 'failed'
  };
  
  return statusMap[status] || 'pending';
}

/**
 * Checks if the current URL has payment parameters
 * @returns {boolean}
 */
export function hasPaymentParams() {
  const params = new URLSearchParams(window.location.search);
  return params.has('payment_status') || params.has('transaction_ref');
}