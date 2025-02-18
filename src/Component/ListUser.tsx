import { Outlet } from "react-router"; // pour la nav dans l'url


// Définition du type pour une leçon
type Lecon = {
    theme: string;
    titre: string;
};

// Définition du type pour un utilisateur
type User = {
    id: number;
    name: string;
    points: number;
    lecon: Lecon;
};

// Liste d'utilisateurs avec un typage strict
const userList: User[] = [
    {
        id: 1,
        name: 'Marie',
        points: 1600,
        lecon: {
            theme: 'web',
            titre: "l'inspecteur"
        }
    },
    {
        id: 2,
        name: 'Lucas',
        points: 1200,
        lecon: {
            theme: 'mobile',
            titre: 'React Native'
        }
    }
];


function ListUser() {

    const listeDesUsers = userList.map(user => <li key={user.id}>{user.name}</li>)
    return(
        <>
            <Outlet /> {/* pour la nav dans l'url */}
            <h1>Meilleurs joueurs</h1>
            <ul>{listeDesUsers}</ul>
        </>
    )
}
export default ListUser;
