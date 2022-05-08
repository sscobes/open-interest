import React from 'react';
import Banner from './Components/Banner';
import Input from './Components/Input';

const homeBanner = 
"          /$$$$$$                                      /$$$$$$             /$$                                               /$$      \n"+
"         /$$__  $$                                    |_  $$_/            | $$                                              | $$      \n"+
"        | $$  \\ $$  /$$$$$$   /$$$$$$  /$$$$$$$         | $$   /$$$$$$$  /$$$$$$    /$$$$$$   /$$$$$$   /$$$$$$   /$$$$$$$ /$$$$$$    \n"+
"        | $$  | $$ /$$__  $$ /$$__  $$| $$__  $$        | $$  | $$__  $$|_  $$_/   /$$__  $$ /$$__  $$ /$$__  $$ /$$_____/|_  $$_/    \n"+
"        | $$  | $$| $$  \\ $$| $$$$$$$$| $$  \\ $$        | $$  | $$  \\ $$  | $$    | $$$$$$$$| $$  \\__/| $$$$$$$$|  $$$$$$   | $$   \n"+
"        | $$  | $$| $$  | $$| $$_____/| $$  | $$        | $$  | $$  | $$  | $$ /$$| $$_____/| $$      | $$_____/ \\____  $$  | $$ /$$  \n"+
"        |  $$$$$$/| $$$$$$$/|  $$$$$$$| $$  | $$       /$$$$$$| $$  | $$  |  $$$$/|  $$$$$$$| $$      |  $$$$$$$ /$$$$$$$/  |  $$$$/  \n"+
"         \\______/ | $$____/  \\_______/|__/  |__/      |______/|__/  |__/   \\___/   \\_______/|__/       \\_______/|_______/    \\___/    \n"+
"                  | $$                                                                                                                \n"+                                                                                                              
"                  | $$                                                                                                                \n"+                                                                                                             
"                  |__/                                                                                                                \n";     
const promptVal = ">";


function App() {

  return (
    <div>
      <Banner banner={homeBanner} />
      <Input prompt={promptVal}/>
    </div>
  );
};

export default App;
