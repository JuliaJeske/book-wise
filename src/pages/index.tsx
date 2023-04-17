import { signOut, useSession } from "next-auth/react"
import { NextPageWithLayout } from "./_app"
import DefaultLayout from "@/layouts/DefaultLayout"
import { HomeContainer } from "@/styles/pages/home"
import { LatestRatings } from "@/components/latestRatings"

const HomePage: NextPageWithLayout = () => {
  const {data} = useSession()
  return (
    <HomeContainer>
      <LatestRatings />
     
    </HomeContainer>
  )
}

HomePage.getLayout = function getLayout(page) {
  return (
   <DefaultLayout title="inicio">
    {page}
   </DefaultLayout>
  )
}


export default HomePage