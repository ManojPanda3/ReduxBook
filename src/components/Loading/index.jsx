
const Loading = ({ children, childrenVisible, state = "" }) => {
  if (childrenVisible) return children;
  else return <div style={{
    scale: state ? "1" : "0",
    position: "fixed", top: "0px", left: "0px", width: "100vw", height: "100vh", background: "rgba(0,0,0, 0.33)", zIndex: "5", display: "flex", justifyContent: "center", alignItems: "center"
  }}>
    <div className={state ? state : ""} style={{ padding: "4.8rem", borderRadius: "1rem", fontSize: "4rem", animation: state == "" ? "" : "appear 500ms ease-in" }
    } >
      {
        state == "success"
          ? <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" style={{ rotate: "10deg" }} width="1em" height="1em">
            <path d="M34.459 1.375a2.999 2.999 0 0 0-4.149.884L13.5 28.17l-8.198-7.58a2.999 2.999 0 1 0-4.073 4.405l10.764 9.952s.309.266.452.359a2.999 2.999 0 0 0 4.15-.884L35.343 5.524a2.999 2.999 0 0 0-.884-4.149z" fill="white" />
          </svg>
          : state == "fail" ? <svg viewBox="6 6 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" height="1em" width="1em">
            <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="white" />
          </svg>
            : state == "loading" ? <div className="loader"></div>
              : <></>
      }
    </div >
  </div >
}

export default Loading;
