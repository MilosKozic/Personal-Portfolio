import Projects from './sections/projects'
import Form from './sections/form.jsx'
import About from './sections/about.jsx'
const Main = () => {
    return (
        <main>
            <section id="about">
              <About/>
            </section>
            <section  id="project">
                <Projects />
            </section>
            <section id="contact">
                <Form />
            </section>
        </main>
    )
}

export default Main