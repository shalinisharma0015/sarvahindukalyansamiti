import { createFileRoute } from '@tanstack/react-router';
import { ContributionPage } from '@/components/samiti/contribution';
import { pageMeta } from '@/components/samiti/site';
export const Route=createFileRoute('/donate')({head:()=>pageMeta('दान करें','समिति के अनुमोदित धार्मिक एवं सांस्कृतिक कार्यों के लिए अपना सहयोग चुनें।'),component:()=> <ContributionPage/>});
