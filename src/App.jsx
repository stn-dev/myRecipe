
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Link, NavLink, useParams, useLocation } from 'react-router-dom'
import Home from './page/Home'
import Categories from './page/Categories'
import MealPlanner from './page/MealPlanner'
import About from './page/About'
import Contact from './page/Contact'
import Course from './page/Course'
import NavbarWhithSearch from './layout/navbar/NavbarWhithSearch'
import GUI from './page/GUI'
import LoginPage from './page/LoginPage'
import SingUpPage from './page/SingUpPage'
import NavbarForLoggedInWithSearch from './layout/navbar/NavbarForLoggedInWithSearch'
import NavBar from './layout/navbar/NavBarNoSearch'
import Footer from './layout/navbar/footer/Footer'
import { useState } from 'react'
import BreakFast from './page/meal planner children/BreakFast'
import Lunch from './page/meal planner children/Lunch'
import Dinner from './page/meal planner children/Dinner'
import Snack from './page/meal planner children/Snack'
import Logo from './component/logo/logo'
import CourseCreation from './page/course creation /CourseCreation'
import ProfilPage from './page/ProfilPage'
import CullinaryPreferenceForm from './component/profileChildAnd Component/CullinaryPreferenceForm'
import CullinarryPreference from './page/profilPageChild/CulinarryPreference'
import MyRecipePage from './page/profilPageChild/MyRecipePage'
import AdminPage from './page/AdminPage'
import NavbarForAdmin from './layout/navbar/NavbarForAdmin'


const Root = () => {

  let footer = true;
  let guiNav = true;

  const { pathname } = useLocation()
  if (
    pathname == "/login" ||
    pathname == "/singUp" ||
    pathname == '/mealPlannerBreakFast' ||
    pathname == '/mealPlannerLunch' ||
    pathname == '/mealPlannerDinner' ||
    pathname == '/mealPlannerSnack' ||
    pathname == '/CourseCreation'
  ) {
    footer = false
  } if (pathname == "/GUI") {
    guiNav = false
  }

  return (
    <>
      <header>
        <nav>
          {
            pathname == "/admin" ? <NavbarForAdmin />
              :
              (pathname == "/profil" ? <NavbarForLoggedInWithSearch />
                :
                (pathname == "/categorie" ?
                  <NavBar />
                  : (guiNav && <NavbarWhithSearch
                    logo={<Logo />} />)))
          }
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      {footer && <Footer />}
    </>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />} >
      <Route index element={<Home />} />
      <Route path='/categorie' element={<Categories />} />

      {/* meal planner page and children page  */}
      <Route path='/mealPlanner' element={<MealPlanner />} />
      <Route path='/mealPlannerBreakFast' element={<BreakFast />} />
      <Route path='/mealPlannerLunch' element={<Lunch />} />
      <Route path='/mealPlannerDinner' element={<Dinner />} />
      <Route path='/mealPlannerSnack' element={<Snack />} />


      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />


      {/* course page and children  */}
      <Route path='/course' element={<Course />} />
      <Route path='/CourseCreation' element={<CourseCreation />} />


      <Route path='/GUI' element={<GUI />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/singUp' element={<SingUpPage />} />


      {/* profil page and children  */}
      <Route path='/profil' element={<ProfilPage />} />
      <Route
        path='/profilCullinaryPreference'
        element={<CullinarryPreference />}
      />
      <Route
        path='/profilMyRecipe'
        element={<MyRecipePage />}
      />


      <Route path='/admin' element={<AdminPage />} />
    </Route>
  )
)


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
