import Heading from "../Heading/Heading.js"
import "./Skills_Line.css"
export default function Skills_Line() {
  return (
    <>
      <Heading key={0} tekst={"Front-End"} />
      < hr />
      <div className="SkillsComp">
        <div className="Orb"></div>
        <div className='Orb'></div>
        <div className='Orb'></div>
        <div className='Orb'></div>
        <div className='Orb'></div>
      </div>
      <Heading key={1} tekst={"Back-End"} />
      <hr />
      <div className="SkillsComp">
        <div className="Orb"></div>
        <div className='Orb'></div>
        <div className='Orb'></div>
        <div className='Orb'></div>
        <div className='Orb'></div>
      </div>

    </>
  )
}
