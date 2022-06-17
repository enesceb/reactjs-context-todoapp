

import {SiteContext, AuthContex} from "./context/index"

import TodoApp from "./TodoApp";




function App() {


  return (

    <SiteContext>  
      <AuthContex>
      <TodoApp/>
      </AuthContex>
    </SiteContext>

  );
}

export default App;
 