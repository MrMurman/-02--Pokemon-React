import { Box, Button, Card, CardContent, TextField, Typography } from "@mui/material"
import React, { useState } from "react"
import { User } from "../pages/AuthenticationPage"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase-config"


export const AuthCard = () => {
  const [newUser, setNewUser] = useState<User>({ mail: "", password: "" })

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        newUser.mail,
        newUser.password
      )
      console.log(user, "user")
    } catch (error) {
      console.log(error, "error")
    }
  }
    
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        newUser.mail,
        newUser.password
      )
      console.log(user, "user")
    } catch (error) {
      console.log(error, "error")
    }
  }
    
  const style = {
    cardContainer: {
      maxWidth: 500,
      margin: "100px auto" 
    },
    container: {
      marginLeft: "auto",
      marginRight: "auto",
      display: "flex",
      maxWidth: "600px",
      justifyContent: "space-between",
      "& > *": {
        marginBottom: "24px",
      },
    },
    buttonRow: {
      display: "flex",
      justifyContent: "space-around"
    },
  } as const

  return (
    <Card sx={style.cardContainer}>
      <CardContent>
        <Typography
          variant="h5"
          sx={{ textAlign: "center", paddingBottom: "24px" }}
        >
        Please, enter your credentials
        </Typography>
        <Box sx={style.container}>
          <TextField
            label="User E-mail"
            variant="outlined"
            value={newUser.mail}
            onChange={(e) =>
              setNewUser((prev) => ({ ...prev, mail: e.target.value }))
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
        <Box sx={style.buttonRow}>
          <Button onClick={login} variant="outlined">
          Login User
          </Button>
          <Button onClick={register} variant="outlined">
          Register User
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}
