import React from 'react';

export function Header() {
  return (
    <header className="header custom-sticky !top-0 !w-full">
      <nav className="main-header" aria-label="Global">
        <div className="header-content">
          <div className="header-left">
            <div className="">
              <button type="button" className="sidebar-toggle !w-100 !h-100">
                <span className="sr-only">Toggle Navigation</span>
                <i className="ri-arrow-right-circle-line header-icon"></i>
              </button>
            </div>
          </div>

          <div className="responsive-logo">
            <a
              className="responsive-logo-dark"
              href="index.html"
              aria-label="Brand"
            >
              <img
                src="../assets/img/brand-logos/desktop-logo.png"
                alt="logo"
                className="mx-auto"
              />
            </a>
            <a
              className="responsive-logo-light"
              href="index.html"
              aria-label="Brand"
            >
              <img
                src="../assets/img/brand-logos/desktop-dark.png"
                alt="logo"
                className="mx-auto"
              />
            </a>
          </div>

          <div className="header-right">
            <div className="responsive-headernav">
              <div className="header-nav-right">
                <div
                  className="header-country hs-dropdown ti-dropdown hidden sm:block"
                  data-hs-dropdown-placement="bottom-right"
                >
                  <button
                    id="dropdown-flag"
                    type="button"
                    className="hs-dropdown-toggle ti-dropdown-toggle h-[2.375rem] w-[2.375rem] flex-shrink-0 rounded-full border-0 p-0 text-xs shadow-none focus:ring-gray-400 dark:focus:ring-white/10"
                  >
                    <img
                      src="../assets/img/flags/10.png"
                      alt="flag-img"
                      className="h-[1.375rem] w-[1.375rem]"
                    />
                  </button>
                  <div
                    className="hs-dropdown-menu ti-dropdown-menu min-w-[10rem]"
                    aria-labelledby="dropdown-flag"
                  >
                    <div className="ti-dropdown-divider divide-y divide-gray-200 dark:divide-white/10">
                      <div className="py-2 first:pt-0 last:pb-0">
                        <div className="ti-dropdown-item">
                          <div className="flex w-full items-center space-x-2 rtl:space-x-reverse">
                            <div className="h-[1.375rem] w-[1.375rem] rounded-sm">
                              <img
                                src="../assets/img/flags/10.png"
                                alt="flag-img"
                              />
                            </div>
                            <div>
                              <p className="text-xs font-medium">USA</p>
                            </div>
                          </div>
                        </div>
                        <div className="ti-dropdown-item">
                          <div className="flex w-full items-center space-x-2 rtl:space-x-reverse">
                            <div className="h-[1.375rem] w-[1.375rem] rounded-sm">
                              <img
                                src="../assets/img/flags/1.png"
                                alt="flag-img"
                              />
                            </div>
                            <div>
                              <p className="text-xs font-medium">Argentina</p>
                            </div>
                          </div>
                        </div>
                        <div className="ti-dropdown-item">
                          <div className="flex w-full items-center space-x-2 rtl:space-x-reverse">
                            <div className="h-[1.375rem] w-[1.375rem] rounded-sm">
                              <img
                                src="../assets/img/flags/2.png"
                                alt="flag-img"
                              />
                            </div>
                            <div>
                              <p className="text-xs font-medium">Canada</p>
                            </div>
                          </div>
                        </div>
                        <div className="ti-dropdown-item">
                          <div className="flex w-full items-center space-x-2 rtl:space-x-reverse">
                            <div className="h-[1.375rem] w-[1.375rem] rounded-sm">
                              <img
                                src="../assets/img/flags/3.png"
                                alt="flag-img"
                              />
                            </div>
                            <div>
                              <p className="text-xs font-medium">France</p>
                            </div>
                          </div>
                        </div>
                        <div className="ti-dropdown-item">
                          <div className="flex w-full items-center space-x-2 rtl:space-x-reverse">
                            <div className="h-[1.375rem] w-[1.375rem] rounded-sm">
                              <img
                                src="../assets/img/flags/4.png"
                                alt="flag-img"
                              />
                            </div>
                            <div>
                              <p className="text-xs font-medium">Germany</p>
                            </div>
                          </div>
                        </div>
                        <div className="ti-dropdown-item">
                          <div className="flex w-full items-center space-x-2 rtl:space-x-reverse">
                            <div className="h-[1.375rem] w-[1.375rem] rounded-sm">
                              <img
                                src="../assets/img/flags/5.png"
                                alt="flag-img"
                              />
                            </div>
                            <div>
                              <p className="text-xs font-medium">Italy</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="header-search">
                  <button
                    aria-label="button"
                    type="button"
                    data-hs-overlay="#search-modal"
                    className="inline-flex h-[2.375rem] w-[2.375rem] flex-shrink-0 items-center justify-center gap-2 rounded-full bg-gray-100 align-middle text-xs font-medium text-gray-500 transition-all hover:bg-gray-200 focus:outline-none focus:ring-0 focus:ring-gray-400 focus:ring-offset-0 focus:ring-offset-white dark:bg-bgdark dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                  >
                    <i className="ri-search-2-line header-icon"></i>
                  </button>
                </div>
                <div className="header-theme-mode hidden sm:block">
                  <a
                    aria-label="anchor"
                    className="hs-dark-mode group flex h-[2.375rem] w-[2.375rem] flex-shrink-0 items-center justify-center gap-2 rounded-full bg-gray-100 align-middle text-xs font-medium text-gray-500 transition-all hover:bg-gray-200 focus:outline-none focus:ring-0 focus:ring-gray-400 focus:ring-offset-0 focus:ring-offset-white hs-dark-mode-active:hidden dark:bg-bgdark dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                    href="javascript:"
                    data-hs-theme-click-value="dark"
                  >
                    <i className="ri-moon-line header-icon"></i>
                  </a>
                  <a
                    aria-label="anchor"
                    className="hs-dark-mode group hidden h-[2.375rem] w-[2.375rem] flex-shrink-0 items-center justify-center gap-2 rounded-full bg-gray-100 align-middle text-xs font-medium text-gray-500 transition-all hover:bg-gray-200 focus:outline-none focus:ring-0 focus:ring-gray-400 focus:ring-offset-0 focus:ring-offset-white hs-dark-mode-active:flex dark:bg-bgdark dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                    href="javascript:"
                    data-hs-theme-click-value="light"
                  >
                    <i className="ri-sun-line header-icon"></i>
                  </a>
                </div>
                <div className="header-fullscreen hidden lg:block">
                  <a
                    aria-label="anchor"
                    className="inline-flex h-[2.375rem] w-[2.375rem] flex-shrink-0 items-center justify-center gap-2 rounded-full bg-gray-100 align-middle text-xs font-medium text-gray-500 transition-all hover:bg-gray-200 focus:outline-none focus:ring-0 focus:ring-gray-400 focus:ring-offset-0 focus:ring-offset-white dark:bg-bgdark dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                  >
                    <i className="ri-fullscreen-line header-icon full-screen-open"></i>
                    <i className="ri-fullscreen-line header-icon fullscreen-exit-line full-screen-close hidden"></i>
                  </a>
                </div>
                <div
                  className="header-cart hs-dropdown ti-dropdown hidden lg:block"
                  data-hs-dropdown-placement="bottom-right"
                >
                  <button
                    id="dropdown-cart"
                    type="button"
                    className="hs-dropdown-toggle ti-dropdown-toggle h-[2.375rem] w-[2.375rem] flex-shrink-0 rounded-full border-0 p-0 text-xs shadow-none focus:ring-gray-400 dark:focus:ring-white/10"
                  >
                    <i className="ri-shopping-basket-line header-icon"></i>
                    <span className="absolute top-0 -mt-1 flex h-5 w-5 ltr:right-0 ltr:-mr-1 rtl:left-0 rtl:-ml-1">
                      <span
                        className="relative inline-flex h-5 w-5 items-center justify-center rounded-full bg-danger text-white"
                        id="cart-data2"
                      >
                        4
                      </span>
                    </span>
                  </button>
                  <div
                    className="hs-dropdown-menu ti-dropdown-menu w-[20rem] border-0"
                    aria-labelledby="dropdown-cart"
                  >
                    <div className="ti-dropdown-header flex items-center justify-between border-b !bg-primary dark:border-white/10">
                      <p className="ti-dropdown-header-title font-semibold !text-white">
                        Shopping Cart
                      </p>
                      <a
                        href="javascript:void(0)"
                        className="badge rounded-sm bg-black/20 text-white"
                        id="cart-data"
                      >
                        4 Items
                      </a>
                    </div>
                    <div className="ti-dropdown-divider divide-y divide-gray-200 dark:divide-white/10">
                      <div
                        className="py-2 first:pt-0 last:pb-0"
                        id="allCartsContainer"
                      >
                        <div className="ti-dropdown-item header-box relative">
                          <a
                            href="cart.html"
                            className="flex w-full items-center space-x-3 rtl:space-x-reverse"
                          >
                            <img
                              loading="lazy"
                              src="../assets/img/ecommerce/products/1.png"
                              alt="product-img"
                              className="avatar shrink-0 items-center  justify-center rounded-sm bg-gray-100 p-2 shadow-none !ring-transparent dark:bg-black/20"
                            />
                            <div>
                              <p className="text-sm font-medium text-gray-800 dark:text-white">
                                Black Heals For Women
                              </p>
                              <div className="flex space-x-2 rtl:space-x-reverse">
                                <h5 className="text-xs">$699</h5>
                                <span className="my-auto text-xs text-gray-400 line-through dark:text-white/70">
                                  $999
                                </span>
                              </div>
                            </div>
                          </a>
                          <a
                            aria-label="anchor"
                            href="javascript:void(0);"
                            className="header-remove-btn inline-flex flex-shrink-0 items-center justify-center text-lg text-gray-500/20 hover:text-gray-800 ltr:ml-auto rtl:mr-auto dark:text-white/20 dark:hover:text-white"
                          >
                            <i className="ri-close-circle-line"></i>
                          </a>
                        </div>
                        <div className="ti-dropdown-item header-box relative">
                          <a
                            href="cart.html"
                            className="flex w-full items-center space-x-3 rtl:space-x-reverse"
                          >
                            <img
                              loading="lazy"
                              src="../assets/img/ecommerce/products/2.png"
                              alt="product-img"
                              className="avatar shrink-0 items-center  justify-center rounded-sm bg-gray-100 p-2 shadow-none !ring-transparent dark:bg-black/20"
                            />
                            <div>
                              <p className="text-sm font-medium text-gray-800 dark:text-white">
                                Tshirt For Men
                              </p>
                              <div className="flex space-x-2 rtl:space-x-reverse">
                                <h5 className="text-xs">$245</h5>
                                <span className="my-auto text-xs text-gray-400 line-through dark:text-white/70">
                                  $599
                                </span>
                              </div>
                            </div>
                          </a>
                          <a
                            aria-label="anchor"
                            href="javascript:void(0);"
                            className="header-remove-btn inline-flex flex-shrink-0 items-center justify-center text-lg text-gray-500/20 hover:text-gray-800 ltr:ml-auto rtl:mr-auto dark:text-white/20 dark:hover:text-white"
                          >
                            <i className="ri-close-circle-line"></i>
                          </a>
                        </div>
                        <div className="ti-dropdown-item header-box relative">
                          <a
                            href="cart.html"
                            className="flex w-full items-center space-x-3 rtl:space-x-reverse"
                          >
                            <img
                              loading="lazy"
                              src="../assets/img/ecommerce/products/9.png"
                              alt="product-img"
                              className="avatar shrink-0 items-center  justify-center rounded-sm bg-gray-100 p-2 shadow-none !ring-transparent dark:bg-black/20"
                            />
                            <div>
                              <p className="text-sm font-medium text-gray-800 dark:text-white">
                                Travel Bag For Womens
                              </p>
                              <div className="flex space-x-2 rtl:space-x-reverse">
                                <h5 className="text-xs">$299</h5>
                                <span className="my-auto text-xs text-gray-400 line-through dark:text-white/70">
                                  $399
                                </span>
                              </div>
                            </div>
                          </a>
                          <a
                            aria-label="anchor"
                            href="javascript:void(0);"
                            className="header-remove-btn inline-flex flex-shrink-0 items-center justify-center text-lg text-gray-500/20 hover:text-gray-800 ltr:ml-auto rtl:mr-auto dark:text-white/20 dark:hover:text-white"
                          >
                            <i className="ri-close-circle-line"></i>
                          </a>
                        </div>
                        <div className="ti-dropdown-item header-box relative">
                          <a
                            href="cart.html"
                            className="flex w-full items-center space-x-3 rtl:space-x-reverse"
                          >
                            <img
                              loading="lazy"
                              src="../assets/img/ecommerce/products/10.png"
                              alt="product-img"
                              className="avatar shrink-0 items-center  justify-center rounded-sm bg-gray-100 p-2 shadow-none !ring-transparent dark:bg-black/20"
                            />
                            <div>
                              <p className="text-sm font-medium text-gray-800 dark:text-white">
                                Leather Wallet For Grils
                              </p>
                              <div className="flex space-x-2 rtl:space-x-reverse">
                                <h5 className="text-xs">$100</h5>
                                <span className="my-auto text-xs text-gray-400 line-through dark:text-white/70">
                                  $150
                                </span>
                              </div>
                            </div>
                          </a>
                          <a
                            aria-label="anchor"
                            href="javascript:void(0);"
                            className="header-remove-btn inline-flex flex-shrink-0 items-center justify-center text-lg text-gray-500/20 hover:text-gray-800 ltr:ml-auto rtl:mr-auto dark:text-white/20 dark:hover:text-white"
                          >
                            <i className="ri-close-circle-line"></i>
                          </a>
                        </div>
                      </div>
                      <div className="px-5 py-2 first:pt-0 last:pb-0">
                        <div className="flex justify-between">
                          <div>
                            <span className="text-xs font-semibold text-gray-800 dark:text-white">
                              Total
                            </span>
                          </div>
                          <div className="text-end font-medium">
                            <span className="text-xs font-semibold text-gray-800 dark:text-white">
                              $40,020
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="px-5 py-2 first:pt-0">
                        <a
                          className="ti-btn ti-btn-primary w-full p-2"
                          href="checkout.html"
                        >
                          Proceed Checkout
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="header-notification hs-dropdown ti-dropdown hidden sm:block"
                  data-hs-dropdown-placement="bottom-right"
                >
                  <button
                    id="dropdown-notification"
                    type="button"
                    className="hs-dropdown-toggle ti-dropdown-toggle h-[2.375rem] w-[2.375rem] flex-shrink-0 rounded-full border-0 p-0 text-xs shadow-none focus:ring-gray-400 dark:focus:ring-white/10"
                  >
                    <i className="ri-notification-2-line header-icon animate-bell"></i>
                    <span className="absolute top-0 -mt-1 flex h-5 w-5 ltr:right-0 ltr:-mr-1 rtl:left-0 rtl:-ml-1">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success/80 opacity-75"></span>
                      <span
                        className="relative inline-flex h-5 w-5 items-center justify-center rounded-full bg-success text-white"
                        id="notify-data"
                      >
                        4
                      </span>
                    </span>
                  </button>
                  <div
                    className="hs-dropdown-menu ti-dropdown-menu w-[20rem] border-0"
                    aria-labelledby="dropdown-notification"
                  >
                    <div className="ti-dropdown-header flex items-center justify-between border-b !bg-primary dark:border-white/10">
                      <p className="ti-dropdown-header-title font-semibold !text-white">
                        Notifications
                      </p>
                      <a
                        href="javascript:void(0)"
                        className="badge rounded-sm bg-black/20 text-white"
                      >
                        Mark All Read
                      </a>
                    </div>
                    <div className="ti-dropdown-divider divide-y divide-gray-200 dark:divide-white/10">
                      <div
                        className="py-2 first:pt-0 last:pb-0"
                        id="allNotifyContainer"
                      >
                        <div className="ti-dropdown-item header-box relative">
                          <a
                            href="mail-inbox.html"
                            className="flex space-x-3 rtl:space-x-reverse"
                          >
                            <div className="avatar rounded-full ring-0 ltr:mr-2 rtl:ml-2">
                              <img
                                src="../assets/img/users/17.jpg"
                                alt="img"
                                className="rounded-sm"
                              />
                            </div>
                            <div className="relative w-full">
                              <h5 className="mb-1 text-sm font-semibold text-gray-800 dark:text-white">
                                Elon Isk
                              </h5>
                              <p className="mb-1 max-w-[200px] truncate text-xs">
                                Hello there! How are you doing? Call me when...
                              </p>
                              <p className="text-xs text-gray-400 dark:text-white/70">
                                2 min
                              </p>
                            </div>
                          </a>
                          <a
                            aria-label="anchor"
                            href="javascript:void(0);"
                            className="header-remove-btn text-lg text-gray-500/20 hover:text-gray-800 ltr:ml-auto rtl:mr-auto dark:text-white/20 dark:hover:text-white"
                          >
                            <i className="ri-close-circle-line"></i>
                          </a>
                        </div>
                        <div className="ti-dropdown-item header-box relative">
                          <a
                            href="mail-inbox.html"
                            className="flex items-center space-x-3 rtl:space-x-reverse"
                          >
                            <div className="avatar rounded-full ring-0 ltr:mr-2 rtl:ml-2">
                              <img
                                src="../assets/img/users/2.jpg"
                                alt="img"
                                className="rounded-sm"
                              />
                            </div>
                            <div className="relative w-full">
                              <h5 className="mb-1 text-sm font-semibold text-gray-800 dark:text-white">
                                Shakira Sen
                              </h5>
                              <p className="mb-1 max-w-[200px] truncate text-xs">
                                I would like to discuss about that assets...
                              </p>
                              <p className="text-xs text-gray-400 dark:text-white/70">
                                09:43
                              </p>
                            </div>
                          </a>
                          <a
                            aria-label="anchor"
                            href="javascript:void(0);"
                            className="header-remove-btn text-lg text-gray-500/20 hover:text-gray-800 ltr:ml-auto rtl:mr-auto dark:text-white/20 dark:hover:text-white"
                          >
                            <i className="ri-close-circle-line"></i>
                          </a>
                        </div>
                        <div className="ti-dropdown-item header-box relative">
                          <a
                            href="mail-inbox.html"
                            className="flex items-center space-x-3 rtl:space-x-reverse"
                          >
                            <div className="avatar rounded-full ring-0 ltr:mr-2 rtl:ml-2">
                              <img
                                src="../assets/img/users/21.jpg"
                                alt="img"
                                className="rounded-sm"
                              />
                            </div>
                            <div className="relative w-full">
                              <h5 className="mb-1 text-sm font-semibold text-gray-800 dark:text-white">
                                Sebastian
                              </h5>
                              <p className="mb-1 max-w-[200px] truncate text-xs">
                                Shall we go to the cafe at downtown...
                              </p>
                              <p className="text-xs text-gray-400 dark:text-white/70">
                                yesterday
                              </p>
                            </div>
                          </a>
                          <a
                            aria-label="anchor"
                            href="javascript:void(0);"
                            className="header-remove-btn text-lg text-gray-500/20 hover:text-gray-800 ltr:ml-auto rtl:mr-auto dark:text-white/20 dark:hover:text-white"
                          >
                            <i className="ri-close-circle-line"></i>
                          </a>
                        </div>
                        <div className="ti-dropdown-item header-box relative">
                          <a
                            href="mail-inbox.html"
                            className="flex items-center space-x-3 rtl:space-x-reverse"
                          >
                            <div className="avatar rounded-full ring-0 ltr:mr-2 rtl:ml-2">
                              <img
                                src="../assets/img/users/11.jpg"
                                alt="img"
                                className="rounded-sm"
                              />
                            </div>
                            <div className="relative w-full">
                              <h5 className="mb-1 text-sm font-semibold text-gray-800 dark:text-white">
                                Charlie Davieson
                              </h5>
                              <p className="mb-1 max-w-[200px] truncate text-xs">
                                Lorem ipsum dolor sit amet, consectetur
                              </p>
                              <p className="text-xs text-gray-400 dark:text-white/70">
                                yesterday
                              </p>
                            </div>
                          </a>
                          <a
                            aria-label="anchor"
                            href="javascript:void(0);"
                            className="header-remove-btn text-lg text-gray-500/20 hover:text-gray-800 ltr:ml-auto rtl:mr-auto dark:text-white/20 dark:hover:text-white"
                          >
                            <i className="ri-close-circle-line"></i>
                          </a>
                        </div>
                      </div>
                      <div className="px-5 py-2 first:pt-0">
                        <a
                          className="ti-btn ti-btn-primary w-full p-2"
                          href="mail-inbox.html"
                        >
                          View All
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="header-apps hs-dropdown ti-dropdown hidden md:block"
                  data-hs-dropdown-placement="bottom-right"
                >
                  <button
                    aria-label="button"
                    id="dropdown-apps"
                    type="button"
                    className="hs-dropdown-toggle ti-dropdown-toggle h-[2.375rem] w-[2.375rem] flex-shrink-0 rounded-full border-0 p-0 text-xs shadow-none focus:ring-gray-400 dark:focus:ring-white/10"
                  >
                    <i className="ri-bookmark-line header-icon"></i>
                  </button>
                  <div
                    className="hs-dropdown-menu ti-dropdown-menu w-[20rem] border-0"
                    aria-labelledby="dropdown-apps"
                  >
                    <div className="ti-dropdown-header flex items-center justify-between border-b !bg-primary text-center dark:border-white/10">
                      <p className="ti-dropdown-header-title font-semibold !text-white">
                        Related Apps
                      </p>
                    </div>
                    <div className="ti-dropdown-divider divide-y divide-gray-200 dark:divide-white/10">
                      <div className="grid grid-cols-3 gap-0 p-4 pt-2">
                        <a
                          href="mail-inbox.html"
                          className="block rounded-sm p-2 pt-0 text-center hover:bg-gray-50 dark:hover:bg-black/20"
                        >
                          <i className="ri ri-mail-line avatar mx-auto my-3 flex justify-center rounded-sm bg-primary/20 p-3 align-middle text-2xl leading-none text-primary ring-0"></i>
                          <div className="text-xs font-semibold text-gray-800 dark:text-white">
                            Mail Inbox
                          </div>
                        </a>
                        <a
                          href="chat.html"
                          className="block rounded-sm p-2 pt-0 text-center hover:bg-gray-50 dark:hover:bg-black/20"
                        >
                          <i className="ri ri-chat-2-line avatar mx-auto my-3 flex justify-center rounded-sm bg-secondary/20 p-3 align-middle text-2xl leading-none text-secondary ring-0"></i>
                          <div className="text-xs font-semibold text-gray-800 dark:text-white">
                            Chat
                          </div>
                        </a>
                        <a
                          href="tasks.html"
                          className="block rounded-sm p-2 pt-0 text-center hover:bg-gray-50 dark:hover:bg-black/20"
                        >
                          <i className="ri ri-task-line avatar mx-auto my-3 flex justify-center rounded-sm bg-warning/20 p-3 align-middle text-2xl leading-none text-warning ring-0"></i>
                          <div className="text-xs font-semibold text-gray-800 dark:text-white">
                            Task
                          </div>
                        </a>
                        <a
                          href="calendar.html"
                          className="block rounded-sm p-2 pt-0 text-center hover:bg-gray-50 dark:hover:bg-black/20"
                        >
                          <i className="ri ri-calendar-event-line avatar mx-auto my-3 flex justify-center rounded-sm bg-danger/20 p-3 align-middle text-2xl leading-none text-danger ring-0"></i>
                          <div className="text-xs font-semibold text-gray-800 dark:text-white">
                            Calendar
                          </div>
                        </a>
                        <a
                          href="filemanager.html"
                          className="block rounded-sm p-2 pt-0 text-center hover:bg-gray-50 dark:hover:bg-black/20"
                        >
                          <i className="ri ri-file-copy-2-line avatar mx-auto my-3 flex justify-center rounded-sm bg-info/20 p-3 align-middle text-2xl leading-none text-info ring-0"></i>
                          <div className="text-xs font-semibold text-gray-800 dark:text-white">
                            FileManager
                          </div>
                        </a>
                        <a
                          href="contacts.html"
                          className="block rounded-sm p-2 pt-0 text-center hover:bg-gray-50 dark:hover:bg-black/20"
                        >
                          <i className="ri ri-group-line avatar mx-auto my-3 flex justify-center rounded-sm bg-success/20 p-3 align-middle text-2xl leading-none text-success ring-0"></i>
                          <div className="text-xs font-semibold text-gray-800 dark:text-white">
                            Contacts
                          </div>
                        </a>
                      </div>
                      <div className="px-5 py-2 first:pt-0">
                        <a
                          className="ti-btn ti-btn-primary w-full p-2"
                          href="javascript:void(0);"
                        >
                          View All
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="header-profile hs-dropdown ti-dropdown"
                  data-hs-dropdown-placement="bottom-right"
                >
                  <button
                    id="dropdown-profile"
                    type="button"
                    className="hs-dropdown-toggle ti-dropdown-toggle h-8 w-8 flex-shrink-0 gap-2 rounded-full p-0 text-xs shadow-none focus:ring-gray-400 dark:focus:ring-white/10"
                  >
                    <img
                      className="inline-block rounded-full ring-2 ring-white dark:ring-white/10"
                      src="../assets/img/users/1.jpg"
                      alt="Image Description"
                    />
                  </button>

                  <div
                    className="hs-dropdown-menu ti-dropdown-menu w-[20rem] border-0"
                    aria-labelledby="dropdown-profile"
                  >
                    <div className="ti-dropdown-header flex !bg-primary">
                      <div className="ltr:mr-3 rtl:ml-3">
                        <img
                          className="avatar rounded-full shadow-none !ring-transparent"
                          src="../assets/img/users/1.jpg"
                          alt="profile-img"
                        />
                      </div>
                      <div>
                        <p className="ti-dropdown-header-title !text-white">
                          Json Taylor
                        </p>
                        <p className="ti-dropdown-header-content !text-white/50">
                          Web Designer
                        </p>
                      </div>
                    </div>
                    <div className="ti-dropdown-divider mt-2">
                      <a href="profile.html" className="ti-dropdown-item">
                        <i className="ti ti-user-circle text-lg"></i>
                        Profile
                      </a>
                      <a href="mail-inbox.html" className="ti-dropdown-item">
                        <i className="ti ti-inbox text-lg"></i>
                        Inbox
                      </a>
                      <a href="tasks.html" className="ti-dropdown-item">
                        <i className="ti ti-clipboard-check text-lg"></i>
                        Task Manager
                      </a>
                      <a
                        href="profile-settings.html"
                        className="ti-dropdown-item"
                      >
                        <i className="ti ti-adjustments-horizontal text-lg"></i>
                        Settings
                      </a>
                      <a href="index3.html" className="ti-dropdown-item">
                        <i className="ti ti-wallet text-lg"></i>
                        Bal: $7,12,950
                      </a>
                      <a href="signin.html" className="ti-dropdown-item">
                        <i className="ti ti-logout  text-lg"></i>
                        Log Out
                      </a>
                    </div>
                  </div>
                </div>
                <div className="switcher-icon">
                  <button
                    aria-label="button"
                    type="button"
                    className="hs-dropdown-toggle inline-flex h-[2.375rem] w-[2.375rem] flex-shrink-0 items-center justify-center gap-2 rounded-full bg-gray-100 align-middle text-xs font-medium text-gray-500 transition-all hover:bg-gray-200 focus:outline-none focus:ring-0 focus:ring-gray-400 focus:ring-offset-0 focus:ring-offset-white focus-visible:outline-none dark:bg-bgdark dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                    data-hs-overlay="#hs-overlay-switcher"
                  >
                    <i className="ri-settings-5-line header-icon animate-spin"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
