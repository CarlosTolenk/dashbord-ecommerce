import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="authentication-page">
      <main id="content" className="mx-auto">
        <div className="px-4 py-10 text-center sm:px-6 lg:px-8">
          <h1 className="block text-9xl font-bold text-primary dark:text-primary">
            404
          </h1>
          <p className="mt-3 text-2xl font-bold text-gray-800 dark:text-white">
            Oops, something went wrong.
          </p>
          <p className="text-gray-600 dark:text-white/70">
            Sorry, we {`couldn't`} find your page.
          </p>
          <div className="mt-5 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
            <Link
              className="inline-flex w-full items-center justify-center gap-x-3 rounded-sm border border-transparent bg-primary px-3 py-2 text-center text-sm font-medium text-white transition hover:bg-primary focus:outline-none focus:ring-0 focus:ring-primary focus:ring-offset-0 focus:ring-offset-white sm:w-auto dark:focus:ring-offset-white/10"
              href={`/`}
            >
              <i className="ri-arrow-left-line"></i>
              Get Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
