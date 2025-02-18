import { useState } from 'react'

function SignUpPage(){
    
    // pour afficher les erreurs
    const [error, setError] = useState({
        userMail: "",
        userName: "",
        userPassword: "",
        confirmUserPassword: ""
    })
    // pour le formulaire
    const [formData, setFormData] = useState({
        userMail: "",
        userName: "",
        userPassword: "",
        confirmUserPassword: ""
    });


    // Validation -----------------------------------------------------

    const validateInput = (name: string, value: string): string => {
    
        switch (name) {   
            case "userMail":
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Veuillez entrer un email valide.";
                break;
            case "userName":
                if (value.length < 3) return "Le nom d'utilisateur doit contenir au moins 3 caractères.";
                if (value.length > 16) return "Le nom d'utilisateur ne doit pas dépasser 16 caractères.";
                break;
            case "userPassword":
                if (value.length < 8) return "Le mot de passe doit contenir au moins 8 caractères.";
                if (!/[A-Z]/.test(value)) return "Le mot de passe doit contenir au moins une majuscule.";
                if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) return "Le mot de passe doit contenir au moins un caractère spécial.";
                // if (value !== formData.confirmUserPassword) return "Les deux mots de passe doivent correspondre.";
                break;
    
            case "confirmUserPassword":
                if (value !== formData.userPassword) return "Les deux mots de passe doivent correspondre.";
                break;
    
            default:
                return "";
        }
        
        return "";
    };
    

    // Ecouter les inputs -------------------
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

        setError((prev) => ({
            ...prev,
            [name]: validateInput(name, value)
        }));

        if (name === "userPassword") {
            setError((prev) => ({
                ...prev,
                confirmUserPassword: validateInput("confirmUserPassword", formData.confirmUserPassword)
            }));
        }
    };


    // Envoi du formulaire --------------------------------------------------
    const submitSignUpForm = (e: React.FormEvent) => {
        e.preventDefault();
        if (!error.userMail && !error.userName && !error.userPassword && !error.confirmUserPassword) {
            console.log("Formulaire envoyé:", formData);
        }
    }

    return(
        <div className="main container border my-auto">
            <h2 className="title text-center mt-4">S'inscrire</h2>
            <hr></hr>
            <form onSubmit={submitSignUpForm}>

            {/*------------- mail---------------- */}
            <div className="input-group mb-2">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">@</div>
                    </div>
                    <input 
                        type="text" 
                        className={`form-control `}
                        id="userMail" 
                        placeholder="Mail" 
                        value={formData.userMail} 
                        onChange={handleChange}
                        name="userMail" />
                </div>
                {error.userMail && <p className="text-danger">{error.userMail}</p>}
            </div>

               {/* ---------------Nom utilisateur ---------------- */}
                <div className="col-auto">
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                            </svg>
                        </div>
                    </div>
                    <input 
                        type="text" 
                        // className={`form-control ${error.userName ? "is-invalid" : "is-valid"}`}
                        className={"form-control"}
                        id="userName" 
                        placeholder="Pseudo" 
                        value={formData.userName} 
                        name="userName" 
                        onChange={handleChange}
                        />
                </div>
                {error.userName && <p className="text-danger">{error.userName}</p>}


                   {/* -------------Mot de passe --------------- */}
                    <div className="col-auto">
                        <div className="col-auto">
                        <div className="input-group mb-2">
                          <div className="input-group-prepend">
                            <div className="input-group-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" fill="currentColor" className="bi bi-bag-fill" viewBox="0 0 16 16">
                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
                                  </svg>
                            </div>
                          </div>
                          <input 
                            type="password" 
                            className={"form-control"}                            
                            id="userPassword" 
                            placeholder="Mot de passe" 
                            value={formData.userPassword}
                            onChange={handleChange} 
                            name="userPassword" 
                            />
                        </div>
                        {error.userPassword && <p className="text-danger">{error.userPassword}</p>}
                    </div>

                    {/* --------Confirmation mot de passe ------------ */}
                    <div className="col-auto">
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
                            className={"form-control"}
                            id="password_confirm" 
                            placeholder="Confirmer le mot de passe" 
                            value={formData.confirmUserPassword} 
                            onChange={handleChange} 
                            name="confirmUserPassword" 
                            />
                        </div>
                        {error.confirmUserPassword && <p className="text-danger">{error.confirmUserPassword}</p>}

                    </div>
                </div>
                </div>
                <button type="submit" value="Sign Up" className="btn btn-primary col-12 mt-2" 
                disabled={        !formData.userMail || 
                    !formData.userName || 
                    !formData.userPassword || 
                    !formData.confirmUserPassword || 
                    !!error.userMail || 
                    !!error.userName || 
                    !!error.userPassword || 
                    !!error.confirmUserPassword }>Valider</button>
                <a href="" role="button" className="btn btn-outline-danger col-12 mt-2">Annuler</a>
            </form>
        </div>
    )
}
export default SignUpPage;