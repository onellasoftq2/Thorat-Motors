"use client";

import { useState } from 'react';
import { useForm, type FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';

import { products } from '@/lib/data';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const step1Schema = z.object({
  productCategory: z.string().min(1, 'Please select a category'),
  product: z.string().min(1, 'Please select a product'),
});

const step2Schema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  companyName: z.string().optional(),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
});

const step3Schema = z.object({
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const formSchema = step1Schema.merge(step2Schema).merge(step3Schema);

type FormData = z.infer<typeof formSchema>;

const steps = [
  { id: 'Step 1', name: 'Product Selection', fields: ['productCategory', 'product'] },
  { id: 'Step 2', name: 'Contact Information', fields: ['fullName', 'companyName', 'email', 'phone'] },
  { id: 'Step 3', name: 'Your Message', fields: ['message'] },
];

export default function QuoteForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(
        currentStep === 0 ? step1Schema : currentStep === 1 ? step2Schema : step3Schema
    ),
    defaultValues: {
        productCategory: '',
        product: '',
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        message: '',
    },
  });

  const productCategory = form.watch('productCategory');

  const processForm = async (data: FormData) => {
    console.log('Form data:', data);
    // Here you would typically send the data to your backend
    setSubmitted(true);
  };
  
  type FieldName = keyof FormData;

  const next = async () => {
    const fields = steps[currentStep].fields as FieldName[];
    const output = await form.trigger(fields, { shouldFocus: true });

    if (!output) return;

    if (currentStep < steps.length - 1) {
      setCurrentStep(step => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setCurrentStep(step => step - 1);
    }
  };
  
  const onSubmit = form.handleSubmit(processForm);

  if (submitted) {
    return (
        <Card className="text-center shadow-md">
            <CardHeader>
                <div className="mx-auto bg-green-100 rounded-full p-3 w-fit">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="mt-4">Thank You!</CardTitle>
                <CardDescription>Your quote request has been submitted successfully. Our team will get in touch with you shortly.</CardDescription>
            </CardHeader>
        </Card>
    );
  }

  return (
    <Card className="shadow-md">
        <CardHeader>
            <CardTitle>Request a Quote</CardTitle>
            <CardDescription>Step {currentStep + 1} of {steps.length}: {steps[currentStep].name}</CardDescription>
        </CardHeader>
        <CardContent>
            <Form {...form}>
                <form onSubmit={onSubmit} className="space-y-6">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                    >
                        {currentStep === 0 && (
                        <div className="space-y-4">
                            <FormField
                            control={form.control}
                            name="productCategory"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Product Category</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a category" />
                                    </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                    <SelectItem value="trailers">Trailers</SelectItem>
                                    <SelectItem value="cabins">Portable Cabins</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            {productCategory && (
                            <FormField
                                control={form.control}
                                name="product"
                                render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Product</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                        <SelectValue placeholder="Select a product" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {(products[productCategory as keyof typeof products] || []).map(p => (
                                        <SelectItem key={p.id} value={p.name}>{p.name}</SelectItem>
                                        ))}
                                    </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />
                            )}
                        </div>
                        )}

                        {currentStep === 1 && (
                        <div className="space-y-4">
                            <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="John Doe" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                             <FormField
                            control={form.control}
                            name="companyName"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Company Name (Optional)</FormLabel>
                                <FormControl>
                                    <Input placeholder="Acme Inc." {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                    <Input placeholder="john.doe@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                    <Input placeholder="+91 12345 67890" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                        </div>
                        )}

                        {currentStep === 2 && (
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Your Message</FormLabel>
                                <FormControl>
                                <Textarea
                                    placeholder="Please provide details about your requirements, quantities, and any customization needs."
                                    className="min-h-[150px]"
                                    {...field}
                                />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        )}
                    </motion.div>
                </AnimatePresence>
                </form>
            </Form>

            <div className="mt-8 flex justify-between">
                <Button variant="outline" onClick={prev} disabled={currentStep === 0}>
                Back
                </Button>

                {currentStep < steps.length - 1 ? (
                <Button onClick={next}>Next</Button>
                ) : (
                <Button type="submit" onClick={onSubmit} className="bg-accent text-accent-foreground hover:bg-accent/90">
                Submit Request
                </Button>
                )}
            </div>
        </CardContent>
    </Card>
  );
}
