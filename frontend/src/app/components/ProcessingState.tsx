import { motion } from "motion/react";
import { Loader2 } from "lucide-react";

export function ProcessingState() {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="relative mb-8">
        {/* Animated waveform */}
        <div className="flex items-end gap-1">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 rounded-full bg-gradient-to-t from-orange-500 to-yellow-500"
              initial={{ height: 20 }}
              animate={{
                height: [20, 60, 20],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 text-gray-700">
        <Loader2 className="h-5 w-5 animate-spin text-orange-600" />
        <p className="text-lg">Summarizing your meeting...</p>
      </div>
      
      <p className="mt-2 text-sm text-gray-500">
        Our AI is analyzing the content and extracting key insights
      </p>
    </div>
  );
}