import { Container, LoginButton, UserDetails } from "./styles"

import { Navigation } from "../Navigation"
import { signOut, useSession } from "next-auth/react"
import { Avatar } from "../handleComponents/Avatar"
import { Text } from "../Typography"
import { useRouter } from "next/router"
import { SignIn, SignOut } from "phosphor-react"


// logado -> inicio, explorar, perfil + footer com avatar e icone de singOut  
// visitante -> Inicio, explorara + footer com "fazer login" e icone de signIn

//* useSession para ver se esta logado ou n e um if para mudar o template

export const Sidebar = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const user = session?.user;

  const handleOpenProfile = () => {
    router.push(`/profile/${user?.id}`)
  }
  
  return (
    <Container>
      <div>
        <img className="logo" src="/images/book-wise-logo.svg" alt="BookWise Logo" />

        <Navigation />
      </div>

      <footer>
        {!user ? (
          <LoginButton href="/login">
            Fazer login
            <SignIn size={20} />
          </LoginButton>
        ) : (
          <UserDetails>
            <Avatar size="sm" src={user?.avatar_url} alt={user?.name} onClick={handleOpenProfile} css={{ cursor: "pointer" }} />
            <Text size="sm">{user?.name}</Text>
            <SignOut color="#F75A68" size={20} onClick={() => signOut()} />
          </UserDetails>
        )}
      </footer>
    </Container>
  )
}