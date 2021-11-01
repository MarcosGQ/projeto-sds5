import linkedin from 'assets/img/linkedin.png';

const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 bg-dark">
            <div className="container">
                <p className="text-light">App desenvolvido por <a href="https://github.com/MarcosGQ" target="_blank" rel="noreferrer">Marcos R.C.G. Querino</a></p>
                
                <a href="https://www.linkedin.com/in/marcos-goulart-8a79239a"><img src={linkedin} alt='linkedin' height="40" width="40"></img></a>
                <p></p>

                <p className="text-light"><small><strong>Semana Spring React 5</strong><br />
                    Evento promovido pela escola DevSuperior: <a href="https://instagram.com/devsuperior.ig" target="_blank" rel="noreferrer">@devsuperior.ig</a></small></p>
            </div>
        </footer>
    );
}

export default Footer;