export const getCumpleañosPersonas = (fecha,dataPersonaCumpleaños) => {
    firebase.firestore().collection('cumpleanos').where("FechaNacimiento","==",fecha )
    // firebase.firestore().collection('cumpleanos')
      .onSnapshot((querySnapshot) => {
        const array = [];
        querySnapshot.forEach((doc) => {
          array.push({ id: doc.id, ...doc.data() });
          console.log(array);
        });
        
        dataPersonaCumpleaños(array);
      });
  };