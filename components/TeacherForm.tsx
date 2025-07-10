import React, { useState } from 'react';
import { Teacher } from '../types/teacher';

const TeacherForm = ({
  onSubmit,
  onCancel,
}: {
  onSubmit: (teacher: Teacher) => void;
  onCancel: () => void;
}) => {
  const [formData, setFormData] = useState<Omit<Teacher, 'id'>>({
    name: '',
    subject: '',
    email: '',
    status: 'active',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ...formData, id: Date.now().toString() });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow w-full max-w-md"
      >
        <h2 className="text-xl font-bold mb-4">Add Teacher</h2>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-2 p-2 border rounded"
          required
        />
        <input
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full mb-2 p-2 border rounded"
          required
        />
        <input
          name="email"
          placeholder="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-2 p-2 border rounded"
          required
        />
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-400 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default TeacherForm;
