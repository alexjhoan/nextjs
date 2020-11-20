// import React from 'react'
// import Navbar from '../navbar/Navbar'

// const Layout:React.FC = ({children}) => {
// 	return (
// 		<React.Fragment>
// 			<Navbar />
// 			{children}
// 			<footer>this is the footer</footer>
// 		</React.Fragment>
// 	)
// }

// export default Layout

import React from 'react'
import Navbar from '../navbar/Navbar'

export default function Layout(props: any) {
  return (
    <React.Fragment>
      <Navbar />
      {props.children}
      <footer>this is the footer</footer>
    </React.Fragment>
  )
}
