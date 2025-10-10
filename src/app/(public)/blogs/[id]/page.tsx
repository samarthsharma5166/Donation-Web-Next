import axios from "axios";
import Link from "next/link";
import { MdKeyboardArrowLeft } from "react-icons/md";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function BlogPage({ params }: PageProps) {
  const { id } = await params; // ✅ no need to await
  // || process.env.BASE_URL
  const baseUrl = "https://www.madhavamfoundation.com/" ;
  const res = await axios.get(`${baseUrl}/api/blog/${id}`);

  return (
    <div>
      <article className="px-4 py-24 mx-auto max-w-7xl">
        <div className="w-full mx-auto mb-12 text-left md:w-3/4 lg:w-1/2">
          <Link
            href="/blogs"
            className="flex gap-2 py-2 hover:text-blue-500 cursor-pointer items-center"
          >
            <MdKeyboardArrowLeft /> Back
          </Link>
          <img
            src={`/uploads/${res.data.data.coverImage}`}
            className="object-cover w-full h-64 bg-center rounded-lg"
            alt="cover"
          />
          <p className="mt-6 mb-2 text-xs font-semibold tracking-wider uppercase text-primary">
            Development
          </p>
          <h1
            className="mb-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl"
            title={res.data.data.title}
          >
            {res.data.data.title}
          </h1>
        </div>

        <div className="w-full mx-auto prose md:w-3/4 lg:w-1/2">
          <p>{res.data.data.body}</p>
        </div>
      </article>
    </div>
  );
}
