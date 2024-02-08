import React, { useEffect, useState } from "react"
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  TextField,
} from "@mui/material"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../firebase-config"
import Person2Icon from "@mui/icons-material/Person2"

interface User {
  name: string;
  password: string;
}

export const AuthenticationPage = () => {
  const [newUser, setNewUser] = useState<User>({ name: "", password: "" })
  const [isUserAuthed, setIsUserAuthed] = useState(false)


  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsUserAuthed(true)
      } else {
        setIsUserAuthed(false)
      }
    })
  }, [onAuthStateChanged])

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        newUser.name,
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
        newUser.name,
        newUser.password
      )
      console.log(user, "user")
    } catch (error) {
      console.log(error, "error")
    }
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
        marginBottom: "24px",
      },
    },
  } as const

  return (
    <>
      {isUserAuthed ? (

        <Card sx={{ width: "700px", margin: "100px auto" }}>
          <CardContent>
            <Typography align="center" variant="h2">
            Profile
            </Typography>
            <Person2Icon fontSize="large" />
            <Box sx={{ alignContent: "center" }}>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="h6">User name</Typography>
                  <Typography variant="body2">John Doe</Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="h6">User email</Typography>
                  <Typography>{newUser.name}</Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="h6">Some other data</Typography>
                  <Typography>12ewqesa</Typography>
                </Box>
              </Box>
            </Box>
            <Button variant="contained" onClick={logout}>Log out</Button>
          </CardContent>
        </Card>
      ) : (
        <Card sx={{ maxWidth: 500, margin: "100px auto" }}>
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
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              <Button onClick={login} variant="outlined">
          Login User
              </Button>
              <Button onClick={register} variant="outlined">
          Register User
              </Button>
            </Box>
          </CardContent>
        </Card>
      )}
      
    </>
  )
}
