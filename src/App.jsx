
import './App.css'
// import CustomHook from './components/CustomHook/CustomHook'
import ReusableForm from './components/ReusableForm/ReusableForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StateFulForm from './components/StateFulForm/StateFulForm'

          function App() {
          
          const signUp=(data)=>{
           
            console.log('This is SignUp Data',data);
          }

          const signIn=(data)=>{

            console.log('This is SignIn Data',data);
              
          }

  return (
    <>
      <div>
        
        {/* <SimpleForm></SimpleForm> */}
        {/* <StateFulForm></StateFulForm> */}

        {/* <RefForm></RefForm> */}
        {/* <CustomHook></CustomHook> */}
        <ReusableForm text="Sign Up" handleSubmit={signUp} submitBtn="Submit"> 
          <div>
          <h3>Sign Up </h3>
          </div>
        </ReusableForm>

        <ReusableForm text="Sign In" handleSubmit={signIn}>
        <div>
          <h3>Sign In </h3>
          </div>
        </ReusableForm>
      </div>
    </>
  )
}

export default App
