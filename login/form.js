function showSignUp() {
    document.getElementById('main').innerHTML=" <h1>SignUP page</h1><input type='text' placeholder='eg-xyz@gmail.com'><br><br><input type='password'><br><a href='funny.jpg' target='blank'>I am human</a><br><br><div><tr><td><button onclick=' showLogin()'>Login</button></td><td>"   
  }

function showLogin(){
    document.getElementById('main').innerHTML=" <h1>Login page</h1><input type='text'  placeholder='eg-xyz@gmail.com'><br><br><input type='password'><br><a href='funny.jpg' target='blank'>I am human</a><br><br><div><tr><td><button onclick=' showLogin()'>Login</button></td><td>   <button onclick='showSignUp()'>Signup</button></td></tr> </div>"
     
  
}


//  function login_flip()
// {
//    ("#loginform").css({"-webkit-transition":"-webkit-transform 0.9s","transition":" transform 0.9s"});
//    ("#loginform").css({"-moz-transform":"scaleX(1)","-o-transform":"scaleX(1)","-webkit-transform":"scaleX(1)","transform":"scaleX(1)"});
//    ("#container").css("-webkit-transform","scaleX(1)");
//   document.getElementById("container").innerHTML="<p>User Id</p><input type='text'><p>Password</p><input type='password'><br><input type='submit' value='Login'><input type='button' value='Click For SignUp!' onclick='signup_flip();'>";
// }

// function signup_flip()
// {
//    ("#loginform").css({"-webkit-transition":"-webkit-transform 0.9s","transition":" transform 0.9s"});
//    ("#loginform").css({"-moz-transform":"scaleX(-1)","-o-transform":"scaleX(-1)","-webkit-transform":"scaleX(-1)","transform":"scaleX(-1)"});
//    ("#container").css("-webkit-transform","scaleX(-1)");
//   document.getElementById("container").innerHTML="<p>User Name</p><input type='text'><p>Email Id</p><input type='text'><p>Password</p><input type='password'><br><input type='submit' value='SignUp'><input type='button' value='Click For Login!' onclick='login_flip();'>";
// }
 
