import React from 'react'

const Image = ({url,alt,width,height}) => {
  return (
   <img width={width} height={height} src={url} alt={alt} />
  )
}

export default Image