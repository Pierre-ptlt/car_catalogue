import React from 'react'
import Image from 'next/image'

interface CustomButtonProps {
    text: string
    click?: () => void
}

const CustomButton: React.FC<CustomButtonProps> = (props) => {
  return (
    <button
    disabled={false}
    type={"button"}
    className="
        flex
        items-center
        justify-center
        px-8
        py-3
        border
        border-transparent
        text-base
        font-medium
        rounded-md
        text-white
        bg-blue-600
        hover:bg-blue-800
        md:py-4
        md:text-lg
        md:px-10
    "
    onClick={() => props.click && props.click()}
    >
      <span className="flex-1">
        {props.text}
      </span>
    </button>
  )
}

export default CustomButton
