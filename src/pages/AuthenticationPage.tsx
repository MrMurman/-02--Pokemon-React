import React, { useState } from "react"
import { Box, Button, Card, CardContent, Typography, TextField } from "@mui/material"
import { createUserWithEmailAndPassword, signOut} from "firebase/auth"
import { auth } from "../firebase-config"

interface User {
  name: string;
  password: string;
}

export const AuthenticationPage = () => {

 
  const [newUser, setNewUser] = useState<User>({ name: "", password: "" })

  const register = async () => {
    try {

      const user = await createUserWithEmailAndPassword(auth, newUser.name, newUser.password)
      console.log(user, "user")

    } catch (error) {
      console.log(error, "error")
    }
  }

  const login = async () => {

  }

  const logout = async () => {
    await signOut(auth)
  }

  const style = {
    container: {
      // background: "red",
      marginLeft: "auto",
      marginRight: "auto",
      display: "flex",
      maxWidth: "600px",
      justifyContent: "space-between",
      "& > *": {
        marginBottom: "16px"
      }
    },
  } as const

 
  return (
    <div className="page" style={{height: '100%'}}>
      <Card sx={{ maxWidth: 500 , margin: "100px auto"}}>
  
        <CardContent>
          <Typography variant="h4" sx={{textAlign: "center"}}>Auth page</Typography>
          <Box sx={style.container}>
            <TextField
              label="User Name"
              variant="outlined"
              value={newUser.name}
              onChange={(e) =>
                setNewUser((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <TextField
              label="Password"
              variant="outlined"
              value={newUser.password}
              onChange={(e) =>
                setNewUser((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </Box>
          <Box sx={{display: "flex", justifyContent: "space-around"}}>
            <Button onClick={login} variant="outlined">Login User</Button>
            <Button onClick={register} variant="outlined">Register User</Button>
          </Box>
        </CardContent>
      </Card>
    </div>
  )
}
