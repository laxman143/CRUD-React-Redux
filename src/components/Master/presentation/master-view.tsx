import React from 'react'
import Header from './header/header'
import Sidebar from './sidebar/sidebar'
import Footer from './footer/footer'
import { connect } from 'react-redux'

const MasterView: React.FC<any> = (props) => {
  const { isLogin } = props;
  return (
    <React.Fragment>
      <div className="row">
        {isLogin ? <Header></Header>  : ""} 
        {isLogin ?  <Sidebar></Sidebar> : "" }
        {props.children}
        {isLogin ?  <Footer></Footer> : "" }
      </div>
    </React.Fragment>
  )
}
const mapStateToProps = (state: any) => {
  return {
      isLogin: state.login.isLogin
  }
}

export default  connect(mapStateToProps,"")(MasterView)

