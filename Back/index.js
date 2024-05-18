var express = require("express");
var multer = require("multer");
var upload = multer();
var app = express();
var cors = require("cors");
const { MongoClient } = require("mongodb");
var bcrypt = require("bcrypt");
const port = 8000;
//or  const MongoClient = require('mongodb').client;
app.use(cors());
async function creatDb(role) {
  var url = "mongodb://0.0.0.0:27017/";
  const client = new MongoClient(url);
  var db = client.db("E-learning");
  if (role == "Student") {
    var collection = db.collection("Student");
    console.log("collection", collection);
    return collection;
  } else {
    var collection = db.collection("Faculty");
    console.log("Faculty", collection);
    return collection;
  }
}
//register API endpoint
app.post("/api/register", upload.array(), async function (req, res) {
  var name =
    req.body.name != null || 
    req.body.name != undefined || 
    req.body.name != ""
      ? req.body.name
      : "";
  var email =
    req.body.email != null ||
    req.body.email != undefined ||
    req.body.email != ""
      ? req.body.email
      : "";
  var password =
    req.body.password != null ||
    req.body.password != undefined ||
    req.body.password != ""
      ? req.body.password
      : "";
  var m_no =
    req.body.mobile != null ||
    req.body.mobile != undefined ||
    req.body.mobile != ""
      ? req.body.mobile
      : "";
  var hashPassword = await bcrypt.hash(password, 10);
  var response = await creatDb();
  if (name == "" || email == "" || password == "" || m_no == "") {
    res.send({
      message: "email or password,name and mobile should be required",
      status: 0,
    });
  } else {
    var data = await response.insertOne({
      name: name,
      email: email,
      password: hashPassword,
      m_no: m_no,
    });
    console.log("data", data);
    if (data) {
      var nodemailer = require('nodemailer');
      var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "1d0b826a023993",
          pass: "abadd6a5ddf934"
        }
      });
      const info = await transport.sendMail({
        from: '1d0b826a023993', // sender address
        to: email, // list of receivers
        subject: "test our first mailer", // Subject line
        text: "hello all, how are you", // plain text body
        html: "<b>open gangnam style</b>", // html body
      });
      if(info){
        res.send({ message: "user resistered successfully and mail successfully send", status: 1 });
      }
      else{
        res.send({ message: "user resistered successfully but mail not successfully send", status: 0});
      }
      
    } else {
      res.send({ message: "user not resistered successfully", status: 0 });
    }
  }
});

//login API endpoint
app.post("/api/login", upload.single(), async function (req, res) {
  var email = req.body.email;
  var password = req.body.password;
  var response = await creatDb();
  var data = await response.find({ email: email }).toArray();
  console.log("data", data);
  //  return;
  if (data.length > 0) {
    bcrypt.compare(password, data[0].password, function (err, result) {
      if (err) {
        console.log("error in comparing gthe password", err);
        res.send({
          message: "password did not matched",
          status: 0,
        });
      } else {
        if (result) {
          if (email == data[0].email) {
            res.send({
              message: "user logged in successfully",
              status: 1,
              name: data[0].name,
            });
          } else {
            res.send({
              message: "Please enter correct email or password",
              status: 0,
            });
          }
        } else {
          res.send({
            message: "Password not matched",
            status: 0,
          });
        }
      }
    });
  } else {
    res.send({
      message: "You are not registered with us please register first",
      status: 0,
    });
  }
});

//All user data endpoint
app.get("/api/users", async function (req, res) {
  var response = await creatDb("teachers");
  var data = await response.find().toArray();
  if (data) {
    console.log("all user data", data);
    res.json({ message: "user fetched susseccfully", status: 1, data: data });
  } else {
    res.send({ message: "user not found", status: 0 });
  }
});
//specific user data endpoint
app.get("/api/users/:email", async function (req, res) {
  console.log("req.params =", req.params);
  var email = req.params.email;
  console.log("email =", email);
  var response = await creatDb();
  var data = await response.find({ email: email }).toArray();
  console.log("data =", data.length);
  if (data.length) {
    console.log("all user data", data);
    res.send({ message: "user fetched susseccfully", status: 1, data: data });
  } else {
    res.send({ message: "user not found", status: 0 });
  }
});

//Delete user api endpoint
app.post("/api/delete/:email", async function (req, res) {
  console.log("req.params =", req.params);
  var email = req.params.email;
  var response = await creatDb("teachers");
  var data = await response.find({ email: email }).toArray();
  console.log("data =", data.length);
  if (data.length) {
    var data = await response.deleteOne({ email: email });
    if (data) {
      console.log("all user data", data);
      res.send({ message: "user deleted susseccfully", status: 1, data: data });
    } else {
      res.send({ message: "user not deleted susseccfully", status: 0 });
    }
  } else {
    res.send({ message: "user not found", status: 0 });
  }
});

//update user endpoint
//Update user api endpoint
app.post("/api/update/:email", upload.single(), async function (req, res) {
  console.log("req.params =", req.params);
  var email = req.params.email;
  var newEmail = req.body.newEmail;
  var name = req.body.name;
  var response = await creatDb();
  var data = await response.find({ email: email }).toArray();
  console.log("data =", data.length);
  if (data.length) {
    var data = await response.updateMany(
      { email: email },
      { $set: { email: newEmail, name: name } }
    );
    if (data) {
      console.log("all user data", data);
      res.send({ message: "user updated susseccfully", status: 1, data: data });
    } else {
      res.send({ message: "user not updated susseccfully", status: 0 });
    }
  } else {
    res.send({ message: "user not found", status: 0 });
  }
});

// forgot password api endpoint
app.post(
  "/api/user/reset_password",
  upload.single(),
  async function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    console.log("password reset",password)
    var response = await creatDb();
    var hash=await bcrypt.hash(password,10);
    console.log("password hash",hash)
    var data = await response.find({ email: email }).toArray();
    if (data.length > 0) {
      var result = await response.updateMany(
        { email: email },
        { $set: { email: email, password: hash } }
      );
      if (result.modifiedCount == 1) {
        res.send({ message: "password updated successfully", status: 1 });
      } else {
        res.send({ message: "password not updated ", status: 0 });
      }
    } else {
      res.send({ message: "User not found please register first ", status: 0 });
    }
  }
);

app.listen(port, function () {
  console.log("server is running on port", port);
});
