import React from 'react'

function Heading({value}) {
  return (
    <>
    <div className="flex justify-center items-center">

        <h4
          style={{
            fontWeight: "700",
            fontSize: "2.5rem",
            color: "#ffbe00",
            marginBottom: "0px",
          }}
          className="text-3xl font-bold text-center text-[#ffbe00] !mb-4 outline-2 outline-[#ffbe00]  md:text-4xl lg:text-5xl rounded-2xl py-2 px-4"
        >
          {value}
        </h4>
    </div>
    </>
  )
}

export default Heading