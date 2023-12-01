<template>
  <div class="mt-3">     
    <div class="centraliza ajuste_lagura_altura pb-4">
      <header-component class="text-center"/>
      <h4 class="mt-3 mb-3 text-center">Fomulário Cadastro Usuário</h4>     
      <message-component :msg="msg" v-show="msg" />
      <div class="container">
        <form @submit.prevent = "createForm()" name="form_cadastrar">
          <!--Nome-->
          <div class="form-group">
            <div class="row">
              <div class="col-12">
                <label for="name">Nome e Sobrenome</label>
                <input type="text" class="form-control" v-model="name" id="name" aria-describedby="emailHelp" placeholder="Digite seu nome e sobrenome">
              </div>
            </div>
          </div>
          <!--Email-->
          <div class="form-group mt-3">
            <div class="row">
              <div class="col-12">
                <label for="email">Email</label>
              <input type="email" class="form-control" v-model="email" id="email" placeholder="example@email.com">
              </div>
            </div>        
          </div>
          <!--Contato-->
          <div class="form-group mt-3">
            <div class="row">
              <div class="col-12">
                <label for="contact">Número para contato</label>
                <input type="texte" class="form-control" v-model="contact" id="contact" placeholder="Digite número para contato">
              </div>
            </div>        
          </div>

          <!--Select-->
          <div class="form-group mt-3">
            <div class="row">
              <div class="col-12">
                <label for="contact">Como nos conheceu?</label>
                <select v-model="options" id="options" class="form-select" aria-label="Default select example">
                  <option>Linkedin</option>
                  <option>Facebook</option>
                  <option>Instagram</option>
                  <option>Evento Presencial</option>
                </select>
              </div>
            </div>
          </div>
          <button type="submit" class="mt-5 btn btn-danger">Salvar</button>
        </form>
      </div>
    </div>
    <!--Footer-->
    <footer-component />  
  </div>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import db from "./firebase/firebaseConfig.js"
import { collection, addDoc } from 'firebase/firestore'
import MessageComponent from './components/MessageComponent.vue'

 
export default {
  name: 'FormView',  
  data() {
    return{
      name: "",
      email: "",
      contact: "",
      options: ""
    }    
  },
  methods: {
    async createForm(){
      const colRef = collection(db, 'teste_buuk')
      const dataObj = {
        name: this.name,
        email: this.email,
        contact: this.contact,
        options: this.options
      }
      this.msg = "Cadastro realizado com sucesso!"
      await addDoc(colRef,dataObj)

      
      // if(docRef){
        
      //   var form = document.getElementsByName('form_cadastrar')[0];
      //   form.reset()
        
      // }else{
      //   console.log("Error")
      // }
      
    }
  },
  components: {
    FooterComponent,
    HeaderComponent,
    MessageComponent
  }
}
</script>

// data(){
//,
    MessageComponent     return{
//       name: "",
//       email: "",
//       contact: "",
//       option_select: ""
//     }
//   },
//   methods: {
//     submit(){
//       const userObject = {
//         name: this.name,
//         email: this.email,
//         contact: this.contact,
//         option_select: this.option_select
//       }

//       localStorage.setItem("userObject", JSON.stringify(userObject))
//     }
//   },
//   mounted(){
//     const savedUser = localStorage.getItem("userObject")

//     if(savedUser) {
//       console.log('caiu aqui')
//       console.log("usuario do localStorage")
//       console.log(JSON.parse(savedUser))
//     } 
//     else {
//       console.log("usuario não existe no localStorage")
//     }
//   },
