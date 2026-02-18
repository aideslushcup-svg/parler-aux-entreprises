import { motion } from "framer-motion";
import { LogoCloud } from "@/components/ui/logo-cloud";

const VideoPlayer = () => {
  return (
    <section
      className="relative pt-48 pb-16 md:pb-24"
      style={{
        background: "linear-gradient(180deg, #f0f4ff 0%, #e8efff 50%, #f0f4ff 100%)",
      }}
    >
      <div className="max-w-[1100px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Ils nous font confiance
            </h3>
            <p className="text-base text-muted-foreground">
              Des entreprises de toutes tailles au Québec
            </p>
          </div>

          <LogoCloud />
        </motion.div>
      </div>
    </section>
  );
};

export default VideoPlayer;
