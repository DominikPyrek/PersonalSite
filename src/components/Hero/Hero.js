import icon from './icon.svg'
import './Hero.css'

export default function Hero() {
  return (
    <div className="hero">
      <h1>Dominik Pyrek</h1>
      <img src={icon} className="iconHero" />
      <h2>Fullstack WebDeveloper</h2>
    </div>
  )

}
