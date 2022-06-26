

sessions = [
    {   _id: "4234234234234",
        submission_ids: [
            "erfijsoreifdorf",
            "erfijsoreifdorf",
            "erfijsoreifdorf"
        ]
    }
]

submissions = [
    {
        _id: "erfijsoreifdorf",
        player_id: "9834ur9384ur9834ur",
        session_id: "s4e5ure45etu",
        submission:
            {
                text: "..."
            },
    }
]

players = [
    {
        _id: "9834ur9384ur9834ur",
        email: "a+x@gmail.com"
    },
    {
        _id: "9834ur9384ur9834ur",
        email: "a+y@gmail.com",
    }
]


const myURL="/draw?session" + session._id + "&player" + player._id

const sessionId = req.params[0]

// neDB verwenden, um session zu finden
session.find(session => session._id === sessionId)


