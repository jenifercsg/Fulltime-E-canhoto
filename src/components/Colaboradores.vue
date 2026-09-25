<template>
  <section class="home">
    <nav class="navbar principal-nav navbar-expand-lg bg-body-tertiary">
      <div
        class="container-fluid d-flex justify-content-end align-items-center"
      >
        <div class="image-profile rounded-circle">
          <img
            :src="this.urlPerfilFoto"
            alt="Imagem de perfil"
            class="rounded-circle"
            width="40"
          />
        </div>
      </div>
    </nav>

    <div class="background-colors">
      <h6 class="text p-5 ms-5">Usuários</h6>

      <div class="row cards-principal">
        <div
          class="col-md-12 mt-5 bg-white dados-canhoto-table table-responsive"
        >
          <div class="text-table">
            <h4 class="mt-4 ms-3 mb-3 usuarios-table-title">
              Colaboradores cadastrados
            </h4>
          </div>

          <DataTable :value="colaboradores" paginator :rows="5">
            <Column field="id" header="ID"></Column>
            <Column field="name" header="Nome"></Column>
            <Column field="email" header="Email"></Column>
            <Column field="dataNascimento" header="Data de Nascimento"></Column>

            <Column field="usuarioAdmin" header="É admin">
              <template #body="slotProps">
                <Badge
                  class="d-flex justify-content-center"
                  :value="slotProps.data.isAdmin ? 'SIM' : 'NÃO'"
                  :severity="slotProps.data.isAdmin ? 'success' : 'danger'"
                ></Badge>
              </template>
            </Column>

            <Column field="dataInclusao" header="Data de inclusão">
              <template #body="slotProps">
                {{ this.formataData(slotProps.data.dataInclusao) }}
              </template>
            </Column>

            <Column header="Opções">
              <template #body="slotProps">
                <i
                  class="bx bxs-edit"
                  @click="editUsuario(slotProps.data.id)"
                ></i>
              </template>
            </Column>
          </DataTable>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PostUsuarioDataService from "@/services/PostUsuarioDataService";
import PostCanhotoDataService from "@/services/PostCanhotoDataService";
import PostEmpresaDataService from "@/services/PostEmpresaDataService";
import PostStatusDataService from "@/services/PostStatusDataService";
import Swal from "sweetalert2";
import { formatarData } from "@/services/utils";
import { useAuth } from "@/stores/auth.js";

export default {
  name: "colaboradores",

  data() {
    return {
      colaboradores: [],
      status: [],

      urlPerfilFoto: "",

      post: {
        empresa: "",
        valor: "",
        colaborador: "",
        fileContent: "",
        selectedStatus: null,
        chaveNf: 0,
        numeroNota: 0,
      },

      visible: false,
      showUpload: false,
      isEditMode: false,

      nomeColaborador: "",
      empresaRelacionada: "",
      nomeUsuario: "",
    };
  },

  watch: {
    "post.selectedStatus": function (newVal) {
      this.showUpload = newVal?.code == 3;
    },
  },

  methods: {
    saveCanhoto() {
      const { valor, selectedStatus, fileContent, chaveNf, numeroNota } =
        this.post;

      var empresaId = 0;
      var colaboradorId = 0;

      colaboradorId = this.usuarioId;

      PostEmpresaDataService.getEmpresa(this.empresaRelacionada)
        .then((responseEmpresa) => {
          empresaId = responseEmpresa.data;

          if (colaboradorId === 0) {
            this.visible = false;

            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Não foi possível criar o canhoto: Colaborador não localizado.",
            });

            return false;
          }

          if (empresaId === 0) {
            this.visible = false;

            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Não foi possível criar o canhoto: Empresa não localizada.",
            });

            return false;
          }

          var dataCanhoto = {
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

              return true;
            })
            .catch((e) => {
              this.visible = false;

              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `Ocorreu um erro ao enviar os dados. Tente novamente mais tarde. Erros: ${e}`,
              });

              return false;
            });
        })
        .catch((e) => {
          this.visible = false;

          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `Não foi possível localizar a empresa. Erros: ${e}`,
          });

          return false;
        });
    },

    newCanhoto() {
      this.isEditMode = false;
      this.visible = true;
    },

    getAllColaboradores() {
      PostUsuarioDataService.getAll().then((response) => {
        this.colaboradores = response.data;
      });
    },

    formataData(data) {
      return formatarData(data);
    },

    onSelect(event) {
      const file = event.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        const base64Data = e.target.result.split(",")[1];

        this.post.fileContent = base64Data;
      };

      reader.readAsDataURL(file);
    },

    getStatus() {
      PostStatusDataService.getAll().then((response) => {
        this.status = response.data.map((st) => ({
          name: st.nome,
          code: st.id,
        }));
      });
    },

    getDados() {
      const auth = useAuth();

      auth.getUser().then((response) => {
        var responseUser = JSON.parse(response);

        PostEmpresaDataService.getEmpresaPorId(responseUser.empresaId).then(
          (response) => {
            this.empresaRelacionada = response.data;
            this.urlPerfilFoto = responseUser.urlPerfilFoto;
          },
        );
      });
    },
  },

  mounted() {
    this.getAllColaboradores();
    this.getDados();
  },
};
</script>
