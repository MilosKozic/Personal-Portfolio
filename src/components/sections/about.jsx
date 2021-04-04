import logo from './img/html5logo.png'
import reactLogo from './img/react.png'
import nodeLogo from './img/nodelogo.png'
const About =()=>{
    return(
        <div className="about-me">
          Hello! My name is <span id="myname">Miloš</span>, and this is my own portfolio site. I'm a Economist and Web Developer located in <a id="city" href="https://en.wikipedia.org/wiki/Belgrade">Belgrade</a> , Serbia.
          <br/><br/>
          Fan of Sci-Fi movies, history and sport..
          <br/><br/>
          If you have any questons for me feel free to contact me...
          <br/><br/>
          Here are a few technologies I've been working with recently:
          <br/><br/>
          <div className="image">
              <img id="htmllogo" src={logo} alt="logo"/>
              <img src={reactLogo} alt="logo"/>
              <img src={nodeLogo} alt="logo"/>
          </div>
          <hr/>
        </div>
    )
}
export default About