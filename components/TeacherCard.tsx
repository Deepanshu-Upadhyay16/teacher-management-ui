import React from 'react';
import { Teacher } from '../types/teacher';

const TeacherCard = ({ teacher }: { teacher: Teacher }) => {
  if (!teacher) return null;
  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="font-semibold text-lg">{teacher.name}</h2>
      <p className="text-sm text-gray-600">Subject: {teacher.subject}</p>
      <p className="text-sm text-gray-600">Email: {teacher.email}</p>
      <p className="text-sm text-gray-600">Status: {teacher.status}</p>
    </div>
  );
};

export default TeacherCard;
