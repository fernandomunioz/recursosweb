react-router-dom (remix)
Trabajar con la version 6.41


<BrowserRouter> En la App
 Routes,Route,useParams,Outlet
useParams
Link to
const navigate = useNavigate();
navigate('/topics/dos')
let { nombreTopic } = useParams();
<Outlet />
<Link to="detalle">
<Route path="*" element={<Soft404 />} />

Example super
<Route exact path="/topics/:nombreTopic" element={<Topic />}>


<Route path="/topics/:nombreTopic" element={<Topic />}>
    <Route path="detalle" element={<Detalle />} />
</Route>


