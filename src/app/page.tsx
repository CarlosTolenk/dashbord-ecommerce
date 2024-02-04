import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="error-page flex h-full bg-white !py-0">
      <section className="grid w-full grid-cols-12 gap-6">
        <div className="relative col-span-12 hidden lg:col-span-6 lg:block">
          <div className="cover relative z-[1] h-full w-full p-10">
            <Link href="/user" className="header- logo">
              <img
                src="/assets/img/brand-logos/desktop-dark.png"
                alt="logo"
                className="block ltr:ml-auto rtl:mr-auto"
              />
            </Link>
            <div className="authentication-page mx-auto w-full max-w-7xl justify-center p-0">
              <img
                src="/assets/img/authentication/2.png"
                alt="logo"
                className="mx-auto h-[500px]"
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <div className="authentication-page w-full">
            <main id="content" className="mx-auto w-full max-w-md p-6">
              <Link href="/" className="header-logo lg:hidden">
                <Image
                  width={40}
                  height={40}
                  src="/assets/img/brand-logos/desktop-logo.png"
                  alt="logo"
                  className="mx-auto block dark:hidden"
                />
                <Image
                  width={40}
                  height={40}
                  src="/assets/img/brand-logos/desktop-dark.png"
                  alt="logo"
                  className="mx-auto hidden dark:block"
                />
              </Link>
              <div className="mt-7">
                <div className="p-4 sm:p-7">
                  <div className="text-center">
                    <h1 className="block text-2xl   font-bold text-gray-800">
                      Sign in
                    </h1>
                    <p className="mt-3 text-sm text-gray-600 ">
                      Don't have an account yet?
                      <Link
                        className="ml-1 font-medium text-primary decoration-2 hover:underline"
                        href="/"
                      >
                        Sign up here
                      </Link>
                    </p>
                  </div>

                  <div className="mt-5">
                    <button
                      type="button"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-white/10 bg-white px-3 py-2 align-middle text-sm font-medium text-gray-700 text-gray-800 shadow-sm transition-all hover:bg-gray-50 hover:bg-primary/50 hover:text-white focus:outline-none focus:ring-0 focus:ring-primary focus:ring-offset-0 focus:ring-offset-white dark:focus:ring-offset-white/10"
                    >
                      <Image
                        width={20}
                        height={20}
                        src="/assets/img/authentication/social/1.png"
                        className="h-4 w-4"
                        alt="google-img"
                      />
                      Sign in with Google
                    </button>

                    <div className="flex items-center py-3 text-xs uppercase text-gray-400 before:flex-[1_1_0%] before:border-t before:border-gray-200 after:flex-[1_1_0%] after:border-t after:border-gray-200 ltr:before:mr-6 ltr:after:ml-6 rtl:before:ml-6 rtl:after:mr-6 dark:text-white/70 dark:before:border-white/10 dark:after:border-white/10">
                      Or
                    </div>

                    <div>
                      <div className="grid gap-y-4">
                        <div>
                          <label
                            htmlFor="email"
                            className="mb-2 block text-sm text-gray-800"
                          >
                            Email address
                          </label>
                          <div className="relative">
                            <input
                              type="email"
                              id="email"
                              name="email"
                              className="block w-full rounded-sm border-gray-200 px-3 py-2 text-sm text-dark/70 focus:border-primary focus:ring-primary dark:border-dark/10 dark:bg-white"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between">
                            <label
                              htmlFor="password"
                              className="mb-2 block text-sm text-gray-800"
                            >
                              Password
                            </label>
                            <Link
                              className="text-sm font-medium text-primary decoration-2 hover:underline"
                              href="/user"
                            >
                              Forgot password?
                            </Link>
                          </div>
                          <div className="relative">
                            <input
                              type="password"
                              id="password"
                              name="password"
                              className="block w-full rounded-sm border-gray-200 px-3 py-2 text-sm text-dark/70 focus:border-primary focus:ring-primary dark:border-dark/10 dark:bg-white"
                              required
                            />
                          </div>
                        </div>
                        <div className="flex items-center text-gray-800">
                          <div className="flex">
                            <input
                              id="remember-me"
                              name="remember-me"
                              type="checkbox"
                              className="rounded pointer-events-none mt-0.5 shrink-0 border-gray-200 border-white/10 text-primary  checked:bg-primary focus:ring-primary dark:checked:border-primary dark:focus:ring-offset-white/10"
                            />
                          </div>
                          <div className="ml-3">
                            <label
                              htmlFor="remember-me"
                              className="text-sm text-gray-800"
                            >
                              Remember me
                            </label>
                          </div>
                        </div>
                        <Link
                          href={'/dashboard/sales'}
                          className="inline-flex items-center justify-center gap-2 rounded-sm border border-transparent bg-primary px-3 py-2 text-sm font-semibold text-white transition-all hover:bg-primary/80 focus:outline-none focus:ring-0 focus:ring-primary focus:ring-offset-0 dark:focus:ring-offset-white/10"
                        >
                          Sign in
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </main>
  );
}
