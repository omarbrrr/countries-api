import React from "react";
import "../styles/FilterDropdown.scss";

import Select from "react-select";

const options = [
  { value: "africa", label: "Africa" },
  { value: "america", label: "America" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
];

export default function FilterDropdown({ onFilterChange }) {
  return (
    <Select
      className="filter"
      name="filter"
      onChange={(region) => onFilterChange(region)}
      isClearable={true}
      options={options}
      placeholder="Filter by Region"
    />
  );
}
