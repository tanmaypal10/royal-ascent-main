import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Navbar } from "@/components/site/Navbar"
import { Hero } from "@/components/site/Hero"
import { About } from "@/components/site/About"
import { Programs } from "@/components/site/Programs"
import { CampusLife } from "@/components/site/CampusLife"
import { Research } from "@/components/site/Research"
import { Placements } from "@/components/site/Placements"
import { Faculty } from "@/components/site/Faculty"
import { Testimonials } from "@/components/site/Testimonials"
import { Admission } from "@/components/site/Admission"
import { Contact } from "@/components/site/Contact"
import { Footer } from "@/components/site/Footer"
import { CursorGlow } from "@/components/site/CursorGlow"
import { ScrollProgress } from "@/components/site/ScrollProgress"
import { BackToTop } from "@/components/site/BackToTop"
import { Loader } from "@/components/site/Loader"

function HomePage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Loader />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <CampusLife />
      <Research />
      <Placements />
      <Faculty />
      <Testimonials />
      <Admission />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
