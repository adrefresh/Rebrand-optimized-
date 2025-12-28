"use client";

import { useEffect, useState } from "react";
import CareersHero from "../components/careers-components/careershero";
import PathSection from "../components/careers-components/Pathsection";
import PatternBackground from "../components/careers-components/patternbg";



type Job = {
  id: number;
  title: string;
  location: string;
  exp: string;
  type: string;
  dept: string;
};

const fetchJobs = async (): Promise<Job[]> => [
  {
    id: 1,
    title: "Shopify Developer",
    location: "Hyderabad - MTC",
    exp: "4-6 Yrs",
    type: "Full Time",
    dept: "Development",
  },
  {
    id: 2,
    title: "Web Application Developer",
    location: "Hyderabad - MTC",
    exp: "1 Year",
    type: "Full Time",
    dept: "Development",
  },
  {
    id: 3,
    title: "Senior Paid Media Specialist",
    location: "Hyderabad - MTC",
    exp: "2-4 Years",
    type: "Full Time",
    dept: "Marketing",
  },
  {
    id: 4,
    title: "Trainee Executive, Digital Marketing",
    location: "Hyderabad - DL",
    exp: "0-1 Year",
    type: "Full Time",
    dept: "Marketing",
  },
];

export default function CareersPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [dept, setDept] = useState("");

  useEffect(() => {
    fetchJobs().then(setJobs);
  }, []);

  const filtered = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      (!location || job.location.includes(location)) &&
      (!dept || job.dept === dept)
  );

  return (
    <main className="bg-[#fafafa] text-[#111]">
  <CareersHero/>
    <PatternBackground/>
  <PathSection/>


      {/* Heading */}
      <div className="text-center mt-20">
        <h1 className="text-[clamp(3rem,6vw,5rem)] font-extrabold">
          JOIN WITH US
        </h1>
        <p className="mt-2 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      {/* Filters */}
      <section className="mx-auto mt-10 flex max-w-5xl flex-wrap gap-4 px-6">
        <input
          className="w-full max-w-[240px] rounded-md border px-4 py-3"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="w-full max-w-[240px] rounded-md border px-4 py-3"
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">Location</option>
          <option value="Hyderabad - MTC">Hyderabad - MTC</option>
          <option value="Hyderabad - DL">Hyderabad - DL</option>
        </select>

        <select
          className="w-full max-w-[240px] rounded-md border px-4 py-3"
          onChange={(e) => setDept(e.target.value)}
        >
          <option value="">Department</option>
          <option value="Development">Development</option>
          <option value="Marketing">Marketing</option>
        </select>
      </section>

      {/* Jobs */}
      <section className="mx-auto mt-12 max-w-6xl px-6 pb-20">
        <h2 className="mb-4 text-xl font-semibold">AdRefresh</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((job) => (
            <div
              key={job.id}
              className="rounded-xl border bg-white p-6 transition hover:border-[#6b2cff]"
            >
              <h3 className="text-lg font-bold">{job.title}</h3>
              <p className="mt-2 text-sm text-gray-600">
                {job.location} • {job.exp} • {job.type}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
