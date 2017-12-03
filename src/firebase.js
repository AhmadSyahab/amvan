import  { initializeApp } from 'firebase'


const app = initializeApp({
	databaseURL: "https://amvan-4cd31.firebaseio.com",
	projectId: "amvan-4cd31",
});
	
export const db = app.database();
export const amvanRef = db.ref('amvan')