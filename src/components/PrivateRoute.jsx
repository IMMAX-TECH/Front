import React, { useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import { obtenerDatosUsuario } from 'utils/api';
import ReactLoading from 'react-loading';

const PrivateRoute = ({children}) => {
    const {  isAuthenticated, isLoading , getAccessTokenSilently} = useAuth0();

    useEffect(() => {
        const fetchAuth0Token = async () => {
            const accessToken = await getAccessTokenSilently({
                audience: `api-autenticacion-immax-tech-proyecto`
            });
            localStorage.setItem('token',accessToken);
            console.log(accessToken);
            await obtenerDatosUsuario((response)=>{
                console.log('response',response);
            },(err)=>{
                console.log('err',err);
            });
        }
        if (isAuthenticated){
            fetchAuth0Token();
        }
        
    }, [isAuthenticated, getAccessTokenSilently])

    if (isLoading) return <ReactLoading type='Bubbles' color='#111827' height={667} width={375} />;

    return isAuthenticated ? (<>{children}</>):(
    <div>
    <div>No estas autorizado para ver este sitio </div>
    <Link to = '/'>
        <span>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-center">
                Llevame al inicio
            </button>
        </span>
    </Link>
    </div>
    );
    
};

export default PrivateRoute
