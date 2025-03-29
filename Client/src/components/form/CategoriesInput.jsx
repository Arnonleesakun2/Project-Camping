import React from "react";
import { categories } from "../../utils/categories";

const CategoriesInput = ({ name, register, setValue, errors }) => {
  return (
    <div className="space-y-1">
      <input type="text" {...register(name)} hidden />
      <p className="capitalize">{name}</p>
      <select
        onChange={(e) => setValue(name, e.target.value)}
        defaultValue="Please select categories"
        className="select w-full"
        required
      >
        <option disabled={true}>Please select categories</option>
        {categories.map((item, index) => {
          return (
            <option key={index} value={item.label}>
              {item.label}
            </option>
          );
        })}
      </select>
      {errors[name] && (
        <p className="text-red-400 text-sm">{errors[name].message}</p>
      )}
    </div>
  );
};

export default CategoriesInput;
