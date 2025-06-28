const express = require("express");
const mongoose = require("mongoose");
const app = express();
let port = 8080;
const PostChat = require("./models/postchat");
const path = require("path");
const { uuid } = require('uuidv4');
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const chat = require("./models/chat");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// connect to mongo db
main()
    .then(() => {
        console.log("database is working");
    })
    .catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wa');
}
// connect with server or database (SQL)
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mysql@2409!',
    database: 'sql_web'
});
// this is my home page
app.get("/posts", (req, res) => {
    let data = req.body;
    console.log(data);
    let q = "select * from posts ";
    try {
        connection.query(q, [data], (error, results) => {
            if (error) throw error;
            let posts = results;
            res.render("index.ejs", { posts });
        });
    } catch (error) {
        console.log(error);
    };
});
//chat page
app.get("/posts/chat", async (req, res) => {
    let chats = await chat.find();
    res.render("chat_page.ejs", { chats });
})
// create new chat
app.get("/posts/chat/new_chat", (req, res) => {
    res.render("new_chat.ejs");
});

app.post("/posts/chat", (req, res) => {
    let { from, to, msg } = req.body;
    let new_chat = new chat({
        from: from,
        to: to,
        msg: msg,
        create_at: new Date()
    })

    new_chat
        .save()
        .then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    res.redirect("/posts/chat")
});
//edit chat page
app.get("/posts/chat/:id/edit", async (req, res) => {
    let { id } = req.params;
    let chats = await chat.findById(id);
    res.render("edit_chat.ejs", { chats });
});

app.put("/posts/chat/:id", async (req, res) => {
    let { id } = req.params;
    let { msg : newmsg } = req.body;
    let updatemsg = await chat.findByIdAndUpdate(
        id,
        { msg : newmsg },
        {runValidators : true , new : true}
    )
    console.log(updatemsg);
    res.redirect("/posts/chat")
})
//delete chat
app.delete("/posts/chat/:id",async(req,res)=>{
    let { id } = req.params;
    let deleteChat = await chat.findByIdAndDelete(id);
    console.log(deleteChat);
    res.redirect("/posts/chat");
})
//open post chat
app.get("/posts/:id/chat", async (req, res) => {
    const { id } = req.params;
    const messages = await PostChat.find({ postId: id });
    res.render("post_chat.ejs", { postId: id, messages });
});
app.post("/posts/:id/chat", async (req, res) => {
    const { id } = req.params;
    const { from, msg } = req.body;
    await PostChat.create({ postId: id, from, msg });
    res.redirect(`/posts/${id}/chat`);
});

//delete post

app.delete("/posts/:postId/chat/:msgId", async (req, res) => {
    const { postId, msgId } = req.params;
    await PostChat.findByIdAndDelete(msgId);
    res.redirect(`/posts/${postId}/chat`);
});

// create page
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts/new", (req, res) => {
    const { username, content, img, Number, age, city, district, state, country, dob, hostel, study, hobby } = req.body;

    const id = uuid();

    const q = `INSERT INTO posts (id, username, content, img, Number, age, city, district, state, country, dob, hostel, study, hobby)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const values = [id, username, content, img, Number, age, city, district, state, country, dob, hostel, study, hobby];

    try {
        connection.query(q, values, (err, results) => {
            if (err) throw err;
            console.log("Post inserted:", results);
            res.redirect("/posts");
        });
    } catch (error) {
        console.error(error);
        res.send("Something went wrong!");
    }
});


//details page
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let q = `select * from posts where id = "${id}"`;
    try {
        connection.query(q, (error, results) => {
            if (error) throw error;
            console.log(results);
            let post = results[0];
            res.render("show.ejs", { post });
        });
    } catch (error) {
        console.log(error);
    };
});
//  edit page
app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    q = `select * from posts where id = "${id}"`;
    try {
        connection.query(q, [id], (error, results) => {
            if (error) { throw error };
            console.log(results);
            let post = results[0];
            res.render("edit.ejs", { post });
        });
    } catch (error) {
        console.log(error);
    };

});
app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newcontent = req.body.content;
    let newnumber = req.body.Number;
    let newage = req.body.age;
    let newcity = req.body.city;
    let newdistrict = req.body.district;
    let newstate = req.body.state;
    let newcountry = req.body.country;
    let newdob = req.body.dob;
    let newhostel = req.body.hostel;
    let newstudy = req.body.study;
    let newhobby = req.body.hobby;
    q = `select * from posts where id = "${id}"`;
    try {
        connection.query(q, [id], (error, results) => {
            if (error) { throw error } else {
                let q2 = `UPDATE posts set content = "${newcontent}", Number = "${newnumber}", age = "${newage}", city = "${newcity}", district = "${newdistrict}", state = "${newstate}", country = "${newcountry}", dob = "${newdob}", hostel = "${newhostel}", study = "${newstudy}", hobby = "${newhobby}" where id = "${id}"`;
                connection.query(q2, (error, results) => {
                    if (error) { throw error };
                    console.log(results);
                    res.redirect("/posts");
                });
            }
        });
    } catch (error) {
        console.log(error);
    };
});

//delete page
app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    let q = `delete from posts where id = "${id}"`;
    try {
        connection.query(q, (error, results) => {
            if (error) throw error;
            console.log(results);
            res.redirect("/posts");
        });
    } catch (error) {
        console.log(error);
    };

});

app.listen(port, () => {
    console.log(`this is the port ${port}`);
});