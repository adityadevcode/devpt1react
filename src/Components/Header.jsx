// import React from 'react'

// export default function Header() {
//   return (
//     <header>
//         <h3>Header Component</h3>
//     </header>
//   )
// }

//Adding styling

// import React from 'react'

// export default function Header() {
//   return (
//     <header style={{ //here we are using obj keys and props
//       backgroundColor:'mediumblue',
//       color:'#fff'
//     }}>
//       <p>Header component</p>Header
//       </header>
//   )
// }

//we can use styled components
//first approach inline the styles in jsx
//second appraoch we can assign to varible

// const Header = () => {
//   const headerStyle = {
//     backgroundColor:'mediumblue',
//     color:'#fff'
//   };


//   return (
//     <header style ={headerStyle }>
//       <h1>This is Header Component</h1>
//     </header>
//   )
// }

// export default Header;

// create App.css seperate file


// const Header = (props) => {

//     return (
//         <header>
//             <h1>{props.title}</h1>
//         </header>
//     )
// }

// export default Header;

// destructure props

const Header = ({title}) => {

    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}

// default props
Header.defaultProps = {
    title:"Default Title"
}

export default Header;
// here parent component is app.js and child is header
// we are passing props from app.js and receiving in header  comp
// we can destructure the props


