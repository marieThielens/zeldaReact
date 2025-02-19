import { Link } from 'react-router';


function ErrorPage() {
    return (
        <div className="text-center mt-5">
            <h1>Ce lien ou cette page n'existe pas.</h1>
            <Link to="/" className="btn btn-primary mt-3">Retour à l'accueil</Link>
        </div>
    );
}

export default ErrorPage;
