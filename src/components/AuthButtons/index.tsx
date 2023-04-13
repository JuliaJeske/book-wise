
import Image from 'next/image';

import { AuthButton, Container } from "./styles";




export const AuthButtons = () => {
 
  return (
    <Container>
      <AuthButton>
        <Image src="/images/icons/google.svg" alt="Google Logo" width={20} height={20}/> 
        Entrar com Google
      </AuthButton>
      <AuthButton>
        <Image src="/images/icons/github.svg" alt="Github Logo" width={20} height={20}/> 
        Entrar com Github
      </AuthButton>
     
        <AuthButton>
          <Image src="/images/icons/rocket.svg" alt="Rocket Icon" width={20} height={20}/>
          Acessar como visitante
        </AuthButton>
      
    </Container>
  )
}