import "./xpcard.css";

const defaultSummary = "Summary";

const defaultContent = {
  job_title: "",
  job_company: "",
  job_contractType: "",
  job_period: "",
  job_localisation: "",
  job_shortDesc: "",
  job_competences: [""],
};

export default function XPCard({
  summary = defaultSummary,
  content = defaultContent,
}) {
  return (
    <div className="xpcard_container">
      <div className="xpcard_head">
        <h3>{`${content.job_title} | ${content.job_company}`}</h3>
        <p>{`${content.job_period} | ${content.job_contractType}`}</p>
        <p>{`${content.job_localisation}`}</p>
      </div>
      <div className="xpcard_body">
        {/* <details>{`${content.job_shortDesc}`}</details> */}
        <details>
        <summary>{summary}</summary>
          <ul>
            {content.job_shortDesc.map((desc, index) => {
              return <li key={`job_shortDesc_${content.job_company}_${index}`}>{desc}</li>;
            })}
          </ul>
        </details>
      </div>
    </div>
  );
}
