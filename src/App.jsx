import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import { IoMdShare } from "react-icons/io";
import {
  IoPersonCircleOutline,
  IoInformationCircleOutline,
  IoCheckmarkCircle,
  IoChevronDown,
  IoChevronBack,
  IoChevronForward,
  IoCheckmark,
  IoPerson,
} from "react-icons/io5";
import { MdEdit, MdOutlineMenuOpen } from "react-icons/md";
import { FaOrcid } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

import PublicationDetail from "./PublicationDetail";
import publicationDetails from "./publicationDetails";

const summary = [
  [10, "Total documents"],
  [10, "Publications indexed in Web of Science"],
  [6, "Web of Science Core Collection publications"],
  [0, "Preprints"],
  [0, "Dissertations or Theses"],
  [0, "Non-indexed publications"],
  [0, "Verified peer reviews"],
  [0, "Verified editor records"],
  [0, "Awarded grants"],
];

const metrics = [
  [5, "H-Index"],
  [6, "Publications"],
  [53, "Sum of Times Cited"],
  [76, "Citing Articles"],
  [53, "Sum of Times Cited", "without self-citations"],
  [53, "Citing Articles", "without self-citations"],
  [0, "Sum of Times Cited by Patents"],
  [0, "Citing Patents"],
  [0, "Sum of Times Cited by Policy"],
  [0, "Citing Policy Documents"],
];

const publications = [
  {
    type: "Article",
    title:
      "Investigation of crop evapotranspiration and irrigation water requirement in the lower Amu Darya River Basin, Central Asia",
    authors: "Khaydar, D; Chen, X; (...); Gulkaiyr, O",
    source: "Jan 2021 | JOURNAL OF ARID LAND 13(1), pp.23-39",
    abstract:
      "High water consumption and inefficient irrigation management in the agriculture sector of the middle and lower reaches of the Amu Darya River Basin (ADRB) have significantly influenced the gradual shrinking of the Aral Sea and its ecosystem. In this study, we investigated the crop water",
    citations: 52,
    references: 0,
  },
  {
    type: "Proceedings Paper",
    title: "Problems of water resource management in Central Asia",
    authors: "Makhmudov, IE",
    source: "ASIA, pp.11-28",
    abstract:
      "The article analyses the conditions of formation and use of water resources of the Aral Sea Basin transboundary rivers. A modern water resource management system is described. The problems related to water resource management in new conditions of development of the",
    citations: 8,
    references: 0,
  },
];

const coauthors = [
  ["54", "Khaydar, Main J."],
  ["12", "Chen, Xi"],
  ["8", "Gulkaiyr, Orozbekova"],
];

