import './App.css';
import pic from "../src/Images/fzlogo.jpg";
import pic1 from "../src/Images/p12.jpg";
import pic2 from "../src/Images/p13.png";
import Armors from './pages/Guns';
import Contact from './pages/Contact';
function App() {
  return (
    <div>
      <section id="header">
    <nav>
        <a href=""><img src={pic}/> </a>
            <div class="nav-links"><br/><br/>
                <ul>
                    <li><a href="/" >Home</a></li>
                    <li><a href="#header1">About</a></li>
                    <li><a href="#header3">Purchase</a></li>
                    <li><a href="#header4">Contact</a></li>
                </ul>
           </div>
    </nav>
<div class ="title">
    <br/><br/><h1>The Look</h1><br/>
    <p>
    <h3>“If it makes you feel beautiful, then do it.”</h3>
    </p>

</div>
    
</section>
{/* About Section */}
<section id="header1">
    <nav>
        <div class="headertext">
               <h2>
                Brightening homes with beautiful,durable products. 
                </h2><br/>
                <div class="img2">
                    <img src={pic1} alt="" /><img src={pic1} alt="" /><br/><br/>
                    <img src={pic2} alt=""/> <img src={pic2 } alt=""/>
                </div>
                <h6>Opening Time:10 AM</h6>
                <br/>
                 <h6>Closing Time:8:00 PM</h6>  
                <br/>
            <div>
                <a class="slots" href="https:/www.google.com" target="_blank">Book Now </a>
            </div> 
        </div>
    </nav>
</section>
    <Armors/>    
    <Contact/>
    </div>
  );
}

export default App;
