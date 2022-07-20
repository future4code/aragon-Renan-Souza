import { useNavigate } from "react-router-dom";
import { NavigateToHome, navigateToProfile } from "../routes/coordinator"; 

Header() {
    navigate = useNavigate();

   return (
        <header>
            <button onClick={() => navigateToHome(navigate)}>
                Ir para página inicial
            </button>
            <button onClick={() => navigateToProfile(navigate)}>
            Ir para página do perfil 
         </button>
    </header>
    
    );
}

export default Header;
