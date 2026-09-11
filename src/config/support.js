export const SUPPORT_EMAIL = "hello@brandless.studio";
export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "";

export const getWhatsAppUrl = (message = "Hello Brandless support") => {
  const encodedMessage = encodeURIComponent(message);
  return WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
    : "";
};
