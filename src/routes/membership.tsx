import { createFileRoute } from '@tanstack/react-router';
import { ContributionPage } from '@/components/samiti/contribution';
import { amounts, pageMeta } from '@/components/samiti/site';
export const Route=createFileRoute('/membership')({validateSearch:(search:Record<string,unknown>):{amount?:number}=>({amount:amounts.includes(Number(search['amount']))?Number(search['amount']):101}),head:()=>pageMeta('सदस्य बनें','सर्व हिन्दू कल्याण समिति की सदस्यता के लिए सहयोग राशि चुनें।'),component:Membership});
function Membership(){const {amount}=Route.useSearch();return <ContributionPage membership initialAmount={amount ?? 101}/>;}
