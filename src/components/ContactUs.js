import React, { useEffect } from 'react';

const ContactUs = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
      
    <div class="visme_d" data-title="New Client Contact Form" data-url="x4vq6rzy-new-client-contact-form?sidebar=true" data-domain="forms" data-full-page="false" data-min-height="600px" data-form-id="51377"></div>

  );
};

export default ContactUs;
