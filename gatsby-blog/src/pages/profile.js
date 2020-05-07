import React from "react"
import Layout from "../components/layout"
const Periodic = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.profile
  console.log({ siteTitle, posts })
  return (
    <Layout>
      <div>
        <div className="p-6 mx-auto page max-w-2xl print:max-w-letter md:max-w-letter md:h-letter xsm:p-8 sm:p-9 md:p-16 bg-white">
          {/* Name */}
          <header className="flex items-center mb-8 md:mb-11">
            <div
              className="initials-container mr-5 text-base leading-none text-white bg-gray-700 font-medium print:bg-black px-3"
              style={{ paddingBottom: "0.6875rem", paddingTop: "0.6875rem" }}
            >
              <div
                className="initial text-center"
                style={{ paddingBottom: "0.1875rem" }}
              >
                M
              </div>
              <div className="text-center initial">M</div>
            </div>
            <h1 className="text-2xl font-semibold text-gray-750 pb-px">
              Marko Marković
            </h1>
          </header>
          {/* end Name */}
          {/* Column */}
          <div className="md:col-count-2 print:col-count-2 col-gap-md md:h-letter-col print:h-letter-col col-fill-auto">
            <section className="mt-8 first:mt-0">
              {/* To keep in the same column */}
              <div className="break-inside-avoid">
                <h2 className="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
                  ABOUT ME
                </h2>
                <section className="mb-4.5 break-inside-avoid">
                  <header>
                    <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                      User Interface Designer
                    </h3>
                    <p className="leading-normal text-md text-gray-650">
                      Since 2010
                    </p>
                  </header>
                  <p className="mt-2.1 text-md text-gray-700 leading-normal">
                    Minimal and formal résumé website template for print,
                    mo­bile, and desktop. The proportions are the same on the
                    screen and paper. Built with amazing{" "}
                    <a
                      className="hover:bg-gray-150 rounded-lg transition ease-in duration-100"
                      href="https://tailwindcss.com/"
                    >
                      Tailwind CSS&nbsp;°
                    </a>
                    .
                  </p>
                </section>
              </div>
              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                    Front-End Developer
                  </h3>
                  <p className="leading-normal text-md text-gray-650">
                    Since 2013
                  </p>
                </header>
                <p className="mt-2.1 text-md text-gray-700 leading-normal">
                  “docs/index.html” is the main content file. By copying HTML:
                  add pages, sec­tions, subsection, and other parts.
                </p>
                <p className="mt-2.1 text-md text-gray-700 leading-normal">
                  <span className="font-medium text-gray-600 print:text-black">
                    Important:
                  </span>{" "}
                  Too much content on one page will break the page in the form
                  of additional columns.
                </p>
              </section>
            </section>
            <section className="mt-8 first:mt-0">
              {/* To keep in the same column */}
              <div className="break-inside-avoid">
                <h2 className="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
                  EXPERIENCE
                </h2>
                <section className="mb-4.5 break-inside-avoid">
                  <header>
                    <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                      WebPraktikos Inc.
                    </h3>
                    <p className="leading-normal text-md text-gray-650">
                      Jun 2018 – Present | Web Developer
                    </p>
                  </header>
                  <p className="mt-2.1 text-md text-gray-700 leading-normal">
                    Built doner pork chop • Served salmon, cream soft cheese,
                    and brisket • Acted 55% pork chop • Filled burgdoggen &amp;
                    frankfurter strip steak with 90% burger patties and broth
                  </p>
                </section>
              </div>
              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                    Mammoth GmbH
                  </h3>
                  <p className="leading-normal text-md text-gray-650">
                    Feb 2017 – Apr 2018 | Android Developer
                  </p>
                </header>
                <ul className>
                  <li className="mt-2.1 text-md text-gray-700 leading-normal">
                    <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                      ›
                    </span>
                    Cooked shrimps for 2 to 3 minutes per side, or until opaque;
                    then, transfered to a serving dish with limon
                  </li>
                  <li className="mt-2.1 text-md text-gray-700 leading-normal">
                    <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                      ›
                    </span>
                    Roasted a pig, turning frequently, until meat reached 160°F
                    in the thickest part of the shoulder or thigh
                  </li>
                </ul>
              </section>
              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                    Exquisite Systems d.o.o.
                  </h3>
                  <p className="leading-normal text-md text-gray-650">
                    May 2015 – Dec 2016 | Software QA Specialist
                  </p>
                </header>
                <ul className>
                  <li className="mt-2.1 text-md text-gray-700 leading-normal">
                    <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                      ›
                    </span>
                    Made stockfish, which is unsalted fish, usully cod, dried by
                    cold air and wind on wooden racks on the foreshore
                  </li>
                  <li className="mt-2.1 text-md text-gray-700 leading-normal">
                    <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                      ›
                    </span>
                    Preserved meat without salt by removing fat, cutting it into
                    very thin strips and drying it in the sun or by a fire.
                  </li>
                </ul>
              </section>
            </section>
            <section className="mt-8 first:mt-0">
              {/* To keep in the same column */}
              <div className="break-inside-avoid">
                <h2 className="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
                  EDUCATION
                </h2>
                <section className="mb-4.5 break-inside-avoid">
                  <header>
                    <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                      Graz University of Technology
                    </h3>
                    <p className="leading-normal text-md text-gray-650">
                      2014 – 2015 | Master's Degree in Chemistry
                    </p>
                  </header>
                </section>
              </div>
              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                    Vienna University of Technology
                  </h3>
                  <p className="leading-normal text-md text-gray-650">
                    2010 – 2013 | Bachelor’s Degree in Biology
                  </p>
                </header>
              </section>
              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                    Vienna University of Technology
                  </h3>
                  <p className="leading-normal text-md text-gray-650">
                    2010 – 2013| Bachelor’s Degree in Chemistry
                  </p>
                </header>
              </section>
            </section>
            <section className="mt-8 first:mt-0">
              {/* To keep in the same column */}
              <div className="break-inside-avoid">
                <h2 className="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
                  PROJECTS
                </h2>
                <section className="mb-4.5 break-inside-avoid">
                  <header>
                    <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                      <a
                        href="https://github.com/WebPraktikos/universal-resume"
                        className="group"
                      >
                        Universal Resume
                        <span className="inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in">
                          ↗
                        </span>
                      </a>
                    </h3>
                    <p className="leading-normal text-md text-gray-650">
                      Since 2019 | HTML CSS
                    </p>
                  </header>
                  <p className="mt-2.1 text-md text-gray-700 leading-normal">
                    Good design is as little design as possible. Less, but
                    better — because it concentrates on the essential aspects,
                    and the pro­ducts are not burdened with non-essentials.
                  </p>
                </section>
              </div>
              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                    <a
                      href="https://github.com/WebPraktikos/tailwindcss-rich-docs"
                      className="group"
                    >
                      tailwindcss-rich-docs
                      <span className="inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in">
                        ↗
                      </span>
                    </a>
                  </h3>
                  <p className="leading-normal text-md text-gray-650">
                    2017 | JavaScript
                  </p>
                </header>
                <p className="mt-2.1 text-md text-gray-700 leading-normal">
                  Good design is long-lasting. It avoids being fashionable and
                  therefore never appears antiquated.
                </p>
                <p className="mt-2.1 text-md text-gray-700 leading-normal">
                  Good design is honest. It does not make a product more
                  innovative, powerful or valuable than it really is.
                </p>
              </section>
              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                    Third One
                  </h3>
                  <p className="leading-normal text-md text-gray-650">
                    2013 – 2014 | Vue
                  </p>
                </header>
                <p className="mt-2.1 text-md text-gray-700 leading-normal">
                  Good design is innovative. Technological development is always
                  offering new opportunities for innovative design.
                </p>
              </section>
              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                    Fantastic Project
                  </h3>
                  <p className="leading-normal text-md text-gray-650">
                    2012 | JavaScript
                  </p>
                </header>
                <p className="mt-2.1 text-md text-gray-700 leading-normal">
                  Strip steak tail capicola alcatra ground round tenderloin ar.
                  Venison tri-tip porchetta, brisket tenderloin pig beef.
                </p>
              </section>
            </section>
            <section className="mt-8 first:mt-0">
              {/* To keep in the same column */}
              <div className="break-inside-avoid">
                <h2 className="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
                  SKILLS
                </h2>
                <section className="mb-4.5 break-inside-avoid">
                  <header>
                    <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                      JavaScript
                    </h3>
                    <p className="leading-normal text-md text-gray-650">
                      Middle Level
                    </p>
                  </header>
                  <p className="mt-2.1 text-md text-gray-700 leading-normal">
                    Good parts: pure function, higher-order functions, factory
                    functions, composition. Bad parts: inheritance, this, new.
                  </p>
                  <div className="my-3.2 last:pb-1.5">
                    <ul className="flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6">
                      <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                        ES6
                      </li>
                      <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                        Vue
                      </li>
                      <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                        Functional Programming
                      </li>
                      <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                        Node
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                    Other
                  </h3>
                </header>
                <div className="my-3.2 last:pb-1.5">
                  <ul className="flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6">
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                      CSS
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                      Rust
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                      Git
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                      Go
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                      Linux Server
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                      UI Design
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                      Photoshop
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                      Illustrator
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                      Figma
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                      Typography
                    </li>
                  </ul>
                </div>
              </section>
            </section>
            <section className="mt-8 first:mt-0">
              {/* To keep in the same column */}
              <div className="break-inside-avoid">
                <h2 className="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
                  CONTACT
                </h2>
                <section className="mb-4.5 break-inside-avoid">
                  <ul className="list-inside pr-7">
                    <li className="mt-1.5 leading-normal text-gray-700 text-md">
                      <a href="//webpraktikos.com" className="group">
                        webpraktikos.com
                        <span className="inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in">
                          ↗
                        </span>
                      </a>
                    </li>
                    <li className="mt-1.5 leading-normal text-gray-700 text-md">
                      <a href="//twitter.com/webpraktikos" className="group">
                        twitter.com/webpraktikos
                        <span className="inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in">
                          ↗
                        </span>
                      </a>
                    </li>
                    <li className="mt-1.5 leading-normal text-gray-700 text-md">
                      1020 Wien, Austria
                    </li>
                    <li className="mt-1.5 leading-normal text-gray-700 text-md">
                      hi@webpraktikos.com
                    </li>
                    <li className="mt-1.5 leading-normal text-gray-700 text-md">
                      (+43) 0699 77 33 77 55
                    </li>
                  </ul>
                </section>
              </div>
            </section>
          </div>
          {/* end Column */}
        </div>
        {/* end Page */}
        {/* Page */}
        <div className="p-6 mx-auto page max-w-2xl print:max-w-letter md:max-w-letter md:h-letter xsm:p-8 sm:p-9 md:p-16 print:bg-white bg-gray-100">
          {/* Column */}
          <div className="md:col-count-2 print:col-count-2 col-gap-md md:h-letter-col-full print:h-letter-col-full col-fill-auto">
            <section className="mt-8 first:mt-0">
              {/* To keep in the same column */}
              <div className="break-inside-avoid">
                <h2 className="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
                  ABOUT ME
                </h2>
                <section className="mb-4.5 break-inside-avoid">
                  <header>
                    <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                      User Interface Designer
                    </h3>
                    <p className="leading-normal text-md text-gray-650">
                      Since 2010
                    </p>
                  </header>
                  <p className="mt-2.1 text-md text-gray-700 leading-normal">
                    Minimal and formal résumé website template for print,
                    mo­bile, and desktop. The proportions are the same on the
                    screen and paper. Built with amazing{" "}
                    <a
                      className="hover:bg-gray-150 rounded-lg transition ease-in duration-100"
                      href="https://tailwindcss.com/"
                    >
                      Tailwind CSS&nbsp;°
                    </a>
                    .
                  </p>
                </section>
              </div>
              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                    Front-End Developer
                  </h3>
                  <p className="leading-normal text-md text-gray-650">
                    Since 2013
                  </p>
                </header>
                <p className="mt-2.1 text-md text-gray-700 leading-normal">
                  “docs/index.html” is the main content file. By copying HTML:
                  add pages, sec­tions, subsection, and other parts.
                </p>
                <p className="mt-2.1 text-md text-gray-700 leading-normal">
                  <span className="font-medium text-gray-600 print:text-black">
                    Important:
                  </span>{" "}
                  Too much content on one page will break the page in the form
                  of additional columns.
                </p>
                <p className="mt-2.1 text-md text-gray-700 leading-normal">
                  If you want to change CSS in the classical way, add a class to
                  the HTML element and write CSS inside “tailwind.css.”
                </p>
              </section>
            </section>
            <section className="mt-8 first:mt-0">
              {/* To keep in the same column */}
              <div className="break-inside-avoid">
                <h2 className="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
                  EXPERIENCE
                </h2>
                <section className="mb-4.5 break-inside-avoid">
                  <header>
                    <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                      WebPraktikos Inc.
                    </h3>
                    <p className="leading-normal text-md text-gray-650">
                      Jun 2018 – Present | Web Developer
                    </p>
                  </header>
                  <p className="mt-2.1 text-md text-gray-700 leading-normal">
                    Built doner pork chop • Served salmon, cream soft cheese,
                    and brisket • Acted 55% pork chop • Filled burgdoggen &amp;
                    frankfurter strip steak with 90% burger patties and broth
                  </p>
                </section>
              </div>
              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                    Mammoth GmbH
                  </h3>
                  <p className="leading-normal text-md text-gray-650">
                    Feb 2017 – Apr 2018 | Android Developer
                  </p>
                </header>
                <ul className>
                  <li className="mt-2.1 text-md text-gray-700 leading-normal">
                    <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                      ›
                    </span>
                    Cooked shrimps for 2 to 3 minutes per side, or until opaque;
                    then, transfered to a serving dish with limon
                  </li>
                  <li className="mt-2.1 text-md text-gray-700 leading-normal">
                    <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                      ›
                    </span>
                    Roasted a pig, turning frequently, until meat reached 160°F
                    in the thickest part of the shoulder or thigh
                  </li>
                </ul>
              </section>
              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                    Exquisite Systems d.o.o.
                  </h3>
                  <p className="leading-normal text-md text-gray-650">
                    May 2015 – Dec 2016 | Software QA Specialist
                  </p>
                </header>
                <ul className>
                  <li className="mt-2.1 text-md text-gray-700 leading-normal">
                    <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                      ›
                    </span>
                    Made stockfish, which is unsalted fish, usully cod, dried by
                    cold air and wind on wooden racks on the foreshore
                  </li>
                  <li className="mt-2.1 text-md text-gray-700 leading-normal">
                    <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                      ›
                    </span>
                    Preserved meat without salt by removing fat, cutting it into
                    very thin strips and drying it in the sun or by a fire.
                  </li>
                  <li className="mt-2.1 text-md text-gray-700 leading-normal">
                    <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                      ›
                    </span>
                    Testend shrimp, crab, lobster, scallops, clams, crawfish
                  </li>
                </ul>
              </section>
            </section>
            <section className="mt-8 first:mt-0">
              {/* To keep in the same column */}
              <div className="break-inside-avoid">
                <h2 className="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
                  EDUCATION
                </h2>
                <section className="mb-4.5 break-inside-avoid">
                  <header>
                    <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                      Graz University of Technology
                    </h3>
                    <p className="leading-normal text-md text-gray-650">
                      2014 – 2015 | Master's Degree in Chemistry
                    </p>
                  </header>
                  <p className="mt-2.1 text-md text-gray-700 leading-normal">
                    Barbecued shrimp, broiled shrimp, shrimp kabobs
                  </p>
                </section>
              </div>
              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                    Vienna University of Technology
                  </h3>
                  <p className="leading-normal text-md text-gray-650">
                    2010 – 2013 | Bachelor’s Degree in Biology
                  </p>
                </header>
              </section>
              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                    Vienna University of Technology
                  </h3>
                  <p className="leading-normal text-md text-gray-650">
                    2010 – 2013| Bachelor’s Degree in Chemistry
                  </p>
                </header>
              </section>
            </section>
            <section className="mt-8 first:mt-0">
              {/* To keep in the same column */}
              <div className="break-inside-avoid">
                <h2 className="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
                  PROJECTS
                </h2>
                <section className="mb-4.5 break-inside-avoid">
                  <header>
                    <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                      <a
                        href="https://github.com/WebPraktikos/universal-resume"
                        className="group"
                      >
                        Universal Resume
                        <span className="inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in">
                          ↗
                        </span>
                      </a>
                    </h3>
                    <p className="leading-normal text-md text-gray-650">
                      Since 2019 | HTML CSS
                    </p>
                  </header>
                  <p className="mt-2.1 text-md text-gray-700 leading-normal">
                    Good design is as little design as possible. Less, but
                    better — because it concentrates on the essential aspects,
                    and the pro­ducts are not burdened with non-essentials.
                  </p>
                </section>
              </div>
              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                    <a
                      href="https://github.com/WebPraktikos/tailwindcss-rich-docs"
                      className="group"
                    >
                      tailwindcss-rich-docs
                      <span className="inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in">
                        ↗
                      </span>
                    </a>
                  </h3>
                  <p className="leading-normal text-md text-gray-650">
                    2017 | JavaScript
                  </p>
                </header>
                <p className="mt-2.1 text-md text-gray-700 leading-normal">
                  Good design is long-lasting. It avoids being fashionable and
                  therefore never appears antiquated.
                </p>
                <p className="mt-2.1 text-md text-gray-700 leading-normal">
                  Good design is honest. It does not make a product more
                  innovative, powerful or valuable than it really is.
                </p>
              </section>
              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                    Third One
                  </h3>
                  <p className="leading-normal text-md text-gray-650">
                    2013 – 2014 | Vue
                  </p>
                </header>
                <p className="mt-2.1 text-md text-gray-700 leading-normal">
                  Good design is innovative. Technological development is always
                  offering new opportunities for innovative design.
                </p>
                <p className="mt-2.1 text-md text-gray-700 leading-normal">
                  Good design emphasizes the usefulness of a product whilst
                  disregarding anything that could possibly detract from it.
                </p>
              </section>
              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                    Fantastic Project
                  </h3>
                  <p className="leading-normal text-md text-gray-650">
                    2012 | JavaScript
                  </p>
                </header>
                <p className="mt-2.1 text-md text-gray-700 leading-normal">
                  Products fulfilling a purpose are like tools. They are neither
                  decorative objects nor works of art. Their design should
                  therefore be both neutral and restrained, to leave room for
                  the user’s self-expression.
                </p>
              </section>
            </section>
            <section className="mt-8 first:mt-0">
              {/* To keep in the same column */}
              <div className="break-inside-avoid">
                <h2 className="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
                  SKILLS
                </h2>
                <section className="mb-4.5 break-inside-avoid">
                  <header>
                    <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                      JavaScript
                    </h3>
                    <p className="leading-normal text-md text-gray-650">
                      Middle Level
                    </p>
                  </header>
                  <p className="mt-2.1 text-md text-gray-700 leading-normal">
                    Good parts: pure function, higher-order functions, factory
                    functions, composition. Bad parts: inheritance, this, new.
                  </p>
                  <div className="my-3.2 last:pb-1.5">
                    <ul className="flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6">
                      <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                        ES6
                      </li>
                      <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                        Vue
                      </li>
                      <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                        Functional Programming
                      </li>
                      <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                        Node
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                    Other
                  </h3>
                </header>
                <div className="my-3.2 last:pb-1.5">
                  <ul className="flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6">
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                      CSS
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                      Rust
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                      Git
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                      Go
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                      Linux Server
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                      UI Design
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                      Photoshop
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                      Illustrator
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                      Figma
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                      Typography
                    </li>
                  </ul>
                </div>
              </section>
            </section>
            <section className="mt-8 first:mt-0">
              {/* To keep in the same column */}
              <div className="break-inside-avoid">
                <h2 className="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
                  CONTACT
                </h2>
                <section className="mb-4.5 break-inside-avoid">
                  <ul className="list-inside pr-7">
                    <li className="mt-1.5 leading-normal text-gray-700 text-md">
                      <a href="//webpraktikos.com" className="group">
                        webpraktikos.com
                        <span className="inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in">
                          ↗
                        </span>
                      </a>
                    </li>
                    <li className="mt-1.5 leading-normal text-gray-700 text-md">
                      <a href="//twitter.com/webpraktikos" className="group">
                        twitter.com/webpraktikos
                        <span className="inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in">
                          ↗
                        </span>
                      </a>
                    </li>
                    <li className="mt-1.5 leading-normal text-gray-700 text-md">
                      1020 Wien, Austria
                    </li>
                    <li className="mt-1.5 leading-normal text-gray-700 text-md">
                      hi@webpraktikos.com
                    </li>
                    <li className="mt-1.5 leading-normal text-gray-700 text-md">
                      (+43) 0699 77 33 77 55
                    </li>
                  </ul>
                </section>
              </div>
            </section>
          </div>
          {/* end Column */}
        </div>
        {/* end Page */}
        {/* Page */}
        <div className="p-6 mx-auto page max-w-2xl print:max-w-letter md:max-w-letter md:h-letter xsm:p-8 sm:p-9 md:p-16 bg-white">
          {/* Column */}
          <div className="md:col-count-2 print:col-count-2 col-gap-md md:h-letter-col-full print:h-letter-col-full col-fill-auto">
            <section className="mt-8 first:mt-0">
              {/* To keep in the same column */}
              <div className="break-inside-avoid">
                <h2 className="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
                  ABOUT ME
                </h2>
                <section className="mb-4.5 break-inside-avoid">
                  <header>
                    <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                      User Interface Designer
                    </h3>
                    <p className="leading-normal text-md text-gray-650">
                      Since 2010
                    </p>
                  </header>
                  <p className="mt-2.1 text-md text-gray-700 leading-normal">
                    Minimal and formal résumé website template for print,
                    mo­bile, and desktop. The proportions are the same on the
                    screen and paper. Built with amazing{" "}
                    <a
                      className="hover:bg-gray-150 rounded-lg transition ease-in duration-100"
                      href="https://tailwindcss.com/"
                    >
                      Tailwind CSS&nbsp;°
                    </a>
                    .
                  </p>
                </section>
              </div>
              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                    Front-End Developer
                  </h3>
                  <p className="leading-normal text-md text-gray-650">
                    Since 2013
                  </p>
                </header>
                <p className="mt-2.1 text-md text-gray-700 leading-normal">
                  “docs/index.html” is the main content file. By copying HTML:
                  add pages, sec­tions, subsection, and other parts.
                </p>
                <p className="mt-2.1 text-md text-gray-700 leading-normal">
                  <span className="font-medium text-gray-600 print:text-black">
                    Important:
                  </span>{" "}
                  Too much content on one page will break the page in the form
                  of additional columns.
                </p>
                <p className="mt-2.1 text-md text-gray-700 leading-normal">
                  If you want to change CSS in the classical way, add a class to
                  the HTML element and write CSS inside “tailwind.css.”
                </p>
              </section>
            </section>
            <section className="mt-8 first:mt-0">
              {/* To keep in the same column */}
              <div className="break-inside-avoid">
                <h2 className="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
                  EXPERIENCE
                </h2>
                <section className="mb-4.5 break-inside-avoid">
                  <header>
                    <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                      WebPraktikos Inc.
                    </h3>
                    <p className="leading-normal text-md text-gray-650">
                      Jun 2018 – Present | Web Developer
                    </p>
                  </header>
                  <p className="mt-2.1 text-md text-gray-700 leading-normal">
                    Built doner pork chop • Served salmon, cream soft cheese,
                    and brisket • Acted 55% pork chop • Filled burgdoggen &amp;
                    frankfurter strip steak with 90% burger patties and broth
                  </p>
                </section>
              </div>
              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                    Mammoth GmbH
                  </h3>
                  <p className="leading-normal text-md text-gray-650">
                    Feb 2017 – Apr 2018 | Android Developer
                  </p>
                </header>
                <ul className>
                  <li className="mt-2.1 text-md text-gray-700 leading-normal">
                    <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                      ›
                    </span>
                    Cooked shrimps for 2 to 3 minutes per side, or until opaque;
                    then, transfered to a serving dish with limon
                  </li>
                  <li className="mt-2.1 text-md text-gray-700 leading-normal">
                    <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                      ›
                    </span>
                    Roasted a pig, turning frequently, until meat reached 160°F
                    in the thickest part of the shoulder or thigh
                  </li>
                </ul>
              </section>
              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                    Exquisite Systems d.o.o.
                  </h3>
                  <p className="leading-normal text-md text-gray-650">
                    May 2015 – Dec 2016 | Software QA Specialist
                  </p>
                </header>
                <ul className>
                  <li className="mt-2.1 text-md text-gray-700 leading-normal">
                    <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                      ›
                    </span>
                    Made stockfish, which is unsalted fish, usully cod, dried by
                    cold air and wind on wooden racks on the foreshore
                  </li>
                  <li className="mt-2.1 text-md text-gray-700 leading-normal">
                    <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                      ›
                    </span>
                    Preserved meat without salt by removing fat, cutting it into
                    very thin strips and drying it in the sun or by a fire.
                  </li>
                  <li className="mt-2.1 text-md text-gray-700 leading-normal">
                    <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                      ›
                    </span>
                    Testend shrimp, crab, lobster, scallops, clams, crawfish
                  </li>
                </ul>
              </section>
            </section>
            <section className="mt-8 first:mt-0">
              {/* To keep in the same column */}
              <div className="break-inside-avoid">
                <h2 className="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
                  EDUCATION
                </h2>
                <section className="mb-4.5 break-inside-avoid">
                  <header>
                    <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                      Graz University of Technology
                    </h3>
                    <p className="leading-normal text-md text-gray-650">
                      2014 – 2015 | Master's Degree in Chemistry
                    </p>
                  </header>
                  <p className="mt-2.1 text-md text-gray-700 leading-normal">
                    Barbecued shrimp, broiled shrimp, shrimp kabobs
                  </p>
                </section>
              </div>
              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                    Vienna University of Technology
                  </h3>
                  <p className="leading-normal text-md text-gray-650">
                    2010 – 2013 | Bachelor’s Degree in Biology
                  </p>
                </header>
              </section>
              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                    Vienna University of Technology
                  </h3>
                  <p className="leading-normal text-md text-gray-650">
                    2010 – 2013| Bachelor’s Degree in Chemistry
                  </p>
                </header>
              </section>
            </section>
            <section className="mt-8 first:mt-0">
              {/* To keep in the same column */}
              <div className="break-inside-avoid">
                <h2 className="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
                  PROJECTS
                </h2>
                <section className="mb-4.5 break-inside-avoid">
                  <header>
                    <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                      <a
                        href="https://github.com/WebPraktikos/universal-resume"
                        className="group"
                      >
                        Universal Resume
                        <span className="inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in">
                          ↗
                        </span>
                      </a>
                    </h3>
                    <p className="leading-normal text-md text-gray-650">
                      Since 2019 | HTML CSS
                    </p>
                  </header>
                  <p className="mt-2.1 text-md text-gray-700 leading-normal">
                    Good design is as little design as possible. Less, but
                    better — because it concentrates on the essential aspects,
                    and the pro­ducts are not burdened with non-essentials.
                  </p>
                </section>
              </div>
              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                    <a
                      href="https://github.com/WebPraktikos/tailwindcss-rich-docs"
                      className="group"
                    >
                      tailwindcss-rich-docs
                      <span className="inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in">
                        ↗
                      </span>
                    </a>
                  </h3>
                  <p className="leading-normal text-md text-gray-650">
                    2017 | JavaScript
                  </p>
                </header>
                <p className="mt-2.1 text-md text-gray-700 leading-normal">
                  Good design is long-lasting. It avoids being fashionable and
                  therefore never appears antiquated.
                </p>
                <p className="mt-2.1 text-md text-gray-700 leading-normal">
                  Good design is honest. It does not make a product more
                  innovative, powerful or valuable than it really is.
                </p>
              </section>
              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                    Third One
                  </h3>
                  <p className="leading-normal text-md text-gray-650">
                    2013 – 2014 | Vue
                  </p>
                </header>
                <p className="mt-2.1 text-md text-gray-700 leading-normal">
                  Good design is innovative. Technological development is always
                  offering new opportunities for innovative design.
                </p>
                <p className="mt-2.1 text-md text-gray-700 leading-normal">
                  Good design emphasizes the usefulness of a product whilst
                  disregarding anything that could possibly detract from it.
                </p>
              </section>
              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                    Fantastic Project
                  </h3>
                  <p className="leading-normal text-md text-gray-650">
                    2012 | JavaScript
                  </p>
                </header>
                <p className="mt-2.1 text-md text-gray-700 leading-normal">
                  Products fulfilling a purpose are like tools. They are neither
                  decorative objects nor works of art. Their design should
                  therefore be both neutral and restrained, to leave room for
                  the user’s self-expression.
                </p>
              </section>
            </section>
            <section className="mt-8 first:mt-0">
              {/* To keep in the same column */}
              <div className="break-inside-avoid">
                <h2 className="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
                  SKILLS
                </h2>
                <section className="mb-4.5 break-inside-avoid">
                  <header>
                    <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                      JavaScript
                    </h3>
                    <p className="leading-normal text-md text-gray-650">
                      Middle Level
                    </p>
                  </header>
                  <p className="mt-2.1 text-md text-gray-700 leading-normal">
                    Good parts: pure function, higher-order functions, factory
                    functions, composition. Bad parts: inheritance, this, new.
                  </p>
                  <div className="my-3.2 last:pb-1.5">
                    <ul className="flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6">
                      <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                        ES6
                      </li>
                      <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                        Vue
                      </li>
                      <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                        Functional Programming
                      </li>
                      <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                        Node
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                    Other
                  </h3>
                </header>
                <div className="my-3.2 last:pb-1.5">
                  <ul className="flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6">
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                      CSS
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                      Rust
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                      Git
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                      Go
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                      Linux Server
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                      UI Design
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                      Photoshop
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                      Illustrator
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                      Figma
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                      Typography
                    </li>
                  </ul>
                </div>
              </section>
            </section>
            <section className="mt-8 first:mt-0">
              {/* To keep in the same column */}
              <div className="break-inside-avoid">
                <h2 className="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
                  CONTACT
                </h2>
                <section className="mb-4.5 break-inside-avoid">
                  <ul className="list-inside pr-7">
                    <li className="mt-1.5 leading-normal text-gray-700 text-md">
                      <a href="//webpraktikos.com" className="group">
                        webpraktikos.com
                        <span className="inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in">
                          ↗
                        </span>
                      </a>
                    </li>
                    <li className="mt-1.5 leading-normal text-gray-700 text-md">
                      <a href="//twitter.com/webpraktikos" className="group">
                        twitter.com/webpraktikos
                        <span className="inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in">
                          ↗
                        </span>
                      </a>
                    </li>
                    <li className="mt-1.5 leading-normal text-gray-700 text-md">
                      1020 Wien, Austria
                    </li>
                    <li className="mt-1.5 leading-normal text-gray-700 text-md">
                      hi@webpraktikos.com
                    </li>
                    <li className="mt-1.5 leading-normal text-gray-700 text-md">
                      (+43) 0699 77 33 77 55
                    </li>
                  </ul>
                </section>
              </div>
            </section>
          </div>
          {/* end Column */}
        </div>
      </div>
    </Layout>
  )
}
export default Periodic
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    profile {
      id
      contentStr
    }
  }
`
