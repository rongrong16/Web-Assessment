"use client";
import { useState } from "react";
import { SELECT_FILTERS, RANGE_FILTERS } from "../lib/constants";

export default function SearchListings() {
  const [filters, setFilters] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search filters:", filters);
  };

  return (
    <section className="w-full max-w-7xl mx-auto -mt-24 relative z-10 px-4">
      <div className="relative bg-gradient-to-br from-white via-blue-50/30 to-white backdrop-blur-xl rounded-3xl shadow-2xl border border-white/60 overflow-hidden">
        {/* Decorative gradient */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl" />

        <div className="relative px-8 py-10">
          {/* Header */}
          <div className="mb-8 text-center">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 bg-clip-text text-transparent mb-2">
              Search Listings
            </h2>
            <p className="text-sm text-gray-600">
              Find your perfect property with advanced filters
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSearch} className="space-y-6">
            {/* Primary Filters */}
            <div className="grid md:grid-cols-3 gap-4">
              {SELECT_FILTERS.map((f) => (
                <FilterSelect key={f.name} {...f} onChange={handleChange} />
              ))}
            </div>

            {/* Secondary Filters */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {RANGE_FILTERS.map((f) => (
                <FilterSelect
                  key={f.name}
                  name={f.name}
                  label={f.label}
                  options={[
                    { value: "", label: "Any" },
                    ...Array.from({ length: f.max }, (_, i) => ({
                      value: String(i + 1),
                      label: `${i + 1}+ ${f.label.slice(0, -1)}`,
                    })),
                  ]}
                  onChange={handleChange}
                />
              ))}

              <FilterInput
                name="minPrice"
                label="Min Price"
                placeholder="₱0"
                onChange={handleChange}
              />
              <FilterInput
                name="maxPrice"
                label="Max Price"
                placeholder="₱10M"
                onChange={handleChange}
              />
            </div>

            {/* Search Button */}
            <div className="flex justify-center pt-2">
              <button
                type="submit"
                className="group relative px-10 py-4 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white font-semibold rounded-full shadow-lg shadow-blue-900/30 hover:shadow-xl hover:shadow-blue-900/40 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Search Properties
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function FilterSelect({
  name,
  label,
  options,
  onChange,
}: {
  name: string;
  label: string;
  options: { value: string; label: string }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <div className="group">
      <label className="block mb-2 text-sm font-semibold text-gray-700">
        {label}
      </label>
      <div className="relative">
        <select
          name={name}
          onChange={onChange}
          className="w-full appearance-none bg-white/80 border-2 border-gray-200 rounded-xl px-4 py-3 pr-10 text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 hover:border-gray-300 cursor-pointer"
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function FilterInput({
  name,
  label,
  placeholder,
  onChange,
}: {
  name: string;
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="group">
      <label className="block mb-2 text-sm font-semibold text-gray-700">
        {label}
      </label>
      <input
        type="number"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full bg-white/80 border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 hover:border-gray-300"
      />
    </div>
  );
}
