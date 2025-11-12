import { motion } from "framer-motion";
import { MapPin, Calendar, FileText, Share2 } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      step: 1,
      icon: <MapPin />,
      title: "Choose Destination & Dates",
      description:
        "Select your preferred travel spots and set your trip dates effortlessly.",
    },
    {
      step: 2,
      icon: <Calendar />,
      title: "AI Generates Itinerary",
      description:
        "Our AI generates a day-wise personalized itinerary tailored to your interests.",
    },
    {
      step: 3,
      icon: <FileText />,
      title: "Customize & Review",
      description:
        "Adjust your plans, add activities, or swap destinations easily.",
    },
    {
      step: 4,
      icon: <Share2 />,
      title: "Save & Share",
      description:
        "Save your trip securely and share it with friends or family in one click.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-t from-gray-100 to-gray-100 dark:from-black dark:to-gray-900 flex justify-center">
      <div className="bg-gradient-to-b from-gray-100 to-gray-100 dark:from-black dark:to-gray-900 p-8 rounded-xl shadow-lg w-full max-w-5xl">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center flex items-center justify-center gap-3">
          <MapPin className="text-teal-500 dark:text-teal-400" size={32} />
          How It Works
        </h2>

        {/* Numbered Steps */}
        <div className="space-y-8">
          {steps.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col md:flex-row items-start gap-4 p-6 border-b border-gray-200 dark:border-gray-700 last:border-b-0 rounded-lg hover:border-teal-500 dark:hover:border-teal-400 transition-colors"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-teal-500 dark:bg-teal-400 text-white font-bold text-lg">
                  {item.step}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white flex items-center gap-2 mb-2">
                  {item.icon} {item.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual Flow */}
        <div className="mt-10 flex justify-center items-center gap-6 overflow-x-auto">
          {steps.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4">
              {/* Step Icon + Title */}
              <div className="flex flex-col items-center gap-2">
                {item.icon.type && (
                  <item.icon.type
                    className="text-teal-500 dark:text-teal-400"
                    size={36}
                  />
                )}
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-center">
                  {item.title}
                </span>
              </div>

              {/* Arrow - skip for last step */}
              {idx < steps.length - 1 && (
                <div className="text-teal-300 dark:text-gray-500 text-2xl">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
