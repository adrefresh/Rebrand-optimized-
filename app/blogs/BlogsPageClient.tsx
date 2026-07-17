"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import blogsData from "../json-data/blogs.json";
import ListenPerform from "../components/homePageComponents/we-listen";

// ─── Types ────────────────────────────────────────────────
type Blog = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: { name: string; role: string; avatar: string };
  coverImage: string;
  tags: string[];
};

// ─── Helpers ──────────────────────────────────────────────
const CATEGORIES = ["All", ...Array.from(new Set((blogsData as Blog[]).map((b) => b.category)))];

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// ─── Blog Card (clean, no readTime) ───────────────────────
function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-[#DADADA] hover:border-[#813DFF]/50 hover:shadow-[0_8px_40px_rgba(129,61,255,0.10)] transition-all duration-300"
    >
      {/* cover */}
      <div className="relative w-full h-52 overflow-hidden">
        <Image
          src={blog.coverImage}
          alt={blog.title}
          fill
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        {/* <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-[#813DFF] text-white">
          {blog.category}
        </span> */}
      </div>

      {/* content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-black text-[#1C1C1C] text-lg leading-snug mb-2 group-hover:text-[#813DFF] transition-colors duration-300 line-clamp-2">
          {blog.title}
        </h3>
        <p className="text-[#565656] text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
          {blog.excerpt}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-[#DADADA]">
          <div className="flex items-center gap-2">
            <Image
              src={blog.author.avatar}
              alt={blog.author.name}
              width={28}
              height={28}
              className="rounded-full"
            />
            <span className="text-xs text-[#565656] font-medium">{blog.author.name}</span>
          </div>
          {/* <span className="text-xs text-[#949494]">{formatDate(blog.date)}</span> */}
        </div>
      </div>
    </Link>
  );
}

// ─── Main Page ────────────────────────────────────────────
export default function BlogsPageClient() {
  const blogs = blogsData as Blog[];
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? blogs
      : blogs.filter((b) => b.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#F9F9F9]">

      {/* ── Hero Banner ── */}
      <section className="relative pt-24 pb-16 px-5 md:px-10 lg:px-16 overflow-hidden bg-[#1a1a1a]">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 150 1600 150"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="1440" height="400" fill="#1A0F2E" />
          <path d="M0,0 L1440,0 L1440,180 C1200,160 1000,200 800,175 C600,150 400,195 200,170 C100,158 50,165 0,160 Z" fill="#2A1450" />
          <path d="M0,120 C180,90 360,160 560,130 C740,103 920,155 1100,125 C1260,100 1360,118 1440,112 L1440,220 C1260,245 1060,200 880,228 C700,255 500,205 300,235 C180,252 80,238 0,245 Z" fill="#7D3BF6" />
          <path d="M0,170 C200,145 400,210 620,178 C820,150 1020,205 1220,172 C1340,155 1400,168 1440,163 L1440,280 C1220,305 1000,258 780,288 C580,315 360,265 160,295 C80,308 30,298 0,302 Z" fill="#6C33D3" />
          <path d="M0,210 C220,185 460,255 680,218 C880,185 1080,248 1280,212 C1370,195 1420,206 1440,202 L1440,320 C1200,348 980,298 760,330 C560,358 340,305 140,338 C70,350 25,342 0,346 Z" fill="#5A2BB3" />
          <path d="M0,260 C240,235 480,300 700,262 C900,228 1100,292 1300,255 C1380,238 1420,250 1440,246 L1440,400 L0,400 Z" fill="#492391" />
          <path d="M0,320 C200,298 440,355 660,318 C860,285 1060,348 1260,310 C1360,292 1410,305 1440,300 L1440,400 L0,400 Z" fill="#381B6F" />
        </svg>

        <div className="relative z-10 max-w-7xl mx-auto">
          <h1 className="text-white font-black text-4xl md:text-6xl leading-[1.05] mb-4">
            Think Smarter.<br />
            <span className="text-[#DFFA33]">Advertise Smarter.</span>
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-xl">
            Strategy, data, and creative thinking for brands that want to grow — not just spend.
          </p>
        </div>
      </section>

      {/* ── Filter Tabs + Grid ── */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 py-14">

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 border ${
                activeCategory === cat
                  ? "bg-[#813DFF] text-white border-[#813DFF]"
                  : "bg-white text-[#1C1C1C] border-[#DADADA] hover:border-[#813DFF] hover:text-[#813DFF]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid — always 3 cols on desktop */}
        {filtered.length === 0 ? (
          <p className="text-[#949494] text-center py-20 text-lg">No posts in this category yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
        )}
      </section>

      <section className="mb-0">
        <ListenPerform />
      </section>

    </main>
  );
}
