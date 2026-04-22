// src/utils/formConfig.js

export const WEB3FORMS_KEY = "8113aadb-cafc-4810-8936-c2c638d7c45b";

export const PURINAPAQ_EMAILS = {
  DONATION: "equipment@purinapaq.org",
  REQUEST: "request@purinapaq.org",
  CONTACT: "info@purinapaq.org",
};

/**
 * Función centralizada para enviar formularios
 * @param {FormData} formData 
 * @param {string} toEmail 
 * @param {string} subject 
 */

export const sendForm = async (formData, toEmail, subject) => {
  formData.append("access_key", WEB3FORMS_KEY);
  formData.append("to", toEmail);
  formData.append("subject", subject);
  formData.append("from_name", "Purinapaq Web System"); 

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    
    // Si el envío falla, lo verás en la consola del navegador (F12)
    if (!data.success) {
      console.error("Error de Web3Forms:", data.message);
    }
    
    return data;
  } catch (error) {
    console.error("Error de red:", error);
    return { success: false };
  }
};