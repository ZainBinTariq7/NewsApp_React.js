import React from 'react';

const Newsitem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className='my-3'>
        <div className="card">
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'
          }}>
            <span class="badge rounded-pill bg-danger">
              {source}
            </span>
          </div>
          <img
            src={!imageUrl ? "data:image/png;base64,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" : imageUrl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className='card-text'><small className='text-muted'>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noopener noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default Newsitem;