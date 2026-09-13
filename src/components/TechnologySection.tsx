import { useState } from "react";
import { toast } from "react-toastify";

import technologies from "../data/technologies.json";
import type { Technology } from "../data/technology";

import TechnologyCard from "./TechnologyCard";

function TechnologySection() {
  const technologyList = technologies as Technology[];

  // Selected technologies
  const [selectedTechnologies, setSelectedTechnologies] =
    useState<Technology[]>([]);

  // Search input
  const [searchText, setSearchText] = useState("");

  // Category filter
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get all categories
  const categories = [
    "All",
    ...new Set(
      technologyList.map(
        (technology) => technology.category
      )
    ),
  ];

  // Add technology to stack
  const addToStack = (technology: Technology) => {
    // Check if same category already exists
    const alreadySelected = selectedTechnologies.some(
      (item) => item.category === technology.category
    );

    if (alreadySelected) {
      toast.warning(
        `You already selected a ${technology.category} technology.`
      );
      return;
    }

    // Add technology
    setSelectedTechnologies((previous) => [
      ...previous,
      technology,
    ]);

    toast.success(
      `${technology.name} added to your stack!`
    );
  };

  // Remove one technology
  const removeFromStack = (id: number) => {
    setSelectedTechnologies((previous) =>
      previous.filter(
        (technology) => technology.id !== id
      )
    );

    toast.info("Technology removed from your stack.");
  };

  // Remove all technologies
  const removeAll = () => {
    setSelectedTechnologies([]);

    toast.info("Your stack has been cleared.");
  };

  // Search + category filtering
  const filteredTechnologies = technologyList.filter(
    (technology) => {
      const matchesSearch = technology.name
        .toLowerCase()
        .includes(searchText.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        technology.category === selectedCategory;

      return matchesSearch && matchesCategory;
    }
  );

  return (
    <section
      id="technologies"
      className="bg-gray-50 py-16"
    >
      <div className="mx-auto max-w-[1200px] px-5">

        {/* Section Heading */}
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-slate-900">
            Explore the{" "}
            <span className="text-pink-500">
              Technologies
            </span>
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Pick one technology per category to build your
            ideal stack.
          </p>
        </div>

        {/* Search + Category */}
        <div className="mb-6 flex flex-col gap-3 md:flex-row">

          {/* Search */}
          <input
            type="text"
            placeholder="Search technology..."
            value={searchText}
            onChange={(event) =>
              setSearchText(event.target.value)
            }
            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-pink-400 md:flex-1"
          />

          {/* Category */}
          <select
            value={selectedCategory}
            onChange={(event) =>
              setSelectedCategory(event.target.value)
            }
            className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-pink-400"
          >
            {categories.map((category) => (
              <option
                key={category}
                value={category}
              >
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_280px]">

          {/* Technology Cards */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">

            {filteredTechnologies.length > 0 ? (
              filteredTechnologies.map(
                (technology) => (
                  <TechnologyCard
                    key={technology.id}
                    technology={technology}
                    onAdd={addToStack}
                  />
                )
              )
            ) : (
              <div className="col-span-full rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-400">
                No technologies found.
              </div>
            )}

          </div>

          {/* Your Stack Panel */}
          <div className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-6">

            {/* Stack Header */}
            <div className="flex items-start justify-between">

              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Your Stack
                </h3>

                <p className="mt-1 text-xs text-slate-400">
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
                  className="text-xs font-medium text-red-500 transition hover:text-red-600"
                >
                  Remove All
                </button>
              )}

            </div>

            {/* Stack Items */}
            <div className="mt-5 space-y-3">

              {selectedTechnologies.length === 0 ? (

                /* Empty Stack */
                <div className="rounded-lg border border-dashed border-slate-200 px-4 py-8 text-center">

                  <p className="text-sm font-medium text-slate-400">
                    Your stack is empty
                  </p>

                  <p className="mt-1 text-xs text-slate-300">
                    Add technologies to build your stack
                  </p>

                </div>

              ) : (

                /* Selected Technologies */
                selectedTechnologies.map(
                  (technology) => (

                    <div
                      key={technology.id}
                      className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50/50 px-3 py-3"
                    >

                      {/* Technology Information */}
                      <div className="flex items-center gap-3">

                        {/* Icon */}
                        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-xs font-bold text-slate-700 shadow-sm">
                          {technology.name.charAt(0)}
                        </div>

                        {/* Name + Category */}
                        <div>
                          <p className="text-sm font-semibold text-slate-800">
                            {technology.name}
                          </p>

                          <p className="mt-0.5 text-[10px] text-slate-400">
                            {technology.category}
                          </p>
                        </div>

                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() =>
                          removeFromStack(
                            technology.id
                          )
                        }
                        className="flex h-7 w-7 items-center justify-center rounded-md text-lg text-slate-300 transition hover:bg-red-50 hover:text-red-500"
                        aria-label={`Remove ${technology.name}`}
                      >
                        ×
                      </button>

                    </div>
                  )
                )
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default TechnologySection;