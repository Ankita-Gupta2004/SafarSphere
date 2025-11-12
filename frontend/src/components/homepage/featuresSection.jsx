import {
  MapPin,
  Calendar,
  PlaneTakeoff,
  Hotel,
  Wallet,
  CloudSun,
  Users,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: <MapPin size={32} />,
    title: "Destination Discovery",
    description:
      "Find the best travel spots matching your interests, season, and budget with smart filters.",
  },
  {
    icon: <Calendar size={32} />,
    title: "Smart Trip Planner",
    description:
      "Auto-generate personalized itineraries based on your travel dates and interests.",
  },
  {
    icon: <PlaneTakeoff size={32} />,
    title: "Interactive Map",
    description:
      "Visualize your journey with dynamic map pins and customizable routes.",
  },
  {
    icon: <Hotel size={32} />,
    title: "Stay & Activities",
    description:
      "Get hotel, restaurant, and activity suggestions tailored to your trip.",
  },
  {
    icon: <Wallet size={32} />,
    title: "Budget Estimator",
    description:
      "Track estimated travel, stay, and food expenses to stay within budget.",
  },
  {
    icon: <CloudSun size={32} />,
    title: "Weather Insights",
    description:
      "Check real-time weather forecasts for each destination before your trip.",
  },
  {
    icon: <Users size={32} />,
    title: "Community & Reviews",
    description:
      "Read and share travel experiences, photos, and tips with fellow travelers.",
  },
  {
    icon: <Sparkles size={32} />,
    title: "AI Assistance",
    description:
      "Leverage AI to get optimized day-wise plans and hidden gem recommendations.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          Explore Features
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Plan, organize, and enjoy your trips seamlessly with AI-powered tools.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl flex flex-col items-center text-center border border-transparent hover:border-teal-500 dark:hover:border-teal-400 transition"
            >
              <div className="text-teal-500 dark:text-teal-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
