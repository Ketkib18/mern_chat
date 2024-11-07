// // import "./App.css";
// // import Home from "./pages/home/Home";
// // import Login from "./pages/login/Login";
// // import SignUp from "./pages/signup/SignUp";
// // import { Navigate, Route, Routes } from "react-router-dom";
// // import { Toaster } from "react-hot-toast";
// // import { useAuthContext } from "./context/AuthContext";

// // function App() {
// //   const { authUser } = useAuthContext();
// //   return (
// //     <div className='p-4 h-screen flex items-center justify-center'>
      
// //       <Routes>
// //         <Route path='/' element={authUser?<Home />:<Navigate to="/login"/>} />
// //         <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />}/>
// //         <Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />}
// //         />
// //       </Routes>
// //       <Toaster />
// //     </div> 
// //   );
// // }

// // export default App;
 

// import "./App.css";
// import Home from "./pages/home/Home";
// import Login from "./pages/login/Login";
// import SignUp from "./pages/signup/SignUp";
// import { Navigate, Route, Routes } from "react-router-dom";
// import { Toaster } from "react-hot-toast";
// import { useAuthContext } from "./context/AuthContext";


// function App() {
//   const { authUser } = useAuthContext();

//   return (
//     <div className='p-4 h-screen flex items-center justify-center'>
//       {/* Define your routes here */}
//       <Routes>
//         {/* If the user is authenticated, show the Home page, otherwise navigate to the login page */}
//         <Route path='/' element={authUser ? <Home /> : <Navigate to="/login" />} />
        
//         {/* Redirect authenticated users away from the login/signup page */}
//         <Route path='/login' element={authUser ? <Navigate to="/" /> : <Login />} />
//         <Route path='/signup' element={authUser ? <Navigate to="/" /> : <SignUp />} />
//       </Routes>
      
//       {/* Toaster to show notifications */}
//       <Toaster />
//     </div>
//   );
// }

// export default App;


import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
	const { authUser } = useAuthContext();
	return (
		<div className='p-4 h-screen flex items-center justify-center'>
			<Routes>
				<Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
				<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
			</Routes>
			<Toaster />
		</div>
	);
}

export default App;