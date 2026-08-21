import React, { useState } from 'react';
import { Send, Upload, CheckCircle, FileText, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface CareerFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultPosition?: string;
}

const CareerFormDialog = ({ open, onOpenChange, defaultPosition = '' }: CareerFormDialogProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    whyUs: '',
    position: defaultPosition,
  });
  
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileError, setFileError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      
      if (!validTypes.includes(selectedFile.type) && !selectedFile.name.match(/\.(pdf|doc|docx)$/i)) {
        setFileError('Please upload a PDF or DOC/DOCX document');
        return;
      }
      
      if (selectedFile.size > 10 * 1024 * 1024) {
        setFileError('File size should not exceed 10MB');
        return;
      }

      setFileError('');
      setFile(selectedFile);
    }
  };

  const removeFile = () => {
    setFile(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setFileError('Please upload your Resume / CV');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate submission delay or call API
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setIsSubmitted(false);
      setFile(null);
      setFileError('');
      setFormData({
        name: '',
        email: '',
        phone: '',
        whyUs: '',
        position: defaultPosition,
      });
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[650px] p-0 overflow-hidden bg-background max-h-[90vh] overflow-y-auto rounded-xl">
        {isSubmitted ? (
          <div className="p-8 md:p-12 text-center">
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-emerald-100 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
              Application Submitted!
            </h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm leading-relaxed">
              Thank you for expressing interest in joining First Call Advisory. Our Talent Acquisition team will review your resume and get back to you shortly.
            </p>
            <Button onClick={handleClose} className="bg-accent-primary hover:bg-accent-primary-hover text-white px-8">
              Close
            </Button>
          </div>
        ) : (
          <div className="p-6 md:p-8">
            <DialogHeader className="mb-6">
              <div className="inline-block bg-accent-primary/10 text-accent-primary text-xs font-semibold px-3 py-1 rounded-full w-max mb-2">
                Join Our Advisory Team
              </div>
              <DialogTitle className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                Wanna Work With Us?
              </DialogTitle>
              <p className="text-muted-foreground text-sm mt-1">
                Upload your resume and tell us about your career background.
              </p>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-foreground">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-foreground">
                    Email Address *
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="h-11"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-foreground">
                  Phone Number *
                </Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 98765 43210"
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="whyUs" className="text-xs font-semibold uppercase tracking-wider text-foreground">
                  Why do you wanna work with us? *
                </Label>
                <Textarea
                  id="whyUs"
                  name="whyUs"
                  required
                  rows={4}
                  value={formData.whyUs}
                  onChange={handleInputChange}
                  placeholder="Tell us about your background, skills, and why First Call Advisory is the right place for you..."
                  className="resize-none text-sm"
                />
              </div>

              {/* Upload CV Section */}
              <div className="space-y-2">
                <Label className="text-xs font-semibold uppercase tracking-wider text-foreground">
                  Upload Resume / CV *
                </Label>
                
                {!file ? (
                  <div className="border-2 border-dashed border-slate-300 hover:border-accent-primary rounded-xl p-6 text-center cursor-pointer transition-colors bg-slate-50/50 hover:bg-accent-primary/5 relative">
                    <input
                      type="file"
                      id="resume-upload"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    />
                    <div className="w-12 h-12 rounded-full bg-accent-primary/10 text-accent-primary flex items-center justify-center mx-auto mb-3">
                      <Upload className="w-6 h-6" />
                    </div>
                    <p className="text-sm font-semibold text-slate-800">
                      Click to upload or drag & drop your CV
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Supports PDF, DOC, DOCX (Max 10MB)
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center justify-between p-4 bg-slate-100 rounded-xl border border-slate-200">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="w-10 h-10 rounded-lg bg-accent-primary/10 text-accent-primary flex items-center justify-center shrink-0">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-slate-900 truncate">
                          {file.name}
                        </p>
                        <p className="text-xs text-slate-500">
                          {(file.size / (1024 * 1024)).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={removeFile}
                      className="p-1.5 hover:bg-slate-200 rounded-full text-slate-500 hover:text-slate-800 transition-colors"
                      title="Remove file"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {fileError && (
                  <p className="text-xs text-red-500 mt-1">{fileError}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent-primary hover:bg-accent-primary-hover text-white font-semibold py-3 h-12 text-sm shadow-md mt-4"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    Submitting Application...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Submit Application
                  </>
                )}
              </Button>
            </form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CareerFormDialog;
