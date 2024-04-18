
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Link, NavLink, useParams, useLocation, useNavigate } from 'react-router-dom'
import Home from './page/Home'
import Categories from './page/Categories'
import MealPlanner from './page/MealPlanner'
import About from './page/About'
import Contact from './page/Contact'
import Course from './page/Course'
import NavbarWhithSearch from './layout/navbar/NavbarWhithSearch'
import GUI from './page/GUI'
import LoginPage, { LoginAction } from './page/LoginPage'
import SingUpPage, { singUpAction } from './page/SingUpPage'
import NavbarForLoggedInWithSearch from './layout/navbar/NavbarForLoggedInWithSearch'
import NavBar from './layout/navbar/NavBarNoSearch'
import Footer from './layout/navbar/footer/Footer'
import { useState } from 'react'
import BreakFast from './page/meal planner children/BreakFast'
import Lunch from './page/meal planner children/Lunch'
import Dinner from './page/meal planner children/Dinner'
import Snack from './page/meal planner children/Snack'
import Logo from './component/logo/logo'
import CourseCreation, { CourseCreationAction } from './page/course creation /CourseCreation'
import ProfilPage from './page/ProfilPage'
import CullinaryPreferenceForm from './component/profileChildAnd Component/CullinaryPreferenceForm'
import CullinarryPreference from './page/profilPageChild/CulinarryPreference'
import MyRecipePage from './page/profilPageChild/MyRecipePage'
import AdminPage from './page/AdminPage'
import NavbarForAdmin from './layout/navbar/NavbarForAdmin'
import ErrorPage from './page/ErrorPage'
import Auth from './component/route guard/Auth'
import { profilEditAction } from './component/profileChildAnd Component/profileEditForm'


const Root = () => {

  // i can't use useState here 


  // const [guard, setguard] = useState(false)

  const { pathname } = useLocation()


  let footer = true;
  let guard = false


  if (localStorage.getItem("token")) {
    guard = true
  }
  if (
    (pathname == "/login" ||
      pathname == "/singUp" ||
      pathname == '/mealPlannerBreakFast' ||
      pathname == '/mealPlannerLunch' ||
      pathname == '/mealPlannerDinner' ||
      pathname == '/mealPlannerSnack' ||
      pathname == '/CourseCreation' ||
      guard == false) &&
    pathname !== "/"
  ) {
    footer = false
  }


  return (
    <>
      <header>
        <nav>
          {
            guard ? <NavbarForLoggedInWithSearch /> : <NavbarWhithSearch />
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
    <Route path='/'
      element={<Root />}
      errorElement={<ErrorPage />}
    >
      <Route index element={<Home />} />

      {/* route protected  */}
      <Route path='/' element={<Auth />} >

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
        <Route
          path='/CourseCreation'
          element={<CourseCreation />}
          action={CourseCreationAction}
        />

        <Route path='/GUI' element={<GUI />} />

        {/* profil page and children  */}
        <Route
          path='/profil'
          element={<ProfilPage />}
          action={profilEditAction}
        />
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

      <Route
        path='/login'
        element={<LoginPage />}
        action={LoginAction}
      />
      <Route
        path='/singUp'
        element={<SingUpPage />}
        errorElement={<ErrorPage />}
        action={singUpAction}
      />

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
