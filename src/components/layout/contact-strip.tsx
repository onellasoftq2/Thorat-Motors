import { contactInfo, offices } from '@/lib/data';
import { Mail, MapPin, Phone } from 'lucide-react';

const contactDetails = [
    {
        icon: <MapPin className="h-8 w-8 text-primary" />,
        line1: `${offices[0].city}, ${offices[0].state}`,
        line2: offices[0].address.split(',').slice(0, 2).join(','),
    },
    {
        icon: <Phone className="h-8 w-8 text-primary" />,
        line1: contactInfo.phone,
        line2: 'Give us a call',
    },
    {
        icon: <Mail className="h-8 w-8 text-primary" />,
        line1: contactInfo.emails[0],
        line2: '24/7 online support',
    }
]

export default function ContactStrip() {
    return (
        <div className="bg-secondary">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    {contactDetails.map((detail, index) => (
                        <div key={detail.line1} className="flex flex-col md:flex-row items-center gap-4 relative">
                             {index > 0 && <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 h-16 w-px bg-border" />}
                            <div className="flex-shrink-0">
                                {detail.icon}
                            </div>
                            <div>
                                <p className="font-semibold text-foreground">{detail.line1}</p>
                                <p className="text-sm text-muted-foreground">{detail.line2}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
