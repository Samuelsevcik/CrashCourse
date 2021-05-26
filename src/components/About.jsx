import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div style={{textAlign: 'center'}}>
      <h4>Version 1.0.0</h4>
      <h5>Created by: Samuel Ševčik</h5>
      <h5>during the intership in &reg; Unicorn</h5>
      <Link to="/">Go Back</Link>
    </div>
  )
}

export default About
