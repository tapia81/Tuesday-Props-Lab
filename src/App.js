import './App.css';
import Book from './components/app';
import Header from './components/header';
import Footer from './components/footer';
function App() {
	return (
		<div className="App">
			<Header appTitle="Book App" button1="Home" button2="Books" button3="About" />
			<Book
				title="The Black Farm"
				image="https://images-na.ssl-images-amazon.com/images/I/41DrGLaqV8L._SX322_BO1,204,203,200_.jpg"
				description="Lorem ipsum dolor sit amet, ad case zril vocent mei, eu nibh labitur nam, nec et mazim tempor lucilius. Adhuc omittam cu vis, eum et liber tincidunt. Mei te odio quot sale, cum ea commodo copiosae mediocrem. Ius nulla dictas aperiam in, no nec scripta facilisi, his omnes dissentias ut. Per sumo eloquentiam eu, prima ceteros cu vel, nec velit augue incorrupte an.

          Te quod probo eum, ea graecis adolescens nam. His ea labores inermis. Ad mei admodum molestie. Pro eros facilisis vituperatoribus id.
          
          Sea nibh sapientem no. Elit aeque reformidans ad sit, blandit epicurei postulant eu sed, quod velit nam et. Omnium delenit efficiendi an pro, solum instructior ex sed. Duo quis repudiare disputando te. Mel cu dicta iudico audire, dicunt melius nostrud vim eu, quo te tibique expetenda vituperatoribus.
          
          Nostro facilis invidunt eu eam, nec ut vitae conclusionemque. Diam ullamcorper an mei, at quando gubergren vel, no primis delectus efficiantur quo. Vix probo viderer et. Partem appareat te has, ludus quando honestatis has at. Mel docendi oportere ut, elit brute suscipiantur te eam.
          
          Lorem sapientem quaerendum ei qui."
				title2="Nothing But Blackend Teeth"
				image2="https://s2982.pcdn.co/wp-content/uploads/2021/07/Nothing-But-Blackened-Teeth.jpeg.webp"
				description2="Lorem ipsum dolor sit amet, ad case zril vocent mei, eu nibh labitur nam, nec et mazim tempor lucilius. Adhuc omittam cu vis, eum et liber tincidunt. Mei te odio quot sale, cum ea commodo copiosae mediocrem. Ius nulla dictas aperiam in, no nec scripta facilisi, his omnes dissentias ut. Per sumo eloquentiam eu, prima ceteros cu vel, nec velit augue incorrupte an.
  
            Te quod probo eum, ea graecis adolescens nam. His ea labores inermis. Ad mei admodum molestie. Pro eros facilisis vituperatoribus id.
            
            Sea nibh sapientem no. Elit aeque reformidans ad sit, blandit epicurei postulant eu sed, quod velit nam et. Omnium delenit efficiendi an pro, solum instructior ex sed. Duo quis repudiare disputando te. Mel cu dicta iudico audire, dicunt melius nostrud vim eu, quo te tibique expetenda vituperatoribus.
            
            Nostro facilis invidunt eu eam, nec ut vitae conclusionemque. Diam ullamcorper an mei, at quando gubergren vel, no primis delectus efficiantur quo. Vix probo viderer et. Partem appareat te has, ludus quando honestatis has at. Mel docendi oportere ut, elit brute suscipiantur te eam.
            
            Lorem sapientem quaerendum ei qui."
			/>
			<Footer />
		</div>
	);
}

export default App;
