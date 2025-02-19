import { Outlet } from "react-router" // pour la nav dans l'url
import { useState } from 'react'

function LoginPage(){

    const [email, setEmail] = useState('');
    const [passwordUser, setPasswordUser] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const submitLoginForm = (e: React.FormEvent) => {
        e.preventDefault();
        if(email === "marie@mail.com" && passwordUser === "azerty"){
            setSuccess("Connexion réussie !");
            setError('');
        }
        else {
            setError("Email ou mot de passe incorrect");
            setSuccess('');
        }
    }

    return(
        <div className="main container border my-auto">
            <h1 className="title text-center mt-4">Sing In</h1>

            <form onSubmit={submitLoginForm}>
                <div className="form-group">
                    {/* mb-2 car c'est 2 colonnes */}
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                       {/* icone avatar */}
                        <div className="input-group-text">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                            </svg>
                        </div>
                      </div>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email"
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email" 
                        />
                    </div>
                <div className="form-group">
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            {/* icone bag */}
                            <div className="input-group-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" fill="currentColor" className="bi bi-bag-fill" viewBox="0 0 16 16">
                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
                                  </svg>
                            </div>
                        </div>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="passwordUser"
                            value={passwordUser} 
                            onChange={(e) => setPasswordUser(e.target.value)}
                            placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={!error}>Se connecter</button>
                </div>
                </div>
            </form>

            {/* Affichage des messages d'erreur ou de succès */}
            {error && <p className="text-danger mt-2">{error}</p>}
            {success && <p className="text-success mt-2">{success}</p>}

            
            <div className="d-flex justify-content-center mt-4 mb-4">
                <a href="" className="styleLink link-primary text-center">Now here ? Click here to join the party
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-emoji-sunglasses" viewBox="0 0 16 16">
                        <path d="M4.968 9.75a.5.5 0 1 0-.866.5A4.498 4.498 0 0 0 8 12.5a4.5 4.5 0 0 0 3.898-2.25.5.5 0 1 0-.866-.5A3.498 3.498 0 0 1 8 11.5a3.498 3.498 0 0 1-3.032-1.75zM7 5.116V5a1 1 0 0 0-1-1H3.28a1 1 0 0 0-.97 1.243l.311 1.242A2 2 0 0 0 4.561 8H5a2 2 0 0 0 1.994-1.839A2.99 2.99 0 0 1 8 6c.393 0 .74.064 1.006.161A2 2 0 0 0 11 8h.438a2 2 0 0 0 1.94-1.515l.311-1.242A1 1 0 0 0 12.72 4H10a1 1 0 0 0-1 1v.116A4.22 4.22 0 0 0 8 5c-.35 0-.69.04-1 .116z"/>
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-1 0A7 7 0 1 0 1 8a7 7 0 0 0 14 0z"/>
                      </svg>
                </a>
            </div>


            <Outlet />
        </div>
    )
}
export default LoginPage;