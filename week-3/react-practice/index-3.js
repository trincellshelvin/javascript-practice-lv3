/**
 * Coding Bootcamp Assignment: Tertiary Operator & Array Destructuring
 *
 * Instructions:
 * You will create two components that demonstrate the use of the ternary operator and array destructuring. Follow the examples provided in the CoinFlip and FruitStore components to complete the assignment.
 * 
 * - Follow the TODO comments to complete the assignment.
 */

// TASK 1: Use the ternary operator to display different content

// EXAMPLE: Tertiary operator usage in JSX and variable declaration
// CoinFlip component uses a ternary operator to determine what to show.
function CoinFlip(props) {
  let announcement = props.coinSide === 'heads' ? "Heads I win!" : "Tails you lose!";

  return (
    <div className="p-4 m-2 border-2 border-slate">
      <h1 className="text-lg">Coin flip</h1>
      <p>{announcement}</p>
      <img
        src={props.coinSide === "heads" ? "./img/heads.webp" : "./img/tails.webp"}
        alt="result"
        className="h-32 w-32"
      />
    </div>
  );
}

// TODO: create your own component that uses the ternary operator
function LoginStatus(props) {
  return (
    <div className="p-4 m-2 border-2 border-slate">
      <h1 className="text-lg">User Status</h1>
      <p>{props.isLoggedIn ? "Welcome back!" : "Please log in."}</p>
    </div>
  );
}


function TertiaryDemo() {
  return (
    <div className="border-2 border-black rounded size-100">
      <h1 className="text-2xl">Tertiary Operator</h1>

      <div className="flex justify-around">
        <CoinFlip coinSide="heads" />
        <CoinFlip coinSide="tails" />
      </div>
      <div className="flex justify-around">

        TODO: Add your own Component here to demonstrate the ternary operator.
        <div className="flex justify-around"> 
          <LoginStatus isLoggedIn={true} /> 
          <LoginStatus isLoggedIn={false} />
        </div>
      </div>

    </div>
  );
}

// TASK 2: Use array destructuring inside your component to extract array values

// Example for Array Destructuring: You can use a prop or declare an array inside your component.
// Example array: const [firstName, lastName] = ["John", "Doe"];

function FruitStore() {
  const fruits = ["apples", "blueberries", "cherries"];
  // Destructure the fruit array
  const [f1, f2, f3] = fruits;

  return (
    <div className="p-4 m-2 border-2 border-slate">
      <h2 className="text-lg">Three fruits!</h2>
      <p>Fruit 1: {f1}</p>
      <p>Fruit 2: {f2}</p>
      <p>Fruit 3: {f3}</p>
    </div>
  );
}

// TODO: Create your own component to the ArrayDestructureDemo component

function ArrayDestructureDemo() {
  return (
    <div className="border-2 border-black rounded size-100">
      <h1 className="text-2xl">Array Destructuring Demo</h1>

      <div>
        <FruitStore />
        <BookDetails />
      </div>
      <div>

        TODO: Add your own Component here to demonstrate array destructuring.

      </div>

    </div >
  );
}


function BookDetails() {
  const books = ["1984", "Animal Farm", "Brave New World"];
  const [book1, book2, book3] = books;

  return (
    <div className="p-4 m-2 border-2 border-slate">
      <h2 className="text-lg">Favorite Books!</h2>
      <p>Book 1: {book1}</p>
      <p>Book 2: {book2}</p>
      <p>Book 3: {book3}</p>
    </div>
  );
}

// Render the App
function App() {
  return (
    <div>
      <TertiaryDemo />
      <ArrayDestructureDemo />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
