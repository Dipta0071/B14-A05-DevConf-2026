import { useState } from "react";
import { toast } from "react-toastify";
import technologies from "../data/technologies.json";
import TechnologyCard from "./TechnologyCard";
import type { Technology } from "../data/technology";

function TechnologySection() {
  const technologyList = technologies as Technology[];

  const [selectedTechnologies, setSelectedTechnologies] =
    useState<Technology[]>([]);

  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get all categories
  const categories = [
    "All",
    ...new Set(
      technologyList.map((technology) => technology.category)
    ),
  ];

  // Add technology to stack
  const addToStack = (technology: Technology) => {
    const alreadySelected = selectedTechnologies.some(
      (item) => item.category === technology.category
    );

    if (alreadySelected) {
      toast.warning(
        `You already selected a ${technology.category} technology.`
      );
      return;
    }

    setSelectedTechnologies((previous) => [
      ...previous,
      technology,
    ]);

    toast.success(`${technology.name} added to your stack!`);
  };

  // Remove technology
  const removeFromStack = (id: number) => {
    setSelectedTechnologies((previous) =>
      previous.filter((technology) => technology.id !== id)
    );
  };

  // Remove all technologies
  const removeAll = () => {
    setSelectedTechnologies([]);
    toast.info("Your stack has been cleared.");
  };

  // Search and category filtering
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
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1200px] px-5">

        {/* Section Heading */}
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

        {/* Search and Filter */}
        <div className="mb-6 flex flex-col gap-3 md:flex-row">

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search technology..."
            value={searchText}
            onChange={(event) =>
              setSearchText(event.target.value)
            }
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-pink-400 md:flex-1"
          />

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(event) =>
              setSelectedCategory(event.target.value)
            }
            className="rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-pink-400"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

        </div>

        {/* Technology Grid + Your Stack */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_280px]">

          {/* Technology Cards */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">

            {filteredTechnologies.length > 0 ? (
              filteredTechnologies.map((technology) => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  onAdd={addToStack}
                />
              ))
            ) : (
              <div className="col-span-full rounded-xl border border-dashed border-gray-300 p-10 text-center text-gray-400">
                No technologies found.
              </div>
            )}

          </div>

          {/* Your Stack */}
          <div className="h-fit rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

            {/* Stack Header */}
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
                  className="text-xs font-medium text-red-500 transition hover:text-red-700"
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
                      onClick={() =>
                        removeFromStack(technology.id)
                      }
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