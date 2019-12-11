import React from 'react'


interface ImageProps {
  index: string;
  zValue: number;
  imageDir: string;
}

export default function Image(props: ImageProps) {
  return (

    <img src={props.imageDir} className='absolute' style={{ zIndex: props.zValue }} id={props.index} alt='sparkly colour paint' />

  )
}