function App() {
  const [panelOpen, setPanelOpen] = useState(false);
  const [tab, setTab] = useState("documents");
  const [collection, setCollection] = useState("core");
  const [selectedPub, setSelectedPub] = useState(null);

  const openPub = (e, i) => {
    e.preventDefault();
    setSelectedPub(i);
    window.scrollTo({ top: 0 });
  };

  const toggleLeftPanel = () => setPanelOpen((prev) => !prev);

  return (
    <div className="box">
      {/* ===== Yuqori qora panel ===== */}
      <div className="topbar">
        <span className="topbar-logo">Clarivate</span>
        <div className="topbar-right">
          <span>
            English <IoChevronDown />
          </span>
          <span>Products</span>
        </div>
      </div>

      {/* ===== Header ===== */}
      <div className="header">
        <h1 className="logo">
          Web of Science<sup>™</sup>
        </h1>

        <div className="header-item">
          <div className="header-tab muted">
            <span>Research Assistant</span>
            <span className="icon icon-sm">
              <IoInformationCircleOutline />
            </span>
          </div>
        </div>

        <div className="header-profil">
          <span className="sign-in">
            Sign In <IoChevronDown />
          </span>
          <button className="btn-register">Register</button>
        </div>
      </div>

      {/* ===== Banner ===== */}
      <div className="free-banner">
        <span className="banner-text">
          <IoPerson /> You are accessing a free view of the Web of Science
        </span>
        <a href="#!" className="banner-link">
          Learn More
        </a>
      </div>

      {/* ===== Panel ===== */}
      <div className={`panel ${panelOpen ? "active" : ""}`}>
        <aside className="left-panel">
          {panelOpen ? (
            <div className="left-panel-open">
              <div className="left-panel-top">
                <h5>My Web of Science</h5>
                <button className="collapse-btn" onClick={toggleLeftPanel}>
                  <MdOutlineMenuOpen />
                </button>
              </div>
              <div className="left-panel-row">
                <span className="icon icon-md">
                  <IoPersonCircleOutline />
                </span>
                <span className="grow">Profile</span>
                <a href="#!">Create</a>
              </div>
            </div>
          ) : (
            <>
              <div className="menu-btn" onClick={toggleLeftPanel}>
                <span className="icon icon-md">
                  <MdOutlineMenuOpen />
                </span>
                <small>MENU</small>
              </div>
              <span className="icon icon-md">
                <IoPersonCircleOutline />
              </span>
            </>
          )}
        </aside>

        <main className="right-panel">
          {selectedPub !== null ? (
            <PublicationDetail
              data={publicationDetails[selectedPub]}
              onBack={() => setSelectedPub(null)}
            />
          ) : (
            <>
              <div className="breadcrumb-line">
                <a href="#!">Author Profile</a>
                <span>Author Profile</span>
              </div>

              <div className="right-panel-actions">
                <button className="action-btn">
                  <IoMdShare className="action-icon" />
                  <span>Share</span>
                </button>
                <button className="action-btn">
                  <MdEdit className="action-icon" />
                  <span>
                    Submit a<br /> correction
                  </span>
                </button>
              </div>

              <div className="right-panel-item">
                {/* ===== Chap ustun ===== */}
                <div className="item-left">
                  <section className="card-box profile-card">
                    <div className="profile-top">
                      <div className="avatar">IM</div>
                      <div>
                        <h2 className="name">
                          Ilkhomjon Makhmudov
                          <IoCheckmarkCircle className="verified" />
                        </h2>
                        <p className="org">
                          Academy of Sciences of Uzbekistan - Uzbekistan
                        </p>
                      </div>
                    </div>

                    <hr />

                    <div className="info-row">
                      <div className="info-label">Identifiers</div>
                      <div className="info-value">
                        <p>Web of Science ResearcherID: JNT-3605-2023</p>
                        <a href="#!" className="orcid">
                          <FaOrcid /> https://orcid.org/0000-0002-6026-5292
                        </a>
                      </div>
                    </div>

                    <div className="info-row">
                      <div className="info-label">Published names</div>
                      <div className="info-value chips">
                        <span className="chip">Ilkhom, Makhmudov</span>
                        <span className="chip">Makhmudov, Ilhomjon E.</span>
                      </div>
                    </div>

                    <div className="info-row">
                      <div className="info-label">Organizations</div>
                      <div className="info-value">
                        <p>Minist Water Resources Republ Uzbekistan</p>
                        <p>Academy of Sciences of Uzbekistan</p>
                      </div>
                    </div>

                    <div className="info-row">
                      <div className="info-label">Subject Categories</div>
                      <div className="info-value">
                        Environmental Sciences &amp; Ecology; Social Issues;
                        Water Resources
                      </div>
                    </div>
                  </section>

                  <section className="card-box docs-card">
                    <div className="tabs">
                      <button
                        className={tab === "documents" ? "tab on" : "tab"}
                        onClick={() => setTab("documents")}
                      >
                        Documents
                      </button>
                      <button
                        className={tab === "review" ? "tab on" : "tab"}
                        onClick={() => setTab("review")}
                      >
                        Peer Review
                      </button>
                    </div>

                    {tab === "documents" ? (
                      <>
                        <h3 className="docs-title">
                          Viewing up to 10 publications
                        </h3>
                        <p className="docs-sub">
                          <a href="#!">Sign In</a> or <a href="#!">Register</a>{" "}
                          to view more
                        </p>

                        <div className="pills">
                          <button className="pill disabled">
                            All Indexed Documents (10)
                          </button>
                          <button
                            className={`pill ${collection === "core" ? "selected" : ""}`}
                            onClick={() => setCollection("core")}
                          >
                            {collection === "core" && <IoCheckmark />} Web of
                            Science Core Collection (2)
                          </button>
                          <button className="pill disabled">
                            Other Collections (8)
                          </button>
                        </div>

                        <hr />

                        <div className="toolbar">
                          <div className="select-box disabled">
                            <label>Author Position</label>
                            <span>
                              All Publications <IoChevronDown />
                            </span>
                          </div>
                          <div className="select-box disabled">
                            <label>Filters</label>
                            <span>
                              Select Filters <IoChevronDown />
                            </span>
                          </div>

                          <div className="toolbar-right">
                            <div className="select-box active-select">
                              <label>Sort by</label>
                              <span>
                                Date: newest first <IoChevronDown />
                              </span>
                            </div>
                            <div className="pager">
                              <IoChevronBack />
                              <span className="page-input">1</span>
                              <span>of 1</span>
                              <IoChevronForward />
                            </div>
                          </div>
                        </div>

                        <hr />

                        {publications.map((p, i) => (
                          <article className="pub" key={i}>
                            <div className="pub-num">{i + 1}</div>
                            <div className="pub-body">
                              <span className="pub-type">{p.type}</span>
                              <a
                                href="#!"
                                className="pub-title"
                                onClick={(e) => openPub(e, i)}
                              >
                                {p.title}
                              </a>
                              <p className="pub-authors">{p.authors}</p>
                              <p className="pub-source">{p.source}</p>
                              <p className="pub-abstract">{p.abstract}</p>
                              <a href="#!" className="pub-link">
                                Full Text at Publisher
                              </a>
                            </div>
                            <div className="pub-stats">
                              <div>
                                <strong>{p.citations}</strong>
                                <span>Citations</span>
                              </div>
                              <div>
                                <strong>{p.references}</strong>
                                <span>References</span>
                              </div>
                            </div>
                          </article>
                        ))}

                        <div className="docs-footer">
                          <div className="page-size">
                            Page size <b>10</b> <IoChevronDown />
                          </div>
                          <div className="pager">
                            <IoChevronBack />
                            <span className="page-input">1</span>
                            <span>of 1</span>
                            <IoChevronForward />
                          </div>
                        </div>
                      </>
                    ) : (
                      <p className="empty">Peer review ma'lumotlari yo'q</p>
                    )}
                  </section>
                </div>

                {/* ===== O'ng ustun ===== */}
                <div className="item-right">
                  <section className="card-box">
                    <div className="metrics-head">
                      <h4>Metrics</h4>
                      <button className="btn-outline">
                        Open metric dashboard
                      </button>
                    </div>
                    <hr />

                    <h5 className="sub-title">Profile summary</h5>
                    <ul className="summary">
                      {summary.map(([n, label]) => (
                        <li key={label}>
                          <b>{n}</b>
                          <span>{label}</span>
                        </li>
                      ))}
                    </ul>

                    <hr />

                    <h5 className="sub-title">
                      Web of Science Core Collection metrics
                    </h5>
                    <div className="metric-grid">
                      {metrics.map(([n, label, note], i) => (
                        <div className="metric" key={i}>
                          <div className="metric-num">{n}</div>
                          <div className="metric-label">{label}</div>
                          {note && <small>{note}</small>}
                        </div>
                      ))}
                    </div>

                    <div className="center">
                      <button className="btn-outline disabled">
                        View citation report
                      </button>
                    </div>
                  </section>

                  <section className="card-box">
                    <h5 className="sub-title">Author Position</h5>
                    <div className="premium">
                      <div className="premium-fake">
                        <span>First</span>
                        <span>Last</span>
                        <span>Corresp.</span>
                      </div>
                      <div className="premium-note">
                        This is a premium feature. <a href="#!">Learn more</a>{" "}
                        about how to access all of Web of Science.
                      </div>
                    </div>
                  </section>

                  <section className="card-box">
                    <h5 className="sub-title">You might be interested in...</h5>
                    <div className="premium">
                      <div className="premium-fake blur">
                        <p>Heidarkhani, Shapour</p>
                        <p>Razi University</p>
                        <p>Tang, Xi</p>
                      </div>
                      <div className="premium-note">
                        This is a premium feature. <a href="#!">Learn more</a>{" "}
                        about how to access all of Web of Science.
                      </div>
                    </div>
                  </section>

                  <section className="card-box">
                    <h5 className="sub-title">Co-authors</h5>
                    <ul className="coauthors">
                      {coauthors.map(([n, name]) => (
                        <li key={name}>
                          <span className="co-count">{n}</span>
                          <a href="#!">{name}</a>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>
              </div>
            </>
          )}
        </main>
      </div>
      {/* ===== Footer ===== */}
      <footer className="footer">
        <div className="footer-brand">
          <div className="footer-logo">
            <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
              <path
                d="M12 2 3 7v10l9 5 9-5v-4h-5v2l-4 2-4-2V9l4-2 4 2v2h5V7z"
                fill="currentColor"
              />
            </svg>
            <span>Clarivate</span>
          </div>
          <small>© 2026 Clarivate. All rights reserved.</small>
        </div>

        <div className="footer-links">
          <ul>
            <li>
              <a href="#!">Legal Center</a>
            </li>
            <li>
              <a href="#!">Privacy Statement</a>
            </li>
            <li>
              <a href="#!">Copyright Notice</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#!">Training Portal</a>
            </li>
            <li>
              <a href="#!">Product Support</a>
            </li>
            <li>
              <a href="#!">Newsletter</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#!">Cookie Policy</a>
            </li>
            <li>
              <a href="#!">Manage cookie preferences</a>
            </li>
            <li>
              <a href="#!">Data Correction</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#!">Accessibility</a>
            </li>
            <li>
              <a href="#!">Help</a>
            </li>
            <li>
              <a href="#!">Terms of Use</a>
            </li>
          </ul>
        </div>

        <div className="footer-follow">
          <p>Follow Us</p>
          <div className="socials">
            <a href="#!" className="social" aria-label="X">
              <FaXTwitter />
            </a>
            <a href="#!" className="social" aria-label="Facebook">
              <FaFacebookF />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
