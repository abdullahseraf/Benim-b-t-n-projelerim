
'use client';
import Header from "../../components/Header";
import styles from "./page.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

 function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [success, setSuccess] = useState(false);
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
    if (counter === 9) {
      setSuccess(true);
  };
  };

  useEffect(() => {
  }, [success]);

  useEffect(() => {
  }, [counter]);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
       <Header/> 
       {success && (
            <div>
              <h1 className={styles.messi}>Messi</h1>
              <p className={styles.messip}>İs your uncel</p>
            </div>
          )}
        <div className={styles.counter}>
         <button onClick={handleClick} className={styles.button}>Click Me</button>
         <h1>counter : {counter}</h1>
         <input className={styles.input} ref={inputRef} />
         <h1 className={styles.h1__input}>{inputRef.current?.value}</h1>
        </div>
       </main>
    </div>
  );
}

export default Home;