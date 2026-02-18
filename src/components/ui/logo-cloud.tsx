import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const industries = [
  "PME",
  "Construction",
  "Clinique",
  "Courtier immobilier",
  "Restaurant",
  "Hôtel",
  "Déménagement",
  "Cabinet",
];

type LogoCloudProps = React.ComponentProps<"div">;

export function LogoCloud({ className, ...props }: LogoCloudProps) {
  return (
    <div
      className={cn(
        "relative grid grid-cols-2 border-x md:grid-cols-4",
        className
      )}
      {...props}
    >
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t" />

      <LogoCard
        className="relative border-r border-b bg-secondary/30"
        name={industries[0]}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6"
          strokeWidth={1}
        />
      </LogoCard>

      <LogoCard className="border-b md:border-r" name={industries[1]} />

      <LogoCard
        className="relative border-r border-b md:bg-secondary/30"
        name={industries[2]}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6"
          strokeWidth={1}
        />
        <PlusIcon
          className="-bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 md:block"
          strokeWidth={1}
        />
      </LogoCard>

      <LogoCard
        className="relative border-b bg-secondary/30 md:bg-background"
        name={industries[3]}
      />

      <LogoCard
        className="relative border-r border-b bg-secondary/30 md:border-b-0 md:bg-background"
        name={industries[4]}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] md:-left-[12.5px] absolute z-10 size-6 md:hidden"
          strokeWidth={1}
        />
      </LogoCard>

      <LogoCard
        className="border-b bg-background md:border-r md:border-b-0 md:bg-secondary/30"
        name={industries[5]}
      />

      <LogoCard className="border-r" name={industries[6]} />

      <LogoCard className="bg-secondary/30" name={industries[7]} />

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b" />
    </div>
  );
}

function LogoCard({
  name,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & { name: string }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-background px-4 py-8 md:p-8",
        className
      )}
      {...props}
    >
      <span className="pointer-events-none select-none text-base md:text-lg font-semibold text-foreground/80 tracking-wide">
        {name}
      </span>
      {children}
    </div>
  );
}
