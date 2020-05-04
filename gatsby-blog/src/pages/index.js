import React from "react"

const IndexPage = () => (
  <div>
    <a
      href="https://github.com/phuoc-ng/csslayout"
      rel="noopener noreferrer"
      target="_blank"
    >
      <svg
        className="z-10"
        width={80}
        height={80}
        viewBox="0 0 250 250"
        aria-hidden="true"
        style={{ position: "fixed", right: 0, top: 0 }}
      >
        <path
          d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"
          fill="#00449E"
        />
        <path
          d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6
                  C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
          fill="#ffffff"
          style={{ transformOrigin: "130px 106px" }}
        />
        <path
          d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6
                  C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1
                  C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6
                  C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5
                  C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5
                  C139.8,137.7 141.6,141.9 141.8,141.8 Z"
          fill="#ffffff"
        />
      </svg>
    </a>
    <div className="ml-auto mr-auto max-w-4xl mb-12">
      <div
        className="xl:border-t xl:border-l xl:border-r xl:border-gray-400"
        style={{ marginTop: 64 }}
      >
        <div style={{ position: "relative" }}>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl"
            style={{
              backgroundColor: "#00449e",
              borderRadius: 4,
              color: "#fff",
              left: "50%",
              lineHeight: "1.5",
              margin: 0,
              padding: "0 16px",
              position: "absolute",
              top: 0,
              transform: "translate(-50%,-50%)",
            }}
          >
            CSS Layout
          </h1>
          <h2
            style={{
              fontSize: 24,
              fontWeight: 300,
              lineHeight: "1.5",
              margin: 0,
              padding: "64px 0 32px",
              textAlign: "center",
            }}
          >
            a collection of popular layouts and patterns made with CSS
          </h2>
          <div className="md:flex" style={{ lineHeight: "1.5" }}>
            <div className="drop-cap p-5" style={{ flex: "1 1 0%" }}>
              <div style={{ marginBottom: 16 }}>
                Components, patterns and layouts are things you have to deal
                with everyday.
              </div>
              <div>
                There are a lot of CSS frameworks that provide rich set of
                layouts and patterns, but I usually don't want to include all of
                them in my project.
              </div>
            </div>
            <div className="drop-cap p-5" style={{ flex: "1 1 0%" }}>
              <div style={{ marginBottom: 16 }}>
                So that I collect most popular layouts and patterns that can be
                built with pure CSS.
              </div>
              <div>
                They are powered by modern CSS features such as flexbox and CSS
                grid.
              </div>
            </div>
            <div className="drop-cap p-5" style={{ flex: "1 1 0%" }}>
              <div style={{ marginBottom: 16 }}>
                Starting with the most basic part, you can customize easily for
                each specific need.
              </div>
              <div>
                By composing them, you can have any possible layout that exists
                in the real life.
              </div>
            </div>
          </div>
          <div className="flex justify-center mx-4 my-6">
            <div />
          </div>
          <div
            className="hljs"
            style={{
              alignItems: "center",
              display: "flex",
              fontSize: 16,
              justifyContent: "center",
              lineHeight: "1.5",
            }}
          >
            <ul
              style={{
                listStyleType: "none",
                margin: 0,
                padding: 0,
                width: 300,
              }}
            >
              <li>
                <span className="hljs-selector-class">.awesome</span> {"{"}
              </li>
              <ul
                style={{
                  listStyleType: "none",
                  margin: 0,
                  padding: "0 32px",
                }}
              >
                <li
                  style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="hljs-attribute">zero-dependencies:</div>
                  <div>🎉;</div>
                </li>
                <li
                  style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="hljs-attribute">no-frameworks:</div>
                  <div>🎉;</div>
                </li>
                <li
                  style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="hljs-attribute">no-css-hacks:</div>
                  <div>🎉;</div>
                </li>
                <li
                  style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="hljs-attribute">real-use-cases:</div>
                  <div>🎉;</div>
                </li>
                <li style={{ alignItems: "center", display: "flex" }}>
                  <div className="hljs-attribute">good-practices:</div>
                  <div
                    style={{
                      backgroundColor: "#00449e",
                      borderRadius: 9999,
                      color: "#fff",
                      fontSize: 14,
                      marginLeft: "auto",
                      padding: "0 8px",
                    }}
                  >
                    soon
                  </div>
                  ;
                </li>
                <li style={{ alignItems: "center", display: "flex" }}>
                  <div className="hljs-attribute">accessibility:</div>
                  <div
                    style={{
                      backgroundColor: "#00449e",
                      borderRadius: 9999,
                      color: "#fff",
                      fontSize: 14,
                      marginLeft: "auto",
                      padding: "0 8px",
                    }}
                  >
                    soon
                  </div>
                  ;
                </li>
              </ul>
              <li>{"}"}</li>
            </ul>
          </div>
        </div>
        <section
          style={{ height: 1000, overflow: "hidden", position: "relative" }}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              height: "100%",
              justifyContent: "center",
              left: 0,
              position: "absolute",
              top: 0,
              width: "100%",
              zIndex: 9999,
            }}
          >
            <div
              className="text-5xl lg:text-6xl"
              style={{ fontWeight: 600, marginBottom: 16 }}
            >
              91 patterns
            </div>
            <a
              className="text-2xl"
              href="/patterns"
              style={{
                backgroundColor: "#00449e",
                borderRadius: 4,
                color: "#fff",
                padding: "12px 16px",
                textDecoration: "none",
              }}
            >
              Explore the collection
            </a>
          </div>
          <div
            className="home-cards"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              opacity: ".4",
              padding: "32px 16px",
            }}
          >
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/holy-grail"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      borderBottom: "1px solid rgba(0,0,0,.3)",
                      flexShrink: 0,
                    }}
                  >
                    <div
                      style={{
                        alignItems: "center",
                        display: "flex",
                        padding: 8,
                        width: "100%",
                      }}
                    >
                      <div style={{ width: 16 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginLeft: "auto", width: 16 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginLeft: 4, width: 16 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexGrow: 1 }}>
                    <div
                      style={{
                        borderRight: "1px solid rgba(0,0,0,.3)",
                        padding: 8,
                        width: "30%",
                      }}
                    >
                      <div style={{ marginBottom: 4 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ width: "80%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                    <div style={{ flex: "1 1 0%", padding: 8 }}>
                      <div style={{ marginBottom: 4 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "60%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 8, width: "80%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "60%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "80%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        borderLeft: "1px solid rgba(0,0,0,.3)",
                        padding: 8,
                        width: "30%",
                      }}
                    >
                      <div style={{ marginBottom: 4 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ width: "80%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      borderTop: "1px solid rgba(0,0,0,.3)",
                      flexShrink: 0,
                    }}
                  >
                    <div
                      style={{
                        alignItems: "center",
                        display: "flex",
                        padding: 8,
                        width: "100%",
                      }}
                    >
                      <div style={{ width: 16 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginLeft: 4, width: 16 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginLeft: 4, width: 16 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Holy grail
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/sidebar"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div style={{ display: "flex", height: "100%" }}>
                  <div
                    style={{
                      borderRight: "1px solid rgba(0,0,0,.3)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      padding: 4,
                      width: "30%",
                    }}
                  >
                    <div style={{ marginBottom: 4 }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ width: "80%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      borderWidth: 4,
                      borderRightStyle: "solid",
                      borderRightColor: "rgba(0,0,0,.3)",
                      display: "flex",
                      flex: "1 1 0%",
                      flexDirection: "column",
                      padding: 8,
                    }}
                  >
                    <div style={{ marginBottom: 8 }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 8 }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 8 }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ width: "80%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Sidebar
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/split-screen"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div style={{ display: "flex", height: "100%" }}>
                  <div
                    style={{
                      alignItems: "center",
                      borderRight: "1px solid rgba(0,0,0,.3)",
                      display: "flex",
                      flex: "1 1 0%",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <div style={{ marginBottom: 4 }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          borderRadius: 9999,
                          height: 16,
                          width: 16,
                        }}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      flex: "1 1 0%",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <div style={{ padding: 8 }}>
                      <div style={{ marginBottom: 4, width: "100%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "100%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "80%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "80%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ width: "60%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Split screen
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/sticky-footer"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      borderBottom: "1px solid rgba(0,0,0,.3)",
                      borderRight: "4px solid rgba(0,0,0,.3)",
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        alignItems: "center",
                        display: "flex",
                        padding: 8,
                        width: "100%",
                      }}
                    >
                      <div style={{ width: 16 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginLeft: "auto", width: 16 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginLeft: 4, width: 16 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      borderRight: "4px solid rgba(0,0,0,.3)",
                      flex: "1 1 0%",
                    }}
                  >
                    <div style={{ padding: 8 }}>
                      <div style={{ marginBottom: 8, width: 64 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 8, width: 64 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ width: 32 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        backgroundColor: "rgba(0,0,0,.3)",
                        height: 1,
                        width: "100%",
                      }}
                    />
                    <div
                      style={{
                        alignItems: "center",
                        display: "flex",
                        padding: 8,
                        width: "100%",
                      }}
                    >
                      <div style={{ width: 16 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginLeft: 4, width: 16 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginLeft: 4, width: 16 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Sticky footer
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/sticky-header"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <div style={{ flexShrink: 0 }}>
                    <div
                      style={{
                        alignItems: "center",
                        display: "flex",
                        padding: 8,
                        width: "100%",
                      }}
                    >
                      <div style={{ width: 16 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginLeft: "auto", width: 16 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginLeft: 4, width: 16 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundColor: "rgba(0,0,0,.3)",
                        height: 1,
                        width: "100%",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      borderWidth: 4,
                      borderRightStyle: "solid",
                      borderRightColor: "rgba(0,0,0,.3)",
                      flexGrow: 1,
                    }}
                  >
                    <div style={{ padding: 8 }}>
                      <div style={{ marginBottom: 8, width: 64 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 8, width: 64 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ width: 32 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Sticky header
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/avatar-list"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    height: "100%",
                    justifyContent: "center",
                    padding: 8,
                  }}
                >
                  <div style={{ marginLeft: "-4px" }}>
                    <div
                      style={{
                        alignItems: "center",
                        backgroundColor: "#bbb",
                        borderRadius: 9999,
                        boxShadow: "#fff 0 0 0 2px",
                        color: "#fff",
                        display: "flex",
                        fontSize: 12,
                        height: 24,
                        justifyContent: "center",
                        width: 24,
                      }}
                    >
                      1
                    </div>
                  </div>
                  <div style={{ marginLeft: "-4px" }}>
                    <div
                      style={{
                        alignItems: "center",
                        backgroundColor: "#bbb",
                        borderRadius: 9999,
                        boxShadow: "#fff 0 0 0 2px",
                        color: "#fff",
                        display: "flex",
                        fontSize: 12,
                        height: 24,
                        justifyContent: "center",
                        width: 24,
                      }}
                    >
                      2
                    </div>
                  </div>
                  <div style={{ marginLeft: "-4px" }}>
                    <div
                      style={{
                        alignItems: "center",
                        backgroundColor: "#bbb",
                        borderRadius: 9999,
                        boxShadow: "#fff 0 0 0 2px",
                        color: "#fff",
                        display: "flex",
                        fontSize: 12,
                        height: 24,
                        justifyContent: "center",
                        width: 24,
                      }}
                    >
                      3
                    </div>
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Avatar list
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/badge"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "center",
                    padding: 8,
                  }}
                >
                  <div
                    style={{
                      alignItems: "center",
                      backgroundColor: "rgba(0,0,0,.3)",
                      borderRadius: 9999,
                      color: "#fff",
                      display: "flex",
                      flexDirection: "column",
                      height: 32,
                      justifyContent: "center",
                      width: 32,
                    }}
                  >
                    1
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Badge
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/breadcrumb"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "center",
                    padding: 8,
                  }}
                >
                  <div
                    style={{
                      alignItems: "center",
                      display: "flex",
                      height: 32,
                      justifyContent: "center",
                      width: "80%",
                    }}
                  >
                    <div style={{ width: "20%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          borderRadius: 2,
                          height: 8,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ color: "#000", margin: "0 4px" }}>/</div>
                    <div style={{ width: "20%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          borderRadius: 2,
                          height: 8,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ color: "#000", margin: "0 4px" }}>/</div>
                    <div style={{ width: "20%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          borderRadius: 2,
                          height: 8,
                          width: "100%",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Breadcrumb
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/button-with-icon"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "center",
                    padding: 8,
                  }}
                >
                  <div
                    style={{
                      alignItems: "center",
                      border: "1px solid rgba(0,0,0,.3)",
                      borderRadius: 4,
                      display: "flex",
                      padding: 8,
                      width: "100%",
                    }}
                  >
                    <div style={{ marginRight: 4 }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          borderRadius: 9999,
                          height: 16,
                          width: 16,
                        }}
                      />
                    </div>
                    <div
                      style={{
                        backgroundColor: "rgba(0,0,0,.3)",
                        borderRadius: 2,
                        height: 8,
                        width: "100%",
                      }}
                    />
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Button with icon
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/card"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    padding: 8,
                  }}
                >
                  <div style={{ marginBottom: 8, width: "100%" }}>
                    <div
                      style={{
                        backgroundColor: "rgba(0,0,0,.3)",
                        borderRadius: 2,
                        height: 32,
                        width: "100%",
                      }}
                    />
                  </div>
                  <div style={{ flex: "1 1 0%" }}>
                    <div style={{ marginBottom: 4, width: "100%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "100%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "80%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 8, width: "60%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ width: "30%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          borderRadius: 2,
                          height: 8,
                          width: "100%",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Card
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/centering"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "center",
                    padding: 8,
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "rgba(0,0,0,.3)",
                      borderRadius: 9999,
                      height: 16,
                      width: 16,
                    }}
                  />
                  <div style={{ margin: "4px 0", width: "50%" }}>
                    <div
                      style={{
                        backgroundColor: "rgba(0,0,0,.3)",
                        height: 1,
                        width: "100%",
                      }}
                    />
                  </div>
                  <div style={{ margin: "4px 0", width: "40%" }}>
                    <div
                      style={{
                        backgroundColor: "rgba(0,0,0,.3)",
                        height: 1,
                        width: "100%",
                      }}
                    />
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Centering
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/circular-navigation"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "center",
                    padding: 8,
                  }}
                >
                  <div style={{ position: "relative" }}>
                    <div
                      style={{
                        backgroundColor: "rgba(0,0,0,.3)",
                        borderRadius: 4,
                        color: "#fff",
                        height: 16,
                        width: 16,
                      }}
                    />
                    <div
                      style={{
                        backgroundColor: "rgba(0,0,0,.4)",
                        borderRadius: 9999,
                        color: "#fff",
                        height: 16,
                        position: "absolute",
                        top: 0,
                        transform: "rotate(0) translateX(-32px)",
                        width: 16,
                      }}
                    />
                    <div
                      style={{
                        backgroundColor: "rgba(0,0,0,.4)",
                        borderRadius: 9999,
                        color: "#fff",
                        height: 16,
                        position: "absolute",
                        top: 0,
                        transform: "rotate(60deg) translateX(-32px)",
                        width: 16,
                      }}
                    />
                    <div
                      style={{
                        backgroundColor: "rgba(0,0,0,.4)",
                        borderRadius: 9999,
                        color: "#fff",
                        height: 16,
                        position: "absolute",
                        top: 0,
                        transform: "rotate(120deg) translateX(-32px)",
                        width: 16,
                      }}
                    />
                    <div
                      style={{
                        backgroundColor: "rgba(0,0,0,.4)",
                        borderRadius: 9999,
                        color: "#fff",
                        height: 16,
                        position: "absolute",
                        top: 0,
                        transform: "rotate(180deg) translateX(-32px)",
                        width: 16,
                      }}
                    />
                    <div
                      style={{
                        backgroundColor: "rgba(0,0,0,.4)",
                        borderRadius: 9999,
                        color: "#fff",
                        height: 16,
                        position: "absolute",
                        top: 0,
                        transform: "rotate(240deg) translateX(-32px)",
                        width: 16,
                      }}
                    />
                    <div
                      style={{
                        backgroundColor: "rgba(0,0,0,.4)",
                        borderRadius: 9999,
                        color: "#fff",
                        height: 16,
                        position: "absolute",
                        top: 0,
                        transform: "rotate(300deg) translateX(-32px)",
                        width: 16,
                      }}
                    />
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Circular navigation
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/docked-at-corner"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "center",
                    padding: 8,
                  }}
                >
                  <div
                    style={{
                      border: "1px solid rgba(0,0,0,.3)",
                      borderRadius: 4,
                      height: 32,
                      position: "relative",
                      width: 32,
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#00449e",
                        borderRadius: 9999,
                        height: 16,
                        position: "absolute",
                        right: 0,
                        top: 0,
                        transform: "translate(50%,-50%)",
                        width: 16,
                      }}
                    />
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Docked at corner
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/dot-leader"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "center",
                    padding: 8,
                  }}
                >
                  <div
                    style={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: 4,
                      width: "100%",
                    }}
                  >
                    <div style={{ width: "60%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          borderRadius: 2,
                          height: 4,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        borderBottom: "1px dotted rgba(0,0,0,.3)",
                        flex: "1 1 0%",
                        margin: "0 4px",
                      }}
                    />
                    <div
                      style={{
                        backgroundColor: "rgba(0,0,0,.3)",
                        borderRadius: 9999,
                        height: 8,
                        width: 8,
                      }}
                    />
                  </div>
                  <div
                    style={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: 4,
                      width: "100%",
                    }}
                  >
                    <div style={{ width: "40%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          borderRadius: 2,
                          height: 4,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        borderBottom: "1px dotted rgba(0,0,0,.3)",
                        flex: "1 1 0%",
                        margin: "0 4px",
                      }}
                    />
                    <div
                      style={{
                        backgroundColor: "rgba(0,0,0,.3)",
                        borderRadius: 9999,
                        height: 8,
                        width: 8,
                      }}
                    />
                  </div>
                  <div
                    style={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                      width: "100%",
                    }}
                  >
                    <div style={{ width: "30%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          borderRadius: 2,
                          height: 4,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        borderBottom: "1px dotted rgba(0,0,0,.3)",
                        flex: "1 1 0%",
                        margin: "0 4px",
                      }}
                    />
                    <div
                      style={{
                        backgroundColor: "rgba(0,0,0,.3)",
                        borderRadius: 9999,
                        height: 8,
                        width: 8,
                      }}
                    />
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Dot leader
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/dot-navigation"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "center",
                    padding: 8,
                  }}
                >
                  <div style={{ alignItems: "center", display: "flex" }}>
                    <div
                      style={{
                        border: "1px solid rgba(0,0,0,.3)",
                        borderRadius: 9999,
                        height: 8,
                        margin: "0 4px",
                        width: 8,
                      }}
                    />
                    <div
                      style={{
                        backgroundColor: "rgba(0,0,0,.3)",
                        borderRadius: 9999,
                        height: 8,
                        margin: "0 4px",
                        width: 8,
                      }}
                    />
                    <div
                      style={{
                        border: "1px solid rgba(0,0,0,.3)",
                        borderRadius: 9999,
                        height: 8,
                        margin: "0 4px",
                        width: 8,
                      }}
                    />
                    <div
                      style={{
                        border: "1px solid rgba(0,0,0,.3)",
                        borderRadius: 9999,
                        height: 8,
                        margin: "0 4px",
                        width: 8,
                      }}
                    />
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Dot navigation
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/drop-area"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "center",
                    padding: 8,
                  }}
                >
                  <div
                    style={{
                      alignItems: "center",
                      border: "4px dashed rgba(0,0,0,.3)",
                      borderRadius: 4,
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      justifyContent: "center",
                      width: "100%",
                    }}
                  >
                    <div style={{ marginBottom: 4, width: "60%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "50%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ width: "30%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Drop area
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/drop-cap"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "center",
                    padding: 8,
                    width: "100%",
                  }}
                >
                  <div style={{ display: "flex", height: 32, width: "100%" }}>
                    <div
                      style={{
                        alignItems: "center",
                        border: "2px dashed rgba(0,0,0,.3)",
                        display: "flex",
                        justifyContent: "center",
                        marginRight: 8,
                        width: 32,
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          borderRadius: 9999,
                          height: 16,
                          width: 16,
                        }}
                      />
                    </div>
                    <div style={{ flex: "1 1 0%" }}>
                      <div style={{ marginBottom: 4, width: "100%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "100%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "80%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "60%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "100%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "80%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "40%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: 4 }}>
                    <div style={{ marginBottom: 4, width: "100%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "100%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "80%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "40%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "60%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Drop cap
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/dropdown"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "center",
                    padding: 8,
                  }}
                >
                  <div
                    style={{
                      alignItems: "center",
                      border: "1px solid rgba(0,0,0,.3)",
                      borderRadius: 4,
                      display: "flex",
                      height: 24,
                      justifyContent: "flex-end",
                      marginBottom: 4,
                      paddingRight: 4,
                      width: "60%",
                    }}
                  >
                    <div
                      style={{
                        borderColor: "rgba(0,0,0,.3) transparent transparent",
                        borderStyle: "solid",
                        borderWidth: "8px 8px 0",
                        height: 0,
                        width: 0,
                      }}
                    />
                  </div>
                  <div
                    style={{
                      border: "1px solid rgba(0,0,0,.3)",
                      borderRadius: 4,
                      display: "flex",
                      flex: "1 1 0%",
                      flexDirection: "column",
                      height: "100%",
                      width: "80%",
                    }}
                  >
                    <div
                      style={{
                        alignItems: "center",
                        borderBottom: "1px solid rgba(0,0,0,.3)",
                        display: "flex",
                        flex: "1 1 0%",
                        padding: "0 4px",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        alignItems: "center",
                        borderBottom: "1px solid rgba(0,0,0,.3)",
                        display: "flex",
                        flex: "1 1 0%",
                        padding: "0 4px",
                      }}
                    >
                      <div style={{ width: "80%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        alignItems: "center",
                        display: "flex",
                        flex: "1 1 0%",
                        padding: "0 4px",
                      }}
                    >
                      <div style={{ width: "60%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Dropdown
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/feature-list"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "center",
                    padding: 8,
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      marginBottom: 8,
                      width: "100%",
                    }}
                  >
                    <div style={{ margin: "0 4px" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          borderRadius: 9999,
                          height: 32,
                          width: 32,
                        }}
                      />
                    </div>
                    <div style={{ flex: "1 1 0%" }}>
                      <div style={{ marginBottom: 8, width: "100%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            borderRadius: 2,
                            height: 4,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "100%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "100%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ width: "80%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row-reverse",
                      width: "100%",
                    }}
                  >
                    <div style={{ margin: "0 4px" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          borderRadius: 9999,
                          height: 32,
                          width: 32,
                        }}
                      />
                    </div>
                    <div style={{ flex: "1 1 0%" }}>
                      <div style={{ marginBottom: 8, width: "100%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            borderRadius: 2,
                            height: 4,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "100%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "100%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ width: "80%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Feature list
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/fixed-at-corner"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div style={{ position: "relative" }}>
                  <div style={{ left: 0, position: "absolute", top: 0 }}>
                    <div
                      style={{
                        borderColor: "rgba(0,0,0,.3) transparent transparent",
                        borderStyle: "solid",
                        borderWidth: "32px 32px 0 0",
                        height: 0,
                        width: 0,
                      }}
                    />
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Fixed at corner
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/floating-label"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "center",
                    padding: 8,
                  }}
                >
                  <div
                    style={{
                      border: "1px solid rgba(0,0,0,.3)",
                      borderRadius: 4,
                      height: 32,
                      position: "relative",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#bbb",
                        height: 8,
                        left: 8,
                        padding: "0 8px",
                        position: "absolute",
                        top: 0,
                        transform: "translate(0,-50%)",
                        width: "40%",
                      }}
                    />
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Floating label
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/input-addon"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    height: "100%",
                    justifyContent: "center",
                    padding: 8,
                  }}
                >
                  <div
                    style={{
                      border: "1px solid rgba(0,0,0,.3)",
                      borderRadius: 4,
                      display: "flex",
                      height: 24,
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        alignItems: "center",
                        borderRight: "1px solid rgba(0,0,0,.3)",
                        display: "flex",
                        justifyContent: "center",
                        padding: "0 8px",
                        width: "30%",
                      }}
                    >
                      <div style={{ width: "100%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                    <div style={{ flex: "1 1 0%" }} />
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Input addon
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/media-object"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    alignItems: "flex-start",
                    display: "flex",
                    height: "100%",
                    padding: 8,
                    width: "100%",
                  }}
                >
                  <div style={{ height: 32, marginRight: 8, width: 32 }}>
                    <div
                      style={{
                        backgroundColor: "rgba(0,0,0,.3)",
                        borderRadius: 4,
                        height: "100%",
                        width: "100%",
                      }}
                    />
                  </div>
                  <div style={{ flex: "1 1 0%" }}>
                    <div style={{ marginBottom: 4, width: "100%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "100%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 16, width: "80%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "100%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "100%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 16, width: "80%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "100%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "100%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "80%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Media object
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/menu"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "center",
                    padding: 8,
                  }}
                >
                  <div
                    style={{
                      border: "1px solid rgba(0,0,0,.3)",
                      borderRadius: 4,
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        alignItems: "center",
                        borderBottom: "1px solid rgba(0,0,0,.3)",
                        display: "flex",
                        flex: "1 1 0%",
                        padding: "0 8px",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        alignItems: "center",
                        borderBottom: "1px solid rgba(0,0,0,.3)",
                        display: "flex",
                        flex: "1 1 0%",
                        padding: "0 8px",
                      }}
                    >
                      <div style={{ width: "80%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        alignItems: "center",
                        display: "flex",
                        flex: "1 1 0%",
                        padding: "0 8px",
                      }}
                    >
                      <div style={{ width: "60%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Menu
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/modal"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "center",
                    padding: 8,
                  }}
                >
                  <div
                    style={{
                      border: "1px solid rgba(0,0,0,.3)",
                      borderRadius: 4,
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "0 4px",
                      }}
                    >
                      <div style={{ width: "60%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            borderRadius: 2,
                            height: 2,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ color: "rgba(0,0,0,.7)" }}>×</div>
                    </div>
                    <div style={{ padding: 4 }}>
                      <div style={{ marginBottom: 4, width: "100%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "80%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "60%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ width: "40%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "flex-end",
                        padding: 4,
                      }}
                    >
                      <div style={{ marginRight: 8, width: "33.3333%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            borderRadius: 2,
                            height: 8,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ width: "33.3333%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            borderRadius: 2,
                            height: 8,
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Modal
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/notification"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "center",
                    padding: 8,
                  }}
                >
                  <div
                    style={{
                      alignItems: "center",
                      border: "1px solid rgba(0,0,0,.3)",
                      borderRadius: 4,
                      display: "flex",
                      justifyContent: "space-between",
                      padding: 8,
                      width: "80%",
                    }}
                  >
                    <div style={{ width: "60%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          borderRadius: 2,
                          height: 8,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ color: "rgba(0,0,0,.7)" }}>×</div>
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Notification
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/pagination"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "center",
                    padding: 8,
                  }}
                >
                  <div
                    style={{
                      border: "1px solid rgba(0,0,0,.3)",
                      borderRadius: 9999,
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        alignItems: "center",
                        borderRight: "1px solid rgba(0,0,0,.3)",
                        display: "flex",
                        justifyContent: "center",
                        padding: 8,
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          borderRadius: 9999,
                          height: 8,
                          width: 8,
                        }}
                      />
                    </div>
                    <div
                      style={{
                        alignItems: "center",
                        borderRight: "1px solid rgba(0,0,0,.3)",
                        display: "flex",
                        justifyContent: "center",
                        padding: 8,
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          borderRadius: 9999,
                          height: 8,
                          width: 8,
                        }}
                      />
                    </div>
                    <div
                      style={{
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                        padding: 8,
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          borderRadius: 9999,
                          height: 8,
                          width: 8,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Pagination
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/presence-indicator"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "center",
                    padding: 8,
                  }}
                >
                  <div
                    style={{
                      border: "1px solid rgba(0,0,0,.3)",
                      borderRadius: 9999,
                      height: 32,
                      position: "relative",
                      width: 32,
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#ff4136",
                        borderRadius: 9999,
                        bottom: 0,
                        height: 8,
                        position: "absolute",
                        right: 0,
                        transform: "translate(50%,50%)",
                        width: 8,
                      }}
                    />
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Presence indicator
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/previous-next-buttons"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "center",
                    padding: 8,
                  }}
                >
                  <div
                    style={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        border: "1px solid rgba(0,0,0,.3)",
                        borderRadius: 4,
                        padding: "4px 8px",
                      }}
                    >
                      &lt;
                    </div>
                    <div
                      style={{
                        border: "1px solid rgba(0,0,0,.3)",
                        borderRadius: 4,
                        padding: "4px 8px",
                      }}
                    >
                      &gt;
                    </div>
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Previous next buttons
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/pricing-table"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    height: "100%",
                    justifyContent: "center",
                    padding: 8,
                  }}
                >
                  <div
                    style={{
                      alignItems: "center",
                      border: "1px solid rgba(0,0,0,.3)",
                      borderRadius: 4,
                      display: "flex",
                      flex: "1 1 0%",
                      flexDirection: "column",
                      justifyContent: "center",
                      marginRight: 4,
                      padding: 4,
                    }}
                  >
                    <div style={{ marginBottom: 4 }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          borderRadius: 9999,
                          height: 16,
                          width: 16,
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "100%" }}>
                      <div style={{ marginBottom: 4, width: "100%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "100%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ width: "80%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundColor: "rgba(0,0,0,.3)",
                        borderRadius: 2,
                        height: 8,
                        width: "100%",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      alignItems: "center",
                      border: "1px solid rgba(0,0,0,.3)",
                      borderRadius: 4,
                      display: "flex",
                      flex: "1 1 0%",
                      flexDirection: "column",
                      justifyContent: "center",
                      marginRight: 4,
                      padding: 4,
                    }}
                  >
                    <div style={{ marginBottom: 4 }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          borderRadius: 9999,
                          height: 16,
                          width: 16,
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "100%" }}>
                      <div style={{ marginBottom: 4, width: "100%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "60%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "80%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "100%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ width: "80%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundColor: "rgba(0,0,0,.3)",
                        borderRadius: 2,
                        height: 8,
                        width: "100%",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      alignItems: "center",
                      border: "1px solid rgba(0,0,0,.3)",
                      borderRadius: 4,
                      display: "flex",
                      flex: "1 1 0%",
                      flexDirection: "column",
                      justifyContent: "center",
                      padding: 4,
                    }}
                  >
                    <div style={{ marginBottom: 4 }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          borderRadius: 9999,
                          height: 16,
                          width: 16,
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "100%" }}>
                      <div style={{ marginBottom: 4, width: "100%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ width: "80%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundColor: "rgba(0,0,0,.3)",
                        borderRadius: 2,
                        height: 8,
                        width: "100%",
                      }}
                    />
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Pricing table
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/property-list"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "center",
                    padding: 8,
                  }}
                >
                  <div style={{ width: "100%" }}>
                    <div
                      style={{
                        alignItems: "center",
                        borderBottom: "1px solid rgba(0,0,0,.3)",
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "4px 0",
                      }}
                    >
                      <div style={{ width: "60%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            borderRadius: 2,
                            height: 8,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          borderRadius: 9999,
                          height: 12,
                          width: 12,
                        }}
                      />
                    </div>
                    <div
                      style={{
                        alignItems: "center",
                        borderBottom: "1px solid rgba(0,0,0,.3)",
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "4px 0",
                      }}
                    >
                      <div style={{ width: "20%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            borderRadius: 2,
                            height: 8,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          borderRadius: 9999,
                          height: 12,
                          width: 12,
                        }}
                      />
                    </div>
                    <div
                      style={{
                        alignItems: "center",
                        borderBottom: "1px solid rgba(0,0,0,.3)",
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "4px 0",
                      }}
                    >
                      <div style={{ width: "40%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            borderRadius: 2,
                            height: 8,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          borderRadius: 9999,
                          height: 12,
                          width: 12,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Property list
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/progress-bar"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "center",
                    padding: 8,
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "rgba(0,0,0,.1)",
                      borderRadius: 9999,
                      height: 16,
                      padding: 4,
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "rgba(0,0,0,.3)",
                        borderRadius: 9999,
                        height: "100%",
                        width: "40%",
                      }}
                    />
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Progress bar
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/questions-and-answers"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "center",
                    padding: 8,
                  }}
                >
                  <div style={{ width: "80%" }}>
                    <div
                      style={{
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: 8,
                      }}
                    >
                      <div style={{ width: "60%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            borderRadius: 2,
                            height: 4,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          borderColor: "rgba(0,0,0,.3) transparent transparent",
                          borderStyle: "solid",
                          borderWidth: "6px 6px 0",
                          height: 0,
                          width: 0,
                        }}
                      />
                    </div>
                    <div>
                      <div
                        style={{
                          alignItems: "center",
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: 4,
                        }}
                      >
                        <div style={{ width: "40%" }}>
                          <div
                            style={{
                              backgroundColor: "rgba(0,0,0,.3)",
                              borderRadius: 2,
                              height: 4,
                              width: "100%",
                            }}
                          />
                        </div>
                        <div
                          style={{
                            borderColor:
                              "transparent transparent rgba(0,0,0,.3)",
                            borderStyle: "solid",
                            borderWidth: "0 6px 6px",
                            height: 0,
                            width: 0,
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "100%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "80%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "60%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ width: "40%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Questions and answers
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/radio-switch"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "center",
                    padding: 8,
                  }}
                >
                  <div
                    style={{
                      alignItems: "center",
                      border: "1px solid rgba(0,0,0,.3)",
                      borderRadius: 9999,
                      display: "flex",
                      justifyContent: "center",
                      padding: 4,
                      width: "80%",
                    }}
                  >
                    <div style={{ flex: "1 1 0%", padding: 4 }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          borderRadius: 2,
                          height: 8,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        backgroundColor: "rgba(0,0,0,.1)",
                        borderRadius: 9999,
                        flex: "1 1 0%",
                        height: "100%",
                        padding: 4,
                      }}
                    />
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Radio switch
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/rating"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "center",
                    padding: 8,
                  }}
                >
                  <div
                    style={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        color: "rgba(0,0,0,.3)",
                        fontSize: 12,
                        padding: 2,
                      }}
                    >
                      ★
                    </div>
                    <div
                      style={{
                        color: "rgba(0,0,0,.3)",
                        fontSize: 12,
                        padding: 2,
                      }}
                    >
                      ★
                    </div>
                    <div
                      style={{
                        color: "rgba(0,0,0,.3)",
                        fontSize: 12,
                        padding: 2,
                      }}
                    >
                      ★
                    </div>
                    <div
                      style={{
                        color: "rgba(0,0,0,.3)",
                        fontSize: 12,
                        padding: 2,
                      }}
                    >
                      ☆
                    </div>
                    <div
                      style={{
                        color: "rgba(0,0,0,.3)",
                        fontSize: 12,
                        padding: 2,
                      }}
                    >
                      ☆
                    </div>
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Rating
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/same-height-columns"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div style={{ display: "flex", height: "100%", padding: 8 }}>
                  <div style={{ flex: "1 1 0%", margin: "0 4px" }}>
                    <div style={{ height: 32, marginBottom: 4, width: 32 }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          borderRadius: 4,
                          height: "100%",
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "100%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "100%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "80%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ width: "60%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                  </div>
                  <div style={{ flex: "1 1 0%", margin: "0 4px" }}>
                    <div style={{ height: 32, marginBottom: 4, width: 32 }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          borderRadius: 4,
                          height: "100%",
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "100%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "80%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 8, width: "60%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "100%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ width: "60%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Same height columns
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/search-box"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "center",
                    padding: 8,
                  }}
                >
                  <div
                    style={{
                      alignItems: "center",
                      border: "1px solid rgba(0,0,0,.3)",
                      borderRadius: 4,
                      display: "flex",
                      justifyContent: "flex-end",
                      padding: 4,
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "rgba(0,0,0,.3)",
                        borderRadius: 9999,
                        height: 16,
                        width: 16,
                      }}
                    />
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Search box
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/separator"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "center",
                    padding: 8,
                  }}
                >
                  <div
                    style={{
                      alignItems: "center",
                      display: "flex",
                      height: 16,
                      width: "80%",
                    }}
                  >
                    <div style={{ flex: "1 1 0%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ margin: "0 4px", width: "25%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          borderRadius: 2,
                          height: 8,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ flex: "1 1 0%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Separator
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/simple-grid"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "center",
                    padding: 8,
                  }}
                >
                  <div style={{ width: "80%" }}>
                    <div
                      style={{
                        alignItems: "center",
                        display: "flex",
                        marginBottom: 4,
                      }}
                    >
                      <div style={{ flex: "0 0 50%", padding: "0 4px" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            borderRadius: 2,
                            height: 8,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ flex: "1 1 0%", padding: "0 4px" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            borderRadius: 2,
                            height: 8,
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        alignItems: "center",
                        display: "flex",
                        marginBottom: 4,
                      }}
                    >
                      <div style={{ flex: "0 0 33%", padding: "0 4px" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            borderRadius: 2,
                            height: 8,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ flex: "0 0 33%", padding: "0 4px" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            borderRadius: 2,
                            height: 8,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ flex: "0 0 33%", padding: "0 4px" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            borderRadius: 2,
                            height: 8,
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                    <div style={{ alignItems: "center", display: "flex" }}>
                      <div style={{ flex: "0 0 25%", padding: "0 4px" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            borderRadius: 2,
                            height: 8,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ flex: "1 1 0%", padding: "0 4px" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            borderRadius: 2,
                            height: 8,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ flex: "0 0 25%", padding: "0 4px" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            borderRadius: 2,
                            height: 8,
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Simple grid
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/slider"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "center",
                    padding: 8,
                  }}
                >
                  <div
                    style={{
                      alignItems: "center",
                      display: "flex",
                      height: 16,
                      width: "80%",
                    }}
                  >
                    <div style={{ width: "20%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        backgroundColor: "rgba(0,0,0,.3)",
                        borderRadius: 9999,
                        height: 16,
                        width: 16,
                      }}
                    />
                    <div style={{ flex: "1 1 0%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Slider
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/spin-button"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "center",
                    padding: 8,
                  }}
                >
                  <div
                    style={{
                      border: "1px solid rgba(0,0,0,.3)",
                      borderRadius: 4,
                      display: "flex",
                      justifyContent: "flex-end",
                      width: "80%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <div style={{ flex: "1 1 0%", padding: "4px 4px 2px" }}>
                        <div
                          style={{
                            borderColor:
                              "transparent transparent rgba(0,0,0,.3)",
                            borderStyle: "solid",
                            borderWidth: "0 6px 6px",
                            height: 0,
                            width: 0,
                          }}
                        />
                      </div>
                      <div style={{ flex: "1 1 0%", padding: "2px 4px 4px" }}>
                        <div
                          style={{
                            borderColor:
                              "rgba(0,0,0,.3) transparent transparent",
                            borderStyle: "solid",
                            borderWidth: "6px 6px 0",
                            height: 0,
                            width: 0,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Spin button
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/split-navigation"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "center",
                    padding: 8,
                  }}
                >
                  <div
                    style={{
                      alignItems: "center",
                      border: "1px solid rgba(0,0,0,.3)",
                      borderRadius: 8,
                      display: "flex",
                      padding: 4,
                      width: "100%",
                    }}
                  >
                    <div style={{ marginRight: 4, width: 16 }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          borderRadius: 2,
                          height: 8,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginRight: 4, width: 16 }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          borderRadius: 2,
                          height: 8,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginLeft: "auto", width: 16 }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          borderRadius: 2,
                          height: 8,
                          width: "100%",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Split navigation
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/stepper-input"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    height: "100%",
                    justifyContent: "center",
                    padding: 8,
                  }}
                >
                  <div
                    style={{
                      border: "1px solid rgba(0,0,0,.3)",
                      borderRadius: 4,
                      display: "flex",
                      height: 24,
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        alignItems: "center",
                        borderRight: "1px solid rgba(0,0,0,.3)",
                        display: "flex",
                        justifyContent: "center",
                        width: 16,
                      }}
                    >
                      -
                    </div>
                    <div style={{ flex: "1 1 0%" }} />
                    <div
                      style={{
                        alignItems: "center",
                        borderLeft: "1px solid rgba(0,0,0,.3)",
                        display: "flex",
                        justifyContent: "center",
                        width: 16,
                      }}
                    >
                      +
                    </div>
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Stepper input
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/switch"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "center",
                    padding: 8,
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "rgba(0,0,0,.3)",
                      border: "1px solid rgba(0,0,0,.1)",
                      borderRadius: 9999,
                      display: "flex",
                      height: 16,
                      justifyContent: "flex-end",
                      width: 32,
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#fff",
                        borderRadius: 9999,
                        height: "100%",
                        width: 16,
                      }}
                    />
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Switch
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/tab"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "center",
                    padding: 8,
                  }}
                >
                  <div
                    style={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        borderWidth: 1,
                        borderStyle: "solid",
                        borderColor:
                          "rgba(0,0,0,.3) rgba(0,0,0,.3) transparent",
                        borderImage: "initial",
                        borderTopLeftRadius: 4,
                        borderTopRightRadius: 4,
                        padding: "4px 8px",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          borderRadius: 9999,
                          height: 8,
                          width: 8,
                        }}
                      />
                    </div>
                    <div
                      style={{
                        borderBottom: "1px solid rgba(0,0,0,.3)",
                        padding: "4px 8px",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          borderRadius: 9999,
                          height: 8,
                          width: 8,
                        }}
                      />
                    </div>
                    <div
                      style={{
                        borderBottom: "1px solid rgba(0,0,0,.3)",
                        padding: "4px 8px",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,.3)",
                          borderRadius: 9999,
                          height: 8,
                          width: 8,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Tab
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/toggle-password-visibility"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "center",
                    padding: 8,
                  }}
                >
                  <div
                    style={{
                      alignItems: "center",
                      border: "1px solid rgba(0,0,0,.3)",
                      borderRadius: 4,
                      display: "flex",
                      justifyContent: "space-between",
                      padding: 4,
                      width: "100%",
                    }}
                  >
                    <div style={{ alignItems: "center", display: "flex" }}>
                      <div style={{ marginRight: 4 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            borderRadius: 9999,
                            height: 8,
                            width: 8,
                          }}
                        />
                      </div>
                      <div style={{ marginRight: 4 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            borderRadius: 9999,
                            height: 8,
                            width: 8,
                          }}
                        />
                      </div>
                      <div style={{ marginRight: 4 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            borderRadius: 9999,
                            height: 8,
                            width: 8,
                          }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundColor: "rgba(0,0,0,.3)",
                        borderRadius: 9999,
                        height: 16,
                        width: 16,
                      }}
                    />
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Toggle password visibility
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/upload-button"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "center",
                    padding: 8,
                  }}
                >
                  <div
                    style={{
                      alignItems: "center",
                      border: "1px solid rgba(0,0,0,.3)",
                      borderRadius: 4,
                      display: "flex",
                      padding: 8,
                      width: "100%",
                    }}
                  >
                    <div style={{ marginRight: 4 }}>
                      <svg
                        viewBox="0 0 24 24"
                        style={{
                          fill: "none",
                          height: 16,
                          stroke: "rgba(0,0,0,.4)",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 1,
                          width: 16,
                        }}
                      >
                        <path
                          d="M18.5,7.5c0.275,0,0.341-0.159,0.146-0.354l-6.292-6.292c-0.195-0.196-0.512-0.196-0.707-0.001
                          c0,0-0.001,0.001-0.001,0.001L5.354,7.147C5.154,7.342,5.225,7.501,5.5,7.501h3v10c0,0.552,0.448,1,1,1h5c0.552,0,1-0.448,1-1V7.5
                          H18.5z
                          M23.5,18.5v4c0,0.552-0.448,1-1,1h-21c-0.552,0-1-0.448-1-1v-4"
                        />
                      </svg>
                    </div>
                    <div
                      style={{
                        backgroundColor: "rgba(0,0,0,.3)",
                        borderRadius: 2,
                        height: 8,
                        width: "100%",
                      }}
                    />
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Upload button
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/wizard"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0,0,0,.2) 0 16px 24px -4px,rgba(0,0,0,.05) 0 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "center",
                    padding: 8,
                  }}
                >
                  <div style={{ display: "flex", width: "100%" }}>
                    <div
                      style={{
                        alignItems: "center",
                        display: "flex",
                        flex: "1 1 0%",
                        justifyContent: "center",
                      }}
                    >
                      <div style={{ flex: "1 1 0%" }} />
                      <div
                        style={{
                          alignItems: "center",
                          backgroundColor: "rgba(0,0,0,.3)",
                          borderRadius: 9999,
                          color: "#fff",
                          display: "flex",
                          fontSize: 12,
                          height: 16,
                          justifyContent: "center",
                          width: 16,
                        }}
                      >
                        1
                      </div>
                      <div style={{ flex: "1 1 0%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        alignItems: "center",
                        display: "flex",
                        flex: "1 1 0%",
                        justifyContent: "center",
                      }}
                    >
                      <div style={{ flex: "1 1 0%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          alignItems: "center",
                          backgroundColor: "rgba(0,0,0,.3)",
                          borderRadius: 9999,
                          color: "#fff",
                          display: "flex",
                          fontSize: 12,
                          height: 16,
                          justifyContent: "center",
                          width: 16,
                        }}
                      >
                        2
                      </div>
                      <div style={{ flex: "1 1 0%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        alignItems: "center",
                        display: "flex",
                        flex: "1 1 0%",
                        justifyContent: "center",
                      }}
                    >
                      <div style={{ flex: "1 1 0%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          alignItems: "center",
                          backgroundColor: "rgba(0,0,0,.3)",
                          borderRadius: 9999,
                          color: "#fff",
                          display: "flex",
                          fontSize: 12,
                          height: 16,
                          justifyContent: "center",
                          width: 16,
                        }}
                      >
                        3
                      </div>
                      <div style={{ flex: "1 1 0%" }} />
                    </div>
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Wizard
              </h4>
            </a>
          </div>
        </section>
        <div style={{ backgroundColor: "#282828", padding: 24 }}>
          <div
            className="text-2xl lg:text-4xl"
            style={{
              color: "#fff",
              fontWeight: 600,
              textAlign: "center",
              textTransform: "lowercase",
            }}
          >
            How it's made
          </div>
          <div>
            <pre
              className="hljs"
              style={{ height: "auto", lineHeight: "1.5", margin: 0 }}
            >
              <code className="javascript">
                <span className="hljs-keyword">this</span>
                {"\n"}
                {"    "}.madeWith([react,typescript]){"\n"}
                {"    "}.then(
                <span className="hljs-function">
                  (<span className="hljs-params">r</span>) =&gt;
                </span>{" "}
                lint(r)){"               "}
                <span className="hljs-comment">/* tslint */</span>
                {"\n"}
                {"    "}.then(
                <span className="hljs-function">
                  (<span className="hljs-params">r</span>) =&gt;
                </span>{" "}
                lazyLoad(r)){"           "}
                <span className="hljs-comment">/* @loadable/component */</span>
                {"\n"}
                {"    "}.then(
                <span className="hljs-function">
                  (<span className="hljs-params">r</span>) =&gt;
                </span>{" "}
                optimizeAndBundle(r)){"  "}
                <span className="hljs-comment">/* webpack */</span>
                {"\n"}
                {"    "}.then(
                <span className="hljs-function">
                  (<span className="hljs-params">r</span>) =&gt;
                </span>{" "}
                exportHtml(r)){"         "}
                <span className="hljs-comment">/* react-snap */</span>
                {"\n"}
                {"    "}.then(
                <span className="hljs-function">
                  (<span className="hljs-params">r</span>) =&gt;
                </span>{" "}
                deploy(r)){"             "}
                <span className="hljs-comment">/* Netlify */</span>
                {"\n"}
                {"    "}.then(
                <span className="hljs-function">
                  (<span className="hljs-params">r</span>) =&gt;
                </span>{" "}
                {"{"}
                {"\n"}
                {"        "}expect(r).is(scalableCode);{"\n"}
                {"        "}expect(r).is(superFastWebsite);{"\n"}
                {"        "}expect(r).is(seoFriendly);{"\n"}
                {"    "}
                {"}"}){"\n"}
                {"    "}.finally(
                <span className="hljs-function">
                  <span className="hljs-params">()</span> =&gt;
                </span>{" "}
                {"{"}
                {"\n"}
                {"        "}
                <span className="hljs-comment">
                  /* Give me 1 Github star 🎉 */
                </span>
                {"\n"}
                {"    "}
                {"}"});
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t pt-6 pb-16 border-gray-400">
      <div className="ml-auto mr-auto max-w-4xl px-2 lg:px-0">
        <div className="text-center mb-8">
          <div className="mb-4">
            Hit the Subscribe button for the latest news on my tools. No spam.
            Ever!
          </div>
          <form
            action="https://csslayout.us4.list-manage.com/subscribe/post?u=77d0bf6497a2cdbb36f08587c&id=e8a912009a"
            method="post"
            name="mc-embedded-subscribe-form"
            target="_blank"
            noValidate
            style={{ margin: 0 }}
          >
            <input
              type="email"
              name="EMAIL"
              placeholder="Email address"
              required
              style={{
                border: "1px solid rgba(0,0,0,.3)",
                borderBottomLeftRadius: 4,
                borderTopLeftRadius: 4,
                padding: 8,
                width: 200,
              }}
            />
            <div
              aria-hidden="true"
              style={{ left: "-5000px", position: "absolute" }}
            >
              <input
                type="text"
                name="b_77d0bf6497a2cdbb36f08587c_e8a912009a"
                tabIndex={-1}
              />
            </div>
            <button
              type="submit"
              name="subscribe"
              style={{
                backgroundColor: "#00449e",
                borderBottomRightRadius: 4,
                borderColor: "transparent",
                borderTopRightRadius: 4,
                color: "#fff",
                padding: "8px 16px",
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">Products</h3>
          <ul className="flex flex-wrap -ml-1 -mr-1">
            <li className="w-1/2 sm:w-1/3 px-1 mb-6">
              <a
                href="https://blur.page"
                rel="noopener noreferrer"
                target="_blank"
                title="BlurPage - a browser extension to hide sensitive element on page"
                style={{ textDecoration: "none" }}
              >
                <div className="font-semibold">Blur Page</div>
                <span className="text-gray-600">
                  a browser extension to hide sensitive element on page
                </span>
              </a>
            </li>
            <li className="w-1/2 sm:w-1/3 px-1 mb-6">
              <a
                href="https://csslayout.io"
                rel="noopener noreferrer"
                target="_blank"
                title="CSS Layout - a collection of popular layouts and patterns made with CSS"
                style={{ textDecoration: "none" }}
              >
                <div className="font-semibold">CSS Layout</div>
                <span className="text-gray-600">
                  a collection of popular layouts and patterns made with CSS
                </span>
              </a>
            </li>
            <li className="w-1/2 sm:w-1/3 px-1 mb-6">
              <a
                href="https://fakenumbers.io"
                rel="noopener noreferrer"
                target="_blank"
                title="Fake Numbers - a JavaScript library to fake a number"
                style={{ textDecoration: "none" }}
              >
                <div className="font-semibold">Fake Numbers</div>
                <span className="text-gray-600">
                  a JavaScript library to fake a number
                </span>
              </a>
            </li>
            <li className="w-1/2 sm:w-1/3 px-1 mb-6">
              <a
                href="https://formvalidation.io"
                rel="noopener noreferrer"
                target="_blank"
                title="FormValidation - the best validation library for JavaScript"
                style={{ textDecoration: "none" }}
              >
                <div className="font-semibold">Form Validation</div>
                <span className="text-gray-600">
                  the best validation library for JavaScript
                </span>
              </a>
            </li>
            <li className="w-1/2 sm:w-1/3 px-1 mb-6">
              <a
                href="https://htmldom.dev"
                rel="noopener noreferrer"
                target="_blank"
                title="HTML DOM - Common tasks of managing HTML DOM with native API"
                style={{ textDecoration: "none" }}
              >
                <div className="font-semibold">HTML DOM</div>
                <span className="text-gray-600">
                  common tasks of managing HTML DOM with vanilla JavaScript
                </span>
              </a>
            </li>
            <li className="w-1/2 sm:w-1/3 px-1 mb-6">
              <a
                href="https://react-pdf-viewer.dev"
                rel="noopener noreferrer"
                target="_blank"
                title="React PDF Viewer - a PDF viewer made for React"
                style={{ textDecoration: "none" }}
              >
                <div className="font-semibold">React PDF Viewer</div>
                <span className="text-gray-600">
                  a PDF viewer made for React
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">
            Follow me{" "}
            <span className="font-light text-gray-600 ml-2">
              I love building products!
            </span>
          </h3>
          <ul className="flex">
            <li className="flex-1">
              <a
                href="https://twitter.com/nghuuphuoc"
                rel="noopener noreferrer"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <div className="font-semibold">Twitter</div>
                <span className="text-gray-600">@nghuuphuoc</span>
              </a>
            </li>
            <li className="flex-1">
              <a
                href="https://dev.to/phuocng"
                rel="noopener noreferrer"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <div className="font-semibold">dev.to</div>
                <span className="text-gray-600">@phuocng</span>
              </a>
            </li>
            <li className="flex-1">
              <a
                href="https://github.com/phuoc-ng"
                rel="noopener noreferrer"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <div className="font-semibold">GitHub</div>
                <span className="text-gray-600">@phuoc-ng</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="pt-4">© 2020 Nguyen Huu Phuoc. All rights reserved</div>
      </div>
    </div>
  </div>
)

export default IndexPage
