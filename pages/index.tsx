import Head from 'next/head';
import { useState } from 'react';
import TeacherCard from '../components/TeacherCard';
import TeacherForm from '../components/TeacherForm';
import { Teacher } from '../types/teacher';

const initialTeachers: Teacher[] = [
  {
    id: '1',
    name: 'John Doe',
    subject: 'Mathematics',
    email: 'john.doe@example.com',
    status: 'active',
  },
];

export default function Home() {
  const [teachers, setTeachers] = useState<Teacher[]>(initialTeachers);
  const [showForm, setShowForm] = useState(false);

  const handleAddTeacher = (teacher: Teacher) => {
    setTeachers([...teachers, teacher]);
    setShowForm(false);
  };

  return (
    <>
      <Head>
        <title>Teacher Management</title>
      </Head>
      <main className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Teacher Management</h1>
            <button
              onClick={() => setShowForm(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
            >
              Add Teacher
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {teachers.map((teacher) => (
              <TeacherCard key={teacher.id} teacher={teacher} />
            ))}
          </div>
        </div>
        {showForm && (
          <TeacherForm
            onSubmit={handleAddTeacher}
            onCancel={() => setShowForm(false)}
          />
        )}
      </main>
    </>
  );
}
