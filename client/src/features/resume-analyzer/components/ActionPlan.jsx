import { CheckCircle, AlertTriangle, ArrowUp, ListChecks } from "lucide-react";

function ActionPlan({ actions }) {
  if (!actions) return null;

  const priorityStyles = {
    high: {
      label: "High Priority",
      icon: AlertTriangle,
      container: "border-red-500/20 bg-red-500/5",
      iconBg: "bg-red-500/10",
      iconColor: "text-red-400",
      badge: "text-red-400 bg-red-500/10 border-red-500/20",
    },

    medium: {
      label: "Medium Priority",
      icon: ArrowUp,
      container: "border-yellow-500/20 bg-yellow-500/5",
      iconBg: "bg-yellow-500/10",
      iconColor: "text-yellow-400",
      badge: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
    },

    low: {
      label: "Low Priority",
      icon: CheckCircle,
      container: "border-green-500/20 bg-green-500/5",
      iconBg: "bg-green-500/10",
      iconColor: "text-green-400",
      badge: "text-green-400 bg-green-500/10 border-green-500/20",
    },
  };

  return (
    <section className="bg-[#111111] border border-indigo-500/20 rounded-3xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center">
          <ListChecks size={21} className="text-indigo-400" />
        </div>

        <div>
          <h3 className="text-lg font-bold text-white">Resume Action Plan</h3>

          <p className="text-gray-500 text-sm">
            Prioritized actions to improve your resume
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {actions.map((action, index) => {
          const priority =
            priorityStyles[action.priority] || priorityStyles.medium;

          const Icon = priority.icon;

          return (
            <div
              key={index}
              className={`border rounded-2xl p-5 ${priority.container}`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${priority.iconBg}`}
                >
                  <Icon size={19} className={priority.iconColor} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h4 className="text-white font-semibold">{action.title}</h4>

                    <span
                      className={`w-fit px-2.5 py-1 rounded-lg border text-xs font-medium ${priority.badge}`}
                    >
                      {priority.label}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm leading-6 mt-2">
                    {action.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ActionPlan;
