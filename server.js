//console.log("Ambivalent") 
//console.log("Ambivalence") 

const express = require('express')//require express library
const app = express()// call the express using the app variable 

const jwt = require('jsonwebtoken()')

app.use(express.json)


//creation of Posts status
const Posts = [ // will return list of posts
    {
        username : 'Kyle',
            title: 'Post 1'
    },
    {
        username : 'Kim',
            title: 'Post 2'
    }
]

app.get('/posts',authenticateToken,(req,res) =>{//to return our posts
 res.json(posts)
})

app.get('/login',(req,res) =>{//to fully login //changing to POST 
 //authenticate user
 const username = req.body.username
 const user = {name : username}  

 const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
 res.json({accessToken : accessToken })

})

function authenticateToken(req,res,nex){ // function for the authentication of token
  const authHeader = req.Headers['authorization'] 
  const token = authHeader && authHeader.split('')[1] 
  if(tpken == null) return res.sendStatus(401)

    //enabled to verify token
    jwt.verify(token,process,env,ACCESS_TOKEN_SECRET,(err,user)=>{
        if(err) return res.sendStatus(403) 
        req.user = user 
        next()

    })
}

app.listen(3000)//app listening through port 3000





