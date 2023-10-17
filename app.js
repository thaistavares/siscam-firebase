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
  /*
  // Referência à coleção 'Perfil'
  const profileCollection = db.collection('Perfil');
  
  // Função para consultar dados no Firestore
  function consultarDados() {
    profileCollection.get()
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

// Referência à coleção 'PessoaPerfil'
const pessoaPerfilCollection = db.collection('PessoaPerfil');

// Defina a condição de consulta (idPessoa igual a 2e3SXl5t6m7uRzyidwBY)
const query = pessoaPerfilCollection.where('idPessoa', '==', '2e3SXl5t6m7uRzyidwBY');

// Execute a consulta
query.get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const pessoaPerfil = doc.data();
      console.log(pessoaPerfil);
    });
  })
  .catch((error) => {
    console.error('Erro ao consultar dados: ', error);
  });
*/
  // Referência à coleção 'Pessoa'
const pessoaCollection = db.collection('Pessoa');

// Defina a condição de consulta (id igual a 2e3SXl5t6m7uRzyidwBY)
const query = pessoaCollection.where(firebase.firestore.FieldPath.documentId(), '==', '2e3SXl5t6m7uRzyidwBY');

// Execute a consulta
query.get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const pessoa = doc.data();
      console.log(pessoa);
    });
  })
  .catch((error) => {
    console.error('Erro ao consultar dados: ', error);
  });
  