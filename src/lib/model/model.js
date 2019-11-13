export const getCumpleañosPersonas = (dataPersonaCumpleaños) => {
    firebase.firestore().collection('cumpleanos')
      .onSnapshot((querySnapshot) => {
        const array = [];
        querySnapshot.forEach((doc) => {
          array.push({ id: doc.id, ...doc.data() });
          console.log(array);
        });
        
        dataPersonaCumpleaños(array);
      });
  };