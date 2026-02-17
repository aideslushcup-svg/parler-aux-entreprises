import {
  FloatingIconsHero,
  type FloatingIconsHeroProps,
} from "@/components/ui/floating-icons-hero-section";

// SVG icons for integrations
const IconGoogleCalendar = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.316 5.684H5.684v12.632h12.632V5.684z" fill="#fff"/>
    <path d="M16.105 10.526l-1.263 1.264-2.842-2.843-2.842 2.843L7.895 10.526 10.737 7.684 7.895 4.842l1.263-1.263 2.842 2.842 2.842-2.842 1.263 1.263-2.842 2.842 2.842 2.842z" fill="#4285F4"/>
    <path d="M18.316 5.684l-2.211-2.21H5.684L3.474 5.684v10.421l2.21 2.21V5.685h12.632z" fill="#1A73E8"/>
    <path d="M18.316 18.316H5.684l-2.21 2.21h17.053l2.21-2.21v-10.42l-2.21-2.212v12.632z" fill="#0D652D"/>
    <path d="M18.316 18.316V5.684l2.21 2.21v12.633l-2.21-2.21z" fill="#188038"/>
    <path d="M5.684 18.316V5.684l-2.21 2.21v12.633l2.21-2.21z" fill="#1967D2"/>
  </svg>
);

const IconSlack = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.27 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.833 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" fill="#E01E5A"/>
    <path d="M8.833 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.833 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.833zm0 1.27a2.527 2.527 0 0 1 2.521 2.521 2.527 2.527 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.833a2.528 2.528 0 0 1 2.522-2.521h6.311z" fill="#36C5F0"/>
    <path d="M18.956 8.833a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.833a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.833zm-1.27 0a2.527 2.527 0 0 1-2.521 2.521 2.527 2.527 0 0 1-2.521-2.521V2.522A2.528 2.528 0 0 1 15.165 0a2.528 2.528 0 0 1 2.521 2.522v6.311z" fill="#2EB67D"/>
    <path d="M15.165 18.956a2.528 2.528 0 0 1 2.521 2.522A2.528 2.528 0 0 1 15.165 24a2.528 2.528 0 0 1-2.521-2.522v-2.522h2.521zm0-1.27a2.527 2.527 0 0 1-2.521-2.521 2.527 2.527 0 0 1 2.521-2.521h6.313A2.528 2.528 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.521h-6.313z" fill="#ECB22E"/>
  </svg>
);

const IconHubSpot = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.5 8.2V5.7a2 2 0 0 0 1.2-1.8 2 2 0 1 0-4 0c0 .8.5 1.5 1.2 1.8v2.5a5.5 5.5 0 0 0-3.1 1.5L5.9 4.9a2.2 2.2 0 0 0 .1-.6 2.1 2.1 0 1 0-2.1 2.1c.4 0 .8-.1 1.1-.3l6.8 4.7a5.5 5.5 0 0 0 0 5.6L9 19a2.2 2.2 0 1 0 1.2 1.2l2.7-2.6a5.5 5.5 0 1 0 4.6-9.4z" fill="#FF7A59"/>
  </svg>
);

const IconStripe = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.918 3.757 7.11c0 4.46 2.72 5.838 5.693 6.965 1.867.717 2.879 1.226 2.879 2.27 0 .984-.806 1.553-2.267 1.553-1.88 0-4.882-1.005-6.717-2.09L2.5 21.302C4.112 22.39 7.291 24 11.338 24c2.615 0 4.753-.635 6.268-1.836 1.694-1.336 2.539-3.314 2.539-5.88 0-4.576-2.74-5.89-6.17-7.134z" fill="#635BFF"/>
  </svg>
);

const IconZapier = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.535 8.465l-2.12 2.12h4.17v2.83h-4.17l2.12 2.12-2 2-2.12-2.12v4.17h-2.83v-4.17l-2.12 2.12-2-2 2.12-2.12h-4.17v-2.83h4.17l-2.12-2.12 2-2 2.12 2.12v-4.17h2.83v4.17l2.12-2.12 2 2z" fill="#FF4A00"/>
  </svg>
);

const IconSalesforce = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 4.4a5.1 5.1 0 0 1 4.2 2.2 4.2 4.2 0 0 1 6.2 3.5A3.8 3.8 0 0 1 22 13.6a3.8 3.8 0 0 1-3.2 3.8H5.5a4.1 4.1 0 0 1-3.5-4.1 4.1 4.1 0 0 1 3-4 5.1 5.1 0 0 1 5-4.9z" fill="#00A1E0"/>
  </svg>
);

const IconZoom = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" fill="#2D8CFF"/>
    <path d="M3 8h11v8H3V8z" fill="#fff"/>
    <path d="M15 10l5-2v8l-5-2v-4z" fill="#fff"/>
  </svg>
);

const IconCalendly = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#006BFF"/>
    <path d="M12.5 7h-1.5v6l5.25 3.15.75-1.23-4.5-2.67V7z" fill="#006BFF"/>
  </svg>
);

