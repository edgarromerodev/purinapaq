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
  // Opcional: Esto evita que los bots llenen el formulario
  formData.append("from_name", "Purinapaq Web System"); 

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  return await response.json();
};