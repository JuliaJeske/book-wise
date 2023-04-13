
import Image from 'next/image';

import { AuthButton, Container } from "./styles";
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

type AuthButtonsProps = {
  callbackUrl ?: string
}

export const AuthButtons = ({ callbackUrl = '/'}:AuthButtonsProps) => {
  const router = useRouter()

  const handleSignIn = (provider ?: string) => {
    if(!provider) {
      return router.push(callbackUrl)
    }
    signIn(provider, {
      callbackUrl,
    })
  }
 
  return (
    <Container>
      <AuthButton onClick={() => handleSignIn("google")}>
        <Image src="/images/icons/google.svg" alt="Google Logo" width={20} height={20}/> 
        Entrar com Google
      </AuthButton>
      <AuthButton onClick={() => handleSignIn("github")}>
        <Image src="/images/icons/github.svg" alt="Github Logo" width={20} height={20}/> 
        Entrar com Github
      </AuthButton>
     
        <AuthButton onClick={() => handleSignIn()}>
          <Image src="/images/icons/rocket.svg" alt="Rocket Icon" width={20} height={20}/>
          Acessar como visitante
        </AuthButton>
      
    </Container>
  )
}