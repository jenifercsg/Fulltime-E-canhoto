<template>
  <section class="home">
    <nav class="navbar principal-nav navbar-expand-lg bg-body-tertiary">
      <div
        class="container-fluid d-flex justify-content-end align-items-center"
      >
        <div class="image-profile rounded-circle">
          <img
            v-if="urlPerfilFoto"
            :src="this.urlPerfilFoto"
            alt="Imagem de perfil"
            class="rounded-circle"
            width="40"
          />
          <img
            v-else
            src="@/assets/img/profile-circle-example.png"
            alt="Imagem de perfil padrão"
            class="rounded-circle"
            width="40"
          />
        </div>
      </div>
    </nav>

    <div class="container-fluid background-colors">
      <h6 class="text p-5 text-visao-geral">{{ $t('dashboard.overview') }}</h6>

      <div class="row">
        <div class="col-lg-3 cards-colunas">
          <div class="card me-3">
            <div
              class="card-body d-flex align-items-start justify-content-between"
            >
              <div>
                <h5 class="card-title mt-3">{{ $t('dashboard.usersMonth') }}</h5>
                <h1 class="card-text mt-3">{{ totalUsuariosDoMes }}</h1>
                <h6 class="card-subtitle mb-2 text-body-secondary">
                  <span class="fw-bold">{{ totalUsuariosHoje }}</span> {{ $t('common.today') }}
                </h6>
              </div>
              <img
                src="@/assets/img/icone-usuarios.png"
                alt=""
                class="mt-2 img-fixed"
              />
            </div>
          </div>
        </div>

        <div class="col-lg-3 cards-colunas">
          <div class="card">
            <div
              class="card-body d-flex align-items-start justify-content-between"
            >
              <div>
                <h5 class="card-title mt-3">{{ $t('dashboard.receiptsMonth') }}</h5>
                <h1 class="card-text mt-3">{{ totalCanhotosDoMes }}</h1>
                <h6 class="card-subtitle mb-2 text-body-secondary">
                  <span class="fw-bold">{{ totalCanhotosHoje }}</span> {{ $t('common.today') }}
                </h6>
              </div>
              <img
                src="@/assets/img/icone-canhotos-mes.png"
                class="mt-2 img-fixed"
              />
            </div>
          </div>
        </div>

        <div class="col-lg-3 cards-colunas">
          <div class="card">
            <div
              class="card-body d-flex align-items-start justify-content-between"
            >
              <div>
                <h5 class="card-title mt-3">{{ $t('dashboard.totalReceipts') }}</h5>
                <h1 class="card-text mt-3">{{ totalCanhotos }}</h1>
                <h6 class="card-subtitle mb-2 text-body-secondary">
                  <span class="fw-bold">{{ totalCanhotosHoje }}</span> {{ $t('common.today') }}
                </h6>
              </div>
              <img
                src="@/assets/img/icone-total-canhotos.png"
                class="mt-2 img-fixed"
              />
            </div>
          </div>
        </div>

        <div class="col-lg-3 cards-colunas card-planos">
          <div class="card me-2">
            <div
              class="card-body d-flex align-items-start justify-content-between"
            >
              <div>
                <h5 class="card-title mt-3">{{ $t('dashboard.goldPlan') }}</h5>
                <h5 class="card-text mt-4 mb-4">{{ $t('dashboard.nextInvoice') }}: 28/06/2024</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">
                  {{ $t('dashboard.viewInvoice') }}
                </h6>
              </div>
              <img
                src="@/assets/img/icone-plano-gold.png"
                class="mt-2 img-fixed"
              />
            </div>
          </div>
        </div>

        <div
          v-if="this.userAdmin"
          class="col-md-12 ms-3 mt-4 bg-white usuarios-table table-responsive"
        >
          <div class="text-table d-flex text-table-botoes">
            <h4 class="mt-4 ms-3 mb-3 usuarios-table-title">
              {{ $t('dashboard.userManagement') }}
            </h4>

            <Button
              v-if="this.userAdmin"
              @click="newUser"
              class="btn btn-sm btn-outline-danger mt-3 ms-5 mb-3 add-canhoto-text text-decoration-none d-flex justify-content-center align-items-center ms-auto novo-canhoto"
            >
              {{ $t('dashboard.newUser') }}
              <i
                class="bx bx-plus arrow-footer-table d-flex justify-content-center align-items-center"
              ></i>
            </Button>
          </div>

          <DataTable :value="colaboradores" paginator :rows="7">
            <Column field="id" header="ID"></Column>
            <Column field="name" :header="$t('dashboard.name')"></Column>
            <Column field="email" :header="$t('dashboard.email')"></Column>
            <Column field="dataNascimento" :header="$t('dashboard.birthDate')"></Column>

            <Column field="usuarioAdmin" :header="$t('dashboard.admin')">
              <template #body="slotProps">
                <Badge
                  class="d-flex justify-content-center"
                  :value="slotProps.data.isAdmin ? 'SIM' : 'NÃO'"
                  :severity="slotProps.data.isAdmin ? 'success' : 'danger'"
                ></Badge>
              </template>
            </Column>

            <Column field="dataInclusao" :header="$t('dashboard.includedAt')">
              <template #body="slotProps">
                {{ this.formataData(slotProps.data.dataInclusao) }}
              </template>
            </Column>

            <Column :header="$t('dashboard.options')">
              <template #body="slotProps">
                <i class="bx bxs-edit" @click="editUser(slotProps.data.id)"></i>
              </template>
            </Column>
          </DataTable>
        </div>

        <div
          class="col-md-12 mt-4 ms-3 mb-3 bg-white usuarios-table table-responsive"
        >
          <div class="text-table d-flex text-table-botoes">
            <h5 class="mt-4 ms-3 mb-3 canhotos-table-title me-auto">
              {{ $t('dashboard.recent') }}
            </h5>
          </div>

          <DataTable :value="canhotos" paginator :rows="7" :sortOrder="1">
            <Column field="id" header="ID" filterField="id"></Column>

            <Column field="valorCanhoto" :header="$t('canhotos.value')">
              <template #body="slotProps">
                {{ this.formataValor(slotProps.data.valorCanhoto) }}
              </template>
            </Column>

            <Column field="numNf" :header="$t('canhotos.nf')"></Column>
            <Column field="chaveNf" :header="$t('canhotos.key')"></Column>

            <Column field="colaboradorId" :header="$t('canhotos.generator')">
              <template #body="slotProps">
                {{ this.buscaColaborador(slotProps.data.colaboradorId) }}
              </template>
            </Column>

            <Column field="dataInclusao" :header="$t('canhotos.includedAt')">
              <template #body="slotProps">
                {{ this.formataData(slotProps.data.dataInclusao) }}
              </template>
            </Column>

            <Column field="autenticado" :header="$t('canhotos.authenticated')">
              <template #body="slotProps">
                <Badge
                  class="justify-content-center text-center"
                  :value="
                    slotProps.data.imagemCanhoto &&
                    slotProps.data.imagemCanhoto !== 'dW5kZWZpbmVk'
                      ? 'SIM'
                      : 'NÃO'
                  "
                  :severity="
                    slotProps.data.imagemCanhoto &&
                    slotProps.data.imagemCanhoto !== 'dW5kZWZpbmVk'
                      ? 'success'
                      : 'danger'
                  "
                ></Badge>
              </template>
            </Column>
          </DataTable>

          <div class="text-footer-div">
            <RouterLink
              to="/canhotos"
              class="btn btn-sm btn-outline-danger mt-2 mb-3 add-canhoto-text text-decoration-none d-flex justify-content-center align-items-center"
            >
              {{ $t('dashboard.allReceipts') }}
              <i
                class="bx bx-right-arrow-alt arrow-footer-table d-flex justify-content-center align-items-center"
              ></i>
            </RouterLink>
          </div>
        </div>

        <Dialog
          v-model:visible="visible"
          modal
          :header="isEditMode ? $t('canhotos.update') : $t('canhotos.create')"
          :style="{
            width: isEditMode ? '73rem' : '75rem',
            height: isEditMode ? '30rem' : '33.9rem',
          }"
        >
          <div v-if="!isEditMode" class="flex align-items-center gap-4 mb-3">
            <label for="empresa" class="font-semibold mb-2">{{ $t('canhotos.company') }}</label
            ><br />

            <InputText
              id="empresa"
              class="flex-auto w-100"
              v-model="post.empresa"
              :value="empresaRelacionada"
              disabled
            />
          </div>

          <div class="row">
            <div class="col-md-4 mb-3">
              <label for="valor" class="mb-2">
                {{ $t('canhotos.receiptValue') }} <span class="text-danger">*</span> </label
              ><br />

              <InputNumber
                class="mb-2"
                inputId="locale-brazil"
                locale="pt-BR"
                :minFractionDigits="2"
                v-model="post.valor"
              />
            </div>

            <div class="col-md-4 mb-3">
              <label for="numNf" class="mb-2">
                {{ $t('canhotos.nfNumber') }} <span class="text-danger">*</span> </label
              ><br />

              <InputNumber
                id="numNf"
                class="flex-auto w-100"
                v-model="post.numeroNota"
                required
              />
            </div>

            <div class="col-md-4 mb-3">
              <label for="chaveNf" class="mb-2">
                {{ $t('canhotos.nfKey') }}
                <span class="text-warning">({{ $t('common.optional') }})</span> </label
              ><br />

              <InputNumber
                id="chaveNf"
                class="flex-auto w-100"
                v-model="post.chaveNf"
                required
              />
            </div>

            <div class="col-md-4 mb-3" v-if="!isEditMode">
              <label for="colaborador" class="font-semibold mb-2"
                >{{ $t('canhotos.generatedBy') }}</label
              ><br />

              <InputText
                id="colaborador"
                class="w-100"
                disabled
                v-model="post.colaborador"
                :value="nomeUsuario"
              />
            </div>

            <div class="col-md-8 mb-3">
              <label for="status" class="font-semibold mb-2">
                Status <span class="text-danger">*</span> </label
              ><br />

              <Dropdown
                v-model="post.selectedStatus"
                :options="status"
                optionLabel="name"
                :placeholder="$t('common.selectStatus')"
                checkmark
                :highlightOnSelect="false"
                class="w-100"
              />
            </div>
          </div>

          <div class="flex align-items-center gap-3 mb-5" v-show="showUpload">
            <label for="image" class="font-semibold mb-2">
              {{ $t('canhotos.image') }} </label
            ><br />

            <FileUpload
              mode="basic"
              name="demo[]"
              accept="image/*"
              :maxFileSize="1000000"
              @select="onSelect"
              class="w-15"
              :chooseLabel="$t('common.upload')"
            />
          </div>

          <div class="d-flex justify-content-end gap-2 mt-5">
            <Button
              type="button"
              severity="secondary"
              @click="visible = false"
              class="btn btn-danger me-1"
            >
              {{ $t('common.cancel') }}
            </Button>

            <Button
              type="button"
              @click="saveCanhoto()"
              class="btn btn-success"
            >
              {{ $t('common.save') }}
            </Button>
          </div>
        </Dialog>

        <Dialog
          v-model:visible="visibleUser"
          modal
          :header="isEditModeUser ? $t('common.edit') : $t('dashboard.newUser')"
          :style="{ width: '55rem', height: '30rem' }"
        >
          <div class="row">
            <div class="col-md-6 mb-3 flex align-items-center gap-4">
              <label for="nome" class="font-semibold mb-2">
                Nome <span class="text-danger">*</span> </label
              ><br />

              <InputText
                id="nome"
                class="inputs-texto flex-auto w-100"
                v-model="postUser.nome"
                placeholder="Nome"
                required
              />
            </div>

            <div class="col-md-6 mb-3 flex align-items-center gap-4">
              <label for="sobrenome" class="font-semibold mb-2">
                Sobrenome <span class="text-danger">*</span> </label
              ><br />

              <InputText
                id="sobrenome"
                class="inputs-texto flex-auto w-100"
                v-model="postUser.sobrenome"
                placeholder="Sobrenome"
                required
              />
            </div>
          </div>

          <div class="row">
            <div class="col-md-5 mb-3">
              <label for="email" class="mb-2">
                {{ $t('registration.email') }} <span class="text-danger">*</span> </label
              ><br />

              <InputText
                id="email"
                class="inputs-texto mb-2 w-100"
                v-model="postUser.emailPost"
                placeholder="Email"
                required
              />
            </div>

            <div class="col-md-3 mb-3" v-if="!isEditModeUser">
              <label for="senha" class="mb-2">
                {{ $t('registration.password') }} <span class="text-danger">*</span> </label
              ><br />

              <InputText
                type="password"
                id="senha"
                class="inputs-texto mb-2 w-100"
                v-model="postUser.senhaPost"
                placeholder="Senha"
                required
              />
            </div>

            <div class="col-md-4 mb-3">
              <label for="nascimento" class="font-semibold mb-2">
                {{ $t('registration.birthDate') }} <span class="text-danger">*</span> </label
              ><br />

              <InputText
                id="dataNascimento"
                class="inputs-texto w-100"
                v-model="postUser.dataNascimento"
                placeholder="26/10/2000"
                required
              />
            </div>

            <div class="col-md-5 mb-3">
              <label for="status" class="font-semibold mb-2">
                {{ $t('dashboard.admin') }} <span class="text-danger">*</span> </label
              ><br />

              <Dropdown
                v-model="postUser.isAdminSelected"
                :options="[
                  { name: 'Sim', code: 1 },
                  { name: 'Não', code: 0 },
                ]"
                optionLabel="name"
                :placeholder="$t('common.selectStatus')"
                checkmark
                :highlightOnSelect="false"
                class="w-100"
                required
              />
            </div>

            <div class="col-md-7 mb-3">
              <label for="urlPerfilFoto" class="font-semibold mb-2">
                URL da foto de Perfil
                <span class="text-warning">(Opcional)</span> </label
              ><br />

              <InputText
                id="urlPerfilFoto"
                class="inputs-texto w-100"
                v-model="postUser.urlPerfilFoto"
                placeholder="Exemplo: https://avatars.githubusercontent.com"
              />
            </div>
          </div>

          <div class="d-flex justify-content-end gap-2 mt-5">
            <Button
              type="button"
              severity="secondary"
              @click="visibleUser = false"
              class="btn btn-danger me-1"
            >
              {{ $t('common.cancel') }}
            </Button>

            <Button type="button" @click="saveUser()" class="btn btn-success">
              {{ $t('common.save') }}
            </Button>
          </div>
        </Dialog>
      </div>
    </div>
  </section>
