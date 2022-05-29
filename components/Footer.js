import React from 'react'
import HeaderOptions from './HeaderOptions'

function Footer() {
  return (
    <div className="bg-[#2a2a2a] flex py-20 px-10">
        <div className="space-y-2">
            <HeaderOptions name="Help Center" link="/support" />
            <HeaderOptions name="Intern @ TackEdu" link="/intern" />
            <HeaderOptions name="About Us" link="/about" />
        </div>
        <div className="space-y-2 ml-[25px]">
            <HeaderOptions name="Contact" link="/contact" />
            <HeaderOptions name="LinkedIn" link="https://www.linkedin.com/company/tackedu/" />
        </div>
    </div>
  )
}

export default Footer