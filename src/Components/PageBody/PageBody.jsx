import './page_body.css';

export default function PageBody({ title=null, children }) {
    return(
        <div className="page_body_container">
            {title ? <h1>{title}</h1> : null}
            { children }
        </div>
    )
}