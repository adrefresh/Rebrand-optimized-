// "use client";

// import { useEffect, useState } from "react";

// type Job = {
//   id: number;
//   title: string;
//   location: string;
//   exp: string;
//   type: string;
//   dept: string;
// };

// const fetchJobs = async (): Promise<Job[]> => [
//   {
//     id: 1,
//     title: "Shopify Developer",
//     location: "Hyderabad - MTC",
//     exp: "4-6 Yrs",
//     type: "Full Time",
//     dept: "Development",
//   },
//   {
//     id: 2,
//     title: "Web Application Developer",
//     location: "Hyderabad - MTC",
//     exp: "1 Year",
//     type: "Full Time",
//     dept: "Development",
//   },
//   {
//     id: 3,
//     title: "Senior Paid Media Specialist",
//     location: "Hyderabad - MTC",
//     exp: "2-4 Years",
//     type: "Full Time",
//     dept: "Marketing",
//   },
//   {
//     id: 4,
//     title: "Trainee Executive, Digital Marketing",
//     location: "Hyderabad - DL",
//     exp: "0-1 Year",
//     type: "Full Time",
//     dept: "Marketing",
//   },
// ];

// export default function CareersClient() {
//   const [jobs, setJobs] = useState<Job[]>([]);
//   const [search, setSearch] = useState("");
//   const [location, setLocation] = useState("");
//   const [dept, setDept] = useState("");

//   useEffect(() => {
//     fetchJobs().then(setJobs);
//   }, []);

//   const filtered = jobs.filter(
//     (job) =>
//       job.title.toLowerCase().includes(search.toLowerCase()) &&
//       (!location || job.location.includes(location)) &&
//       (!dept || job.dept === dept)
//   );

//   return (
//     <>
//       {/* Heading */}
//       <div className="text-center mt-20">
//         <h1 className="text-[clamp(3rem,6vw,5rem)] font-extrabold">
//           JOIN WITH US
//         </h1>
//         <p className="mt-2 text-gray-600">
//           Explore exciting opportunities to grow your career with AdRefresh.
//         </p>
//       </div>

//       {/* Filters */}
//       <section className="mx-auto mt-10 flex max-w-5xl flex-wrap gap-4 px-6">
//         <input
//           className="w-full max-w-[240px] rounded-md border px-4 py-3"
//           placeholder="Search"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />

//         <select
//           className="w-full max-w-[240px] rounded-md border px-4 py-3"
//           onChange={(e) => setLocation(e.target.value)}
//         >
//           <option value="">Location</option>
//           <option value="Hyderabad - MTC">Hyderabad - MTC</option>
//           <option value="Hyderabad - DL">Hyderabad - DL</option>
//         </select>

//         <select
//           className="w-full max-w-[240px] rounded-md border px-4 py-3"
//           onChange={(e) => setDept(e.target.value)}
//         >
//           <option value="">Department</option>
//           <option value="Development">Development</option>
//           <option value="Marketing">Marketing</option>
//         </select>
//       </section>

//       {/* Jobs */}
//       <section className="mx-auto mt-12 max-w-6xl px-6 pb-20">
//         <h2 className="mb-4 text-xl font-semibold">AdRefresh</h2>

//         <div className="grid gap-6 md:grid-cols-2">
//           {filtered.map((job) => (
//             <div
//               key={job.id}
//               className="rounded-xl border bg-white p-6 transition hover:border-[#6b2cff]"
//             >
//               <h3 className="text-lg font-bold">{job.title}</h3>
//               <p className="mt-2 text-sm text-gray-600">
//                 {job.location} • {job.exp} • {job.type}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// }
"use client";

import { useEffect, useState } from "react";

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

export default function CareersClient() {
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
    <>
      {/* ================= HEADING ================= */}
      <div className="mt-16 px-4 text-center sm:mt-20">
        <h1
          className="
            font-extrabold
            text-[2.2rem]        /* 📱 mobile */
            sm:text-[3rem]
            md:text-[4rem]
            lg:text-[5rem]
          "
        >
          JOIN WITH US
        </h1>

        <p
          className="
            mt-2 text-gray-600
            text-[0.95rem]
            sm:text-base
          "
        >
          Explore exciting opportunities to grow your career with AdRefresh.
        </p>
      </div>

      {/* ================= FILTERS ================= */}
      <section
        className="
          mx-auto mt-8
          max-w-5xl
          px-4

          flex flex-col gap-4        /* 📱 mobile */
          sm:flex-row sm:flex-wrap
          sm:justify-center
        "
      >
        <input
          className="
            w-full
            rounded-md border
            px-4 py-3
            sm:max-w-[220px]
          "
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="
            w-full
            rounded-md border
            px-4 py-3
            sm:max-w-[220px]
          "
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">Location</option>
          <option value="Hyderabad - MTC">Hyderabad - MTC</option>
          <option value="Hyderabad - DL">Hyderabad - DL</option>
        </select>

        <select
          className="
            w-full
            rounded-md border
            px-4 py-3
            sm:max-w-[220px]
          "
          onChange={(e) => setDept(e.target.value)}
        >
          <option value="">Department</option>
          <option value="Development">Development</option>
          <option value="Marketing">Marketing</option>
        </select>
      </section>

      {/* ================= JOBS ================= */}
      <section className="mx-auto mt-10 max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
        <h2 className="mb-4 text-lg font-semibold sm:text-xl">
          AdRefresh
        </h2>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {filtered.map((job) => (
            <div
              key={job.id}
              className="
                rounded-xl border bg-white
                p-4 sm:p-6
                transition hover:border-[#6b2cff]
              "
            >
              <h3 className="text-base font-bold sm:text-lg">
                {job.title}
              </h3>

              <p className="mt-2 text-[0.85rem] text-gray-600 sm:text-sm">
                {job.location} • {job.exp} • {job.type}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
