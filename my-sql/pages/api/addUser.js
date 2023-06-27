// export default function handler(req, res) {
//     // Get data submitted in request's body.
//     const body = req.body
   
//     // Optional logging to see the responses
//     // in the command line where next.js app is running.
//     console.log('body: ', body)
   
//     // Guard clause checks for username and email,
//     // and returns early if they are not found
//     if (!body.username || !body.email) {
//       // Sends a HTTP bad request error code
//       return res.status(400).json({ data: 'Username or email name not found' })
//     }
   
//     // Found the name.
//     // Sends a HTTP success code
//     res.status(200).json({ data: `${body.username} ${body.email}` })
//   }


import { addUser } from "@/models/db";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const { username, email } = req.body;

  const success = await addUser(username, email);

  if (success) {
    res.status(200).json({ message: 'User added successfully' });
  } else {
    res.status(500).json({ error: 'Error adding user' });
  }
}

