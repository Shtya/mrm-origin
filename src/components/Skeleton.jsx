import React from 'react'

const Skeleton = () => {
  return (
    <div className="skeleton">
      <div className="container">
        <div className="card">
          <div className="cover-image-skeleton"></div>
          <div className="avatar-skeleton"></div>
          <div className="skeleton-loader"></div>
          <div className="skeleton-loader"></div> 
          <div className="skeleton-loader"></div> 
        </div>
      </div>
    </div>
  )
}

export default Skeleton