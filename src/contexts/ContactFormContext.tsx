import React, { createContext, useContext, useState, ReactNode } from 'react';
import ContactFormDialog from '@/components/ContactFormDialog';

interface ContactFormContextType {
  openContactForm: () => void;
  closeContactForm: () => void;
}

const ContactFormContext = createContext<ContactFormContextType | undefined>(undefined);

export const useContactForm = () => {
  const context = useContext(ContactFormContext);
  if (!context) {
    throw new Error('useContactForm must be used within a ContactFormProvider');
  }
  return context;
};

interface ContactFormProviderProps {
  children: ReactNode;
}

export const ContactFormProvider = ({ children }: ContactFormProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openContactForm = () => setIsOpen(true);
  const closeContactForm = () => setIsOpen(false);

  return (
    <ContactFormContext.Provider value={{ openContactForm, closeContactForm }}>
      {children}
      <ContactFormDialog open={isOpen} onOpenChange={setIsOpen} />
    </ContactFormContext.Provider>
  );
};
