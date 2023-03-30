import React from "react";
import { Link } from "react-router-dom";
import { HOME_PAGE, LOGIN_URL } from "../../constants/url";
import { useUser } from "../../contexts/userContext";
import { logout } from "../../firebase/auth-service";

export function Navbar() {
  const { user } = useUser();

  const handleLogout = async () => {
    await logout();
  };

  //Cambiar el icono del menu y activar el menu responsive
  const menu = (event) => {
    let list = document.querySelector("ul");
    event.currentTarget.className === "menu h-10 w-10"
      ? ((event.currentTarget.src = "https://firebasestorage.googleapis.com/v0/b/jazz-concreto.appspot.com/o/profilepics%2Fclose.png?alt=media&token=a829c7ae-d24d-4d42-aa48-196e7b797de6"),
        (event.currentTarget.className = "close h-10 w-10"),
        list.classList.add("top-[70px]"),
        list.classList.add("opacity-100"))
      : ((event.currentTarget.src = "https://firebasestorage.googleapis.com/v0/b/jazz-concreto.appspot.com/o/profilepics%2Fmenu.png?alt=media&token=e3b3e707-ea83-4b64-bf3a-e5711127143a"),
        (event.currentTarget.className = "menu h-10 w-10"),
        list.classList.remove("top-[70px]"),
        list.classList.remove("opacity-100"));
  };

  //HACER QUE LA WINDOW DESAPAREZCA CUANDO HAYA CAMBIO DE PAGINA
  const handlewindow = () => {
    let list = document.querySelector("ul");
    let imagen = document.getElementById("close-img");
    imagen.currentTarget.className = "close h-10 w-10";
    imagen.currentTarget.src = "https://firebasestorage.googleapis.com/v0/b/jazz-concreto.appspot.com/o/profilepics%2Fmenu.png?alt=media&token=e3b3e707-ea83-4b64-bf3a-e5711127143a";
    list.classList.remove("top-[70px]");
    list.classList.remove("opacity-100");
  };

  return (
    <nav className="p-5 bg-[#227C9D] md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center">
        <span className="cursor-pointer">
          <Link to={HOME_PAGE} className="flex pl-2" onClick={handlewindow}>
            <img
              className="w-auto h-12 inline mr-2"
              src="https://firebasestorage.googleapis.com/v0/b/jazz-concreto.appspot.com/o/profilepics%2FLogo%20Banda.png?alt=media&token=c5128d44-429c-4e11-b0f4-e74e26f32626"
              alt="App Logo"
            />
            <p className="text-2xl font-semibold text-[#FEF9EF] pt-1">
              Jazz en Concreto
            </p>
          </Link>
        </span>
        <span className="cursor-pointer md:hidden block">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/jazz-concreto.appspot.com/o/profilepics%2Fmenu.png?alt=media&token=e3b3e707-ea83-4b64-bf3a-e5711127143a"
            id="menu-img"
            className="menu h-10 w-10"
            onClick={menu}
          />
        </span>
      </div>

      <ul
        className="text-white md:flex md:items-center md:z-auto md:static absolute
       bg-[#227C9D] w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl7
       md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-400"
      >
        {!!user && (
          <>
            <span className="font-semibold mx-4 text-xl flex items-center cursor-pointer hover:underline">
              <h1 className="pr-2 font-bold" onClick={handlewindow}>
                {user.name}
              </h1>
              {user.photoUrl && (
                <img
                  className="h-10 w-10 inline"
                  src={user.photoUrl}
                  alt="Perfil"
                />
              )}
              {!user.photoUrl && (
                <img
                  className="h-10 w-auto inline"
                  src="https://firebasestorage.googleapis.com/v0/b/jazz-concreto.appspot.com/o/profilepics%2Fuser.png?alt=media&token=da821565-1249-4031-9c7b-ec067e30a65a"
                  alt="Perfil"
                />
              )}
            </span>
            <li className="font-semibold hover:underline mx-4 my-6 md:my-0">
              <Link to={HOME_PAGE}>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="font-semibold hover:underline mx-4 my-6 md:my-0"
                >
                  Salir
                </button>
              </Link>
            </li>
          </>
        )}

        {!user && (
          <>
            <li className="font-semibold hover:underline mx-4 my-6 md:my-0">
              <Link to={LOGIN_URL} className="text-xl" onClick={handlewindow}>
                Inicia Sesión
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
