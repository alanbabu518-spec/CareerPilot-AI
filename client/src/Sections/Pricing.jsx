const plans = [
  {
    name: "Gold",
    price: "$20",
    border: "border-yellow-400",
    glow: "hover:shadow-[0_0_35px_rgba(250,204,21,.35)]",
    button: "from-yellow-500 to-yellow-600",
    features: [
      "AI Resume Analyzer",
      "ATS Score Checker",
      "Basic Career Roadmap",
      "2 Resume Uploads",
    ],
    disabled: [
      "Mock Interview",
      "Priority Support",
      "Unlimited Resume Analysis",
    ],
  },

  {
    name: "Platinum",
    price: "$40",
    border: "border-blue-500",
    glow: "hover:shadow-[0_0_35px_rgba(59,130,246,.35)]",
    button: "from-blue-500 to-blue-700",
    popular: true,
    features: [
      "Everything in Gold",
      "Unlimited Resume Uploads",
      "AI Mock Interview",
      "Skill Gap Analysis",
      "Career Roadmap",
      "Priority Support",
    ],
    disabled: ["Personal Career Mentor"],
  },

  {
    name: "Diamond",
    price: "$80",
    border: "border-pink-500",
    glow: "hover:shadow-[0_0_35px_rgba(236,72,153,.35)]",
    button: "from-pink-500 to-fuchsia-600",
    features: [
      "Everything in Platinum",
      "Personal AI Mentor",
      "Unlimited Mock Interviews",
      "Advanced ATS Optimization",
      "Company Preparation",
      "24/7 Premium Support",
      "Interview Reports",
    ],
    disabled: [],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#050505] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white">
            Choose Your
            <span className="text-violet-500"> Plan</span>
          </h2>

          <p className="text-gray-400 mt-5 text-lg">
            Unlock powerful AI career tools with the perfect plan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-[#111111] rounded-3xl border ${plan.border} ${plan.glow}
    transition-all duration-300 p-8 hover:-translate-y-3`}
            >

              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold px-5 py-2 rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-3xl font-bold text-white mb-6">
                {plan.name}
              </h3>

              <div className="flex items-end gap-2 mb-8">
                <span className="text-6xl font-extrabold text-white">
                  {plan.price}
                </span>

                <span className="text-gray-400 text-lg mb-2">/month</span>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                      <span className="text-green-400 font-bold">✓</span>
                    </div>

                    {feature}
                  </li>
                ))}

                {plan.disabled.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-gray-600 line-through"
                  >
                    <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
                      <span className="text-gray-500">✕</span>
                    </div>

                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl text-white font-semibold bg-gradient-to-r ${plan.button}
      hover:scale-105 transition duration-300`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
