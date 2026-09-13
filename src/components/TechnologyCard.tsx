import type { Technology } from "../data/technology";

interface TechnologyCardProps {
  technology: Technology;
  onAdd: (technology: Technology) => void;
}

function TechnologyCard({
  technology,
  onAdd,
}: TechnologyCardProps) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg">

      {/* Top */}
      <div className="flex items-start justify-between">

        {/* Icon */}
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-sm font-extrabold text-slate-700 transition group-hover:bg-slate-900 group-hover:text-white">
          {technology.name.charAt(0)}
        </div>

        {/* Badge */}
        {technology.badge && (
          <span className="rounded-full bg-pink-50 px-3 py-1 text-[11px] font-semibold text-pink-500">
            {technology.badge}
          </span>
        )}

      </div>

      {/* Name */}
      <h3 className="mt-5 text-lg font-bold text-slate-900">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-2 min-h-[72px] text-xs leading-5 text-slate-500">
        {technology.description}
      </p>

      {/* Information */}
      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">

        <span className="rounded-md bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-500">
          {technology.category}
        </span>

        <span className="text-[10px] text-slate-400">
          {technology.level}
        </span>

        <span className="text-xs font-semibold text-slate-600">
          ⭐ {technology.rating}
        </span>

      </div>

      {/* Button */}
      <button
        onClick={() => onAdd(technology)}
        className="mt-5 w-full rounded-lg bg-slate-950 py-2.5 text-xs font-semibold text-white transition hover:bg-pink-500"
      >
        Add to Stack
      </button>

    </div>
  );
}

export default TechnologyCard;