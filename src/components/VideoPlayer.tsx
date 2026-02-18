import { motion } from "framer-motion";
import { LogoCloud } from "@/components/ui/logo-cloud";

const VideoPlayer = () => {
  return (
    <section className="relative pt-48 pb-14 bg-background">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-center text-lg md:text-2xl font-medium text-foreground/50 tracking-tight mb-10">
            Des entreprises de toutes{" "}
            <span className="font-semibold text-primary">tailles</span> au
            Québec
          </h3>

          <LogoCloud />
        </motion.div>
      </div>
    </section>
  );
};

export default VideoPlayer;
