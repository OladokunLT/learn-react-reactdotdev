// import { useState } from 'react'
import './App.css'

function MyButton() {
  return (
    <button> I&apos;m a button </button>
  )
} 

const user = {
  name: "Lukman Oladokun",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
}

function ConditionalRendering() {
  let content, isLoggedIn = true;
  if (!isLoggedIn) {
    content = "You are logged in"
  } else {
    content = "Sign up first"
  }
  return(
    <div> {content} </div>
  )
}


function ShoppingList() {
  const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];

  const listItems = products.map(product => <li key={product.id}
    style={{ color: product.isFruit ? "Orange" : "Brown" }}
  > {product.title} </li>
  );
  return (<ul> {listItems} </ul>);
}

function App() {
  return (
    <div>
      {/* Creating and nesting Components */}
      <h1>Welcome to my app</h1>
      <MyButton />
      {/* Creating and nesting component */}

      {/* Writing markup with JSX */}
      <h2>{user.name}</h2>
      <img 
        src={user.imageUrl} 
        alt={'Photo of ' + user.name} 
        style = {{
          width: user.imageSize,
          height: user.imageSize,
          borderRadius: "50%",
        }}
      />
      <ConditionalRendering />
      <ShoppingList />
    </div>
  )
}

export default App
