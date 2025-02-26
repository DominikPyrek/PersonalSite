import icon from './icon.svg'
import './Hero.css'
import github from '../Nav/Github.svg'

export default function Hero() {
  return (
    <>
      <div className="hero">
        <h1 className="heading">Dominik Pyrek</h1>
        <div className="wheel"><img src={icon} className="iconHero" /><img src={github} className="wheelIcon" /><img src={github} className="wheelIcon" /><img src={github} className="wheelIcon" /></div>
        <h2 className="heading2">Fullstack WebDeveloper</h2>
      </div>
    </>
  )

}
