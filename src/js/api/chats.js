import db from '../db/firestore';

const extraSnapshotData = snapshot => 
snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))

export const fetchChats = () => 
  db
    .collection('chat')
    .get()
    .then(extraSnapshotData)
    // if you are fetching collection then data are provided under snapshot.docs
