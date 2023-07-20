import { Accordion } from "react-bootstrap";
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.div className="container-lg p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <div className="header display-5">Cuba</div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="accord">
                            <p>
                                I was born in Cienfuegos, Cuba. My journey as an artist started around 20 years ago. As an artist, I am constantly learning from everything and anyone around me. It could be other artists, my beloved teachers, nature, or people walking through the streets. My main source of inspiration is children's drawings on the sidewalk. I connect with people's stories and allow my palette to capture such a rich world. I prefer using raw colors and lines for this purpose. It is not my intention to conform to the general concept of standard beauty that is easily noticeable.
                            </p>
                            <img className="derecha" width='400px' src="./images/about/amet-wall.png" alt="Amet wall" />
                            <p>
                                In Cuba, I have participated in solo and collective exhibitions. I am also proud of being a co-founder of the experimental art project <a href='https://www.facebook.com/profile.php?id=100009424089335' target="_blank" rel="noreferrer">"Poco Bonito"</a> with <a href='https://www.linkedin.com/in/carlos-y-infante-vera-a2b1aa14a/' target="_blank" rel="noreferrer">"Carlos Infante"</a> and other artists. We became a family, creating a creative space to shape our most romantic and challenging ideas. It was not just an exclusive space for art but also a way to connect with the average citizen, neighbors of all ages, especially children and teenagers. They reached out to us, witnessing how we prepared our canvases and colors. We taught people a non-traditional concept of art, beyond academic aesthetics: freedom of creativity. Freedom is a problematic word in the Cuban context due to the repression of free speech. Unfortunately, in 2018, we were forced to shut down this project when the owner of the location didn't want to continue renting the place. Someone told us that it was under pressure from the political police.
                            </p>
                            <img className="izquierda" width='400px' src="./images/about/amet_kbola.jpg" alt="Amet KBola" />
                            <p>
                                We used a share of our income to host hip-hop concerts. We believe in rap as a means to denounce the political and social issues caused by the totalitarian regime on the island. Our paintings were a way to rap. All of this was done under the umbrella of the <a href='https://www.facebook.com/profile.php?id=100063491860763' target="_blank" rel="noreferrer">K’Bolá project</a>., a grassroots initiative. It was one of the few spaces where artists' critical lyrics were allowed to be performed. People from all around the country came to our concerts. We also sponsored concerts of alternative Cuban music, primarily hip-hop and reggae. We always combined art with alternative Cuban and international music. It was our way of embracing differences and being critical of racism or any other type of discrimination. Additionally, we used interactive techniques to bring our art to the "average Cuban." We achieved this through action paintings and by choosing unorthodox locations for our exhibitions. The artists who were part of the PB Project were selected based on their ability to work as a team and their explicit attitude towards activism. After our gallery was canceled, we could not afford to continue organizing concerts as the gallery was our source of funding for such events."
                            </p>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <div className="header display-5">The Netherlands</div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="accord">
                            <img className="derecha" width='400px' src="./images/about/amet-kargadoor.jpg" alt="Amet Kargadoor" />
                            <p>I live in Holland since 2018. Integrating into a different society requires persistence and creativity. Therefore my stories and my style keep on changing. As an artist I keep on developing and I never stop learning. I combine the stories from others, scenes that I see on the street and add those to my own live experience. From there I compose my palette. I don’t offer a general concept of beauty nor an accessible style. My work is characterized by raw colors and lines that resemble brick walls with rough surfaces and street art.</p>
                            <p>I have participated in ....</p>
                            <p>Today I’m an extra curricular art teacher at the International School of Amsterdam. In my classes my goal is not to teach in an academic way, but to inspire my students to be free in their expression, similar to the spirit that our gallery in Cuba used to have. </p>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <div className="header display-5">Awards</div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="accord">
                            <ul>
                                <li>
                                    2009 – Salon de la ciudad ,La habitacion preferidad de la
                                    realidad</li>
                                <li> 2012 – Provincial Cinema Festival “Sur Imagen”, piece:
                                    “Trance”.</li>
                                <li> 2011 – Salón “5 de Septiembre”, piece: “Kaos” (cólera),
                                    premio videoarte.
                                    Visual arts festival in central Cuba
                                    By Jorge Domínguez Morado CUBARTE PERFORMING ARTS</li>
                                <li> 2013 – Salón “5 de Septiembre”, piece: “Me sentaré a
                                    meditar” (performance).The Awarding Jury -composed by Nelson Domínguez, Nelson Herrera, Yadira
                                    Góngora, Virginia Alberdi, José A. Vincench and Andrés Domínguez-</li>

                                <li> 11.11.2015
                                    With Acto de violencia (Act of violence), a happening where artist
                                    Amet Laza Muñoz combines elements of theater and visual arts,
                                    Visuarte 2015.
                                    project top_oS 10th biennal of art havana.
                                </li>
                            </ul>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </motion.div>
    );
}

export default About;