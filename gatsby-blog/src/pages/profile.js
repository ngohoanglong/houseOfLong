// sdasd

import { flattenDeep } from "lodash-es"
import React from "react"
import CodeEditor from "../components/CodeEditor"
import Layout from "../components/layout"
import { useState } from "react"
const isObject = value =>
  (typeof value === "object" || typeof value === "function") && value !== null
const isString = value => value && typeof value === "string"

const renderRow = (value, key = "root") => {
  if (Array.isArray(value)) {
    return value.map((item, i) => renderRow(item, key + "." + i))
  }
  if (isObject(value)) {
    return Object.keys(value).map(k => [
      { key: key + "._type", value: k },
      renderRow(value[k], key + "." + k),
    ])
  }
  if (isString(value)) {
    return { key, value }
  }
  return undefined
}

const Profile = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const profileStr = data.profile.contentStr
  const [content, setContent] = useState(JSON.parse(profileStr))
  console.log({ content })
  const rows = flattenDeep(renderRow(content)).filter(item => item)
  console.log({ rows })
  return (
    <Layout>
      <div className="grid grid-cols-12 gap-4 ">
        <div className=" col-span-8 p-6 mx-auto max-w-screen-lg bg-white">
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
              {content.basics.name}
            </h1>
          </header>

          <div className="flex flex-col">
            {Object.keys(content).map(key => (
              <section key={key} className="mt-8 first:mt-0 float-left inline">
                <h2 className="mb-4 font-bold tracking-widest text-sm2 uppercase text-gray-550 print:font-normal">
                  {key}
                </h2>
                <section className="mb-4.5 ">
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
                <section className="mb-4.5 ">
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
            ))}
          </div>
        </div>
        {window && (
          <div className="col-span-4  flex flex-col">
            <div className="sticky top-0 p-6 h-screen">
              <CodeEditor
                value={JSON.stringify(content, null, 2)}
                onChange={v => {
                  setContent(JSON.parse(v))
                }}
              />
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}
export default Profile
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
