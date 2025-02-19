import { Outlet } from "react-router";
import '../styles/App.css'

function UserPage() {

  const badges = {
    htmlB: "html.png",
    cssB: "css.png"
  }

  const user = {
    id: 1,
    name: "Marie",
    level: 1,
    avatar: "mafia.jpg", 
    challenges: [
      { 
        theme: "web",  
        titre: "Utiliser l'inspecteur", 
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-filetype-html" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zm-9.736 7.35v3.999h-.791v-1.714H1.79v1.714H1V11.85h.791v1.626h1.682V11.85h.79Zm2.251.662v3.337h-.794v-3.337H4.588v-.662h3.064v.662zm2.176 3.337v-2.66h.038l.952 2.159h.516l.946-2.16h.038v2.661h.715V11.85h-.8l-1.14 2.596H9.93L8.79 11.85h-.805v3.999zm4.71-.674h1.696v.674H12.61V11.85h.79v3.325Z"/>
              </svg>,
        points: {
          nbDeath: 3, // -150
          boxFind: 4, // 200
          enemy: 65, // 800
          work: 150,
          total: 1000 
        }
      },
      { 
        theme: "web",  
        titre: "css", 
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-filetype-css" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM3.397 14.841a1.13 1.13 0 0 0 .401.823q.195.162.478.252.284.091.665.091.507 0 .859-.158.354-.158.539-.44.187-.284.187-.656 0-.336-.134-.56a1 1 0 0 0-.375-.357 2 2 0 0 0-.566-.21l-.621-.144a1 1 0 0 1-.404-.176.37.37 0 0 1-.144-.299q0-.234.185-.384.188-.152.512-.152.214 0 .37.068a.6.6 0 0 1 .246.181.56.56 0 0 1 .12.258h.75a1.1 1.1 0 0 0-.2-.566 1.2 1.2 0 0 0-.5-.41 1.8 1.8 0 0 0-.78-.152q-.439 0-.776.15-.337.149-.527.421-.19.273-.19.639 0 .302.122.524.124.223.352.367.228.143.539.213l.618.144q.31.073.463.193a.39.39 0 0 1 .152.326.5.5 0 0 1-.085.29.56.56 0 0 1-.255.193q-.167.07-.413.07-.175 0-.32-.04a.8.8 0 0 1-.248-.115.58.58 0 0 1-.255-.384zM.806 13.693q0-.373.102-.633a.87.87 0 0 1 .302-.399.8.8 0 0 1 .475-.137q.225 0 .398.097a.7.7 0 0 1 .272.26.85.85 0 0 1 .12.381h.765v-.072a1.33 1.33 0 0 0-.466-.964 1.4 1.4 0 0 0-.489-.272 1.8 1.8 0 0 0-.606-.097q-.534 0-.911.223-.375.222-.572.632-.195.41-.196.979v.498q0 .568.193.976.197.407.572.626.375.217.914.217.439 0 .785-.164t.55-.454a1.27 1.27 0 0 0 .226-.674v-.076h-.764a.8.8 0 0 1-.118.363.7.7 0 0 1-.272.25.9.9 0 0 1-.401.087.85.85 0 0 1-.478-.132.83.83 0 0 1-.299-.392 1.7 1.7 0 0 1-.102-.627zM6.78 15.29a1.2 1.2 0 0 1-.111-.449h.764a.58.58 0 0 0 .255.384q.106.073.25.114.142.041.319.041.245 0 .413-.07a.56.56 0 0 0 .255-.193.5.5 0 0 0 .085-.29.39.39 0 0 0-.153-.326q-.152-.12-.463-.193l-.618-.143a1.7 1.7 0 0 1-.539-.214 1 1 0 0 1-.351-.367 1.1 1.1 0 0 1-.123-.524q0-.366.19-.639.19-.272.527-.422t.777-.149q.456 0 .779.152.326.153.5.41.18.255.2.566h-.75a.56.56 0 0 0-.12-.258.6.6 0 0 0-.246-.181.9.9 0 0 0-.37-.068q-.324 0-.512.152a.47.47 0 0 0-.184.384q0 .18.143.3a1 1 0 0 0 .404.175l.621.143q.326.075.566.211t.375.358.135.56q0 .37-.188.656a1.2 1.2 0 0 1-.539.439q-.351.158-.858.158-.381 0-.665-.09a1.4 1.4 0 0 1-.478-.252 1.1 1.1 0 0 1-.29-.375"/>
              </svg>,
        points: {
          nbDeath: 10, // -500
          boxFind: 0,
          enemy: 35, // 230
          work: 270,
          total: 0
        }
      }
    ],
  };

  const avatarPath = `/avatars/${user.avatar}`;
  const htmlBadge = `/badges/${badges.htmlB}`;
  const cssBadge = `/badges/${badges.cssB}`;


  return (
    <div className="container py-5">

      <div className="container">
        <div className="card d-flex flex-row align-items-center p-3">
          <div className="flex-shrink-0" style={{ width: "30%" }}>
            <img src={avatarPath} alt="Avatar" className="rounded-circle w-100" />
            <button type="button" className="btn btn-light">Modifier</button>
          </div>
          <div className="flex-grow-1" style={{ width: "70%" }}>
            <h2>{user.name}</h2>
            <hr />
            {/* ligne 2 */}
            <span className="d-flex justify-content-between">
              <p >Niveau {user.level}</p>
              <p className="display-6">850 / 1234</p>
            </span>

            {/* ligne 3 */}
            <div>
              <hr />
              <span className="d-flex justify-content-between">
                <p className="me-3">Niveau</p>
                <progress value={0.2} style={{ height: "40px"}} />
              </span>

            </div>

          </div>
        </div>
      </div>

      <div className="container mt-4">
      <h3>Défis en cours</h3>
      <span>
      <img src={htmlBadge} alt="badge html" className="rounded-circle badgesStyle"/>
      <img src={cssBadge} alt="badge css" className="rounded-circle badgesStyle"/>
      </span>
      </div>

      <div className="container mt-4">
        <h3>Défis relevés</h3>
        <div className="list-group">
          {user.challenges.map((challenge, index) => (
            <div key={index} className="list-group-item d-flex align-items-center">
              <span className="me-3">{challenge.icon}</span>
              <div>
                <h5 className="mb-1">{challenge.titre}</h5>
                <small>Points: {challenge.points.total}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default UserPage;
