import React from "react";
import { GlobalState } from "./global/GlobalState";
import Router from "./Router/Router";

export default function App (){
  return(
    <div>
      <GlobalState>
          <Router/>
      </GlobalState>
      
      
    </div>
  )
}