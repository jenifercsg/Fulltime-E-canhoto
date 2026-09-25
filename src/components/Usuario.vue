<template>

    <div class="card col-lg-11 mx-auto mt-5">

        <br><br>
        <div class="row">
            <h1 class="text-center mb-5 mt-5 text-cadastro">{{ $t('registration.title') }}</h1>
            <div class="col-lg-3">
                <div class="container d-flex justify-content-center align-items-center">
                    <div class="rounded-circle-container rounded-circle">
                        <img :src="imageUrl" alt="Imagem de exemplo">
                    </div>
                </div>

                <div class="text-center mt-2">
                    <FileUpload :chooseLabel="$t('registration.profileImage')" mode="basic" name="demo[]" accept="image/*"
                        :maxFileSize="1000000" @upload="onUpload" />
                </div>
            </div>
            <div class="col-lg-9">
                <div class="row">

                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="inputNome" class="form-label">{{ $t('registration.name') }} *</label>
                            <input type="text" class="form-control" id="inputNome" placeholder="Ex: Eduardo"
                                v-model="post.nome">
                        </div>

                    </div>

                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="inputSobrenome" class="form-label">{{ $t('registration.surname') }} *</label>
                            <input type="text" class="form-control" id="inputSobrenome" placeholder="Ex: Evaristo"
                                v-model="post.sobrenome">
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-grouo">
                            <label for="inputEmail" class="form-label">{{ $t('registration.email') }} *</label>
                            <input type="email" class="form-control" id="inputEmail"
                                placeholder="Ex: seuemail@gmail.com" v-model="post.email" />
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="inputSenha" class="form-label">{{ $t('registration.password') }} *</label>
                            <input type="password" class="form-control" id="inputSenha" placeholder="minhasenha"
                                v-model="post.senha">
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="form-group">
                            <label for="inputNascimento" class="form-label">{{ $t('registration.birthDate') }} *</label>
                            <input type="date" class="form-control" id="inputNascimento" v-model="post.dataNascimento">
                        </div>
                    </div>


                    <div class="col-md-6">
                        <label for="inputCidade" class="form-label">{{ $t('registration.city') }} *</label>
                        <input type="text" class="form-control" id="inputCidade" placeholder="Ex: Marília"
                            v-model="post.cidade">
                    </div>

                    <div class="col-md-6">
                        <label for="inputCEP" class="form-label">{{ $t('registration.zip') }} *</label>
                        <input type="text" class="form-control" id="inputCEP" placeholder="Ex: 00000-000"
                            v-model="post.cep">
                    </div>
                    <div class="col-md-6">
                        <label for="inputPais" class="form-label">{{ $t('registration.country') }} *</label>
                        <input type="text" class="form-control" id="inputPais" placeholder="Ex: Brasil"
                            v-model="post.pais">
                    </div>

                    <div class="col-md-12">
                        <div class="form-group mt-3">
                            <label for="inputEndereco" class="form-label">{{ $t('registration.address') }} *</label>
                            <input type="text" class="form-control" id="inputEndereco"
                                placeholder="Ex: Rua Thomas Alcade, 170 - Jardim Alguma coisa"
                                v-model="post.endereco">
                        </div>
                    </div>

                    <div class="col-lg-11 mt-5 d-flex flex-sm-row-reverse">
                        <button class="btn btn-success botao-cadastrar mb-5" @click="saveUsuario">{{ $t('registration.create') }}</button>
                        <button class="btn btn-primary botao-voltar mb-5" @click="returnEmpresa">{{ $t('registration.back') }}</button>
                    </div>

                </div>
            </div>
        </div>
    </div>


</template>

<script>

import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';
import PostUsuarioDataService from '@/services/PostUsuarioDataService';
import defaultImage from '../assets/img/profile-circle-example.png';

const router = useRouter();

export default {
    name: "new-usuario",
    data() {
        return {
            post: {
                nome: "",
                email: "",
                senha: "",
                dataNascimento: "",
                cidade: "",
                cep: "",
                pais: "",
                endereco: "",
                usuarioAdmin: ""
            },
            imageUrl: defaultImage
        }
    },
    methods: {
        saveUsuario() {

            const { nome, email, senha, dataNascimento, cidade, cep, pais, endereco } = this.post;

            if (nome && email && senha && dataNascimento && cidade && cep && pais && endereco) {

                var data = {
                    nome: this.post.nome + " " + this.post.sobrenome,
                    email: this.post.email,
                    senha: this.post.senha,
                    dataNascimento: this.post.dataNascimento,
                    cidade: this.post.cidade,
                    cep: this.post.cep,
                    pais: this.post.pais,
                    endereco: this.post.endereco,
                    usuarioAdmin: true
                }

                PostUsuarioDataService.create(data).then(response => {

                    Swal.fire({
                        icon: 'success',
                        title: 'Concluído!',
                        text: 'Usuário administrador cadastrado com sucesso!'
                    }).then(() => {
                        router.push({ name: 'login' });
                    });

                    return true;

                }).catch(e => {

                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: `Ocorreu um erro ao enviar os dados. Tente novamente mais tarde. Erros: ${e}`
                    });

                    return false;
                })

                return true;
            }

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Preencha todos os campos obrigatórios.'
            });

            return false;

        },
        returnEmpresa() {
            router.push({ name: 'cadastro-empresa' });
        },
        onUpload(event) {
            const uploadedFile = event.files[0];

            if (uploadedFile) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.imageUrl = e.target.result;
                };
                reader.readAsDataURL(uploadedFile);
            } else {
                this.imageUrl = defaultImage;
            }
        }
    }
}
</script>

<style scoped>
.form-group {
    margin-bottom: 10px !important;
}
</style>
