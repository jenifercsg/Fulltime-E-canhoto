<template>
  <div class="card d-flex justify-content-center mt-5 w-75 mx-auto stepper__principal">
    <Stepper class="mt-5">
      <StepperPanel :header="$t('stepper.companyData')">
        <template #content="{ nextCallback }">
          <div class="flex flex-column h-12rem">
            <div
              class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
              <p>{{ $t('stepper.companyData') }}</p>

              <div class="row">

                <div class="col-lg-6 mt-2">
                  <div class="form-group">
                    <label for="nome">{{ $t('stepper.companyName') }}</label>
                    <input v-model="post.nome" type="text" class="form-control" />
                  </div>
                </div>

                <div class="col-lg-6 mt-2">
                  <div class="form-group">
                    <label for="telefone">{{ $t('stepper.businessPhone') }}</label>
                    <input v-model="post.telefone" type="text" class="form-control" />
                  </div>
                </div>

                <div class="col-lg-4">
                  <div class="form-group mt-3">
                    <label for="email">{{ $t('stepper.email') }}</label>
                    <input v-model="post.email" type="email" class="form-control" />
                  </div>
                </div>

                <div class="col-lg-4">
                  <div class="form-group mt-3">
                    <label for="cnpj">{{ $t('stepper.cnpj') }}</label>
                    <input v-model="post.cnpj" type="tel" class="form-control" />
                  </div>
                </div>

                <div class="col-lg-4">
                  <div class="form-group mt-3">
                    <label for="razaoSocial">{{ $t('stepper.legalName') }}</label>
                    <input v-model="post.razaoSocial" type="text" class="form-control" />
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div class="botoes flex pt-4 justify-content-end">
            <Button class="avancar" @click="validateStep1(nextCallback)"> {{ $t('stepper.next') }} </Button>
          </div>
        </template>
      </StepperPanel>

      <StepperPanel :header="$t('stepper.logistics')">
        <template #content="{ prevCallback, nextCallback }">
          <div class="flex flex-column h-12rem">
            <div
              class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
              <p>{{ $t('stepper.logistics') }}</p>
              <div class="row">

                <div class="col-lg-4 mt-2">
                  <div class="form-group">
                    <label for="localizacao">{{ $t('stepper.headquarters') }}</label>
                    <input v-model="post.localizacao" type="text" class="form-control" />
                  </div>
                </div>

                <div class="col-lg-4 mt-2">
                  <div class="form-group">
                    <label for="quantidadeFuncionarios">{{ $t('stepper.employees') }}</label>
                    <input v-model="post.quantidadeFuncionarios" type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-lg-4 mt-2">
                  <div class="form-group">
                    <label for="porteIndustrial">{{ $t('stepper.industrialSize') }}</label>
                    <input v-model="post.porteIndustrial" type="text" class="form-control" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="botoes flex pt-4 justify-content-end">
            <Button class="voltar" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback"> {{ $t('stepper.back') }}</Button>
            <Button class="avancar" @click="validateStep2(nextCallback)"> {{ $t('stepper.next') }} </Button>
          </div>
        </template>
      </StepperPanel>
      <StepperPanel :header="$t('stepper.billing')">
        <template #content="{ prevCallback, nextCallback }">
          <div class="flex flex-column h-12rem">
            <div
              class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
              <p>{{ $t('stepper.billing') }}</p>

              <div class="row">

                <div class="col-lg-4 mt-3">
                  <div class="form-group">
                    <label for="conta">{{ $t('stepper.bankAccount') }}</label>
                    <input v-model="post.conta" type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-lg-4 mt-3">
                  <div class="form-group">
                    <label for="enderecoCobranca">{{ $t('stepper.billingAddress') }}</label>
                    <input v-model="post.enderecoCobranca" type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-lg-4 mt-3">
                  <div class="form-group">
                    <label for="receita">{{ $t('stepper.revenue') }}</label>
                    <input v-model="post.receita" type="number" class="form-control" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="botoes flex pt-4 justify-content-end">
            <Button class="voltar" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback"> {{ $t('stepper.back') }}</Button>
            <Button class="avancar" @click="validateStep3(nextCallback)"> {{ $t('stepper.next') }} </Button>
          </div>
        </template>
      </StepperPanel>
      
      <StepperPanel :header="$t('stepper.companyImage')">
        <template #content="{ prevCallback, nextCallback }">
          <div class="row">
            <div class="col-lg-12">
              <div class="form-group">
            <label for="formFileLg" class="dados">{{ $t('stepper.uploadCompany') }}</label>
            <input ref="imagem" class="form-control" id="formFileLg" type="file">
          </div>
            </div>
          </div>
          <div class="botoes flex pt-4 justify-content-end">
            <Button class="voltar" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback"> {{ $t('stepper.back') }}</Button>
            <Button class="avancar" @click="validateStep4(nextCallback)"> {{ $t('stepper.next') }} </Button>
          </div>
        </template>
      </StepperPanel>
      <StepperPanel :header="$t('stepper.userData')">
      <template #content="{ prevCallback }">
        <div class="row">
          <div class="col-lg-6 mt-3">
            <div class="form-group">
              <label for="userName">{{ $t('stepper.userName') }}</label>
              <input v-model="postUsuario.name" type="text" class="form-control" />
            </div>
          </div>
          <div class="col-lg-6 mt-3">
            <div class="form-group">
              <label for="userEmail">{{ $t('stepper.email') }}</label>
              <input v-model="postUsuario.email" type="email" class="form-control" />
            </div>
          </div>
          <div class="col-lg-6 mt-3">
            <div class="form-group">
              <label for="userEmail">{{ $t('stepper.birthDate') }}</label>
              <input v-model="postUsuario.dataNascimento" type="email" class="form-control" />
            </div>
          </div>
          <div class="col-lg-6 mt-3">
            <div class="form-group">
              <label for="userEmail">URL Foto de Perfil</label>
              <input v-model="postUsuario.urlPerfilFoto" type="email" class="form-control" />
            </div>
          </div>
          <div class="col-lg-6 mt-3">
            <div class="form-group">
              <label for="userPassword">{{ $t('stepper.password') }}</label>
              <input v-model="postUsuario.password" type="password" class="form-control" />
            </div>
          </div>
        </div>
        <div class="botoes flex pt-4 justify-content-end">
          <Button class="voltar" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback"> {{ $t('stepper.back') }}</Button>
          <Button class="avancar" @click="validateStep5"> {{ $t('stepper.createAccount') }} </Button>
        </div>
      </template>
    </StepperPanel>

    </Stepper>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';
