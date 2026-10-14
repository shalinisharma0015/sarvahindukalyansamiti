import { createFileRoute } from '@tanstack/react-router';
import { AboutSection, FinalCTA, PageHeading, SiteShell, pageMeta } from '@/components/samiti/site';
export const Route=createFileRoute('/about')({head:()=>pageMeta('हमारे बारे में','सर्व हिन्दू कल्याण समिति का परिचय, संस्कृति संरक्षण और सामुदायिक सहभागिता का संकल्प।'),component:()=> <SiteShell><PageHeading eyebrow="आस्था से प्रेरित, सेवा को समर्पित" title="हमारे बारे में" copy="धर्म, संस्कृति, परंपरा और समुदाय — हमारी पहचान का आधार।"/><AboutSection full/><FinalCTA/></SiteShell>});
