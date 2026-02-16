import { useMemo } from "react";

const mainLogos = [
  "Google Calendar", "GoHighLevel", "Airtable", "Slack", "HubSpot",
  "Stripe", "Zapier", "Make", "Salesforce", "Outlook",
  "Zoom", "Calendly", "Shopify", "QuickBooks", "Freshbooks",
];

const mediumNames = [
  "Notion", "Trello", "Asana", "Monday", "Intercom",
  "Twilio", "Mailchimp", "ActiveCampaign", "Pipedrive", "Jira",
];

interface BubbleData {
  name: string;
  size: number;
  x: number;
  y: number;
  animClass: string;
  delay: string;
  type: "logo" | "medium" | "small";
}

const IntegrationsSection = () => {
  const bubbles = useMemo<BubbleData[]>(() => {
    const result: BubbleData[] = [];
    const animClasses = ["animate-drift-1", "animate-drift-2", "animate-drift-3", "animate-drift-4"];

    // Main logo bubbles
    mainLogos.forEach((name, i) => {
      result.push({
        name,
        size: 60 + Math.random() * 20,
        x: 5 + (i % 5) * 18 + Math.random() * 8,
        y: 10 + Math.floor(i / 5) * 30 + Math.random() * 15,
        animClass: animClasses[i % 4],
        delay: `${i * 0.5}s`,
        type: "logo",
      });
    });

    // Medium bubbles
    mediumNames.forEach((name, i) => {
      result.push({
        name,
        size: 38 + Math.random() * 12,
        x: 8 + Math.random() * 80,
        y: 5 + Math.random() * 80,
        animClass: animClasses[(i + 2) % 4],
        delay: `${i * 0.7}s`,
        type: "medium",
      });
    });

    // Small background bubbles
    for (let i = 0; i < 20; i++) {
      result.push({
        name: "",
        size: 16 + Math.random() * 14,
        x: Math.random() * 95,
        y: Math.random() * 90,
        animClass: animClasses[i % 4],
        delay: `${i * 0.3}s`,
        type: "small",
      });
    }

    return result;
  }, []);

  return (
    <section className="section-padding bg-ice">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-h2 font-bold text-ice-foreground mb-4">
            S'intègre avec vos outils
          </h2>
          <p className="text-body-lg text-text-secondary">
            Plus de 1 000 intégrations disponibles
          </p>
        </div>

        <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden">
          {bubbles.map((b, i) => (
            <div
              key={i}
              className={`absolute rounded-full flex items-center justify-center ${b.animClass} ${
                b.type === "small"
                  ? "bg-secondary opacity-40"
                  : "bg-background border border-border shadow-sm"
              }`}
              style={{
                width: b.size,
                height: b.size,
                left: `${b.x}%`,
                top: `${b.y}%`,
                animationDelay: b.delay,
              }}
            >
              {b.type === "logo" && (
                <span className="text-[10px] font-semibold text-foreground text-center leading-tight px-1">
                  {b.name}
                </span>
              )}
              {b.type === "medium" && (
                <span className="text-[8px] font-medium text-text-secondary text-center leading-tight px-1">
                  {b.name}
                </span>
              )}
            </div>
          ))}

          {/* Center hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 px-5 py-2.5 bg-primary text-primary-foreground rounded-pill font-bold text-sm shadow-vsl-glow">
            ✦ Calendia Pro
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
