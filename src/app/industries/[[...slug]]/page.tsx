
'use client';
import { usePathname } from 'next/navigation';

function toTitleCase(str: string) {
  return str.replace(/-/g, ' ').replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substring(1)
  );
}

export default function IndustrySubPage() {
  const pathname = usePathname();
  const pathParts = pathname.split('/').filter(p => p);
  const title = toTitleCase(pathParts[pathParts.length - 1] || 'Industry Page');
  const breadcrumbs = pathParts.slice(1).map(p => toTitleCase(p));

  return (
    <>
      <div className="bg-secondary">
        <div className="container mx-auto px-4 py-12 md:py-16 text-center md:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Information about our {breadcrumbs.join(' - ')} services.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-24 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center prose lg:prose-xl">
            <h2>Page Under Construction</h2>
            <p>The content for the <span className='font-semibold'>{title}</span> page is currently being developed. Please check back soon for updates.</p>
        </div>
      </div>
    </>
  );
}
