import { useEffect } from "react";
import "./styles.css";

function App() {
  // used useEffect to find every a and add an EventListener onclick corresponding a index with respective audio number
  useEffect(() => {
    const keys = document.querySelectorAll("a");
    keys.forEach((key, index) => {
      key.addEventListener("click", (event) => {
        event.preventDefault();
        new Audio(`./audio/key-${index + 1}.mp3`).play();
      });
    });
  }, []);

  return (
    <div className="piano">
      <svg
        width={1387}
        height={467}
        viewBox="0 0 1387 467"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        {/* white keys */}
        <a href="/">
          <path
            className="white-keys"
            d="M638.996 44.2128L740.544 30.4131L714.007 451.115H651.516L638.996 44.2128Z"
          />
        </a>
        <a href="/">
          <path
            className="white-keys"
            d="M627.456 442.886L525.908 456.686L552.445 35.9836L614.936 35.9836L627.456 442.886Z"
          />
        </a>
        <a href="/">
          <path
            className="white-keys"
            d="M942.914 437.315L841.366 451.115L867.903 30.4131L930.395 30.4131L942.914 437.315Z"
          />
        </a>
        <a href="/">
          <path
            className="white-keys"
            d="M323.538 49.7834L425.086 35.9836L398.549 456.686L336.057 456.686L323.538 49.7834Z"
          />
        </a>
        <a href="/">
          <path
            className="white-keys"
            d="M1266.25 51.0879L1367.8 37.2881L1341.26 457.99H1278.77L1266.25 51.0879Z"
          />
        </a>
        <a href="/">
          <path
            className="white-keys"
            d="M1266.25 444.19L1179.45 457.99L1170.96 37.2881L1244.45 37.2881L1266.25 444.19Z"
          />
        </a>
        <a href="/">
          <path
            className="white-keys"
            d="M0.198484 42.9083L86.9996 29.1086L95.4927 449.811L22.0025 449.811L0.198484 42.9083Z"
          />
        </a>
        <a href="/">
          <path
            className="white-keys"
            d="M1166.36 426.108L1066.54 449.292L1053.83 27.9453L1132.51 27.9451L1166.36 426.108Z"
          />
        </a>
        <a href="/">
          <path
            className="white-keys"
            d="M100.091 60.9909L199.916 37.8068L212.62 459.154L133.938 459.154L100.091 60.9909Z"
          />
        </a>
        <a href="/">
          <path
            className="white-keys"
            d="M1052.91 462.278L964.417 453.282L971.021 31.7954L1033.44 28.8389L1052.91 462.278Z"
          />
        </a>
        <a href="/">
          <path
            className="white-keys"
            d="M213.545 24.821L302.035 33.8169L295.431 455.303L233.01 458.26L213.545 24.821Z"
          />
        </a>
        <a href="/">
          <path
            className="white-keys"
            d="M751.992 30.4131L855.696 30.4131L813.855 451.115H742.286L751.992 30.4131Z"
          />
        </a>
        <a href="/">
          <path
            className="white-keys"
            d="M514.46 456.686L410.756 456.686L452.597 35.9836L524.166 35.9836L514.46 456.686Z"
          />
        </a>
        {/* black keys */}
        <a href="/">
          <path
            className="black-keys"
            d="M50.2409 20.4357L121.598 19.5728L127.98 269.937L71.194 270.624L50.2409 20.4357Z"
          />
        </a>
        <a href="/">
          <path
            className="black-keys"
            d="M255.13 11.8923L188.438 13.8596L189.947 264.228L243.021 262.663L255.13 11.8923Z"
          />
        </a>
        <a href="/">
          <path
            className="black-keys"
            d="M666.823 23.7702L600.131 25.7375L601.64 276.106L654.713 274.541L666.823 23.7702Z"
          />
        </a>
        <a href="/">
          <path
            className="black-keys"
            d="M416.443 9.5631L459.528 15.9547L445.694 265.656L411.407 260.57L416.443 9.5631Z"
          />
        </a>
        <a href="/">
          <path
            className="black-keys"
            d="M826.095 8.69799L877.949 11.8464L878.363 262.021L837.098 259.516L826.095 8.69799Z"
          />
        </a>
        <a href="/">
          <path
            className="black-keys"
            d="M980.986 291.443L921.019 285.153L935.293 13.1079L983.015 18.1132L980.986 291.443Z"
          />
        </a>
        <a href="/">
          <path
            className="black-keys"
            d="M1188.97 286.865L1134.4 284.46L1127.89 12.187L1171.32 14.1007L1188.97 286.865Z"
          />
        </a>
        <a href="/">
          <path
            className="black-keys"
            d="M1286.92 279.16L1232.57 273.722L1241.22 1.50762L1284.47 5.8349L1286.92 279.16Z"
          />
        </a>
        <a href="/">
          <path
            className="black-keys"
            d="M1384.88 289.883L1330.52 284.445L1321.41 28.6993L1382.42 16.5584L1384.88 289.883Z"
          />
        </a>
        <a href="/">
          <path
            className="black-keys"
            d="M499.081 14.3453L557.845 15.7525L562.558 265.969L515.794 264.849L499.081 14.3453Z"
          />
        </a>
      </svg>
    </div>
  );
}

export default App;