const IconShopify = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.337 3.414a.622.622 0 0 0-.561-.49c-.237-.017-5.321-.383-5.321-.383l-3.557-3.557-1.167.368 1.616 20.047L15.6 21.21l-.263-17.796z" fill="#95BF47"/>
    <path d="M14.776 2.924l-1.449.45s-.702-2.134-1.551-2.684c-.85-.55-1.199-.1-1.349.15l-.05.1-3.557-3.557L15.6 21.21l-.824-18.286z" fill="#5E8E3E"/>
  </svg>
);

const IconMake = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#6D00CC"/>
    <path d="M8 8l8 8M16 8l-8 8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const IconOutlook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 6l-8 5-8-5V4l8 5 8-5h0z" fill="#0078D4"/>
    <path d="M6 6v12h16V6H6z" fill="#0078D4" opacity=".8"/>
    <path d="M2 6h6v12H2V6z" fill="#0078D4"/>
  </svg>
);

const IconAirtable = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.5 2.5L2 7l9.5 4.5L21 7l-9.5-4.5z" fill="#FCB400"/>
    <path d="M12.5 12.8V22l9-4.5V9l-9 3.8z" fill="#18BFFF"/>
    <path d="M11.5 12.8V22l-9-4.5V9l9 3.8z" fill="#F82B60"/>
  </svg>
);

const IconGoHighLevel = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" fill="#FF6B35"/>
    <path d="M12 8v8l6-4-6-4z" fill="#fff"/>
  </svg>
);

const IconQuickBooks = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#2CA01C"/>
    <path d="M8 8v8h2v-3h2a3 3 0 0 0 0-6H8zm2 2h2a1 1 0 1 1 0 2h-2v-2z" fill="#fff"/>
  </svg>
);

const IconFreshbooks = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4h16v16H4V4z" fill="#0075DD" rx="3"/>
    <path d="M8 9h8M8 12h6M8 15h4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconNotion = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" className="text-foreground/80" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L18.147 2.12c-.42-.326-.98-.7-2.055-.607L3.248 2.607c-.466.046-.56.28-.374.466l1.585 1.135zm.793 2.846v13.909c0 .746.373 1.026 1.213.98l14.523-.84c.84-.046.933-.56.933-1.166V6.054c0-.607-.233-.933-.746-.887l-15.177.887c-.56.047-.746.327-.746.887v.013zm14.336.42c.093.42 0 .84-.42.887l-.7.14v10.263c-.607.327-1.166.513-1.633.513-.746 0-.933-.233-1.493-.933l-4.57-7.17v6.937l1.446.327s0 .84-1.166.84l-3.22.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.86 9.667c-.093-.42.14-1.026.793-1.073l3.453-.233 4.757 7.263V9.387l-1.213-.14c-.093-.513.28-.886.746-.933l3.22-.186-.026.046z"/>
  </svg>
);

const integrationIcons: FloatingIconsHeroProps['icons'] = [
  { id: 1, icon: IconGoogleCalendar, className: 'top-[8%] left-[12%]' },
  { id: 2, icon: IconSlack, className: 'top-[15%] right-[10%]' },
  { id: 3, icon: IconHubSpot, className: 'top-[75%] left-[8%]' },
  { id: 4, icon: IconStripe, className: 'bottom-[12%] right-[12%]' },
  { id: 5, icon: IconZapier, className: 'top-[5%] left-[35%]' },
  { id: 6, icon: IconSalesforce, className: 'top-[8%] right-[32%]' },
  { id: 7, icon: IconZoom, className: 'bottom-[10%] left-[28%]' },
  { id: 8, icon: IconCalendly, className: 'top-[42%] left-[6%]' },
  { id: 9, icon: IconShopify, className: 'top-[70%] right-[20%]' },
  { id: 10, icon: IconMake, className: 'bottom-[5%] left-[55%]' },
  { id: 11, icon: IconOutlook, className: 'top-[50%] right-[6%]' },
  { id: 12, icon: IconAirtable, className: 'top-[60%] left-[22%]' },
  { id: 13, icon: IconGoHighLevel, className: 'top-[5%] left-[58%]' },
  { id: 14, icon: IconQuickBooks, className: 'bottom-[8%] right-[40%]' },
  { id: 15, icon: IconFreshbooks, className: 'top-[28%] right-[18%]' },
  { id: 16, icon: IconNotion, className: 'top-[62%] left-[42%]' },
];

const IntegrationsSection = () => {
  return (
    <section className="section-padding bg-ice">
      <div className="container-narrow">
        <FloatingIconsHero
          title="S'intègre avec vos outils"
          subtitle="Plus de 1 000 intégrations disponibles"
          icons={integrationIcons}
        />

        {/* Center hub */}
        <div className="flex justify-center -mt-8">
          <div className="px-5 py-2.5 bg-primary text-primary-foreground rounded-pill font-bold text-sm shadow-vsl-glow">
            ✦ Calendia Pro
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
