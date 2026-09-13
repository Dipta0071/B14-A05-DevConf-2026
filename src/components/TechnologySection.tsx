import { useState } from "react";
import technologies from "../data/technologies.json";
import TechnologyCard from "./TechnologyCard";
import type { Technology } from "../data/technology";

function TechnologySection() {
  const technologyList = technologies as Technology[];

  const [selectedTechnologies, setSelectedTechnologies] =
    useState<Technology[]>([]);

  // Add technology
  const addToStack = (technology: Technology) => {
    // Check if same category already exists
    const alreadySelected = selectedTechnologies.some(
      (item) => item.category === technology.category
    );

    if (alreadySelected) {
      alert(`You already selected a ${technology.category} technology.`);
      return;
    }

    setSelectedTechnologies((previous) => [
      ...previous,
      technology,
    ]);
  };

  // Remove technology
  const removeFromStack = (id: number) => {
    setSelectedTechnologies((previous) =>
      previous.filter((technology) => technology.id !== id)
    );
  };

  // Remove all
  const removeAll = () => {
    setSelectedTechnologies([]);
  };

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1200px] px-5">

        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Explore the{" "}
            <span className="text-pink-500">
              Technologies
            </span>
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_280px]">

          {/* Technology Cards */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">

            {technologyList.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                onAdd={addToStack}
              />
            ))}

          </div>

          {/* Your Stack */}
          <div className="h-fit rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">

              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Your Stack
                </h3>

                <p className="mt-1 text-sm text-gray-400">
                  {selectedTechnologies.length}{" "}
                  {selectedTechnologies.length === 1
                    ? "Technology"
                    : "Technologies"}{" "}
                  Selected
                </p>
              </div>

              {/* Remove All */}
              {selectedTechnologies.length > 0 && (
                <button
                  onClick={removeAll}
                  className="text-xs font-medium text-red-500 hover:text-red-700"
                >
                  Remove All
                </button>
              )}

            </div>

            {/* Selected Technologies */}
            <div className="mt-5 space-y-2">

              {selectedTechnologies.length === 0 ? (

                <div className="rounded-lg border border-dashed border-gray-300 p-8 text-center text-sm text-gray-400">
                  Your stack is empty.
                </div>

              ) : (

                selectedTechnologies.map((technology) => (
                  <div
                    key={technology.id}
                    className="flex items-center justify-between rounded-lg border border-gray-200 p-3"
                  >

                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {technology.name}
                      </p>

                      <p className="text-xs text-gray-400">
                        {technology.category}
                      </p>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromStack(technology.id)}
                      className="text-xl text-gray-400 transition hover:text-red-500"
                    >
                      ×
                    </button>

                  </div>
                ))

              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default TechnologySection;