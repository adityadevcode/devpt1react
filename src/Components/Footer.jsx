const Footer = ({length}) => {
  // const today = new Date();

  return (
      <footer>
        <h3>Footer Component</h3>
          {/* <p>Copyright &copy; {today.getFullYear()}</p> */}
     <p>{length} List {length === 1 ? "item":"items"} </p>
      </footer>
  )
}

export default Footer
