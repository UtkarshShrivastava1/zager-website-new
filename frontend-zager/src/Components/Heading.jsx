import React from 'react'

function Heading({value}) {
  return (
    <>
        <h4
          style={{
            fontWeight: "700",
            fontSize: "2.5rem",
            color: "#ffbe00",
            marginBottom: "0px",
          }}
          className="text-3xl font-bold text-center text-[#ffbe00] !mb-4"
        >
          {value}
        </h4>
    </>
  )
}

export default Heading