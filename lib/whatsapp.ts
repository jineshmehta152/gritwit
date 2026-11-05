export const WHATSAPP_PHONE_NUMBER = "919429902012";
export const DISPLAY_PHONE_NUMBER = "+91 94299 02012";

export function getWhatsAppUrl(message?: string): string {
  const cleanPhone = WHATSAPP_PHONE_NUMBER.replace(/[^0-9]/g, "");
  if (!message) {
    return `https://wa.me/${cleanPhone}`;
  }
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}