import PostEmpresaDataService from '@/services/PostEmpresaDataService';
import PostUsuarioDataService from '@/services/PostUsuarioDataService'; // Novo serviço para usuários

export default {
  name: "new-empresa",
  setup() {
    const router = useRouter();
    
    const post = ref({
      nome: "",
      telefone: "",
      email: "",
      cnpj: "",
      razaoSocial: "",
      localizacao: "",
      quantidadeFuncionarios: "",
      porteIndustrial: "",
      conta: "",
      enderecoCobranca: "",
      receita: ""
    });

    const postUsuario = ref({
      name: "",
      email: "",
      password: ""
    });

    const imagem = ref(null);

    const validateStep1 = (nextCallback) => {
      const { nome, email, cnpj, razaoSocial } = post.value;
      if (nome && email && cnpj && razaoSocial) {
        nextCallback();
        return true;
      }
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Preencha todos os campos obrigatórios.'
      });
    };

    const validateStep2 = (nextCallback) => {
      const { localizacao, quantidadeFuncionarios, porteIndustrial } = post.value;
      if (localizacao && quantidadeFuncionarios && porteIndustrial) {
        nextCallback();
        return true;
      }
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Preencha todos os campos obrigatórios.'
      });
    };

    const validateStep3 = (nextCallback) => {
      const { enderecoCobranca } = post.value;
      if (enderecoCobranca) {
        nextCallback();
        return true;
      }
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Preencha todos os campos obrigatórios.'
      });
    };

    const validateStep4 = (nextCallback) => {
      if (imagem.value && imagem.value.files.length) {
        nextCallback();
        return true;
      }
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Preencha todos os campos obrigatórios.'
      });
    };

    const validateStep5 = () => {
      if (postUsuario.value.name && postUsuario.value.email && postUsuario.value.password) {
        const dataToSend = { ...post.value, imagem: imagem.value.files[0] };
        savePost(dataToSend);
        return true;
      }
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Preencha todos os campos obrigatórios do usuário.'
      });
    };

    const savePost = (data) => {
      PostEmpresaDataService.create(data).then(response => {
        const empresaId = response.data.id; 
        const userData = { 
          ...postUsuario.value, 
          empresaId, 
          isActive: true, 
          isAdmin: true 
        };
        return PostUsuarioDataService.create(userData);
      }).then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Concluído!',
          text: 'Empresa e usuário cadastrados com sucesso!'
        }).then(() => {
          router.push({ name: 'login' });
        });
      }).catch(errors => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `Ocorreu um erro ao enviar os dados. Tente novamente mais tarde. Erros: ${errors}`
        });
      });
    };

    return {
      post,
      postUsuario,
      imagem,
      validateStep1,
      validateStep2,
      validateStep3,
      validateStep4,
      validateStep5,
      savePost
    };
  }
};

</script>

<style scoped></style>
