
import QuoteForm from '@/components/quote-form';

export default function QuotePage() {
  return (
    <>
      <div className="bg-secondary">
        <div className="container mx-auto px-4 py-12 md:py-16 text-center md:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline">
            Request a Quote
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Let's build your solution. Provide us with your requirements, and our team will get back to you shortly.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-24 md:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <QuoteForm />
        </div>
      </div>
    </>
  );
}

    