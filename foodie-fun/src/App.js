 
  
 
import "./App.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./utils/privateRoute";
import Register from "./components/Register";
import Review from "./components/Review";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Restaraunt from "./components/Restaraunt";
import { RestarauntContext } from "./contexts/restaurantContext";
import { axiosWithAuth } from "./utils/axiosWithAuth";
function App() {
  const user = localStorage.getItem("user_id");

  const [places, setPlaces] = useState([]);
  const place = {
    name: '',
    cuisine: '',
    location:'',
    hour_open: ' ' ,
    hour_closed: '',
    days_open:'',
    user_id:  parseInt(user),
    photo_url:''
  }

  

  useEffect(() => {
    axiosWithAuth()
      .get("https://bw-foodiefun.herokuapp.com/api/restaurants/")
      .then(res => setPlaces(res.data))
      .catch(err => console.log(err));

    axiosWithAuth();
    //  .get(`https://bw-foodiefun.herokuapp.com/api/restaurants/${id}/items`)
  }, []);

  return (
    <div className="App">
      <Router>
        <Route exact path="/register" component={Register} />

        <RestarauntContext.Provider value={{ places, user, place }}>
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </RestarauntContext.Provider>

        <Route exact path="/login" component={Login} />

        <PrivateRoute exact path="/reviews/:id" component={Review} />
      </Router>
    </div>
   );
}

export default App;
