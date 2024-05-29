// //App.js
// import "bootstrap/dist/css/bootstrap.min.css";
 //import { lazy, Suspense } from "react";
// import { cardData } from "./components/mock";

import Feed from "./components/Feed";

//const CardComponent = lazy(() => import("./components/cardComponent"));

function App() {
  return (
    <div>
      {/* <h1>React Lazy Loading with Infinite Scroll</h1>
      <Suspense fallback={<div>isLoading...</div>}>
        <CardComponent cardData={cardData} />
      </Suspense> */}
      <Feed />
    </div>
  );
}
export default App;
