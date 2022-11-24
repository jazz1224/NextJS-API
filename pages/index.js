
import Link from "next/link";
import {useRef} from 'react'

export default function Home() {
  const emailInputRef = useRef()
  const feedbackInputRef = useRef()

  function submitHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    
  }

  return (
    <div>

      <h1>HI NEXT JS Head tag usage</h1>
      <main>
        <form>
          <div>
            <label htmlFor="email">Your Email Address</label>
            <input type="email" id="email" ref={emailInputRef} />
          </div>
          <div>
            <label htmlFor="feedback">Your Email Address</label>
            <textarea type="feedback" rows="5" ref={feedbackInputRef}/>
          </div>
          <button>send feedback</button>
        </form>
      </main>
      <br></br>
      <div>
        <Link href="/a">
          <button>To "a" page</button>
        </Link>
      </div>
    </div>
  );
}
