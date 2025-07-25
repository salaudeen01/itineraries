import React from 'react';

interface FormFilter {
  arrival_date: string;
  departure_date: string;
  dest_id: string;
}

interface FilterProps {
  setForm: (value: FormFilter) => void;
  form: FormFilter;
  className?: string
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  label1?: string;
  label2?: string
}

const FilterForm: React.FC<FilterProps> = ({ handleSubmit, setForm, form, className, label1, label2 }) => {
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2 rounded-md">
        <div className={`${className} border p-1 rounded-md`}>
          <label>{label1}</label>
          <input
            type="date"
            value={form.arrival_date}
            placeholder='departure date'
            onChange={(e) =>
              setForm({ ...form, arrival_date: e.target.value })
            }
            className="px-3 py-2 rounded"
          />
          <label>{label2}</label>
          <input
            type="date"
            value={form.departure_date}
            placeholder='return date'
            onChange={(e) =>
              setForm({ ...form, departure_date: e.target.value })
            }
            className="px-3 py-2 rounded"
          />
        </div>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default FilterForm;
