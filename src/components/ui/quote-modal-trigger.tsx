'use client';

import React from 'react';
import { Button, type ButtonProps } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Phone, MessageSquare } from 'lucide-react';

interface QuoteModalTriggerProps extends ButtonProps {
  children: React.ReactNode;
}

export function QuoteModalTrigger({ children, ...props }: QuoteModalTriggerProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button {...props}>{children}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">Connect With Us</DialogTitle>
          <DialogDescription className="text-center pt-2">
            Have a question or need a quote? Our team is ready to help. Reach out to us directly.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button asChild size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white">
            <a href="https://wa.me/919096757924" target="_blank" rel="noopener noreferrer">
              <MessageSquare className="mr-2 h-5 w-5" /> Chat on WhatsApp
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full">
            <a href="tel:+919011943810">
              <Phone className="mr-2 h-5 w-5" /> Call Us
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
