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
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

      {/* Technology Header */}
      <div className="flex items-start justify-between">

        <div>
          {/* Technology Icon */}
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-sm font-bold text-gray-700">
            {technology.name.charAt(0)}
          </div>

          {/* Technology Name */}
          <h3 className="text-lg font-bold text-gray-900">
            {technology.name}
          </h3>
        </div>

        {/* Badge */}
        {technology.badge && (
          <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-500">
            {technology.badge}
          </span>
        )}

      </div>

      {/* Description */}
      <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-500">
        {technology.description}
      </p>

      {/* Technology Information */}
      <div className="mt-4 flex items-center justify-between gap-2 text-xs">

        <span className="rounded bg-gray-100 px-2 py-1 text-gray-600">
          {technology.category}
        </span>

        <span className="text-gray-500">
          {technology.level}
        </span>

        <span className="font-medium text-gray-700">
          ⭐ {technology.rating}
        </span>

      </div>

      {/* Add to Stack Button */}
      <button
        onClick={() => onAdd(technology)}
        className="mt-5 w-full rounded-md bg-gray-950 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
      >
        Add to Stack
      </button>

    </div>
  );
}

export default TechnologyCard;