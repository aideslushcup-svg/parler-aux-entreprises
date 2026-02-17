import { motion } from "framer-motion";

const industries = [
  "Cliniques", "Cabinets", "Coaches", "Services", "PME", "Startups",
  "Cliniques", "Cabinets", "Coaches", "Services", "PME", "Startups",
];

const VideoPlayer = () => {
  return (
    <section
      className="relative pt-48 pb-16 md:pb-24"
      style={{
        background: "linear-gradient(180deg, #f0f4ff 0%, #e8efff 50%, #f0f4ff 100%)",
      }}
    >
      <div className="max-w-[1100px] mx-auto px-4">
        {/* Brand slider — trust section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative overflow-hidden"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Ils nous font confiance
            </h3>
            <p className="text-base text-muted-foreground">
              Des entreprises de toutes tailles au Québec
            </p>
          </div>

          {/* Fade edges */}
          <div
            className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none w-[80px]"
            style={{
              background:
                "linear-gradient(90deg, #e8efff 0%, rgba(232, 239, 255, 0) 100%)",
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none w-[80px]"
            style={{
              background:
                "linear-gradient(270deg, #e8efff 0%, rgba(232, 239, 255, 0) 100%)",
            }}
          />

          <motion.div
            className="flex items-center gap-20 pl-20"
            animate={{ x: [0, -(industries.length / 2) * 160] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {industries.map((name, i) => (
              <span
                key={i}
                className="flex-shrink-0 text-xl md:text-2xl font-bold text-foreground/25 tracking-wide"
              >
                {name}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoPlayer;
