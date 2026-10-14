import { createFileRoute } from '@tanstack/react-router';
import { Home, pageMeta } from '@/components/samiti/site';
export const Route = createFileRoute('/')({head:()=>pageMeta('आस्था, संस्कृति और सेवा','सर्व हिन्दू कल्याण समिति — धर्म, सनातन संस्कृति और समाज कल्याण के संकल्प से जुड़ें।'),component:Home});
