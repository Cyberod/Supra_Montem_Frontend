// Site-wide hold on document generation while production deployment catches up
// (new document types still need their migrations run against the prod DB).
// Flip back to false once deployment is confirmed.
export const GENERATION_DISABLED = true;
export const GENERATION_DISABLED_MESSAGE = 'Document generation is temporarily unavailable. Please check back shortly.';
