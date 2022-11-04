import React from "react";
import "./Header.css";

const Header = ({
  revenueType,
  handleRevenueChange,
  children,
  hasHiddenAuthButtons,
  timer,
}) => {
  //console.log(children);
  // const history = useHistory();
  //const navigate = useNavigate();
  return (
    <div className="header" aria-colspan={2}>
      <select id="dropdown">
        <option value="All">All Revenue Type</option>
        <option value="1">Revenue Type 1</option>
        <option value="2">Revenue Type 2</option>
        <option value="3">Revenue Type 3</option>
      </select>
      <div className="login_detail">Hi, John Doe</div>
    </div>
    // <Box className="header">
    //   {/* <Box className="header-title">
    //     <img src="logo_light.svg" alt="QKart-icon"></img>
    //   </Box> */}
    //   {children && (
    //     <Box width={400} m={2}>
    //       <select
    //         fullWidth
    //         value={revenueType}
    //         onChange={(e) => {
    //           handleRevenueChange(e,timer);
    //         }}
    //         name="selectRevenueType"
    //       />
    //     </Box>
    //   )}
    //   {hasHiddenAuthButtons ? (
    //     window.localStorage.getItem("token") &&
    //     window.localStorage.getItem("username") ? (
    //       <Stack spacing={2} direction="row">
    //         {/* <Avatar
    //           alt={window.localStorage.getItem("username")}
    //           src="/avatar.png"
    //         /> */}
    //           <Box display="flex" justifyContent="center" alignItems="center">
    //           {window.localStorage.getItem("username")}
    //         </Box>
    //         <Button
    //           onClick={() => {
    //             window.localStorage.setItem("token", "");
    //             window.localStorage.setItem("username", "");
    //             window.localStorage.setItem("balance", "");
    //             window.location.reload();
    //           }}
    //           className="logout-button"
    //           variant="text"
    //         >
    //           LOGOUT
    //         </Button>
    //       </Stack>
    //     ) : (
    //       <Stack spacing={2} direction="row">
    //         <Button
    //           onClick={() => {
    //           //  navigate('/login');
    //             // history.push("/login", { from: window.location.pathname });
    //           }}
    //           className="login-button"
    //           variant="text"
    //         >
    //           LOGIN
    //         </Button>
    //         <Button
    //           onClick={() => {
    //            // navigate('/register');
    //             // history.push("/register", { from: window.location.pathname });
    //           }}
    //           className="register-button"
    //           variant="contained"
    //         >
    //           REGISTER
    //         </Button>
    //       </Stack>
    //     )
    //   ) : (
    //     <Button
    //       className="explore-button"
    //       startIcon={<ArrowBackIcon />}
    //       variant="text"
    //       onClick={() => {
    //       //  navigate('/');
    //         // history.push("/", { from: window.location.pathname });
    //       }}
    //     >
    //       BACK TO EXPLORE
    //     </Button>
    //   )}
    // </Box>
  );
};

export default Header;
