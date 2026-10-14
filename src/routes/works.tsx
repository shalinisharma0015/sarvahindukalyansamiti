import { createFileRoute } from '@tanstack/react-router';
import { WorksSection, FinalCTA, PageHeading, SiteShell, pageMeta } from '@/components/samiti/site';
export const Route=createFileRoute('/works')({head:()=>pageMeta('हमारे कार्य','मंदिर संबंधी कार्य, सनातन संस्कृति और धार्मिक आयोजनों के प्रति समिति का संकल्प।'),component:()=> <SiteShell><PageHeading eyebrow="धर्म, संस्कृति और सहभागिता" title="हमारे कार्य एवं संकल्प" copy="समिति के पुष्ट धार्मिक एवं सांस्कृतिक कार्यों की जानकारी यहाँ साझा की जाएगी।"/><WorksSection full/><FinalCTA/></SiteShell>});
