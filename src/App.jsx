
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Link, NavLink, useParams, useLocation, useNavigate } from 'react-router-dom'
import Home from './page/Home'
import Categories from './page/Categories'
import MealPlanner from './page/MealPlanner'
import About from './page/About'
import Contact from './page/Contact'
import Course from './page/Course'
import NavbarWhithSearch from './layout/navbar/NavbarWhithSearch'
import GUI from './page/GUI'
<<<<<<< HEAD
import LoginPage, { LoginAction } from './page/LoginPage'
=======
import LoginPage, { loginaction } from './page/LoginPage'
>>>>>>> new-dynamisation
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
<<<<<<< HEAD
import CourseCreation, { CourseCreationAction } from './page/course creation /CourseCreation'
=======
import CourseCreation, { courseAction } from './page/course creation /CourseCreation'
>>>>>>> new-dynamisation
import ProfilPage from './page/ProfilPage'
import CullinaryPreferenceForm from './component/profileChildAnd Component/CullinaryPreferenceForm'
import CullinarryPreference from './page/profilPageChild/CulinarryPreference'
import MyRecipePage from './page/profilPageChild/MyRecipePage'
import AdminPage, { adminLoader } from './page/AdminPage'
import NavbarForAdmin from './layout/navbar/NavbarForAdmin'
import ErrorPage from './page/ErrorPage'
<<<<<<< HEAD
import Auth from './component/route guard/Auth'
import { profilEditAction } from './component/profileChildAnd Component/profileEditForm'
=======
import IsAuth from './component/auth/IsAuth'
import ProfileEditForm, { profilEditAction } from './component/profileChildAnd Component/profileEditForm'
>>>>>>> new-dynamisation


const Root = () => {

<<<<<<< HEAD
  // i can't use useState here 


  // const [guard, setguard] = useState(false)

=======
  // test route guard 
  const navigate = useNavigate()
  const [guard, setguard] = useState(false)
>>>>>>> new-dynamisation
  const { pathname } = useLocation()
  const token = localStorage.getItem("token")


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
<<<<<<< HEAD
            guard ? <NavbarForLoggedInWithSearch /> : <NavbarWhithSearch />
=======
            token ? <NavbarForLoggedInWithSearch /> : <NavbarWhithSearch />
>>>>>>> new-dynamisation
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
<<<<<<< HEAD

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

=======

      <Route path='/' element={<IsAuth />} >

        {/* meal planner page and children page  */}
        <Route path='/mealPlanner' element={<MealPlanner />} />
        <Route path='/mealPlannerBreakFast' element={<BreakFast />} />
        <Route path='/mealPlannerLunch' element={<Lunch />} />
        <Route path='/mealPlannerDinner' element={<Dinner />} />
        <Route path='/mealPlannerSnack' element={<Snack />} />


        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />


>>>>>>> new-dynamisation
        {/* course page and children  */}
        <Route path='/course' element={<Course />} />
        <Route
          path='/CourseCreation'
          element={<CourseCreation />}
<<<<<<< HEAD
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
=======
        // action={courseAction}
        />


        <Route path='/GUI' element={<GUI />} />

        {/* profil page and children  */}
        <Route path='/profil' element={<ProfilPage />}>

          <Route
            index
            element={<ProfileEditForm />}
            action={profilEditAction}
          />
          <Route
            path='cullinaryPreference'
            element={<CullinarryPreference />}
          />
          <Route
            path='myRecipe'
            element={<MyRecipePage />}
          />
        </Route>


        <Route path='/categorie' element={<Categories />} />

        <Route
          path='/admin'
          element={<AdminPage />}
          loader={adminLoader}
        />

      </Route>


      <Route
        path='/login'
        element={<LoginPage />}
        action={loginaction}
>>>>>>> new-dynamisation
      />
      <Route
        path='/singUp'
        element={<SingUpPage />}
<<<<<<< HEAD
        errorElement={<ErrorPage />}
=======
>>>>>>> new-dynamisation
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
