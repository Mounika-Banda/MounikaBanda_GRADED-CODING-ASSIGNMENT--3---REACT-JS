import React from "react";
import "./App.css";

const App = () => {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={WatchList} />
          <Route exact path="/watched" component={Watched} />
          <Route exact path="/add" component={Add} />
        </Switch>
      </BrowserRouter>
    </GlobalContextProvider>
  );
};

export default App;