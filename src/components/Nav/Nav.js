import home from './Home.svg'
import github from './Github.svg'
import mail from './Mail.svg'
import './Nav.css'
import send from './send.svg'

export default function Nav() {
  return (
    <div className="mainContainer">
      <div className="firstContainer">
        <img className="home" src={home} />

        <img className="github" src={github} />
      </div>
      <div className="secondContainer">
        <p>Reach out to me </p>
        <img src={send} />
        <img src={mail} />
      </div>
    </div>
  )
}
