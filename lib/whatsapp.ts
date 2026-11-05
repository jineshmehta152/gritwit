export const WHATSAPP_PHONE_NUMBER = "6585805046";
export const DISPLAY_PHONE_NUMBER = "+65 8580 5046";

export function getWhatsAppUrl(message?: string): string {
  const cleanPhone = WHATSAPP_PHONE_NUMBER.replace(/[^0-9]/g, "");
  if (!message) {
    return `https://wa.me/${cleanPhone}`;
  }
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}