</template>

<script>
import PostCanhotoDataService from "@/services/PostCanhotoDataService";
import PostUsuarioDataService from "@/services/PostUsuarioDataService";
import PostStatusDataService from "@/services/PostStatusDataService";
import PostEmpresaDataService from "../services/PostEmpresaDataService";
import Swal from "sweetalert2";
import {
  getCanhotosHoje,
  getQuantidadeCanhotosDoMes,
  formatarData,
  formatarValorBrasil,
} from "@/services/utils";
import { useAuth } from "@/stores/auth.js";
import { DEMO_USER, PORTFOLIO_DEMO } from "@/config/demo.js";

export default {
  name: "home",

  data() {
    return {
      post: {
        empresa: "",
        valor: "",
        colaborador: "",
        fileContent: "",
        selectedStatus: null,
        chaveNf: 0,
        numeroNota: 0,
      },

      postUser: {
        nome: "",
        sobrenome: "",
        emailPost: "",
        senhaPost: "",
        dataNascimento: "",
        isAdminSelected: null,
        urlPerfilFoto: "",
      },

      status: [],
      canhotos: [],
      colaboradores: [],
      usuarios: [],
      usuariosBusca: [],

      totalUsuarios: 0,
      totalUsuariosDoMes: 0,
      totalUsuariosHoje: 0,
      totalCanhotos: 0,
      totalCanhotosDoMes: 0,
      totalCanhotosHoje: 0,

      usuarioId: 0,
      empresaRelacionadaId: 0,
      userAdmin: 0,

      dataFormatada: "",
      empresaRelacionada: "",
      nomeUsuario: "",
      nomeColaborador: "",
      urlPerfilFoto: "",

      visible: false,
      showUpload: false,
      isEditMode: false,
      isEditModeUser: false,
      visibleUser: false,
    };
  },

  watch: {
    "post.selectedStatus": function (newVal) {
      this.showUpload = newVal?.code == 3;
    },
  },

  methods: {
    getAllCanhotos() {
      PostCanhotoDataService.getAll()
        .then((response) => {
          this.canhotos = response.data.filter(
            (canhoto) => canhoto.empresaId === this.empresaRelacionadaId,
          );

          this.totalCanhotos = this.canhotos.length;

          this.getQuantidadeCanhotosDoMesAtual(this.canhotos);
          this.getTodosCanhotosHoje(this.canhotos);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    getTodosCanhotosHoje(canhotos) {
      if (canhotos) {
        const getTotalDeCanhotosHoje = getCanhotosHoje(canhotos);

        this.totalCanhotosHoje = getTotalDeCanhotosHoje;
      }
    },

    getQuantidadeCanhotosDoMesAtual(canhotos) {
      if (canhotos) {
        const getQuantidaddeCanhotosDoMesAtual =
          getQuantidadeCanhotosDoMes(canhotos);

        this.totalCanhotosDoMes = getQuantidaddeCanhotosDoMesAtual;
      }
    },

    getAllUsuarios() {
      PostUsuarioDataService.getAll()
        .then((response) => {
          this.usuarios = response.data;

          this.totalUsuarios = this.usuarios.length;

          this.getQuantidadeUsuariosDoMesAtual(this.usuarios);
          this.getTodosUsuariosHoje(this.usuarios);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    getQuantidadeUsuariosDoMesAtual(usuarios) {
      if (usuarios) {
        const getQuantidaddeUsuariosDoMesAtual =
          getQuantidadeCanhotosDoMes(usuarios);

        this.totalUsuariosDoMes = getQuantidaddeUsuariosDoMesAtual;
      }
    },

    getTodosUsuariosHoje(usuarios) {
      if (usuarios) {
        const getTotalDeUsuariosHoje = getCanhotosHoje(usuarios);

        this.totalUsuariosHoje = getTotalDeUsuariosHoje;
      }
    },

    getStatus() {
      PostStatusDataService.getAll()
        .then((response) => {
          this.status = response.data.map((st) => ({
            name: st.nome,
            code: st.id,
          }));
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newCanhoto() {
      this.isEditMode = false;
      this.visible = true;
    },

    saveCanhoto() {
      const { valor, selectedStatus, fileContent, chaveNf, numeroNota } =
        this.post;

      if (
        valor === "" ||
        valor === null ||
        numeroNota === "" ||
        numeroNota === null ||
        selectedStatus === null
      ) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Preencha todos os campos obrigatórios.",
        });

        return false;
      }

      const colaboradorId = this.usuarioId;

      if (colaboradorId === 0) {
        this.visible = false;

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Não foi possível criar o canhoto: Colaborador não localizado.",
        });

        return false;
      }

      PostEmpresaDataService.getEmpresa(this.empresaRelacionada)
        .then((responseEmpresa) => {
          const empresaId = responseEmpresa.data;

          if (empresaId === 0) {
            this.visible = false;

            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Não foi possível criar o canhoto: Empresa não localizada.",
            });

            return false;
          }

          const dataCanhoto = {
            imagem: fileContent || "",
            colaboradorId: colaboradorId,
            empresaId: empresaId,
            statusId: selectedStatus.code,
            valor: valor,
            chaveNf: chaveNf,
            numNf: numeroNota,
          };

          PostCanhotoDataService.create(dataCanhoto)
            .then((response) => {
              this.visible = false;

              Swal.fire({
                icon: "success",
                title: "Concluído!",
                text: "Canhoto cadastrado com sucesso!",
              });

              this.post.valor = "";
              this.post.selectedStatus = null;
              this.post.fileContent = "";
              this.post.chaveNf = 0;
              this.post.numeroNota = 0;

              this.getAllCanhotos();
            })
            .catch((e) => {
              this.visible = false;

              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `Ocorreu um erro ao enviar os dados. Tente novamente mais tarde. Erros: ${e}`,
              });
            });
        })
        .catch((e) => {
          this.visible = false;

          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `Não foi possível localizar a empresa. Erros: ${e}`,
          });
        });
    },

    onSelect(event) {
      const file = event.files[0];

      if (!file) {
        return;
      }

      const reader = new FileReader();

      reader.onload = (e) => {
        const base64Data = e.target.result.split(",")[1];

        this.post.fileContent = base64Data;
      };

      reader.readAsDataURL(file);
    },

    formataData(data) {
      return formatarData(data);
    },

    formataValor(valor) {
      return formatarValorBrasil(valor);
    },

    buscaColaborador(id) {
      const usuario = this.usuariosBusca.find((usuario) => usuario.id === id);

      return usuario ? usuario.name : "";
    },

    getAllColaboradores() {
      PostUsuarioDataService.getAll()
        .then((response) => {
          this.colaboradores = response.data;
          this.usuariosBusca = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newUser() {
      this.isEditModeUser = false;

      this.postUser = {
        nome: "",
        sobrenome: "",
        emailPost: "",
        senhaPost: "",
        dataNascimento: "",
        isAdminSelected: null,
        urlPerfilFoto: "",
      };

      this.visibleUser = true;
    },

    editUser(userId) {
      this.isEditModeUser = true;

      const user = this.colaboradores.find((user) => user.id === userId);

      if (!user) {
        return;
      }

      this.postUser = {
        id: user.id,
        nome: user.name.split(" ")[0],
        sobrenome: user.name.split(" ").slice(1).join(" "),
        emailPost: user.email,
        senhaPost: "",
        dataNascimento: user.dataNascimento,
        isAdminSelected: user.isAdmin
          ? { name: "Sim", code: 1 }
          : { name: "Não", code: 0 },
        urlPerfilFoto: user.urlPerfilFoto || "",
      };

      this.visibleUser = true;
    },

    saveUser() {
      const {
        id,
        nome,
        sobrenome,
        emailPost,
        senhaPost,
        dataNascimento,
        isAdminSelected,
        urlPerfilFoto,
      } = this.postUser;

      if (
        !nome ||
        !sobrenome ||
        !emailPost ||
        !dataNascimento ||
        !isAdminSelected
      ) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Preencha todos os campos obrigatórios.",
        });

        return false;
      }

      const data = {
        name: nome + " " + sobrenome,
        email: emailPost,
        empresaId: this.empresaRelacionadaId,
        password: senhaPost,
        isActive: true,
        isAdmin: isAdminSelected.code == 1,
        dataNascimento: dataNascimento,
        urlPerfilFoto: urlPerfilFoto,
      };

      if (this.isEditModeUser) {
        const updateData = {
          id: id,
          name: nome + " " + sobrenome,
          email: emailPost,
          empresaId: this.empresaRelacionadaId,
          isActive: true,
          isAdmin: isAdminSelected.code == 1,
          dataNascimento: dataNascimento,
          urlPerfilFoto: urlPerfilFoto,
        };

        PostUsuarioDataService.update(updateData)
          .then((response) => {
            this.visibleUser = false;

            Swal.fire({
              icon: "success",
              title: "Concluído!",
              text: `Usuário ${nome} atualizado com sucesso!`,
            });

            this.getAllColaboradores();
          })
          .catch((e) => {
            this.visibleUser = false;

            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: `${e}`,
            });
          });
      } else {
        PostUsuarioDataService.create(data)
          .then((response) => {
            this.visibleUser = false;

            Swal.fire({
              icon: "success",
              title: "Concluído!",
              text: `Usuário ${nome} cadastrado com sucesso!`,
            });

            this.getAllColaboradores();
          })
          .catch((e) => {
            this.visibleUser = false;

            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: `${e}`,
            });
          });
      }
    },

    getDados() {
      const auth = useAuth();

      auth.getUser().then((response) => {
        const responseUser = JSON.parse(response);

        PostEmpresaDataService.getEmpresaPorId(responseUser.empresaId).then(
          (response) => {
            this.userAdmin = responseUser.isAdmin;
            this.empresaRelacionadaId = responseUser.empresaId;
            this.empresaRelacionada = response.data;
            this.nomeUsuario = responseUser.name;
            this.usuarioId = responseUser.id;
            this.urlPerfilFoto = responseUser.urlPerfilFoto;

            this.getAllCanhotos();
          },
        );
      });
    },

    loadDemoData() {
      this.userAdmin = false;
      this.empresaRelacionadaId = DEMO_USER.empresaId;
      this.empresaRelacionada = "Empresa de demonstração";
      this.nomeUsuario = DEMO_USER.name;
      this.usuarioId = DEMO_USER.id;
      this.urlPerfilFoto = DEMO_USER.urlPerfilFoto;
      this.totalUsuarios = 12;
      this.totalUsuariosDoMes = 8;
      this.totalUsuariosHoje = 1;
      this.totalCanhotos = 124;
      this.totalCanhotosDoMes = 32;
      this.totalCanhotosHoje = 4;
      this.canhotos = [];
      this.colaboradores = [];
      this.usuarios = [];
      this.usuariosBusca = [];
      this.status = [];
    },
  },

  mounted() {
    if (PORTFOLIO_DEMO) {
      this.loadDemoData();
      return;
    }

    this.getDados();
    this.getStatus();
    this.getAllColaboradores();
    this.getAllUsuarios();
  },
};
</script>
