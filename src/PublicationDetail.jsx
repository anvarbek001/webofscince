import { useState } from "react";
import {
  IoAdd,
  IoRemove,
  IoChevronDown,
  IoChevronForward,
} from "react-icons/io5";

function Row({ label, children, link }) {
  return (
    <div className="d-row">
      <div className="d-label">
        <b>{label}</b>
        {link && (
          <a href="#!" className="d-author-q">
            {link}
          </a>
        )}
      </div>
      <div className="d-value">{children}</div>
    </div>
  );
}

function People({ list }) {
  return (
    <p className="people">
      {list.map(([short, full], i) => (
        <span key={i}>
          <span className="au-short">{short}</span>{" "}
          {short !== full && (
            <>
              (<span className="au-full">{full}</span>)
            </>
          )}{" "}
          {i < list.length - 1 && "; "}
        </span>
      ))}
    </p>
  );
}

export default function PublicationDetail({ data, onBack }) {
  const [showMore, setShowMore] = useState(false);
  const d = data;
  const c = d.classification;

  return (
    <>
      <div className="breadcrumb-line detail-crumb">
        <a
          href="#!"
          onClick={(e) => {
            e.preventDefault();
            onBack();
          }}
        >
          Author Profile
        </a>
        <IoChevronForward />
        <span className="crumb-title">{d.title}</span>
      </div>

      <div className="detail-grid">
        {/* ===== Left: main card ===== */}
        <section className="card-box detail-main">
          <div className="detail-body">
            <h1 className="detail-title">{d.title}</h1>
            <hr />

            <Row label="Author" link="Are you the author?">
              <People list={d.authors} />
            </Row>

            {d.editors && (
              <Row label="Edited by" link="Are you the author?">
                <People list={d.editors} />
              </Row>
            )}

            <div className="d-ids">
              <a href="#!">Show Web of Science ResearcherID and ORCID</a>
              <small>(provided by Clarivate)</small>
            </div>

            <Row label="Source">
              <p>{d.source}</p>
              <div className="meta-line">
                {d.sourceMeta.map((m) => (
                  <span key={m}>{m}</span>
                ))}
              </div>
            </Row>

            {d.series && <Row label="Book Series">{d.series}</Row>}
            <Row label="Published">{d.published}</Row>
            {d.earlyAccess && <Row label="Early Access">{d.earlyAccess}</Row>}
            <Row label="Indexed">{d.indexed}</Row>
            <Row label="Document Type">{d.docType}</Row>

            {d.conference && (
              <Row label="Conference">
                <p className="small-line">
                  <b>Conference: </b>
                  <a href="#!">{d.conference.name}</a>
                </p>
                <p className="small-line">
                  <b>Location: </b>
                  {d.conference.location}
                </p>
                <p className="small-line">
                  <b>Date: </b>
                  {d.conference.date}
                </p>
                <p className="small-line">
                  <b>Sponsor: </b>
                  {d.conference.sponsor}
                </p>
              </Row>
            )}

            <Row label="Abstract">
              <p className="abstract">{d.abstract}</p>
            </Row>

            <Row label="Keywords">
              <p className="small-line">
                <b>Author Keywords: </b>
                {d.keywords.author}
              </p>
              {d.keywords.plus && (
                <p className="small-line">
                  <b>Keywords Plus: </b>
                  {d.keywords.plus}
                </p>
              )}
            </Row>

            <Row label="Addresses">
              <ul className="addr">
                {d.addresses.map((a) => (
                  <li key={a.n}>
                    <span className={`caret ${a.more ? "" : "hidden"}`}>
                      <IoChevronDown />
                    </span>
                    <sup>{a.n}</sup> {a.text}
                  </li>
                ))}
              </ul>
            </Row>

            <Row label="Categories / Classification">
              <p>Research Areas: {c.researchAreas}</p>
              <div className="topics">
                <span className="topics-label">Citation Topics :</span>
                {c.topics.map((t, i) => (
                  <span className="topic" key={t}>
                    {i > 0 && <IoChevronForward className="topic-arrow" />}
                    {t}
                  </span>
                ))}
              </div>
              <p className="small-line">
                Sustainable Development Goals: {c.sdg}
              </p>
            </Row>

            <Row label="Web of Science Categories">
              <span className="small-line">{c.wosCategories}</span>
            </Row>

            {showMore && (
              <div className="extra-rows">
                {d.extra.map(([k, v]) => (
                  <Row key={k} label={k}>
                    {v}
                  </Row>
                ))}
              </div>
            )}
          </div>

          <button className="more-bar" onClick={() => setShowMore((s) => !s)}>
            {showMore ? <IoRemove /> : <IoAdd />}
            {showMore ? "Show fewer data fields" : "Show more data fields"}
          </button>
        </section>

        {/* ===== Right: side cards ===== */}
        <div className="detail-side">
          <section className="card-box">
            <h3 className="side-title">Citation Network</h3>
            <hr />
            <p className="side-sub">In Web of Science Core Collection</p>
            <div className="side-num">{d.citations}</div>
            <div className="side-label">Citations</div>
            <div className="side-num small">{d.refs}</div>
            <div className="side-label">Cited References</div>
          </section>

          <section className="card-box">
            <h3 className="side-title">Use in Web of Science</h3>
            <hr />
            <div className="usage">
              <div>
                <div className="side-num">{d.usage.last180}</div>
                <div className="side-label">Last 180 Days</div>
              </div>
              <div>
                <div className="side-num">{d.usage.since2013}</div>
                <div className="side-label">Since 2013</div>
              </div>
            </div>
          </section>

          <section className="card-box">
            <h3 className="side-title">This record is from:</h3>
            <h5 className="side-collection">{d.collection}</h5>
            <ul className="side-list">
              {d.indexes.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <hr />
            <h5 className="side-collection">Suggest a correction</h5>
            <p className="side-text">
              If you would like to improve the quality of the data in this
              record, please
            </p>
            <a href="#!" className="side-link">
              Suggest a correction
            </a>
          </section>
        </div>
      </div>
    </>
  );
}
