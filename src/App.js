import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import TeacherProfile from "./pages/TeacherProfileViewer/TeacherProfile";
import ProjectLibrary from "./pages/ProjectLibrary/ProjectLibrary";
import TeacherDashboard from "./pages/TeacherDashboard/TeacherDashboard";
import StudentProfiles from "./pages/StudentProfiles/StudentProfiles";
import StudentProjectDashboard from "./pages/StudentProjectDashboard/StudentProjectDashboard";
import LearningObjectives from "./pages/LearningObjectives/LearningObjectives";
import ModalProvider from "./pages/Home/contexts/ModalContext";
import AuthProvider from "./pages/Home/contexts/AuthContext";
import StudentProfile from "./pages/StudentProfileViewer/StudentProfile";
import NotFound from "./pages/Home/components/UI/NotFound";
import StudentProfilesTest from "./pages/StudentProfiles/StudentProfilesTest";

// Vatthana try to implement react router dom v6.4 createBrowserRouter(loader/action) with routerProvider
// const router = createBrowserRouter([
//   {
//     path: "/",
//     errorElement: <NotFound />,
//     children: [
//       { path: "/", element: <Home />, errorElement: <NotFound /> },
//       {
//         path: "/Teacher-dashboard",
//         element: <TeacherDashboard />,
//         errorElement: <NotFound />,
//         children: [
//           {
//             path: "Teacher-profile",
//             element: <TeacherProfile />,
//             errorElement: <NotFound />,
//           },
//         ],
//       },
//       {
//         path: "/Project-library",
//         element: <ProjectLibrary />,
//         errorElement: <NotFound />,
//         children: [
//           { path: "Student-Profile", element: <StudentProfile /> },
//           { path: "Student-project", element: <StudentProjectDashboard /> },
//         ],
//       },
//     ],
//   },
// ]);
// <RouterProvider router={router} />
function App() {
  return (
    <AuthProvider>
      <ModalProvider>
        <Routes>
          {/* Home Page */}
          <Route exact path="/" element={<Home />} />
          {/* Teacher Pages */}
          <Route path="/Teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="/Teacher-profile/" element={<TeacherProfile />} />
          {/* Student Pages */}
          <Route path="/Project-library" element={<ProjectLibrary />} />
          <Route
            path="/Student-project"
            element={<StudentProjectDashboard />}
          />
          <Route path="/Student-Profile" element={<StudentProfile />} />
          {/* Error Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ModalProvider>
    </AuthProvider>
  );
}

export default App;
