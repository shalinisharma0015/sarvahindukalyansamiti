import { createFileRoute } from '@tanstack/react-router';
import { NewsSection, PageHeading, SiteShell, pageMeta } from '@/components/samiti/site';
export const Route=createFileRoute('/news')({head:()=>pageMeta('समाचार एवं कार्यक्रम','समिति की आधिकारिक घोषणाएँ, समाचार और पुष्ट धार्मिक एवं सांस्कृतिक कार्यक्रम।'),component:()=> <SiteShell><PageHeading eyebrow="आधिकारिक घोषणाएँ" title="समाचार एवं कार्यक्रम" copy="समिति की गतिविधियों और आगामी आयोजनों की पुष्ट जानकारी।"/><NewsSection full/></SiteShell>});
