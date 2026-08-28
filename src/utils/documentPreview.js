// Shared "Preview Document" behaviour for every self-service form: POST the
// current form data to the backend's watermarking preview endpoint (no DB
// row, no payment) and open the returned PDF in a new tab.
export async function openDocumentPreview(apiBase, slug, payload) {
  const resp = await fetch(`${apiBase}/api/v1/documents/${slug}/preview`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/pdf' },
    body: JSON.stringify(payload),
  });

  if (!resp.ok) {
    if (resp.status === 429) {
      throw new Error('Too many preview requests. Please wait a few minutes and try again.');
    }
    const body = await resp.json().catch(() => ({}));
    throw new Error(body.detail?.[0]?.msg || body.detail || body.message || 'Preview failed. Please try again.');
  }

  const blob = await resp.blob();
  const url = URL.createObjectURL(blob);
  window.open(url, '_blank', 'noopener,noreferrer');
  // Give the new tab time to load the PDF before releasing the blob URL.
  setTimeout(() => URL.revokeObjectURL(url), 60000);
}
