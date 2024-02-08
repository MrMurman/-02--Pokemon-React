import React, { useEffect, useState } from "react"
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../firebase-config"
import Person2Icon from "@mui/icons-material/Person2"
import { AuthCard } from "../components/AuthCard"

export interface User {
  mail: string;
  password: string;
}

export const AuthenticationPage = () => {
  const [userMail, setUserMail] = useState<User["mail"]>("")
  const [isUserAuthed, setIsUserAuthed] = useState(false)


  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsUserAuthed(true)
        setUserMail(user.email ?? "error")
      } else {
        setIsUserAuthed(false)
      }
    })
  }, [onAuthStateChanged])

  const logout = async () => {
    await signOut(auth)
  }

  const style = {
    cardContainer: {
      width: "500px",
      margin: "100px auto" 
    },
    userDetails: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
    },
  } as const

  return (
    <>
      {isUserAuthed ? (

        <Card sx={style.cardContainer}>
          <CardContent>
            <Typography align="center" variant="h2">
            Profile
            </Typography>
            <Person2Icon fontSize="large" />
            <Box sx={{ alignContent: "center" }}>
              <Box>
                <Box sx={style.userDetails}>
                  <Typography variant="h6">User name</Typography>
                  <Typography variant="body2">John Doe</Typography>
                </Box>

                <Box sx={style.userDetails}>
                  <Typography variant="h6">User email</Typography>
                  <Typography>{userMail}</Typography>
                </Box>

                <Box sx={style.userDetails}>
                  <Typography variant="h6">Some other data</Typography>
                  <Typography>12ewqesa</Typography>
                </Box>
              </Box>
            </Box>
            <Button variant="contained" onClick={logout}>Log out</Button>
          </CardContent>
        </Card>
      ) : (
        <AuthCard />
      )}
      
    </>
  )
}
