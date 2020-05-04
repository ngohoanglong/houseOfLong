import React from "react"
import { Card, Square } from "../components/Shape"

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
      <div className="sm:text-2xl p-4 xl:pl-0">
        <a href="/" style={{ textDecoration: "none" }}>
          Home
        </a>
        <span className="mx-2">/</span>
        <span>Explore</span>
      </div>
      <div>
        <div className="xl:border-l xl:border-t xl:border-r xl:border-gray-400 p-4">
          <h2
            className="text-2xl mb-6"
            style={{
              fontWeight: 300,
              lineHeight: "1.5",
              padding: 0,
              textAlign: "center",
            }}
          >
            Here is the collection of 91 patterns
          </h2>
          <div className="mb-5" style={{ textAlign: "center" }}>
            All covers you see in this page are made with CSS only. Inspect
            them! 🎉
          </div>
          <div className="flex justify-center mx-4 my-6">
            <div />
          </div>
        </div>
        <section>
          <div
            className="border-t border-gray-400"
            style={{ position: "relative" }}
          >
            <h3
              className="text-2xl"
              style={{
                backgroundColor: "rgb(255, 255, 255)",
                fontWeight: 700,
                left: 32,
                lineHeight: "1.5",
                margin: 0,
                padding: "0px 8px",
                position: "absolute",
                textTransform: "uppercase",
                top: 0,
                transform: "translate(0px, -50%)",
              }}
            >
              Layout
            </h3>
          </div>
          <div className="xl:border-l xl:border-r xl:border-gray-400 flex flex-wrap p-8">
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/card-layout"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 16,
                textDecoration: "none",
              }}
            >
              <Card>
                <div class="w-full h-full grid grid-cols-3 gap-2">
                  {new Array(9).fill(true).map((item, i) => (
                    <Square key={i}>{i}</Square>
                  ))}
                </div>
              </Card>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Card layout
              </h4>
            </a>
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
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
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginLeft: "auto", width: 16 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginLeft: 4, width: 16 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                        borderRight: "1px solid rgba(0, 0, 0, 0.3)",
                        padding: 8,
                        width: "30%",
                      }}
                    >
                      <div style={{ marginBottom: 4 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ width: "80%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "60%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 8, width: "80%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "60%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "80%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        borderLeft: "1px solid rgba(0, 0, 0, 0.3)",
                        padding: 8,
                        width: "30%",
                      }}
                    >
                      <div style={{ marginBottom: 4 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ width: "80%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      borderTop: "1px solid rgba(0, 0, 0, 0.3)",
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
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginLeft: 4, width: 16 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginLeft: 4, width: 16 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div style={{ display: "flex", height: "100%", padding: 8 }}>
                  <div style={{ flex: "1 1 0%", margin: "0px 4px" }}>
                    <div style={{ height: 32, marginBottom: 4, width: 32 }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          borderRadius: 4,
                          height: "100%",
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "100%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "100%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "80%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ width: "60%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                  </div>
                  <div style={{ flex: "1 1 0%", margin: "0px 4px" }}>
                    <div style={{ height: 32, marginBottom: 4, width: 32 }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          borderRadius: 4,
                          height: "100%",
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "100%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "80%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 8, width: "60%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "100%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ width: "60%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div style={{ display: "flex", height: "100%" }}>
                  <div
                    style={{
                      borderRight: "1px solid rgba(0, 0, 0, 0.3)",
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
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ width: "80%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                      borderRightColor: "rgba(0, 0, 0, 0.3)",
                      display: "flex",
                      flex: "1 1 0%",
                      flexDirection: "column",
                      padding: 8,
                    }}
                  >
                    <div style={{ marginBottom: 8 }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 8 }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 8 }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ width: "80%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      <div style={{ flex: "0 0 50%", padding: "0px 4px" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            borderRadius: 2,
                            height: 8,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ flex: "1 1 0%", padding: "0px 4px" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                      <div style={{ flex: "0 0 33%", padding: "0px 4px" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            borderRadius: 2,
                            height: 8,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ flex: "0 0 33%", padding: "0px 4px" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            borderRadius: 2,
                            height: 8,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ flex: "0 0 33%", padding: "0px 4px" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            borderRadius: 2,
                            height: 8,
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                    <div style={{ alignItems: "center", display: "flex" }}>
                      <div style={{ flex: "0 0 25%", padding: "0px 4px" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            borderRadius: 2,
                            height: 8,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ flex: "1 1 0%", padding: "0px 4px" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            borderRadius: 2,
                            height: 8,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ flex: "0 0 25%", padding: "0px 4px" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div style={{ display: "flex", height: "100%" }}>
                  <div
                    style={{
                      alignItems: "center",
                      borderRight: "1px solid rgba(0, 0, 0, 0.3)",
                      display: "flex",
                      flex: "1 1 0%",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <div style={{ marginBottom: 4 }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "100%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "80%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "80%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ width: "60%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
                      borderRight: "4px solid rgba(0, 0, 0, 0.3)",
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
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginLeft: "auto", width: 16 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginLeft: 4, width: 16 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      borderRight: "4px solid rgba(0, 0, 0, 0.3)",
                      flex: "1 1 0%",
                    }}
                  >
                    <div style={{ padding: 8 }}>
                      <div style={{ marginBottom: 8, width: 64 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 8, width: 64 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ width: 32 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginLeft: 4, width: 16 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginLeft: 4, width: 16 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginLeft: "auto", width: 16 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginLeft: 4, width: 16 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                        height: 1,
                        width: "100%",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      borderWidth: 4,
                      borderRightStyle: "solid",
                      borderRightColor: "rgba(0, 0, 0, 0.3)",
                      flexGrow: 1,
                    }}
                  >
                    <div style={{ padding: 8 }}>
                      <div style={{ marginBottom: 8, width: 64 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 8, width: 64 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ width: 32 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
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
              href="/patterns/sticky-sections"
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.1)",
                      flex: "1 1 0%",
                      width: "100%",
                    }}
                  />
                  <div
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.2)",
                      flex: "1 1 0%",
                      width: "100%",
                    }}
                  />
                  <div
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                      flex: "1 1 0%",
                      width: "100%",
                    }}
                  />
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Sticky sections
              </h4>
            </a>
          </div>
        </section>
        <section>
          <div
            className="border-t border-gray-400"
            style={{ position: "relative" }}
          >
            <h3
              className="text-2xl"
              style={{
                backgroundColor: "rgb(255, 255, 255)",
                fontWeight: 700,
                left: 32,
                lineHeight: "1.5",
                margin: 0,
                padding: "0px 8px",
                position: "absolute",
                textTransform: "uppercase",
                top: 0,
                transform: "translate(0px, -50%)",
              }}
            >
              Navigation
            </h3>
          </div>
          <div className="xl:border-l xl:border-r xl:border-gray-400 flex flex-wrap p-8">
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          borderRadius: 2,
                          height: 8,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ color: "rgb(0, 0, 0)", margin: "0px 4px" }}>
                      /
                    </div>
                    <div style={{ width: "20%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          borderRadius: 2,
                          height: 8,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ color: "rgb(0, 0, 0)", margin: "0px 4px" }}>
                      /
                    </div>
                    <div style={{ width: "20%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                        borderRadius: 4,
                        color: "rgb(255, 255, 255)",
                        height: 16,
                        width: 16,
                      }}
                    />
                    <div
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                        borderRadius: 9999,
                        color: "rgb(255, 255, 255)",
                        height: 16,
                        position: "absolute",
                        top: 0,
                        transform: "rotate(0deg) translateX(-32px)",
                        width: 16,
                      }}
                    />
                    <div
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                        borderRadius: 9999,
                        color: "rgb(255, 255, 255)",
                        height: 16,
                        position: "absolute",
                        top: 0,
                        transform: "rotate(60deg) translateX(-32px)",
                        width: 16,
                      }}
                    />
                    <div
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                        borderRadius: 9999,
                        color: "rgb(255, 255, 255)",
                        height: 16,
                        position: "absolute",
                        top: 0,
                        transform: "rotate(120deg) translateX(-32px)",
                        width: 16,
                      }}
                    />
                    <div
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                        borderRadius: 9999,
                        color: "rgb(255, 255, 255)",
                        height: 16,
                        position: "absolute",
                        top: 0,
                        transform: "rotate(180deg) translateX(-32px)",
                        width: 16,
                      }}
                    />
                    <div
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                        borderRadius: 9999,
                        color: "rgb(255, 255, 255)",
                        height: 16,
                        position: "absolute",
                        top: 0,
                        transform: "rotate(240deg) translateX(-32px)",
                        width: 16,
                      }}
                    />
                    <div
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                        borderRadius: 9999,
                        color: "rgb(255, 255, 255)",
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                        border: "1px solid rgba(0, 0, 0, 0.3)",
                        borderRadius: 9999,
                        height: 8,
                        margin: "0px 4px",
                        width: 8,
                      }}
                    />
                    <div
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                        borderRadius: 9999,
                        height: 8,
                        margin: "0px 4px",
                        width: 8,
                      }}
                    />
                    <div
                      style={{
                        border: "1px solid rgba(0, 0, 0, 0.3)",
                        borderRadius: 9999,
                        height: 8,
                        margin: "0px 4px",
                        width: 8,
                      }}
                    />
                    <div
                      style={{
                        border: "1px solid rgba(0, 0, 0, 0.3)",
                        borderRadius: 9999,
                        height: 8,
                        margin: "0px 4px",
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
              href="/patterns/drawer"
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                    height: "100%",
                    position: "relative",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "rgb(255, 255, 255)",
                      height: "100%",
                      left: 0,
                      padding: 4,
                      position: "absolute",
                      top: 0,
                      width: "40%",
                    }}
                  >
                    <div style={{ marginBottom: 4 }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4 }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4 }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ width: "80%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                Drawer
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      border: "1px solid rgba(0, 0, 0, 0.3)",
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
                        borderColor:
                          "rgba(0, 0, 0, 0.3) transparent transparent",
                        borderStyle: "solid",
                        borderWidth: "8px 8px 0px",
                        height: 0,
                        width: 0,
                      }}
                    />
                  </div>
                  <div
                    style={{
                      border: "1px solid rgba(0, 0, 0, 0.3)",
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
                        borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
                        display: "flex",
                        flex: "1 1 0%",
                        padding: "0px 4px",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        alignItems: "center",
                        borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
                        display: "flex",
                        flex: "1 1 0%",
                        padding: "0px 4px",
                      }}
                    >
                      <div style={{ width: "80%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                        padding: "0px 4px",
                      }}
                    >
                      <div style={{ width: "60%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
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
              href="/patterns/full-screen-menu"
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      height: "100%",
                      position: "relative",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        alignItems: "center",
                        backgroundColor: "rgba(0, 0, 0, 0.25)",
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        justifyContent: "center",
                        left: 0,
                        position: "absolute",
                        top: 0,
                        width: "100%",
                      }}
                    >
                      <div style={{ marginBottom: 4, width: "60%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            borderRadius: 2,
                            height: 8,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "40%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            borderRadius: 2,
                            height: 8,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "50%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                Full screen menu
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/mega-menu"
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                    <div style={{ padding: "4px 8px" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          borderRadius: 9999,
                          height: 8,
                          width: 8,
                        }}
                      />
                    </div>
                    <div
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.1)",
                        padding: "4px 8px",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          borderRadius: 9999,
                          height: 8,
                          width: 8,
                        }}
                      />
                    </div>
                    <div style={{ padding: "4px 8px" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          borderRadius: 9999,
                          height: 8,
                          width: 8,
                        }}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      border: "1px solid rgba(0, 0, 0, 0.3)",
                      display: "flex",
                      width: "100%",
                    }}
                  >
                    <div style={{ flex: "1 1 0%", padding: 4 }}>
                      <div style={{ marginBottom: 4 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "60%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ width: "80%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                    <div style={{ flex: "1 1 0%", padding: 4 }}>
                      <div style={{ marginBottom: 4, width: "60%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "80%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ width: "60%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                    <div style={{ flex: "1 1 0%", padding: 4 }}>
                      <div style={{ marginBottom: 4, width: "80%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "40%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ width: "80%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                Mega menu
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      border: "1px solid rgba(0, 0, 0, 0.3)",
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
                        borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
                        display: "flex",
                        flex: "1 1 0%",
                        padding: "0px 8px",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        alignItems: "center",
                        borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
                        display: "flex",
                        flex: "1 1 0%",
                        padding: "0px 8px",
                      }}
                    >
                      <div style={{ width: "80%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                        padding: "0px 8px",
                      }}
                    >
                      <div style={{ width: "60%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
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
              href="/patterns/nested-dropdowns"
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      border: "1px solid rgba(0, 0, 0, 0.3)",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <div style={{ flex: "1 1 0%", padding: "4px 8px" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          borderRadius: 9999,
                          height: 8,
                          width: 8,
                        }}
                      />
                    </div>
                    <div
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.1)",
                        flex: "1 1 0%",
                        padding: "4px 8px",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          borderRadius: 9999,
                          height: 8,
                          width: 8,
                        }}
                      />
                      <div
                        style={{
                          borderWidth: 1,
                          borderStyle: "solid",
                          borderColor:
                            "transparent rgba(0, 0, 0, 0.3) rgba(0, 0, 0, 0.3)",
                          borderImage: "initial",
                          left: 0,
                          padding: 4,
                          position: "absolute",
                          top: "100%",
                          width: "100%",
                        }}
                      >
                        <div style={{ marginBottom: 4 }}>
                          <div
                            style={{
                              backgroundColor: "rgba(0, 0, 0, 0.3)",
                              height: 1,
                              width: "100%",
                            }}
                          />
                        </div>
                        <div style={{ marginBottom: 4, width: "60%" }}>
                          <div
                            style={{
                              backgroundColor: "rgba(0, 0, 0, 0.3)",
                              height: 1,
                              width: "100%",
                            }}
                          />
                        </div>
                        <div style={{ marginBottom: 4 }}>
                          <div
                            style={{
                              backgroundColor: "rgba(0, 0, 0, 0.3)",
                              height: 1,
                              width: "100%",
                            }}
                          />
                        </div>
                        <div style={{ width: "80%" }}>
                          <div
                            style={{
                              backgroundColor: "rgba(0, 0, 0, 0.3)",
                              height: 1,
                              width: "100%",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div style={{ flex: "1 1 0%", padding: "4px 8px" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                Nested dropdowns
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      border: "1px solid rgba(0, 0, 0, 0.3)",
                      borderRadius: 9999,
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        alignItems: "center",
                        borderRight: "1px solid rgba(0, 0, 0, 0.3)",
                        display: "flex",
                        justifyContent: "center",
                        padding: 8,
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          borderRadius: 9999,
                          height: 8,
                          width: 8,
                        }}
                      />
                    </div>
                    <div
                      style={{
                        alignItems: "center",
                        borderRight: "1px solid rgba(0, 0, 0, 0.3)",
                        display: "flex",
                        justifyContent: "center",
                        padding: 8,
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                        border: "1px solid rgba(0, 0, 0, 0.3)",
                        borderRadius: 4,
                        padding: "4px 8px",
                      }}
                    >
                      &lt;
                    </div>
                    <div
                      style={{
                        border: "1px solid rgba(0, 0, 0, 0.3)",
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      border: "1px solid rgba(0, 0, 0, 0.3)",
                      borderRadius: 8,
                      display: "flex",
                      padding: 4,
                      width: "100%",
                    }}
                  >
                    <div style={{ marginRight: 4, width: 16 }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          borderRadius: 2,
                          height: 8,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginRight: 4, width: 16 }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          borderRadius: 2,
                          height: 8,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginLeft: "auto", width: 16 }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                          "rgba(0, 0, 0, 0.3) rgba(0, 0, 0, 0.3) transparent",
                        borderImage: "initial",
                        borderTopLeftRadius: 4,
                        borderTopRightRadius: 4,
                        padding: "4px 8px",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          borderRadius: 9999,
                          height: 8,
                          width: 8,
                        }}
                      />
                    </div>
                    <div
                      style={{
                        borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
                        padding: "4px 8px",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          borderRadius: 9999,
                          height: 8,
                          width: 8,
                        }}
                      />
                    </div>
                    <div
                      style={{
                        borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
                        padding: "4px 8px",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          borderRadius: 9999,
                          color: "rgb(255, 255, 255)",
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
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          alignItems: "center",
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          borderRadius: 9999,
                          color: "rgb(255, 255, 255)",
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
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          alignItems: "center",
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          borderRadius: 9999,
                          color: "rgb(255, 255, 255)",
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
        <section>
          <div
            className="border-t border-gray-400"
            style={{ position: "relative" }}
          >
            <h3
              className="text-2xl"
              style={{
                backgroundColor: "rgb(255, 255, 255)",
                fontWeight: 700,
                left: 32,
                lineHeight: "1.5",
                margin: 0,
                padding: "0px 8px",
                position: "absolute",
                textTransform: "uppercase",
                top: 0,
                transform: "translate(0px, -50%)",
              }}
            >
              Input
            </h3>
          </div>
          <div className="xl:border-l xl:border-r xl:border-gray-400 flex flex-wrap p-8">
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      border: "1px solid rgba(0, 0, 0, 0.3)",
                      borderRadius: 4,
                      display: "flex",
                      padding: 8,
                      width: "100%",
                    }}
                  >
                    <div style={{ marginRight: 4 }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          borderRadius: 9999,
                          height: 16,
                          width: 16,
                        }}
                      />
                    </div>
                    <div
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
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
              href="/patterns/chip"
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      backgroundColor: "rgba(0, 0, 0, 0.1)",
                      borderRadius: 9999,
                      display: "inline-flex",
                      justifyContent: "center",
                      padding: "4px 8px",
                      width: "80%",
                    }}
                  >
                    <div style={{ flex: "1 1 0%", marginRight: 4 }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          borderRadius: 2,
                          height: 8,
                          width: "100%",
                        }}
                      />
                    </div>
                    <button
                      style={{
                        backgroundColor: "transparent",
                        borderColor: "transparent",
                        cursor: "pointer",
                        height: 16,
                        position: "relative",
                        width: 16,
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          left: 0,
                          position: "absolute",
                          top: "50%",
                          transform: "translate(0%, -50%) rotate(45deg)",
                          width: "100%",
                        }}
                      />
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: "100%",
                          left: "50%",
                          position: "absolute",
                          top: 0,
                          transform: "translate(-50%, 0%) rotate(45deg)",
                          width: 1,
                        }}
                      />
                    </button>
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Chip
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/custom-checkbox-button"
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      marginBottom: 8,
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        alignItems: "center",
                        border: "1px solid rgba(0, 0, 0, 0.3)",
                        borderRadius: 4,
                        display: "flex",
                        height: 24,
                        justifyContent: "center",
                        marginRight: 8,
                        padding: 4,
                        width: 24,
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "transparent",
                          borderRadius: 4,
                          height: "100%",
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ flex: "1 1 0%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                      marginBottom: 8,
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        alignItems: "center",
                        border: "1px solid rgba(0, 0, 0, 0.3)",
                        borderRadius: 4,
                        display: "flex",
                        height: 24,
                        justifyContent: "center",
                        marginRight: 8,
                        padding: 4,
                        width: 24,
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "rgb(0, 68, 158)",
                          borderRadius: 4,
                          height: "100%",
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ flex: "1 1 0%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                Custom checkbox button
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/custom-radio-button"
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      marginBottom: 8,
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        alignItems: "center",
                        border: "1px solid rgba(0, 0, 0, 0.3)",
                        borderRadius: 9999,
                        display: "flex",
                        justifyContent: "center",
                        marginRight: 8,
                        padding: 4,
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "rgb(0, 68, 158)",
                          borderRadius: 9999,
                          height: 16,
                          width: 16,
                        }}
                      />
                    </div>
                    <div style={{ flex: "1 1 0%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                      marginBottom: 8,
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        alignItems: "center",
                        border: "1px solid rgba(0, 0, 0, 0.3)",
                        borderRadius: 9999,
                        display: "flex",
                        justifyContent: "center",
                        marginRight: 8,
                        padding: 4,
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "transparent",
                          borderRadius: 9999,
                          height: 16,
                          width: 16,
                        }}
                      />
                    </div>
                    <div style={{ flex: "1 1 0%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                Custom radio button
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      border: "1px solid rgba(0, 0, 0, 0.3)",
                      borderRadius: 4,
                      height: 32,
                      position: "relative",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "rgb(187, 187, 187)",
                        height: 8,
                        left: 8,
                        padding: "0px 8px",
                        position: "absolute",
                        top: 0,
                        transform: "translate(0px, -50%)",
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      border: "1px solid rgba(0, 0, 0, 0.3)",
                      borderRadius: 4,
                      display: "flex",
                      height: 24,
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        alignItems: "center",
                        borderRight: "1px solid rgba(0, 0, 0, 0.3)",
                        display: "flex",
                        justifyContent: "center",
                        padding: "0px 8px",
                        width: "30%",
                      }}
                    >
                      <div style={{ width: "100%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
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
              href="/patterns/radio-button-group"
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      border: "1px solid rgba(0, 0, 0, 0.3)",
                      borderRadius: 4,
                      display: "flex",
                      height: 24,
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "rgb(0, 68, 158)",
                        borderRight: "1px solid rgba(0, 0, 0, 0.3)",
                        flex: "1 1 0%",
                      }}
                    />
                    <div
                      style={{
                        borderRight: "1px solid rgba(0, 0, 0, 0.3)",
                        flex: "1 1 0%",
                      }}
                    />
                    <div style={{ flex: "1 1 0%" }} />
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Radio button group
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      border: "1px solid rgba(0, 0, 0, 0.3)",
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
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          borderRadius: 2,
                          height: 8,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.1)",
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                        color: "rgba(0, 0, 0, 0.3)",
                        fontSize: 12,
                        padding: 2,
                      }}
                    >
                      ★
                    </div>
                    <div
                      style={{
                        color: "rgba(0, 0, 0, 0.3)",
                        fontSize: 12,
                        padding: 2,
                      }}
                    >
                      ★
                    </div>
                    <div
                      style={{
                        color: "rgba(0, 0, 0, 0.3)",
                        fontSize: 12,
                        padding: 2,
                      }}
                    >
                      ★
                    </div>
                    <div
                      style={{
                        color: "rgba(0, 0, 0, 0.3)",
                        fontSize: 12,
                        padding: 2,
                      }}
                    >
                      ☆
                    </div>
                    <div
                      style={{
                        color: "rgba(0, 0, 0, 0.3)",
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      border: "1px solid rgba(0, 0, 0, 0.3)",
                      borderRadius: 4,
                      display: "flex",
                      justifyContent: "flex-end",
                      padding: 4,
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                        borderRadius: 9999,
                        height: 16,
                        width: 16,
                      }}
                    />
                    <div style={{ flex: "1 1 0%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      border: "1px solid rgba(0, 0, 0, 0.3)",
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
                              "transparent transparent rgba(0, 0, 0, 0.3)",
                            borderStyle: "solid",
                            borderWidth: "0px 6px 6px",
                            height: 0,
                            width: 0,
                          }}
                        />
                      </div>
                      <div style={{ flex: "1 1 0%", padding: "2px 4px 4px" }}>
                        <div
                          style={{
                            borderColor:
                              "rgba(0, 0, 0, 0.3) transparent transparent",
                            borderStyle: "solid",
                            borderWidth: "6px 6px 0px",
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      border: "1px solid rgba(0, 0, 0, 0.3)",
                      borderRadius: 4,
                      display: "flex",
                      height: 24,
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        alignItems: "center",
                        borderRight: "1px solid rgba(0, 0, 0, 0.3)",
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
                        borderLeft: "1px solid rgba(0, 0, 0, 0.3)",
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                      border: "1px solid rgba(0, 0, 0, 0.1)",
                      borderRadius: 9999,
                      display: "flex",
                      height: 16,
                      justifyContent: "flex-end",
                      width: 32,
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "rgb(255, 255, 255)",
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      border: "1px solid rgba(0, 0, 0, 0.3)",
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
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            borderRadius: 9999,
                            height: 8,
                            width: 8,
                          }}
                        />
                      </div>
                      <div style={{ marginRight: 4 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            borderRadius: 9999,
                            height: 8,
                            width: 8,
                          }}
                        />
                      </div>
                      <div style={{ marginRight: 4 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            borderRadius: 9999,
                            height: 8,
                            width: 8,
                          }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      border: "1px solid rgba(0, 0, 0, 0.3)",
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
                          stroke: "rgba(0, 0, 0, 0.4)",
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
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
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
          </div>
        </section>
        <section>
          <div
            className="border-t border-gray-400"
            style={{ position: "relative" }}
          >
            <h3
              className="text-2xl"
              style={{
                backgroundColor: "rgb(255, 255, 255)",
                fontWeight: 700,
                left: 32,
                lineHeight: "1.5",
                margin: 0,
                padding: "0px 8px",
                position: "absolute",
                textTransform: "uppercase",
                top: 0,
                transform: "translate(0px, -50%)",
              }}
            >
              Display
            </h3>
          </div>
          <div className="xl:border-l xl:border-r xl:border-gray-400 flex flex-wrap p-8">
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/accordion"
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      border: "1px solid rgba(0, 0, 0, 0.3)",
                      borderRadius: 4,
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.3)" }}
                    >
                      <div
                        style={{
                          alignItems: "center",
                          display: "flex",
                          padding: 8,
                        }}
                      >
                        <div style={{ marginRight: 4 }}>
                          <div
                            style={{
                              borderColor:
                                "transparent transparent transparent rgba(0, 0, 0, 0.3)",
                              borderStyle: "solid",
                              borderWidth: "6px 0px 6px 12px",
                              height: 0,
                              width: 0,
                            }}
                          />
                        </div>
                        <div style={{ flex: "1 1 0%" }}>
                          <div
                            style={{
                              backgroundColor: "rgba(0, 0, 0, 0.3)",
                              borderRadius: 2,
                              height: 4,
                              width: "100%",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.3)" }}
                    >
                      <div
                        style={{
                          alignItems: "center",
                          display: "flex",
                          padding: 8,
                        }}
                      >
                        <div style={{ marginRight: 4 }}>
                          <div
                            style={{
                              borderColor:
                                "rgba(0, 0, 0, 0.3) transparent transparent",
                              borderStyle: "solid",
                              borderWidth: "6px 6px 0px",
                              height: 0,
                              width: 0,
                            }}
                          />
                        </div>
                        <div style={{ flex: "1 1 0%" }}>
                          <div
                            style={{
                              backgroundColor: "rgba(0, 0, 0, 0.3)",
                              borderRadius: 2,
                              height: 4,
                              width: "100%",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div style={{ padding: 8 }}>
                      <div style={{ marginBottom: 4, width: "60%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ width: "80%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                Accordion
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/arrow-buttons"
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                    padding: 24,
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      position: "relative",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "rgb(255, 255, 255)",
                        borderLeft: "1px solid rgba(0, 0, 0, 0.3)",
                        borderTop: "1px solid rgba(0, 0, 0, 0.3)",
                        height: 16,
                        left: "50%",
                        position: "absolute",
                        top: 0,
                        transform: "translate(-50%, -50%) rotate(45deg)",
                        width: 16,
                      }}
                    />
                    <div
                      style={{
                        backgroundColor: "rgb(255, 255, 255)",
                        borderRight: "1px solid rgba(0, 0, 0, 0.3)",
                        borderTop: "1px solid rgba(0, 0, 0, 0.3)",
                        height: 16,
                        position: "absolute",
                        right: 0,
                        top: "50%",
                        transform: "translate(50%, -50%) rotate(45deg)",
                        width: 16,
                      }}
                    />
                    <div
                      style={{
                        backgroundColor: "rgb(255, 255, 255)",
                        borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
                        borderRight: "1px solid rgba(0, 0, 0, 0.3)",
                        bottom: "-16px",
                        height: 16,
                        left: "50%",
                        position: "absolute",
                        transform: "translate(-50%, -50%) rotate(45deg)",
                        width: 16,
                      }}
                    />
                    <div
                      style={{
                        backgroundColor: "rgb(255, 255, 255)",
                        borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
                        borderLeft: "1px solid rgba(0, 0, 0, 0.3)",
                        height: 16,
                        left: 0,
                        position: "absolute",
                        top: "50%",
                        transform: "translate(-50%, -50%) rotate(45deg)",
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
                Arrow buttons
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/avatar"
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                      borderRadius: 9999,
                      height: 48,
                      padding: 4,
                      width: 48,
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      style={{
                        fill: "none",
                        height: "100%",
                        stroke: "rgb(255, 255, 255)",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 1,
                        width: "100%",
                      }}
                    >
                      <path
                        d="M12,3.5c2.347,0,4.25,1.903,4.25,4.25S14.347,12,12,12s-4.25-1.903-4.25-4.25S9.653,3.5,12,3.5z
      M5,20.5
      c0-3.866,3.134-7,7-7s7,3.134,7,7H5z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Avatar
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                        backgroundColor: "rgb(187, 187, 187)",
                        borderRadius: 9999,
                        boxShadow: "rgb(255, 255, 255) 0px 0px 0px 2px",
                        color: "rgb(255, 255, 255)",
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
                        backgroundColor: "rgb(187, 187, 187)",
                        borderRadius: 9999,
                        boxShadow: "rgb(255, 255, 255) 0px 0px 0px 2px",
                        color: "rgb(255, 255, 255)",
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
                        backgroundColor: "rgb(187, 187, 187)",
                        borderRadius: 9999,
                        boxShadow: "rgb(255, 255, 255) 0px 0px 0px 2px",
                        color: "rgb(255, 255, 255)",
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                      borderRadius: 9999,
                      color: "rgb(255, 255, 255)",
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "100%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "80%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 8, width: "60%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ width: "30%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                      borderRadius: 9999,
                      height: 16,
                      width: 16,
                    }}
                  />
                  <div style={{ margin: "4px 0px", width: "50%" }}>
                    <div
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                        height: 1,
                        width: "100%",
                      }}
                    />
                  </div>
                  <div style={{ margin: "4px 0px", width: "40%" }}>
                    <div
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
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
              href="/patterns/close-button"
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                  <button
                    style={{
                      backgroundColor: "transparent",
                      borderColor: "transparent",
                      cursor: "pointer",
                      height: 32,
                      position: "relative",
                      width: 32,
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                        height: 1,
                        left: 0,
                        position: "absolute",
                        top: "50%",
                        transform: "translate(0%, -50%) rotate(45deg)",
                        width: "100%",
                      }}
                    />
                    <div
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                        height: "100%",
                        left: "50%",
                        position: "absolute",
                        top: 0,
                        transform: "translate(-50%, 0%) rotate(45deg)",
                        width: 1,
                      }}
                    />
                  </button>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Close button
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/cookie-banner"
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      alignItems: "center",
                      backgroundColor: "rgba(0, 0, 0, 0.05)",
                      borderTop: "1px solid rgba(0, 0, 0, 0.3)",
                      bottom: 0,
                      display: "flex",
                      left: 0,
                      padding: 4,
                      position: "absolute",
                      width: "100%",
                    }}
                  >
                    <div style={{ flex: "1 1 0%", marginRight: 4 }}>
                      <div style={{ marginBottom: 4, width: "100%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "100%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "80%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                    <div style={{ width: 32 }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          borderRadius: 2,
                          height: 16,
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
                Cookie banner
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/corner-ribbon"
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      border: "1px solid rgba(0, 0, 0, 0.3)",
                      borderRadius: 4,
                      height: "100%",
                      position: "relative",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        height: 48,
                        left: 0,
                        overflow: "hidden",
                        position: "absolute",
                        top: 0,
                        width: 48,
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 16,
                          left: "-16px",
                          position: "absolute",
                          textAlign: "center",
                          top: 8,
                          transform: "rotate(-45deg)",
                          width: 70,
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
                Corner ribbon
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/curved-background"
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div style={{ height: "100%", padding: 8 }}>
                  <div
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                      borderBottomLeftRadius: "50% 40%",
                      borderBottomRightRadius: "50% 40%",
                      height: "50%",
                      width: "100%",
                    }}
                  />
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Curved background
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/diagonal-section"
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                      height: "40%",
                      transform: "skewY(-10deg)",
                      width: "100%",
                    }}
                  />
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Diagonal section
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      border: "1px solid rgba(0, 0, 0, 0.3)",
                      borderRadius: 4,
                      height: 32,
                      position: "relative",
                      width: 32,
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "rgb(0, 68, 158)",
                        borderRadius: 9999,
                        height: 16,
                        position: "absolute",
                        right: 0,
                        top: 0,
                        transform: "translate(50%, -50%)",
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          borderRadius: 2,
                          height: 4,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        borderBottom: "1px dotted rgba(0, 0, 0, 0.3)",
                        flex: "1 1 0%",
                        margin: "0px 4px",
                      }}
                    />
                    <div
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          borderRadius: 2,
                          height: 4,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        borderBottom: "1px dotted rgba(0, 0, 0, 0.3)",
                        flex: "1 1 0%",
                        margin: "0px 4px",
                      }}
                    />
                    <div
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          borderRadius: 2,
                          height: 4,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        borderBottom: "1px dotted rgba(0, 0, 0, 0.3)",
                        flex: "1 1 0%",
                        margin: "0px 4px",
                      }}
                    />
                    <div
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      border: "4px dashed rgba(0, 0, 0, 0.3)",
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
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "50%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ width: "30%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                        border: "2px dashed rgba(0, 0, 0, 0.3)",
                        display: "flex",
                        justifyContent: "center",
                        marginRight: 8,
                        width: 32,
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "100%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "80%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "60%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "100%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "80%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "40%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "100%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "80%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "40%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "60%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
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
              href="/patterns/fading-long-section"
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                    padding: 16,
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      overflow: "hidden",
                      position: "relative",
                      width: "100%",
                    }}
                  >
                    <div style={{ marginBottom: 4, width: "90%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "70%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "70%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "80%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "50%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "80%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "70%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "50%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "90%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "80%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "60%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "100%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "70%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "50%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "50%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "80%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "40%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "80%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "100%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "60%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        background:
                          "linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255))",
                        bottom: 0,
                        height: 30,
                        left: 0,
                        position: "absolute",
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
                Fading long section
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/feature-comparison"
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                    style={{ display: "flex", marginBottom: 8, width: "100%" }}
                  >
                    <div style={{ flex: "1 1 0%", marginRight: 8 }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          borderRadius: 2,
                          height: 4,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        width: 16,
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          borderRadius: 9999,
                          height: 4,
                          width: 4,
                        }}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        width: 16,
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          borderRadius: 9999,
                          height: 4,
                          width: 4,
                        }}
                      />
                    </div>
                  </div>
                  <div
                    style={{ display: "flex", marginBottom: 8, width: "100%" }}
                  >
                    <div style={{ flex: "1 1 0%", marginRight: 8 }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          borderRadius: 2,
                          height: 4,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        width: 16,
                      }}
                    />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        width: 16,
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          borderRadius: 9999,
                          height: 4,
                          width: 4,
                        }}
                      />
                    </div>
                  </div>
                  <div
                    style={{ display: "flex", marginBottom: 8, width: "100%" }}
                  >
                    <div style={{ flex: "1 1 0%", marginRight: 8 }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          borderRadius: 2,
                          height: 4,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        width: 16,
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          borderRadius: 9999,
                          height: 4,
                          width: 4,
                        }}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
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
                Feature comparison
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                    style={{ display: "flex", marginBottom: 8, width: "100%" }}
                  >
                    <div style={{ margin: "0px 4px" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            borderRadius: 2,
                            height: 4,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "100%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "100%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ width: "80%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                    <div style={{ margin: "0px 4px" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            borderRadius: 2,
                            height: 4,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "100%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "100%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ width: "80%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div style={{ position: "relative" }}>
                  <div style={{ left: 0, position: "absolute", top: 0 }}>
                    <div
                      style={{
                        borderColor:
                          "rgba(0, 0, 0, 0.3) transparent transparent",
                        borderStyle: "solid",
                        borderWidth: "32px 32px 0px 0px",
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
              href="/patterns/fixed-at-side"
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    height: "100%",
                    position: "relative",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                      height: "40%",
                      position: "absolute",
                      right: 0,
                      top: "50%",
                      transform: "translate(0px, -50%)",
                      width: 16,
                    }}
                  />
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Fixed at side
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/full-background"
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.25)",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "center",
                    padding: 8,
                  }}
                >
                  <div style={{ marginBottom: 4, width: "80%" }}>
                    <div
                      style={{
                        backgroundColor: "rgb(255, 255, 255)",
                        height: 1,
                        width: "100%",
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: 4, width: "60%" }}>
                    <div
                      style={{
                        backgroundColor: "rgb(255, 255, 255)",
                        height: 1,
                        width: "100%",
                      }}
                    />
                  </div>
                  <div style={{ width: "40%" }}>
                    <div
                      style={{
                        backgroundColor: "rgb(255, 255, 255)",
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
                Full background
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/initial-avatar"
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                      borderRadius: 9999,
                      color: "rgb(255, 255, 255)",
                      display: "flex",
                      flexDirection: "column",
                      height: 48,
                      justifyContent: "center",
                      width: 48,
                    }}
                  >
                    PN
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Initial avatar
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/keyboard-shortcut"
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                  <kbd
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.1)",
                      borderRadius: 4,
                      boxShadow:
                        "rgba(0, 0, 0, 0.3) 0px -2px 0px inset, rgba(0, 0, 0, 0.4) 0px 1px 1px",
                      color: "rgba(0, 0, 0, 0.7)",
                      padding: 8,
                    }}
                  >
                    ⌘ + C
                  </kbd>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Keyboard shortcut
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/lined-paper"
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      backgroundImage:
                        "linear-gradient(rgba(0, 0, 0, 0.3) 1px, transparent 0px)",
                      backgroundSize: "100% 8px",
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Lined paper
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "100%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 16, width: "80%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "100%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "100%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 16, width: "80%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "100%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "100%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 4, width: "80%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
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
              href="/patterns/overlay-play-button"
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      height: "100%",
                      position: "relative",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        alignItems: "center",
                        backgroundColor: "rgba(0, 0, 0, 0.25)",
                        display: "flex",
                        height: "100%",
                        justifyContent: "center",
                        left: 0,
                        position: "absolute",
                        top: 0,
                        width: "100%",
                      }}
                    >
                      <div
                        style={{
                          alignItems: "center",
                          border: "2px solid rgb(255, 255, 255)",
                          borderRadius: 9999,
                          display: "flex",
                          height: 32,
                          justifyContent: "center",
                          width: 32,
                        }}
                      >
                        <div
                          style={{
                            borderColor:
                              "transparent transparent transparent rgb(255, 255, 255)",
                            borderStyle: "solid",
                            borderWidth: "8px 0px 8px 16px",
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
                Overlay play button
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      border: "1px solid rgba(0, 0, 0, 0.3)",
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
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "100%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ width: "80%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                        borderRadius: 2,
                        height: 8,
                        width: "100%",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      alignItems: "center",
                      border: "1px solid rgba(0, 0, 0, 0.3)",
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
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "60%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "80%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "100%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ width: "80%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                        borderRadius: 2,
                        height: 8,
                        width: "100%",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      alignItems: "center",
                      border: "1px solid rgba(0, 0, 0, 0.3)",
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
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ width: "80%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                        borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "4px 0px",
                      }}
                    >
                      <div style={{ width: "60%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            borderRadius: 2,
                            height: 8,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          borderRadius: 9999,
                          height: 12,
                          width: 12,
                        }}
                      />
                    </div>
                    <div
                      style={{
                        alignItems: "center",
                        borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "4px 0px",
                      }}
                    >
                      <div style={{ width: "20%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            borderRadius: 2,
                            height: 8,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          borderRadius: 9999,
                          height: 12,
                          width: 12,
                        }}
                      />
                    </div>
                    <div
                      style={{
                        alignItems: "center",
                        borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "4px 0px",
                      }}
                    >
                      <div style={{ width: "40%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            borderRadius: 2,
                            height: 8,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            borderRadius: 2,
                            height: 4,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          borderColor:
                            "rgba(0, 0, 0, 0.3) transparent transparent",
                          borderStyle: "solid",
                          borderWidth: "6px 6px 0px",
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
                              backgroundColor: "rgba(0, 0, 0, 0.3)",
                              borderRadius: 2,
                              height: 4,
                              width: "100%",
                            }}
                          />
                        </div>
                        <div
                          style={{
                            borderColor:
                              "transparent transparent rgba(0, 0, 0, 0.3)",
                            borderStyle: "solid",
                            borderWidth: "0px 6px 6px",
                            height: 0,
                            width: 0,
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "100%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "80%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "60%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ width: "40%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
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
              href="/patterns/ribbon"
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      backgroundColor: "rgb(187, 187, 187)",
                      height: 24,
                      position: "relative",
                      width: 48,
                    }}
                  >
                    <div
                      style={{
                        borderWidth: 12,
                        borderStyle: "solid",
                        borderColor:
                          "rgb(204, 204, 204) rgb(204, 204, 204) rgb(204, 204, 204) transparent",
                        borderImage: "initial",
                        bottom: "-6px",
                        left: "-18px",
                        position: "absolute",
                        zIndex: -1,
                      }}
                    />
                    <div
                      style={{
                        borderWidth: "6px 0px 0px 6px",
                        borderStyle: "solid",
                        borderColor:
                          "rgb(170, 170, 170) transparent transparent",
                        borderImage: "initial",
                        left: 0,
                        position: "absolute",
                        top: "100%",
                      }}
                    />
                    <div
                      style={{
                        borderWidth: "6px 6px 0px 0px",
                        borderStyle: "solid",
                        borderColor:
                          "rgb(170, 170, 170) transparent transparent",
                        borderImage: "initial",
                        position: "absolute",
                        right: 0,
                        top: "100%",
                      }}
                    />
                    <div
                      style={{
                        borderWidth: 12,
                        borderStyle: "solid",
                        borderColor:
                          "rgb(204, 204, 204) transparent rgb(204, 204, 204) rgb(204, 204, 204)",
                        borderImage: "initial",
                        bottom: "-6px",
                        position: "absolute",
                        right: "-18px",
                        zIndex: -1,
                      }}
                    />
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Ribbon
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          height: 1,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ margin: "0px 4px", width: "25%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          borderRadius: 2,
                          height: 8,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ flex: "1 1 0%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
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
              href="/patterns/stacked-cards"
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      backgroundColor: "rgb(255, 255, 255)",
                      border: "1px solid rgba(0, 0, 0, 0.3)",
                      borderRadius: 4,
                      height: "75%",
                      position: "relative",
                      width: "60%",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "rgb(255, 255, 255)",
                        border: "1px solid rgba(0, 0, 0, 0.3)",
                        borderRadius: 4,
                        height: "100%",
                        left: 0,
                        position: "absolute",
                        top: 0,
                        transform: "rotate(15deg)",
                        width: "100%",
                        zIndex: -1,
                      }}
                    />
                    <div
                      style={{
                        backgroundColor: "rgb(255, 255, 255)",
                        border: "1px solid rgba(0, 0, 0, 0.3)",
                        borderRadius: 4,
                        height: "100%",
                        left: 0,
                        position: "absolute",
                        top: 0,
                        transform: "rotate(30deg)",
                        width: "100%",
                        zIndex: -1,
                      }}
                    />
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Stacked cards
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/stamp-border"
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      backgroundColor: "rgb(204, 204, 204)",
                      backgroundImage:
                        "radial-gradient(rgb(255, 255, 255) 50%, transparent 50%)",
                      backgroundPosition: "-5px -5px",
                      backgroundRepeat: "repeat",
                      backgroundSize: "10px 10px",
                      height: "100%",
                      padding: 5,
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "rgb(204, 204, 204)",
                        height: "100%",
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
                Stamp border
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/statistic"
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      display: "inline-flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        color: "rgba(0, 0, 0, 0.7)",
                        fontSize: "2.5rem",
                        fontWeight: 500,
                      }}
                    >
                      1k+
                    </div>
                    <div
                      style={{
                        color: "rgba(0, 0, 0, 0.4)",
                        fontSize: "0.75rem",
                        textTransform: "uppercase",
                      }}
                    >
                      stars
                    </div>
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Statistic
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/status-light"
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      width: "75%",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "rgb(66, 153, 225)",
                        borderRadius: 9999,
                        height: 8,
                        marginRight: 8,
                        width: 8,
                      }}
                    />
                    <div style={{ flex: "1 1 0%" }}>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                Status light
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/sticky-table-column"
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                  <table
                    style={{
                      border: "1px solid rgba(0, 0, 0, 0.3)",
                      borderCollapse: "collapse",
                      width: "100%",
                    }}
                  >
                    <thead>
                      <tr>
                        <th
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.1)",
                            padding: "6px 4px",
                          }}
                        >
                          <div
                            style={{
                              backgroundColor: "rgba(0, 0, 0, 0.3)",
                              borderRadius: 2,
                              height: 8,
                              width: "100%",
                            }}
                          />
                        </th>
                        <th style={{ padding: "6px 4px" }}>
                          <div
                            style={{
                              backgroundColor: "rgba(0, 0, 0, 0.3)",
                              height: 1,
                              width: "100%",
                            }}
                          />
                        </th>
                        <th style={{ padding: "6px 4px" }}>
                          <div
                            style={{
                              backgroundColor: "rgba(0, 0, 0, 0.3)",
                              height: 1,
                              width: "100%",
                            }}
                          />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderTop: "1px solid rgba(0, 0, 0, 0.3)" }}>
                        <td
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.1)",
                            padding: "6px 4px",
                          }}
                        >
                          <div
                            style={{
                              backgroundColor: "rgba(0, 0, 0, 0.3)",
                              borderRadius: 2,
                              height: 8,
                              width: "100%",
                            }}
                          />
                        </td>
                        <td style={{ padding: "6px 4px" }}>
                          <div
                            style={{
                              backgroundColor: "rgba(0, 0, 0, 0.3)",
                              height: 1,
                              width: "100%",
                            }}
                          />
                        </td>
                        <td style={{ padding: "6px 4px" }}>
                          <div
                            style={{
                              backgroundColor: "rgba(0, 0, 0, 0.3)",
                              height: 1,
                              width: "100%",
                            }}
                          />
                        </td>
                      </tr>
                      <tr style={{ borderTop: "1px solid rgba(0, 0, 0, 0.3)" }}>
                        <td
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.1)",
                            padding: "6px 4px",
                          }}
                        >
                          <div
                            style={{
                              backgroundColor: "rgba(0, 0, 0, 0.3)",
                              borderRadius: 2,
                              height: 8,
                              width: "100%",
                            }}
                          />
                        </td>
                        <td style={{ padding: "6px 4px" }}>
                          <div
                            style={{
                              backgroundColor: "rgba(0, 0, 0, 0.3)",
                              height: 1,
                              width: "100%",
                            }}
                          />
                        </td>
                        <td style={{ padding: "6px 4px" }}>
                          <div
                            style={{
                              backgroundColor: "rgba(0, 0, 0, 0.3)",
                              height: 1,
                              width: "100%",
                            }}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Sticky table column
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/sticky-table-headers"
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                  <table
                    style={{
                      border: "1px solid rgba(0, 0, 0, 0.3)",
                      borderCollapse: "collapse",
                      width: "100%",
                    }}
                  >
                    <thead style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
                      <tr>
                        <th style={{ padding: "6px 4px" }}>
                          <div
                            style={{
                              backgroundColor: "rgba(0, 0, 0, 0.3)",
                              borderRadius: 2,
                              height: 8,
                              width: "100%",
                            }}
                          />
                        </th>
                        <th style={{ padding: "6px 4px" }}>
                          <div
                            style={{
                              backgroundColor: "rgba(0, 0, 0, 0.3)",
                              borderRadius: 2,
                              height: 8,
                              width: "100%",
                            }}
                          />
                        </th>
                        <th style={{ padding: "6px 4px" }}>
                          <div
                            style={{
                              backgroundColor: "rgba(0, 0, 0, 0.3)",
                              borderRadius: 2,
                              height: 8,
                              width: "100%",
                            }}
                          />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderTop: "1px solid rgba(0, 0, 0, 0.3)" }}>
                        <td style={{ padding: "6px 4px" }}>
                          <div
                            style={{
                              backgroundColor: "rgba(0, 0, 0, 0.3)",
                              height: 1,
                              width: "100%",
                            }}
                          />
                        </td>
                        <td style={{ padding: "6px 4px" }}>
                          <div
                            style={{
                              backgroundColor: "rgba(0, 0, 0, 0.3)",
                              height: 1,
                              width: "100%",
                            }}
                          />
                        </td>
                        <td style={{ padding: "6px 4px" }}>
                          <div
                            style={{
                              backgroundColor: "rgba(0, 0, 0, 0.3)",
                              height: 1,
                              width: "100%",
                            }}
                          />
                        </td>
                      </tr>
                      <tr style={{ borderTop: "1px solid rgba(0, 0, 0, 0.3)" }}>
                        <td style={{ padding: "6px 4px" }}>
                          <div
                            style={{
                              backgroundColor: "rgba(0, 0, 0, 0.3)",
                              height: 1,
                              width: "100%",
                            }}
                          />
                        </td>
                        <td style={{ padding: "6px 4px" }}>
                          <div
                            style={{
                              backgroundColor: "rgba(0, 0, 0, 0.3)",
                              height: 1,
                              width: "100%",
                            }}
                          />
                        </td>
                        <td style={{ padding: "6px 4px" }}>
                          <div
                            style={{
                              backgroundColor: "rgba(0, 0, 0, 0.3)",
                              height: 1,
                              width: "100%",
                            }}
                          />
                        </td>
                      </tr>
                      <tr style={{ borderTop: "1px solid rgba(0, 0, 0, 0.3)" }}>
                        <td style={{ padding: "6px 4px" }}>
                          <div
                            style={{
                              backgroundColor: "rgba(0, 0, 0, 0.3)",
                              height: 1,
                              width: "100%",
                            }}
                          />
                        </td>
                        <td style={{ padding: "6px 4px" }}>
                          <div
                            style={{
                              backgroundColor: "rgba(0, 0, 0, 0.3)",
                              height: 1,
                              width: "100%",
                            }}
                          />
                        </td>
                        <td style={{ padding: "6px 4px" }}>
                          <div
                            style={{
                              backgroundColor: "rgba(0, 0, 0, 0.3)",
                              height: 1,
                              width: "100%",
                            }}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Sticky table headers
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/teardrop"
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      border: "2px solid rgba(0, 0, 0, 0.3)",
                      borderRadius: "0px 50% 50%",
                      display: "flex",
                      height: 32,
                      justifyContent: "center",
                      transform: "rotate(45deg)",
                      width: 32,
                    }}
                  />
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Teardrop
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/timeline"
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                  <div style={{ position: "relative", width: "100%" }}>
                    <div
                      style={{
                        borderRight: "1px solid rgb(170, 170, 170)",
                        height: "100%",
                        left: 6,
                        position: "absolute",
                        top: 0,
                      }}
                    />
                    <ul
                      style={{ listStyleType: "none", margin: 0, padding: 0 }}
                    >
                      <li style={{ marginBottom: 8 }}>
                        <div
                          style={{
                            alignItems: "center",
                            display: "flex",
                            marginBottom: 4,
                          }}
                        >
                          <div
                            style={{
                              backgroundColor: "rgb(170, 170, 170)",
                              borderRadius: 9999,
                              height: 12,
                              width: 12,
                            }}
                          />
                          <div style={{ flex: "1 1 0%", marginLeft: 8 }}>
                            <div style={{ width: "80%" }}>
                              <div
                                style={{
                                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                                  borderRadius: 2,
                                  height: 8,
                                  width: "100%",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <div style={{ marginLeft: 20 }}>
                          <div style={{ marginBottom: 4, width: "100%" }}>
                            <div
                              style={{
                                backgroundColor: "rgba(0, 0, 0, 0.3)",
                                height: 1,
                                width: "100%",
                              }}
                            />
                          </div>
                          <div style={{ marginBottom: 4, width: "80%" }}>
                            <div
                              style={{
                                backgroundColor: "rgba(0, 0, 0, 0.3)",
                                height: 1,
                                width: "100%",
                              }}
                            />
                          </div>
                          <div style={{ marginBottom: 4, width: "60%" }}>
                            <div
                              style={{
                                backgroundColor: "rgba(0, 0, 0, 0.3)",
                                height: 1,
                                width: "100%",
                              }}
                            />
                          </div>
                          <div style={{ width: "40%" }}>
                            <div
                              style={{
                                backgroundColor: "rgba(0, 0, 0, 0.3)",
                                height: 1,
                                width: "100%",
                              }}
                            />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          style={{
                            alignItems: "center",
                            display: "flex",
                            marginBottom: 4,
                          }}
                        >
                          <div
                            style={{
                              backgroundColor: "rgb(170, 170, 170)",
                              borderRadius: 9999,
                              height: 12,
                              width: 12,
                            }}
                          />
                          <div style={{ flex: "1 1 0%", marginLeft: 8 }}>
                            <div style={{ width: "60%" }}>
                              <div
                                style={{
                                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                                  borderRadius: 2,
                                  height: 8,
                                  width: "100%",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <div style={{ marginLeft: 20 }}>
                          <div style={{ marginBottom: 4, width: "80%" }}>
                            <div
                              style={{
                                backgroundColor: "rgba(0, 0, 0, 0.3)",
                                height: 1,
                                width: "100%",
                              }}
                            />
                          </div>
                          <div style={{ marginBottom: 4, width: "60%" }}>
                            <div
                              style={{
                                backgroundColor: "rgba(0, 0, 0, 0.3)",
                                height: 1,
                                width: "100%",
                              }}
                            />
                          </div>
                          <div style={{ marginBottom: 4, width: "40%" }}>
                            <div
                              style={{
                                backgroundColor: "rgba(0, 0, 0, 0.3)",
                                height: 1,
                                width: "100%",
                              }}
                            />
                          </div>
                          <div style={{ width: "80%" }}>
                            <div
                              style={{
                                backgroundColor: "rgba(0, 0, 0, 0.3)",
                                height: 1,
                                width: "100%",
                              }}
                            />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Timeline
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/triangle-buttons"
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                    padding: 24,
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      position: "relative",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        borderColor:
                          "transparent transparent rgba(0, 0, 0, 0.3)",
                        borderStyle: "solid",
                        borderWidth: "0px 8px 8px",
                        height: 0,
                        left: "50%",
                        position: "absolute",
                        top: 0,
                        transform: "translate(-50%, -50%)",
                        width: 0,
                      }}
                    />
                    <div
                      style={{
                        borderColor:
                          "transparent transparent transparent rgba(0, 0, 0, 0.3)",
                        borderStyle: "solid",
                        borderWidth: "8px 0px 8px 8px",
                        height: 0,
                        position: "absolute",
                        right: 0,
                        top: "50%",
                        transform: "translate(50%, -50%)",
                        width: 0,
                      }}
                    />
                    <div
                      style={{
                        borderColor:
                          "rgba(0, 0, 0, 0.3) transparent transparent",
                        borderStyle: "solid",
                        borderWidth: "8px 8px 0px",
                        bottom: "-8px",
                        height: 0,
                        left: "50%",
                        position: "absolute",
                        transform: "translate(-50%, -50%)",
                        width: 0,
                      }}
                    />
                    <div
                      style={{
                        borderColor:
                          "transparent rgba(0, 0, 0, 0.3) transparent transparent",
                        borderStyle: "solid",
                        borderWidth: "8px 8px 8px 0px",
                        height: 0,
                        left: 0,
                        position: "absolute",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
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
                Triangle buttons
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/video-background"
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
                  height: 100,
                  width: 100,
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.25)",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "center",
                    padding: 8,
                  }}
                >
                  <div style={{ marginBottom: 4, width: "80%" }}>
                    <div
                      style={{
                        backgroundColor: "rgb(255, 255, 255)",
                        height: 1,
                        width: "100%",
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: 4, width: "60%" }}>
                    <div
                      style={{
                        backgroundColor: "rgb(255, 255, 255)",
                        height: 1,
                        width: "100%",
                      }}
                    />
                  </div>
                  <div style={{ width: "40%" }}>
                    <div
                      style={{
                        backgroundColor: "rgb(255, 255, 255)",
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
                Video background
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/watermark"
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      color: "rgba(0, 0, 0, 0.3)",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      transform: "rotate(-45deg)",
                    }}
                  >
                    Draft
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Watermark
              </h4>
            </a>
          </div>
        </section>
        <section>
          <div
            className="border-t border-gray-400"
            style={{ position: "relative" }}
          >
            <h3
              className="text-2xl"
              style={{
                backgroundColor: "rgb(255, 255, 255)",
                fontWeight: 700,
                left: 32,
                lineHeight: "1.5",
                margin: 0,
                padding: "0px 8px",
                position: "absolute",
                textTransform: "uppercase",
                top: 0,
                transform: "translate(0px, -50%)",
              }}
            >
              Feedback
            </h3>
          </div>
          <div className="xl:border-b xl:border-l xl:border-r xl:border-gray-400 flex flex-wrap p-8">
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      border: "1px solid rgba(0, 0, 0, 0.3)",
                      borderRadius: 4,
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "0px 4px",
                      }}
                    >
                      <div style={{ width: "60%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            borderRadius: 2,
                            height: 2,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ color: "rgba(0, 0, 0, 0.7)" }}>×</div>
                    </div>
                    <div style={{ padding: 4 }}>
                      <div style={{ marginBottom: 4, width: "100%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "80%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 4, width: "60%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            height: 1,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ width: "40%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            borderRadius: 2,
                            height: 8,
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ width: "33.3333%" }}>
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      border: "1px solid rgba(0, 0, 0, 0.3)",
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
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          borderRadius: 2,
                          height: 8,
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ color: "rgba(0, 0, 0, 0.7)" }}>×</div>
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
              href="/patterns/popover-arrow"
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      border: "1px solid rgba(0, 0, 0, 0.3)",
                      borderRadius: 4,
                      height: "60%",
                      position: "relative",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "rgb(255, 255, 255)",
                        borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
                        borderRight: "1px solid rgba(0, 0, 0, 0.3)",
                        height: 10,
                        left: 10,
                        position: "absolute",
                        top: 0,
                        transform: "translate(50%, -50%) rotate(225deg)",
                        width: 10,
                        zIndex: 0,
                      }}
                    />
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Popover arrow
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      backgroundColor: "rgba(0, 0, 0, 0.1)",
                      borderRadius: 9999,
                      height: 16,
                      padding: 4,
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
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
              href="/patterns/radial-progress-bar"
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                        alignItems: "center",
                        border: "8px solid rgba(0, 0, 0, 0.3)",
                        borderRadius: 9999,
                        color: "rgba(0, 0, 0, 0.3)",
                        display: "flex",
                        height: 64,
                        justifyContent: "center",
                        width: 64,
                      }}
                    >
                      33%
                    </div>
                    <div
                      style={{
                        clip: "rect(0px, 64px, 64px, 32px)",
                        height: "100%",
                        left: 0,
                        position: "absolute",
                        top: 0,
                        width: "100%",
                      }}
                    >
                      <div
                        style={{
                          border: "8px solid rgb(0, 68, 158)",
                          borderRadius: 9999,
                          clip: "rect(0px, 32px, 64px, 0px)",
                          height: "100%",
                          position: "absolute",
                          transform: "rotate(120deg)",
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
                Radial progress bar
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/resizable-element"
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                    padding: 16,
                  }}
                >
                  <div
                    style={{
                      border: "1px dashed rgba(0, 0, 0, 0.3)",
                      height: "100%",
                      position: "relative",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        border: "1px solid rgba(0, 0, 0, 0.3)",
                        cursor: "nwse-resize",
                        height: 12,
                        left: 0,
                        position: "absolute",
                        top: 0,
                        transform: "translate(-50%, -50%)",
                        width: 12,
                      }}
                    />
                    <div
                      style={{
                        border: "1px solid rgba(0, 0, 0, 0.3)",
                        cursor: "ns-resize",
                        height: 12,
                        left: "50%",
                        position: "absolute",
                        top: 0,
                        transform: "translate(-50%, -50%)",
                        width: 12,
                      }}
                    />
                    <div
                      style={{
                        border: "1px solid rgba(0, 0, 0, 0.3)",
                        cursor: "nesw-resize",
                        height: 12,
                        position: "absolute",
                        right: 0,
                        top: 0,
                        transform: "translate(50%, -50%)",
                        width: 12,
                      }}
                    />
                    <div
                      style={{
                        border: "1px solid rgba(0, 0, 0, 0.3)",
                        cursor: "ew-resize",
                        height: 12,
                        position: "absolute",
                        right: 0,
                        top: "50%",
                        transform: "translate(50%, -50%)",
                        width: 12,
                      }}
                    />
                    <div
                      style={{
                        border: "1px solid rgba(0, 0, 0, 0.3)",
                        bottom: 0,
                        cursor: "nwse-resize",
                        height: 12,
                        position: "absolute",
                        right: 0,
                        transform: "translate(50%, 50%)",
                        width: 12,
                      }}
                    />
                    <div
                      style={{
                        border: "1px solid rgba(0, 0, 0, 0.3)",
                        bottom: 0,
                        cursor: "ns-resize",
                        height: 12,
                        position: "absolute",
                        right: "50%",
                        transform: "translate(50%, 50%)",
                        width: 12,
                      }}
                    />
                    <div
                      style={{
                        border: "1px solid rgba(0, 0, 0, 0.3)",
                        bottom: 0,
                        cursor: "nesw-resize",
                        height: 12,
                        left: 0,
                        position: "absolute",
                        transform: "translate(-50%, 50%)",
                        width: 12,
                      }}
                    />
                    <div
                      style={{
                        border: "1px solid rgba(0, 0, 0, 0.3)",
                        cursor: "ew-resize",
                        height: 12,
                        left: 0,
                        position: "absolute",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 12,
                      }}
                    />
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Resizable element
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      border: "1px solid rgba(0, 0, 0, 0.3)",
                      borderRadius: 9999,
                      height: 32,
                      position: "relative",
                      width: 32,
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "rgb(255, 65, 54)",
                        borderRadius: 9999,
                        bottom: 0,
                        height: 8,
                        position: "absolute",
                        right: 0,
                        transform: "translate(50%, 50%)",
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
              href="/patterns/tooltip"
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                  <div style={{ position: "relative", width: "60%" }}>
                    <div
                      style={{
                        borderWidth: 4,
                        borderStyle: "solid",
                        borderColor: "rgb(0, 67, 158) transparent transparent",
                        borderImage: "initial",
                        bottom: "100%",
                        height: 0,
                        left: "50%",
                        position: "absolute",
                        transform: "translate(-50%, 4px)",
                        width: 0,
                        zIndex: 10,
                      }}
                    />
                    <div
                      style={{
                        backgroundColor: "rgb(0, 67, 158)",
                        borderRadius: 2,
                        bottom: "100%",
                        height: 24,
                        left: "50%",
                        position: "absolute",
                        transform: "translate(-50%, -4px)",
                        width: 80,
                        zIndex: 10,
                      }}
                    />
                    <div
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                        borderRadius: 2,
                        height: 16,
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
                Tooltip
              </h4>
            </a>
            <a
              className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6"
              href="/patterns/validation-icon"
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
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px",
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
                      border: "1px solid rgba(0, 0, 0, 0.3)",
                      borderRadius: 4,
                      height: 32,
                      position: "relative",
                      width: "100%",
                    }}
                  >
                    <i
                      style={{
                        position: "absolute",
                        right: 4,
                        top: "50%",
                        transform: "translate(0px, -50%)",
                      }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        style={{
                          fill: "none",
                          height: 16,
                          stroke: "rgba(0, 0, 0, 0.5)",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 1,
                          width: 16,
                        }}
                      >
                        <path d="M23.5,0.499l-16.5,23l-6.5-6.5" />
                      </svg>
                    </i>
                  </div>
                </div>
              </div>
              <h4
                className="font-normal"
                style={{ margin: 0, paddingTop: 12, textAlign: "center" }}
              >
                Validation icon
              </h4>
            </a>
          </div>
        </section>
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
                border: "1px solid rgba(0, 0, 0, 0.3)",
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
                backgroundColor: "rgb(0, 68, 158)",
                borderBottomRightRadius: 4,
                borderColor: "transparent",
                borderTopRightRadius: 4,
                color: "rgb(255, 255, 255)",
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
