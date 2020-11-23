import db from '../db/firestore';

export const fetchChats = () => 
  db
    .collection('chat')
    .get()
    .then(snapshot => 
    // if you are fetching collection then data are provided under snapshot.docs
    snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
)
