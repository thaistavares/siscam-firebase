// Configure o Firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDgAGDKvbFQxE5SgWf3IyVYMwDTG_CgbHM",
    authDomain: "siscam-49cd2.firebaseapp.com",
    projectId: "siscam-49cd2",
    storageBucket: "siscam-49cd2.appspot.com",
    messagingSenderId: "1003503587002",
    appId: "1:1003503587002:web:1c45c8ad43e5f54668bc83",
    measurementId: "G-Z3RV80261P"
  };
  
  // Inicialize o Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Inicialize o Cloud Firestore
  const db = firebase.firestore();
  
  // Referência à coleção 'exemplo'
  const exemploCollection = db.collection('Perfil');
  
  // Função para consultar dados no Firestore
  function consultarDados() {
    exemploCollection.get()
      .then((querySnapshot) => {
        const dataList = document.getElementById('data-list');
        dataList.innerHTML = ''; // Limpar a lista antes de recriá-la
  
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          displayData(data);
        });
      })
      .catch((error) => {
        console.error('Erro ao consultar dados: ', error);
      });
  }
  
  // Função para exibir dados na lista
  function displayData(data) {
    const dataList = document.getElementById('data-list');
    const dataItem = document.createElement('li');
    dataItem.textContent = JSON.stringify(data);
    dataList.appendChild(dataItem);
  }
  
  // Chame a função de consulta ao carregar a página
  consultarDados();
  